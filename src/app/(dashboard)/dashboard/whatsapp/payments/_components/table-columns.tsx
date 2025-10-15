import { Button } from "@/components/ui/button";
import {
  WhatsappPayment,
  WhatsappPaymentStatus,
} from "@/lib/api/whatsapp/types";
import { getMonthShortName } from "@/lib/utils";
import { countPricePerWhatsapp } from "@/lib/whatsapp";
import { ColumnDef } from "@tanstack/react-table";
import { PaymentButton } from "./payment-button";

export const TABLE_COLUMNS: ColumnDef<WhatsappPayment>[] = [
  {
    header: "Billing Year",
    accessorKey: "year",
  },
  {
    header: "Billing Month",
    accessorKey: "month",
    cell: ({ row }) => {
      const month = Number(row.original.month);
      return getMonthShortName(month);
    },
  },
  {
    header: "Items",
    accessorKey: "items",
    cell: ({ row }) => {
      const items = row.original.items;
      const total = items.reduce((acc, item) => acc + item.value, 0);
      return (
        <div>
          {items.map((item, index) => (
            <div key={`${index}_${item.label}`} className="capitalize">
              Whatsapp {item.label}: {item.value}
            </div>
          ))}
          {items.length > 0 && (
            <div className="capitalize">Whatsapp Total: {total}</div>
          )}
        </div>
      );
    },
  },
  {
    header: "Amount",
    accessorKey: "amount",
    cell: ({ row }) => {
      const items = row.original.items;
      const total = items.reduce((acc, item) => acc + item.value, 0);
      return (
        <div className="capitalize">
          {items.length > 0 && <div>Whatsapp Total: {total}</div>}
          <div>Per Whatsapp Price: Rp {countPricePerWhatsapp(total)}</div>
          <div className="font-bold">
            Total: Rp {Number(row.original.amount).toLocaleString("id-ID")}
          </div>
        </div>
      );
    },
  },
  {
    header: "Status",
    accessorKey: "payment_status",
    cell: ({ row }) => {
      switch (row.original.payment_status) {
        case WhatsappPaymentStatus.FAIL:
          return "Fail";
        case WhatsappPaymentStatus.FREE:
          return "Free";
        case WhatsappPaymentStatus.PENDING:
          return "Waiting for Payment";
        case WhatsappPaymentStatus.PAID:
          if (row.original.paid_at) {
            return `Paid @ ${new Date(row.original.paid_at).toLocaleString("id-ID")}`;
          }
          return "Paid";
      }
    },
  },
  {
    header: "",
    accessorKey: "paid_at",
    cell: ({ row }) => {
      if (WhatsappPaymentStatus.PENDING) {
        return <PaymentButton paymentId={row.original.id} />;
      }

      return <></>;
    },
  },
];
