"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "@/features/common/components/datatable/DataTableColumnHeader"
import { DataTableRowActions } from "./DataTableRowActions"
import { Comment } from "../data/schema"
import { Badge } from "@/components/ui/badge"

export const columns: ColumnDef<Comment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "content",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Comment" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
            <img src={row.original.authorAvatar} alt={row.original.authorName} className="h-8 w-8 rounded-full" />
            <div className="flex flex-col">
                <span className="text-sm font-medium">{row.original.authorName}</span>
                <span className="max-w-xs truncate">{row.original.content}</span>
            </div>
        </div>
      )
    },
  },
  {
    accessorKey: "postTitle",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="In Response To" />
    ),
    cell: ({ row }) => {
        return (
            <div className="flex flex-col">
                <a href="#" className="font-medium hover:underline">{row.original.postTitle}</a>
                <span className="text-sm text-muted-foreground">ID: {row.original.postId}</span>
            </div>
        )
    }
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
        const status = row.getValue("status") as string;
        const variant = status === "approved" ? "default" : status === "pending" ? "secondary" : "destructive";
        return <Badge variant={variant}>{status}</Badge>
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Submitted On" />
    ),
    cell: ({ row }) => {
      return <span>{new Date(row.getValue("createdAt")).toLocaleDateString()}</span>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
