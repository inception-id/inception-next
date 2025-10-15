"use client";

import { DashboardTable } from "@/app/(dashboard)/_components";
import { WhatsappPayment } from "@/lib/api/whatsapp/types";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { TABLE_COLUMNS } from "./table-columns";

type PaymentTableProps = {
  data: WhatsappPayment[];
};

export const PaymentTable = ({ data }: PaymentTableProps) => {
  const table = useReactTable({
    data,
    columns: TABLE_COLUMNS,
    getCoreRowModel: getCoreRowModel(),
  });
  return <DashboardTable table={table} columnsLength={TABLE_COLUMNS.length} />;
};
