import type { Metadata } from "next";
import { Providers } from "@/components/custom-ui";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Inception.id",
  description: "",
  keywords: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={figtree.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
