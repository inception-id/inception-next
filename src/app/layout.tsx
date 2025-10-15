import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Prevents users from zooming in/out
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
