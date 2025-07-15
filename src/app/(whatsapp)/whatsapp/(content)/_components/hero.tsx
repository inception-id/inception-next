"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { sendGAEvent } from "@next/third-parties/google";
import Image from "next/image";
import Link from "next/link";
import { MdWhatsapp } from "react-icons/md";

export const HeroSection = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-16">
      <div className="flex flex-col gap-4">
        <div className="font-bold">Hanya dengan Rp. 1 rupiah</div>
        <h1 className="text-3xl font-bold">
          Kirimkan pesan dengan WhatsApp Notification API!
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
            Otomatisasikan layanan pelanggan dan operasi dukungan WhatsApp Anda.
          </li>
          <li>
            Gunakan WhatsApp Notification untuk menjangkau dan memberikan
            dukungan pelanggan 24/7.
          </li>
          <li>
            Manfaatkan WhatsApp Notification untuk menjangkau beberapa akun
            whatsapp pelanggan sekaligus.
          </li>
          <li>Kirim pesan broadcast WA dengan excel tanpa menyimpan nomor</li>
          <li>Personalisasi pesan WA bulk sesuai kebutuhan dan kemauan</li>
          <li>
            Atur jawaban otomatis dari pesan bulk WA yang sudah dikirimkan
          </li>
          <li>Kirim pesan broadcast WhatsApp sesuai jadwal dan otomatis</li>
          <li>Kirim pesan personalisasi ke banyak kontak sekaligus</li>
          <li>Otomatis mengirimkan pesan massal tanpa simpan kontak</li>
          <li>Bulk WhatsApp jangkau lebih banyak pelanggan dengan singkat</li>
          <li>Tingkatkan interaksi dengan pelanggan hingga 80%</li>
          <li>Kirimkan pesan promosi tanpa takut akun WA terblokir</li>
        </ul>

        <div className="grid gap-4 md:grid-cols-2 max-w-lg">
          <Link
            href="#"
            className={cn(buttonVariants({ size: "lg" }))}
            onClick={() => sendGAEvent("event", "whatsapp_ask")}
          >
            <MdWhatsapp />
            Hubungi Kami
          </Link>
          <Link
            href="/auth/login"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            onClick={() => sendGAEvent("event", "whatsapp_test")}
          >
            Coba Gratis
          </Link>
        </div>
      </div>
      <Image
        src="/images/whatsapp/hero.webp"
        alt="Whatsapp Notification"
        className="w-full h-auto object-contain aspect-square rounded lg:w-[50%]"
        width={400}
        height={400}
        priority
      />
    </div>
  );
};
