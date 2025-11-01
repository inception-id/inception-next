"use client";
import { WhatsappMessage } from "@/lib/api/whatsapp/client";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { TABLE_COLUMNS } from "./columns";
import { DashboardTable } from "@/app/(dashboard)/_components";

interface MessageTableProps {
  data: WhatsappMessage[];
}

export const MessageTable = ({ data }: MessageTableProps) => {
  const table = useReactTable({
    data,
    columns: TABLE_COLUMNS,
    getCoreRowModel: getCoreRowModel(),
  });

  return <DashboardTable table={table} columnsLength={TABLE_COLUMNS.length} />;
};
