"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { sendGAEvent } from "@next/third-parties/google";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-16">
      <div className="flex flex-col gap-4">
        <div className="font-bold">WhatsApp Notification API Rp. 1 rupiah</div>
        <h1 className="text-3xl font-bold">
          Tingkatkan penjualan bisnis Anda dengan WhatsApp API!
        </h1>
        <p>
          WhatsApp Notification API membantu bisnis menjangkau pelanggan lebih
          efisien. Inception menyediakan rangkaian solusi resmi untuk
          meningkatkan penggunaan WhatsApp Notification Anda.
        </p>
        <ul className="list-disc ml-4 flex flex-col gap-2 marker:text-primary">
          <li>
            Kirim pesan blast atau siaran yang terpersonalisasi sesuai pelanggan
            Anda, tersegmentasi berdasarkan minat dan preferensi mereka.
          </li>

          <li>
            Dapatkan verifikasi dari WhatsApp Business (centang biru) untuk
            bangun kepercayaan dan kredibilitas dengan pelanggan Anda.
          </li>
          <li>
            Otomatisasikan layanan pelanggan dan operasi dukungan WhatsApp Anda.
          </li>
          <li>
            Gunakan bot WhatsApp untuk menjawab pertanyaan pelanggan dan
            memberikan dukungan 24/7.
          </li>
          <li>
            Manfaatkan WhatsApp Clone untuk mengelola akun WhatsApp dari
            beberapa perangkat sekaligus.
          </li>
        </ul>

        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/whatsapp"
            className={cn(buttonVariants(), "w-full")}
            onClick={() => sendGAEvent("event", "whatsapp_faq")}
          >
            Hubungi Kami
          </Link>
          <Link
            href="/whatsapp"
            className={cn(buttonVariants({ variant: "outline" }), "w-full ")}
            onClick={() => sendGAEvent("event", "whatsapp_test")}
          >
            Coba Gratis
          </Link>
        </div>
      </div>
      <Image
        src="/images/whatsapp/hero.webp"
        alt="Whatsapp Notification"
        className="w-full h-auto object-contain aspect-square rounded"
        width={400}
        height={400}
      />
    </div>
  );
};
