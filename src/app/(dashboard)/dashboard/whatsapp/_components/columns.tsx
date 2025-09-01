import { AllTimeWhatsappCount } from "@/lib/api/whatsapp/client";
import { ColumnDef } from "@tanstack/react-table";

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
];
