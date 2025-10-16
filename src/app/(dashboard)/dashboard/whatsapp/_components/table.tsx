"use client";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { TABLE_COLUMNS } from "./columns";
import { AllTimeWhatsappCount } from "@/lib/api/whatsapp/client";
import { DashboardTable } from "../../../_components";

interface AllTimeCountTableProps {
  data: AllTimeWhatsappCount[];
}

export const AllTimeCountTable = ({ data }: AllTimeCountTableProps) => {
  const table = useReactTable({
    data,
    columns: TABLE_COLUMNS,
    getCoreRowModel: getCoreRowModel(),
  });

  return <DashboardTable table={table} columnsLength={TABLE_COLUMNS.length} />;
};
