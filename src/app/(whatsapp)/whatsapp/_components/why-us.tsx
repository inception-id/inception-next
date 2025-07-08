"use client";
import { LuHeart } from "react-icons/lu";
import {
  MdCloud,
  MdHeadphones,
  MdPeople,
  MdShield,
  MdSync,
} from "react-icons/md";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { sendGAEvent } from "@next/third-parties/google";

export const WhyUs = () => {
  return (
    <div className="flex flex-col gap-8 p-4 container mx-auto">
      <h2 className="text-center font-bold text-xl">
        Mengapa Bisnis memilih solusi WhatsApp Notitication API dari Inception
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-2 border rounded p-4">
          <MdCloud className="size-12 text-primary" />
          <h3 className="font-semibold">Berbasis cloud</h3>
          <p>
            Tidak ada beban biaya instalasi, perawatan, dan pengembangan
            platform.
          </p>
        </div>
        <div className="flex flex-col gap-2 border rounded p-4">
          <MdShield className="size-12 text-primary" />
          <h3 className="font-semibold">Keamanan sistem basis data</h3>
          <p>
            Sistem keamanan yang bersertifikasi dan berstandar internasional.
          </p>
        </div>
        <div className="flex flex-col gap-2 border rounded p-4">
          <MdHeadphones className="size-12 text-primary" />
          <h3 className="font-semibold">Dukungan khusus pelanggan</h3>
          <p>
            Dukungan konsultasi, pendampingan implementasi hingga purna jual.
          </p>
        </div>
        <div className="flex flex-col gap-2 border rounded p-4">
          <LuHeart className="size-12 text-primary" />
          <h3 className="font-semibold">Mudah digunakan</h3>
          <p>
            UI intuitif dengan pengalaman guna yang bersahabat dengan pengguna.
          </p>
        </div>
        <div className="flex flex-col gap-2 border rounded p-4">
          <MdSync className="size-12 text-primary" />
          <h3 className="font-semibold">Dukungan integrasi</h3>
          <p>
            Sistem dengan kemudahan integrasi dan API yang fleksibel sesuai
            kebutuhan.
          </p>
        </div>
        <div className="flex flex-col gap-2 border rounded p-4">
          <MdPeople className="size-12 text-primary" />
          <h3 className="font-semibold">Dukungan ekosistem</h3>
          <p>
            Dukungan networking dan pemberdayaan dengan komunitas praktisi di
            Indonesia.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 w-fit mx-auto">
        <Link
          href="/whatsapp"
          className={cn(buttonVariants())}
          onClick={() => sendGAEvent("event", "whatsapp_faq")}
        >
          Hubungi Kami
        </Link>
        <Link
          href="/whatsapp"
          className={cn(buttonVariants({ variant: "outline" }))}
          onClick={() => sendGAEvent("event", "whatsapp_test")}
        >
          Coba Gratis
        </Link>
      </div>
    </div>
  );
};
