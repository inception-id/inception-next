import { AllTimeWhatsappCount } from "@/lib/api/whatsapp/client";
import { ColumnDef } from "@tanstack/react-table";
import { WhatsappStatusText } from "./wa-status-text";

export const TABLE_COLUMNS: ColumnDef<AllTimeWhatsappCount>[] = [
  {
    header: "Year",
    accessorKey: "year",
  },
  {
    header: "Month",
    accessorKey: "month",
  },
  {
    header: "Environment",
    accessorKey: "environment",
  },
  {
    header: "Count",
    accessorKey: "count",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      return <WhatsappStatusText status={row.original.status} />;
    },
  },
];
