"use client";
import { WhatsappSession } from "@/lib/api/whatsapp/client";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { TABLE_COLUMNS } from "./columns";
import { DashboardTable } from "@/app/(dashboard)/_components";

interface SessionTableProps {
  data: WhatsappSession[];
}

export const SessionTable = ({ data }: SessionTableProps) => {
  const table = useReactTable({
    data,
    columns: TABLE_COLUMNS,
    getCoreRowModel: getCoreRowModel(),
  });

  return <DashboardTable table={table} columnsLength={TABLE_COLUMNS.length} />;
};
