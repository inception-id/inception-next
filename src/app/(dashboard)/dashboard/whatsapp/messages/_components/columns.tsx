import { WhatsappMessage } from "@/lib/api/whatsapp/client";
import { ColumnDef } from "@tanstack/react-table";

export const TABLE_COLUMNS: ColumnDef<WhatsappMessage>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "Created At",
    accessorKey: "created_at",
    cell: ({ row }) => {
      const createdAt = new Date(row.getValue("created_at"));
      return <>{createdAt.toLocaleString("id-ID")}</>;
    },
  },
  {
    header: "Environment",
    accessorKey: "environment",
  },
  {
    header: "Status",
    accessorKey: "status",
  },
  {
    header: "Whatsapp Number ID",
    accessorKey: "session_id",
  },
  {
    header: "Country Code",
    accessorKey: "country_code",
  },
  {
    header: "To",
    accessorKey: "target_phone",
  },
  {
    header: "Text",
    accessorKey: "text_message",
  },
];
