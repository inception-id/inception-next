import { Metadata } from "next";
import { env } from "../env";

export const generateWhatsappMetadata = (path: string): Metadata => {
  const title = "inception.id — Free WhatsApp API & Notifications";
  const description =
    "inception.id: Free WhatsApp API for bulk messages. Use personal or random numbers, no verification required.";
  return {
    title,
    description,
    keywords: "Whatsapp, Whatsapp API, Whatsapp Notifications",
    robots: "index, follow",
    applicationName: "inception.id",
    appleWebApp: true,
    alternates: {
      canonical: env.NEXT_PUBLIC_HOST_URL + path,
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
