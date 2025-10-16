import { PaymentTable } from "./table";
import { findWhatsappPayments } from "@/lib/api/whatsapp/server";

export const Payments = async () => {
  const payments = await findWhatsappPayments();
  return (
    <div className="w-full h-[34rem] sm:h-[50rem] overflow-y-auto">
      <PaymentTable data={payments.data} />
    </div>
  );
};
