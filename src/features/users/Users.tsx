import { DataTable } from "@/features/common/components/datatable/DataTable";
import { columns } from "./components/columns";
import { users } from "./data/seed";
import { DataTableToolbar } from "@/features/common/components/datatable/DataTableToolbar";

export default function UsersPage() {
  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Users</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of all users!
          </p>
        </div>
      </div>
      <DataTable data={users} columns={columns} toolbar={DataTableToolbar} />
    </div>
  );
}
