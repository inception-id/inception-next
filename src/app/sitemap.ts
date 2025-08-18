import { env } from "@/lib/env";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: env.NEXT_PUBLIC_HOST_URL,
      lastModified: new Date(),
    },
    {
      url: `${env.NEXT_PUBLIC_HOST_URL}/whatsapp`,
      lastModified: new Date(),
    },
    {
      url: `${env.NEXT_PUBLIC_HOST_URL}/whatsapp/pricing`,
      lastModified: new Date().to,
    },
    {
      url: `${env.NEXT_PUBLIC_HOST_URL}/whatsapp/documentation`,
      lastModified: new Date(),
    },
  ];
}
