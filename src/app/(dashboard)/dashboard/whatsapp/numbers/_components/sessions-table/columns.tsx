import { WhatsappSession } from "@/lib/api/whatsapp/client";
import { ColumnDef } from "@tanstack/react-table";
import { DeleteDialog } from "./delete-dialog";
import { EditWhatsappDialog } from "../edit-dialog";

export const TABLE_COLUMNS: ColumnDef<WhatsappSession>[] = [
  {
    header: "Whatsapp Number ID",
    accessorKey: "id",
  },
  {
    header: "Phone Number",
    accessorKey: "phone",
  },
  {
    header: "Created At",
    accessorKey: "created_at",
    cell: ({ row }) => {
      const createdAt = row.original.created_at;
      return <span>{new Date(createdAt).toLocaleString("id-ID")}</span>;
    },
  },
  {
    header: "Hourly Limit",
    accessorKey: "hourly_limit",
  },
  {
    header: "Daily Limit",
    accessorKey: "daily_limit",
  },
  {
    header: "",
    accessorKey: "is_ready",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <EditWhatsappDialog session={row.original} />
          <DeleteDialog session={row.original} />;
        </div>
      );
    },
  },
];
