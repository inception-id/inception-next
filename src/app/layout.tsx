import type { Metadata } from "next";
import { Providers } from "@/components/custom-ui";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Navbar } from "./(inception)/components/navbar/navbar";

const rubik = Rubik({ subsets: ["latin"] });

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
      <body className={rubik.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
