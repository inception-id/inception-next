import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { createWhatsappPayment } from "@/lib/api/whatsapp/server";
import { useRouter } from "next/navigation";
import { LuLoaderCircle } from "react-icons/lu";

type PaymentButtonProps = {
  paymentId: string;
};

export const PaymentButton = ({ paymentId }: PaymentButtonProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const createPayment = async () => {
    setIsLoading(true);
    toast.loading("Creating payment...");
    try {
      const payment = await createWhatsappPayment(paymentId);
      if (payment.data.doku_response?.response.payment.url) {
        toast.success("Payment created successfully, redirecting...");
        router.push(payment.data.doku_response.response.payment.url);
      } else {
        toast.error("Failed to create payment, please try again later.");
      }
      return payment;
    } catch (error) {
      console.error(error);
      toast.error("Failed to create payment, please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button size="sm" onClick={createPayment} disabled={isLoading}>
      {isLoading ? <LuLoaderCircle className="animate-spin" /> : "Pay Now"}
    </Button>
  );
};
