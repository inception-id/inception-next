import type { Metadata } from "next";
import { Providers } from "@/components/custom-ui";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "INCEPTION",
  description: "",
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
