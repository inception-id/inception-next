import type { Metadata } from "next";
import { Providers } from "@/components/custom-ui";
import { Rubik } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { env } from "@/lib/env";

const rubik = Rubik({ subsets: ["latin"] });
const gotham = localFont({
  src: "./fonts/Gotham.otf",
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
      <body className={gotham.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
