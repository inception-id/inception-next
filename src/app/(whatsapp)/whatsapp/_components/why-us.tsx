"use client";
import {
  LuClock,
  LuCloud,
  LuHeadset,
  LuHeart,
  LuShield,
  LuSpeaker,
  LuTags,
  LuThumbsUp,
  LuUsers,
} from "react-icons/lu";
import {
  MdCloud,
  MdHeadphones,
  MdPeople,
  MdReport,
  MdShield,
  MdSync,
  MdWhatsapp,
} from "react-icons/md";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { sendGAEvent } from "@next/third-parties/google";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const WhyUs = () => {
  const FEATURES = [
    {
      icon: <LuThumbsUp className="size-12 text-primary" />,
      title: "Engagement Meningkat",
      description:
        "Aplikasi Notification WA mendorong meningkatnya interaksi pelanggan Anda, dengan mengirimkan pesan broadcast ke ribuan kontak sekaligus.",
    },
    {
      icon: <LuTags className="size-12 text-primary" />,
      title: "Membangun Branding",
      description:
        "Gunakan aplikasi Notification WA untuk menjangkau banyak pelanggan bersamaan. Sehingga pelanggan lebih mengenal brand Anda melalui pesan yang dikirimkan.",
    },
    {
      icon: <MdReport className="size-12 text-primary" />,
      title: "Laporan Analisis",
      description:
        "Ketahui status pesan yang Anda kirimkan secara real-time melalui aplikasi untuk broadcast WhatsApp. Analisis pesan mana saja yang berhasil, dan kurang memenuhi harapan.",
    },
    {
      icon: <LuCloud className="size-12 text-primary" />,
      title: "Berbasis Cloud",
      description:
        "Tidak ada beban biaya instalasi, perawatan, dan pengembangan platform.",
    },
    {
      icon: <LuShield className="size-12 text-primary" />,
      title: "Keamanan Sistem Berbasis Data",
      description:
        "Sistem keamanan yang bersertifikasi dan berstandar internasional.",
    },
    {
      icon: <LuHeadset className="size-12 text-primary" />,
      title: "Dukungan khusus pelanggan",
      description:
        "Dukungan konsultasi, pendampingan implementasi hingga purna jual.",
    },
    {
      icon: <LuHeart className="size-12 text-primary" />,
      title: "Mudah Digunakan",
      description:
        "UI intuitif dengan pengalaman guna yang bersahabat dengan pengguna.",
    },
    {
      icon: <MdSync className="size-12 text-primary" />,
      title: "Dukungan Integrasi",
      description:
        "Sistem dengan kemudahan integrasi dan API yang fleksibel sesuai kebutuhan.",
    },
    {
      icon: <LuUsers className="size-12 text-primary" />,
      title: "Dukungan Ekosistem",
      description:
        "Dukungan networking dan pemberdayaan dengan komunitas praktisi di Indonesia.",
    },
  ];
  return (
    <div className="flex flex-col gap-8 p-4 container mx-auto">
      <h2 className="text-center font-bold text-3xl">
        Atasi Masalah Bisnis dan Maksimalkan Potensi dengan WhatsApp
        Notification dari Inception
      </h2>
      <div className="grid gap-4 lg:grid-cols-3">
        {FEATURES.map((feat, index) => (
          <Card key={`${index}_feature`}>
            <CardHeader>
              {feat.icon}
              <CardTitle>{feat.title}</CardTitle>
              <CardDescription>{feat.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 mx-auto w-full max-w-lg">
        <Link
          href="/whatsapp"
          className={cn(buttonVariants({ size: "lg" }))}
          onClick={() => sendGAEvent("event", "whatsapp_ask")}
        >
          <MdWhatsapp />
          Konsultasi Gratis
        </Link>
        <Link
          href="/whatsapp"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          onClick={() => sendGAEvent("event", "whatsapp_test")}
        >
          Coba Gratis
        </Link>
      </div>
    </div>
  );
};
