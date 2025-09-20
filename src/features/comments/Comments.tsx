import { DataTable } from "@/features/common/components/datatable/DataTable";
import { columns } from "./components/columns";
import { comments } from "./data/seed";
import { DataTableToolbar } from "@/features/common/components/datatable/DataTableToolbar";

export default function CommentsPage() {
  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Comments</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of all comments!
          </p>
        </div>
      </div>
      <DataTable data={comments} columns={columns} toolbar={DataTableToolbar} />
    </div>
  );
}
