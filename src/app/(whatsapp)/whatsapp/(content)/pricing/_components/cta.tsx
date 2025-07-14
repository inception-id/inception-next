"use client";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";

export const Cta = () => {
  return (
    <div className="text-center mt-12">
      <h2 className="text-3xl font-bold mb-4">Siap memulai</h2>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Bergabunglah dengan ribuan bisnis lainnya yang menggunakan WhatsApp API
        kami untuk mengirim notifikasi dan berinteraksi dengan pelanggan mereka.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="#"
          className={cn(buttonVariants({ size: "lg" }))}
          onClick={() => sendGAEvent("event", "whatsapp_test")}
        >
          Coba Gratis
        </Link>
        <Link
          href="#"
          className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
          onClick={() => sendGAEvent("event", "whatsapp_docs")}
        >
          See documentation
        </Link>
      </div>
    </div>
  );
};
