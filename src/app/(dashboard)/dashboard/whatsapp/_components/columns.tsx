import { WhatsappMessagesCount } from "@/lib/api/whatsapp/client";
import { getMonthShortName } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

export const TABLE_COLUMNS: ColumnDef<WhatsappMessagesCount>[] = [
  {
    header: "year",
    accessorKey: "year",
  },
  {
    header: "month",
    accessorKey: "month",
    cell: ({ row }) => {
      return getMonthShortName(row.original.month);
    },
  },
  {
    header: "messages",
    accessorKey: "total_records",
  },
];
