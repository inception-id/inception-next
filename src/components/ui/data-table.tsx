"use client";

import { flexRender } from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Table as TanstackTable } from "@tanstack/react-table";
import { cn } from "@/lib/utils";

type TDataTableProps<T> = {
  table: TanstackTable<T>;
  tableCellClassName?: string;
};

export function DataTable<T>({
  table,
  tableCellClassName,
}: TDataTableProps<T>) {
  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {
           table.getRowModel().rows.length > 0 ?
            table.getRowModel().rows.map((row) => (
          <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id} className={cn(tableCellClassName)}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        )) :
               <TableRow >
                       <TableCell className={cn(tableCellClassName)} />
               </TableRow>
        }
      </TableBody>
    </Table>
  );
}
