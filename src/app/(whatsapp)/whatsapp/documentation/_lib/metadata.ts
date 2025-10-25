import { Metadata } from "next";
import { env } from "@/lib/env";

export const generateMetadata = (): Metadata => {
  const title = "WhatsApp API Documentation";
  const description =
    "Send WhatsApp via API: Bulk Messages, Media Messages, Personal or Random number";
  return {
    title,
    description,
    keywords: "Whatsapp, Whatsapp API, Whatsapp Notifications",
    robots: "index, follow",
    applicationName: "inception.id",
    appleWebApp: true,
    alternates: {
      canonical: env.NEXT_PUBLIC_HOST_URL + "/whatsapp/documentation",
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
