import databaseService from './databaseService';
import type { ServiceCategoryRecord, ServicePageRecord, ServicePageSummary } from './servicePage.types';

const nowIso = () => new Date().toISOString();

const normalizeSlug = (value: string) => {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
};

const FALLBACK_HERO = '/images/placeholders/service-hero.jpg';

const SUMMARIES_TABLE = 'service_page_summaries';
const PAGES_TABLE = 'service_pages';
const CATEGORIES_TABLE = 'service_categories';

const buildSummary = (record: ServicePageRecord): ServicePageSummary => ({
  id: record.id,
  serviceSlug: record.serviceSlug,
  title: record.title,
  slug: record.slug,
  summary: record.summary,
  heroImage: record.heroImage,
  isPublished: record.isPublished,
  updatedAt: record.updatedAt,
});

const mapSummaryRow = (row: any): ServicePageSummary => ({
  id: String(row.id || row.summary_id || `summary-${row.slug || 'page'}`),
  serviceSlug: row.service_slug,
  title: row.title || 'Service overview',
  slug: row.slug,
  summary: row.summary || '',
  heroImage: row.hero_image || FALLBACK_HERO,
  isPublished: Boolean(row.is_published),
  updatedAt: row.updated_at || nowIso(),
});

const mapDatabasePage = (row: any): ServicePageRecord => {
  const sections = typeof row.sections === 'string' ? JSON.parse(row.sections) : row.sections;
  const stats = typeof row.stats === 'string' ? JSON.parse(row.stats) : row.stats;
  const faq = typeof row.faq === 'string' ? JSON.parse(row.faq) : row.faq;
  const pricing = typeof row.pricing === 'string' ? JSON.parse(row.pricing) : row.pricing;
  const seo = typeof row.seo === 'string' ? JSON.parse(row.seo) : row.seo;

  return {
    id: String(row.id),
    serviceSlug: row.service_slug,
    title: row.title,
    slug: row.slug,
    summary: row.summary || '',
    content: row.content || '',
    heroImage: row.hero_image || FALLBACK_HERO,
    sections: Array.isArray(sections) ? sections : [],
    stats: Array.isArray(stats) ? stats : [],
    faq: Array.isArray(faq) ? faq : [],
    pricing: pricing && typeof pricing === 'object' ? pricing : undefined,
    seo: seo && typeof seo === 'object' ? seo : undefined,
    isPublished: Boolean(row.is_published),
    publishedAt: row.published_at || undefined,
    createdAt: row.created_at || nowIso(),
    updatedAt: row.updated_at || nowIso(),
  };
};

const mapDatabaseCategory = (row: any): ServiceCategoryRecord => ({
  id: String(row.id),
  serviceSlug: row.service_slug,
  name: row.name,
  slug: row.slug,
  shortDescription: row.short_description || undefined,
  heroSummary: row.hero_summary || undefined,
  heroImage: row.hero_image || undefined,
  stats: typeof row.stats === 'string' ? JSON.parse(row.stats) : row.stats,
  featuredPosts: typeof row.featured_posts === 'string' ? JSON.parse(row.featured_posts) : row.featured_posts,
  createdAt: row.created_at || nowIso(),
  updatedAt: row.updated_at || nowIso(),
});

const defaultPage = (serviceSlug: string): ServicePageRecord => ({
  id: `draft-${serviceSlug}-${Date.now()}`,
  serviceSlug,
  title: 'Adult Health Nursing Excellence',
  slug: normalizeSlug(`${serviceSlug}-overview`),
  summary:
    'Evidence-based adult nursing support tailored to complex patient needs. HandyWriterz helps clinical teams turn guidelines into bedside-ready playbooks.',
  content:
    'From rapid assessment tools to continuity-of-care checklists, our adult health library keeps multidisciplinary teams aligned across every transition.',
  heroImage: FALLBACK_HERO,
  sections: [
    {
      id: 'assessment',
      title: 'Accelerate bedside assessment',
      summary: 'Deploy rapid patient assessment frameworks to triage change of condition with confidence.',
      content: [
        'Rapid intake templates for med-surg and step-down units.',
        'Escalation criteria cheat-sheets for hospitalist and intensivist teams.',
        'Interdisciplinary rounding scripts to keep family and care partners aligned.',
      ].join('\n'),
    },
    {
      id: 'education',
      title: 'Upskill the team between shifts',
      summary: 'Micro-learning refreshers help staff stay ready for complex caseloads.',
      content: [
        '15-minute booster modules on hemodynamics, infusion safety, and medication reconciliation.',
        'Competency checklists mapped to ANCC and Magnet standards.',
        'Scenario-based debrief guides for charge nurses and preceptors.',
      ].join('\n'),
    },
    {
      id: 'transitions',
      title: 'Own transitions of care',
      summary: 'Ensure handoffs and discharge planning close every loop for adult populations.',
      content: [
        'Discharge playbooks for heart failure, COPD, and acute neuro cases.',
        'Patient education packets ready to print or deliver digitally.',
        'Community resource directories to coordinate post-acute services.',
      ].join('\n'),
    },
  ],
  stats: [
    { label: 'Adult care pathways optimized with clients', value: '36' },
    { label: 'Clinical tools refreshed each month', value: '120+' },
    { label: 'Mentor-led case reviews per quarter', value: '24' },
    { label: 'Average time saved per patient scenario', value: '18 min' },
  ],
  faq: [
    {
      question: 'How is content tailored to my unit?',
      answer:
        'We partner with charge nurses and clinical educators to align language, policy references, and escalation workflows so every resource feels native to your hospital.',
    },
    {
      question: 'Can we import our own protocols?',
      answer:
        'Yes. Upload policies, education decks, and discharge packets from the admin dashboard. Our team tags and formats them for instant bedside search and use.',
    },
    {
      question: 'Do you support ongoing updates?',
      answer:
        'Subscribers receive monthly refresh cycles covering guideline changes, medication safety alerts, and new case studies sourced from partner health systems.',
    },
  ],
  pricing: {
    tiers: [
      {
        id: 'clinical-pods',
        name: 'Clinical Pods',
        price: 'From $189/mo',
        description: 'Perfect for pilot units or cross-functional improvement teams.',
        features: [
          '5 user seats with shared workspace access',
          'Monthly mentor office hours for case consults',
          'Unit-branded patient education packets',
        ],
        ctaLabel: 'Start pilot',
      },
      {
        id: 'service-line',
        name: 'Service Line',
        price: 'From $429/mo',
        description: 'Scale evidence-based practice across adult med-surg and step-down services.',
        features: [
          'Unlimited seats with single sign-on',
          'Quarterly competency gap analysis',
          'Custom dashboards for outcomes and adoption metrics',
        ],
        ctaLabel: 'Schedule demo',
      },
      {
        id: 'enterprise',
        name: 'System Enterprise',
        price: 'Custom pricing',
        description: 'Align hospital, ambulatory, and post-acute teams around unified pathways.',
        features: [
          'Dedicated clinical success partner',
          'Integration with LMS and policy management systems',
          '24/7 priority support and rollout playbooks',
        ],
        ctaLabel: 'Design rollout',
      },
    ],
  },
  isPublished: false,
  createdAt: nowIso(),
  updatedAt: nowIso(),
});

const defaultCategory = (serviceSlug: string): ServiceCategoryRecord => ({
  id: `category-${serviceSlug}-general`,
  serviceSlug,
  name: 'Adult Health Nursing',
  slug: normalizeSlug(serviceSlug),
  shortDescription: 'Clinical pathways, case studies, and continuous-care playbooks for adult nursing teams.',
  heroSummary: 'Deliver high-stakes adult care with our ready-to-deploy mentorship, research, and training assets.',
  heroImage: FALLBACK_HERO,
  stats: [
    { label: 'Average response to plan delivery', value: '45 minutes' },
    { label: 'Specialized adult care RNs community', value: '3.8K members' },
    { label: 'Practice-ready templates', value: '120+' },
    { label: 'Hospitals collaborating with HandyWriterz', value: '180+' },
  ],
  featuredPosts: [],
  createdAt: nowIso(),
  updatedAt: nowIso(),
});

export class ServiceCmsService {
  // --- Page Management ---
    static async listPages(serviceSlug: string): Promise<ServicePageSummary[]> {
    const rows = await databaseService.list(SUMMARIES_TABLE, {
      service_slug: serviceSlug,
    });

    if (!rows || rows.length === 0) {
      return [buildSummary(defaultPage(serviceSlug))];
    }

    return rows.map((row: any) => mapSummaryRow(row));
  }

static async getPage(serviceSlug: string, slug?: string): Promise<ServicePageRecord> {

    if (!slug) {
      const summaries = await this.listPages(serviceSlug);
      return (await this.getPage(serviceSlug, summaries[0]?.slug)) || defaultPage(serviceSlug);
    }

    const record = await databaseService.getBySlug(PAGES_TABLE, slug, 'slug', { service_slug: serviceSlug });

    if (!record) {
      return defaultPage(serviceSlug);
    }

    return mapDatabasePage(record);
  }

  static async saveDraft(page: ServicePageRecord): Promise<ServicePageRecord> {

    const payload = {
      id: page.id.startsWith('draft-') ? undefined : page.id,
      service_slug: page.serviceSlug,
      title: page.title,
      slug: normalizeSlug(page.slug || page.title),
      summary: page.summary,
      content: page.content,
      hero_image: page.heroImage,
      sections: JSON.stringify(page.sections || []),
      stats: JSON.stringify(page.stats || []),
      faq: JSON.stringify(page.faq || []),
      pricing: JSON.stringify(page.pricing || {}),
      seo: JSON.stringify(page.seo || {}),
      is_published: Boolean(page.isPublished),
      published_at: page.isPublished ? page.publishedAt || nowIso() : null,
      created_at: page.createdAt || nowIso(),
      updated_at: nowIso(),
    };

    const saved = await databaseService.upsert(PAGES_TABLE, payload, ['service_slug', 'slug']);
    const record = saved ? mapDatabasePage(saved) : mapDatabasePage(payload);

    await this.updateSummary(record);

    return record;
  }

  static async publish(page: ServicePageRecord): Promise<ServicePageRecord> {
    const draft = await this.saveDraft({
      ...page,
      isPublished: true,
      publishedAt: nowIso(),
    });

    await this.updateSummary(draft);
    return draft;
  }

  static async delete(serviceSlug: string, slug: string): Promise<void> {
    await databaseService.delete(PAGES_TABLE, {
      service_slug: serviceSlug,
      slug,
    });
    await databaseService.delete(SUMMARIES_TABLE, {
      service_slug: serviceSlug,
      slug,
    });
  }

  static async updateSummary(page: ServicePageRecord): Promise<void> {

    const payload = {
      id: page.id.startsWith('draft-') ? page.id.replace('draft-', 'summary-') : `summary-${page.id}`,
      service_slug: page.serviceSlug,
      title: page.title,
      slug: page.slug,
      summary: page.summary,
      hero_image: page.heroImage,
      is_published: Boolean(page.isPublished),
      updated_at: nowIso(),
    };

    await databaseService.upsert(SUMMARIES_TABLE, payload, ['service_slug', 'slug']);
  }

  // --- Category Management ---
  static async getCategory(serviceSlug: string): Promise<ServiceCategoryRecord> {

    const record = await databaseService.getBySlug(CATEGORIES_TABLE, serviceSlug, 'service_slug');
    if (!record) {
      return defaultCategory(serviceSlug);
    }

    return mapDatabaseCategory(record);
  }

  static async saveCategory(category: ServiceCategoryRecord): Promise<ServiceCategoryRecord> {

    const payload = {
      id: category.id.startsWith('category-') ? undefined : category.id,
      service_slug: category.serviceSlug,
      name: category.name,
      slug: normalizeSlug(category.slug || category.name),
      short_description: category.shortDescription,
      hero_summary: category.heroSummary,
      hero_image: category.heroImage,
      stats: JSON.stringify(category.stats || []),
      featured_posts: JSON.stringify(category.featuredPosts || []),
      created_at: category.createdAt || nowIso(),
      updated_at: nowIso(),
    };

    const saved = await databaseService.upsert(CATEGORIES_TABLE, payload, ['service_slug']);
    return saved ? mapDatabaseCategory(saved) : mapDatabaseCategory(payload);
  }
}

export const serviceCmsService = ServiceCmsService;
export default ServiceCmsService;
