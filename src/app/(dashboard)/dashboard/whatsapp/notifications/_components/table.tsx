"use client";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { TABLE_COLUMNS } from "./columns";
import { WhatsappNotification } from "@/lib/api/whatsapp/client";
import { DashboardTable } from "@/app/(dashboard)/_components";

interface NotificationTableProps {
  data: WhatsappNotification[];
}

export const NotificationTable = ({ data }: NotificationTableProps) => {
  const table = useReactTable({
    data,
    columns: TABLE_COLUMNS,
    getCoreRowModel: getCoreRowModel(),
  });

  return <DashboardTable table={table} columnsLength={TABLE_COLUMNS.length} />;
};
