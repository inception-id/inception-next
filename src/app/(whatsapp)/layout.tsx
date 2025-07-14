import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Solusi WhatsApp Notification API & Aplikasi Broadcast WA Terbaik di Indonesia",
  description:
    "Butuh komunikasi bisnis yang professional dan scalable? Temukan penyedia WhatsApp Notification API + aplikasi broadcast WA unggulan dengan Inception — lengkap dengan segmentasi pesan, integrasi CRM, serta dukungan lokal terpercaya.",
};

type WhatsappLayoutProps = {
  children: React.ReactNode;
};

const WhatsappLayout = ({ children }: WhatsappLayoutProps) => {
  return <div className="theme-whatsapp">{children}</div>;
};

export default WhatsappLayout;
