import { Metadata } from "next";
import { env } from "@/lib/env";

export const generateMetadata = (): Metadata => {
  const title = "WhatsApp API Pricing";
  const description =
    "Free WhatsApp API for testing and development. Only Rp 50 or cheaper for production.";
  return {
    title,
    description,
    keywords: "Whatsapp, Whatsapp API, Whatsapp Notifications",
    robots: "index, follow",
    applicationName: "inception.id",
    appleWebApp: true,
    alternates: {
      canonical: env.NEXT_PUBLIC_HOST_URL + "/whatsapp/pricing",
    },
    twitter: {
      title: title,
      card: "summary_large_image",
      images: [`${env.NEXT_PUBLIC_HOST_URL}/images/inception.png`],
    },
    openGraph: {
      title,
      description,
      siteName: "inception.id",
    },
  };
};
