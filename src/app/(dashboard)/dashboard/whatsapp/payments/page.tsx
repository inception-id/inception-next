import Link from "next/link";
import { Suspense } from "react";
import { WhatsappLoading } from "../_components";
import { PaymentsTable } from "./_components";

export default function PaymentsPage() {
  return (
    <div className="p-4 flex flex-col gap-4 container overflow-x-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">Billing &amp; Payments</h1>
        <h2 className="text-sm">
          Billing is auto generated at the first day of each month. See how we
          count pricing{" "}
          <Link href="/whatsapp/pricing" className="underline">
            here
          </Link>
          .
        </h2>
        <h3 className="text-xs text-muted-foreground italic">
          * We only count DELIVERED notifications/messages.
        </h3>
      </div>
      <Suspense fallback={<WhatsappLoading />}>
        <PaymentsTable />
      </Suspense>
    </div>
  );
}
