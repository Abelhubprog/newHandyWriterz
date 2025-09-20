// Cloudflare D1 database client
// This replaces the Supabase client

interface D1Database {
  prepare(query: string): D1PreparedStatement;
  exec(query: string): Promise<D1ExecResult>;
  batch(statements: D1PreparedStatement[]): Promise<D1Result[]>;
}

interface D1PreparedStatement {
  bind(...values: any[]): D1PreparedStatement;
  first<T = any>(): Promise<T | null>;
  run(): Promise<D1Result>;
  all<T = any>(): Promise<D1Result<T>>;
}

interface D1Result<T = any> {
  results: T[];
  success: boolean;
  meta: {
    duration: number;
    changes: number;
    last_row_id: number;
    rows_read: number;
    rows_written: number;
  };
}

interface D1ExecResult {
  success: boolean;
  meta: {
    duration: number;
  };
}

// Check if running in development mode
const isDevelopmentMode = (): boolean => {
  return import.meta.env.MODE === 'development' ||
         typeof window !== 'undefined' &&
         (window.location.hostname === 'localhost' ||
          window.location.hostname === '127.0.0.1');
};

// Get the database API URL
const getDatabaseApiUrl = (): string => {
  // Use local API in development, production API in production
  if (isDevelopmentMode()) {
    return 'http://localhost:8788/api/database';
  }

  return import.meta.env.VITE_CLOUDFLARE_DATABASE_URL ||
         `${window.location.origin}/api/database`;
};

// D1 client that works in both development and production
class D1Client {
  private apiUrl: string;

  constructor(apiUrl?: string) {
    this.apiUrl = apiUrl || getDatabaseApiUrl();
  }

  protected async execute(path: string, method: string, body?: any): Promise<any> {
    try {
      const url = `${this.apiUrl}${path}`;
      const options: RequestInit = {
        method,
        headers: { 'Content-Type': 'application/json' },
      };
      if (body) {
        options.body = JSON.stringify(body);
      }
      const response = await fetch(url, options);
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: response.statusText }));
        return { data: null, error: errorData.error || 'An unknown error occurred' };
      }
      const data = await response.json();
      return { data, error: null };
    } catch (error: any) {
      return { data: null, error: error.message };
    }
  }

  from(table: string) {
    let queryBuilder = new D1QueryBuilder(this, table);
    return queryBuilder;
  }

  rpc(fn: string, params?: object) {
    return this.execute(`/rpc/${fn}`, 'POST', params);
  }

  async query(sql: string, params: any[] = []) {
    return this.execute('/query', 'POST', { sql, params });
  }
}

class D1QueryBuilder {
  private client: D1Client;
  private table: string;
  private columns: string = '*';
  private filters: string[] = [];
  private orderClause: string | null = null;
  private limitCount: number | null = null;
  private rangeFrom: number | null = null;
  private rangeTo: number | null = null;
  // Track mutation state to allow update/delete style chains (Supabase-like)
  private mutationType: 'update' | 'delete' | null = null;
  private updateValues: Record<string, any> | null = null;

  constructor(client: D1Client, table: string) {
    this.client = client;
    this.table = table;
  }

  select(columns: string = '*') {
    this.columns = columns;
    return this;
  }

  eq(column: string, value: any) {
    this.filters.push(`${column}=${this.formatValue(value)}`);
    return this;
  }

  or(filter: string) {
    // A simplified 'or' that can be expanded later if needed
    this.filters.push(`(${filter.replace(/,/g, ' OR ')})`);
    return this;
  }

  filter(column: string, operator: string, value: any) {
    this.filters.push(`${column} ${operator} ${this.formatValue(value)}`);
    return this;
  }

  order(column: string, { ascending = true } = {}) {
    this.orderClause = `${column} ${ascending ? 'ASC' : 'DESC'}`;
    return this;
  }

  limit(count: number) {
    this.limitCount = count;
    return this;
  }

  range(from: number, to: number) {
    this.rangeFrom = from;
    this.rangeTo = to;
    this.limitCount = to - from + 1;
    return this;
  }

  private formatValue(value: any): string {
    if (typeof value === 'string') {
      return `'${value.replace(/'/g, "''")}'`;
    }
    if (value instanceof Date) {
      return `'${value.toISOString()}'`;
    }
    return String(value);
  }

  private buildQuery(): string {
    // If we're performing a mutation, build UPDATE/DELETE
    if (this.mutationType === 'update' && this.updateValues) {
      const setters = Object.entries(this.updateValues)
        .map(([k, v]) => `"${k}"=${this.formatValue(v)}`)
        .join(', ');
      let query = `UPDATE ${this.table} SET ${setters}`;
      if (this.filters.length > 0) {
        query += ` WHERE ${this.filters.join(' AND ')}`;
      }
      return query + ';';
    }
    if (this.mutationType === 'delete') {
      let query = `DELETE FROM ${this.table}`;
      if (this.filters.length > 0) {
        query += ` WHERE ${this.filters.join(' AND ')}`;
      }
      return query + ';';
    }

    // Default to SELECT
    let query = `SELECT ${this.columns} FROM ${this.table}`;
    if (this.filters.length > 0) {
      query += ` WHERE ${this.filters.join(' AND ')}`;
    }
    if (this.orderClause) {
      query += ` ORDER BY ${this.orderClause}`;
    }
    if (this.limitCount !== null) {
      query += ` LIMIT ${this.limitCount}`;
    }
    if (this.rangeFrom !== null) {
      query += ` OFFSET ${this.rangeFrom}`;
    }
    return query;
  }

  async then(resolve: (value: any) => void, reject: (reason: any) => void) {
    const sql = this.buildQuery();
    this.client.query(sql)
      .then(result => {
        if (result.error) {
          reject(result.error);
        } else {
          resolve(result);
        }
      })
      .catch(error => reject(error));
  }

  async single() {
    // For mutations, just execute and return success/error
    if (this.mutationType === 'update' || this.mutationType === 'delete') {
      const sql = this.buildQuery();
      const { error } = await this.client.query(sql);
      if (error) return { data: null, error };
      return { data: null, error: null };
    }

    // For selects, fetch a single row
    this.limit(1);
    const sql = this.buildQuery();
    const { data, error } = await this.client.query(sql);
    if (error) return { data: null, error };
    return { data: Array.isArray(data) ? data?.[0] || null : null, error: null };
  }

  // Minimal insert support to ease migration from Supabase
  async insert(values: Record<string, any>) {
    const keys = Object.keys(values);
    const cols = keys.map((k) => `"${k}"`).join(', ');
    const vals = keys
      .map((k) => this.formatValue(values[k]))
      .join(', ');
    const sql = `INSERT INTO ${this.table} (${cols}) VALUES (${vals});`;
    const { data, error } = await this.client.query(sql);
    if (error) return { error } as const;
    return { success: true as const };
  }

  // Minimal upsert by trying update on conflict key if provided, else insert
  async upsert(values: Record<string, any>, conflictColumn?: string) {
    if (conflictColumn && conflictColumn in values) {
      const setters = Object.entries(values)
        .filter(([k]) => k !== conflictColumn)
        .map(([k, v]) => `"${k}"=${this.formatValue(v)}`)
        .join(', ');
      const where = `${conflictColumn}=${this.formatValue(values[conflictColumn])}`;
      const updateSql = `UPDATE ${this.table} SET ${setters} WHERE ${where};`;
      const { error: updateError } = await this.client.query(updateSql);
      if (!updateError) return { success: true as const };
      // Fallback to insert
    }
    return this.insert(values);
  }

  // Supabase-like update chain: .update(values).eq('id', x).single()
  update(values: Record<string, any>) {
    this.mutationType = 'update';
    this.updateValues = values;
    return this;
  }

  // Supabase-like delete chain: .delete().eq('id', x).single()
  delete() {
    this.mutationType = 'delete';
    this.updateValues = null;
    return this;
  }

  // Fetch all rows (helper)
  async all() {
    const sql = this.buildQuery();
    const { data, error } = await this.client.query(sql);
    if (error) return { data: [], error };
    return { data: Array.isArray(data) ? data : [], error: null };
  }
}

// Mock D1 client for environments where D1 is not available
class MockD1Client extends D1Client {
    constructor() {
        super('mock-api');
    }

    // Override execute to return mock data
    protected async execute(path: string, method: string, body?: any): Promise<any> {
        console.log(`[MockD1Client] ${method} ${path}`, body);

        if (path.startsWith('/rpc/is_admin')) {
            return Promise.resolve({ data: true, error: null });
        }

        if (path === '/query') {
            // Simple mock for profiles
            if (body.sql.includes('profiles')) {
                return Promise.resolve({
                    data: [{
                        id: 'mock-user-id',
                        full_name: 'Mock User',
                        avatar_url: '',
                        role: 'admin'
                    }],
                    error: null
                });
            }
        }

        return Promise.resolve({ data: [], error: null });
    }
}


const isDevelopment = import.meta.env.DEV;

// Use MockD1Client in development, D1Client in production
const database = isDevelopment ? new MockD1Client() : new D1Client();

export { database, D1Client };
export { database as d1Client };
export default database;
