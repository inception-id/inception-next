import { PaymentTable } from "./table";
import { findWhatsappPayments } from "@/lib/api/whatsapp/server";

export const Payments = async () => {
  const payments = await findWhatsappPayments();
  return (
    <div className="w-full h-[28rem] sm:h-[44rem] overflow-y-auto flex flex-col gap-2">
      <PaymentTable data={payments.data} />
    </div>
  );
};
