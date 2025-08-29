import { WhatsappSession } from "@/lib/api/whatsapp/client";
import { ColumnDef } from "@tanstack/react-table";
import { DeleteDialog } from "./delete-dialog";

export const TABLE_COLUMNS: ColumnDef<WhatsappSession>[] = [
  {
    header: "Whatsapp ID",
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
    header: "",
    accessorKey: "is_ready",
    cell: ({ row }) => {
      return <DeleteDialog session={row.original} />;
    },
  },
];
