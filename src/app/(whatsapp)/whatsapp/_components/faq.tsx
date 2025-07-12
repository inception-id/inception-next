"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { sendGAEvent } from "@next/third-parties/google";

const FAQ = [
  {
    question: "Apa itu WhatsApp Notification API?",
    answer:
      "WhatsApp Notification API adalah alat komunikasi yang sangat kuat yang memungkinkan bisnis berinteraksi dengan pelanggan menjadi lebih efisien melalui WhatsApp. Ini memungkinkan bisnis untuk mengirim pesan, memberikan dukungan, dan berinteraksi dengan pelanggan di platform yang sudah mereka gunakan dan percayai.",
  },
  {
    question:
      "Mengapa bisnis saya harus menggunakan WhatsApp Notification API?",
    answer:
      "WhatsApp Notification API menawarkan saluran langsung dan nyaman untuk berinteraksi dengan pelanggan. Ini memungkinkan komunikasi yang dipersonalisasi, waktu respons yang lebih cepat, dan kemampuan untuk mencapai audiens yang lebih luas. Ditambah lagi, ini terintegrasi dengan mulus ke dalam Inception untuk pengalaman omnichannel yang lengkap.",
  },
  {
    question:
      "Apakah WhatsApp Notification API dari Inception aman dan terpercaya?",
    answer:
      "Ya, WhatsApp Notification API dari Inception dirancang dengan mempertimbangkan keamanan pengguna. Pesan dienkripsi, memastikan privasi data dan keamanan komunikasi Anda dengan pelanggan.",
  },
  {
    question:
      "Berapa biaya dan harga WhatsApp Notification API resmi di Inception?",
    answer:
      "Pengguna WhatsApp Notification API hanya akan dikenakan tarif sebesar Rp.1 per pesan.",
  },
  {
    question:
      "Bagaimana WhatsApp Notification API dapat menguntungkan penjualan dan pemasaran saya?",
    answer:
      "WhatsApp Notification API memperluas jangkauan Anda dan memungkinkan pendekatan penjualan yang dipersonalisasi. Ini memungkinkan waktu respons yang lebih cepat, yang dapat mengarah pada konversi yang lebih cepat. Ditambah lagi, dengan fitur pengiriman massal, Anda dapat mengelola kampanye dengan efisien.",
  },
  {
    question:
      "Dapatkah saya mengotomatisasi pesan dengan WhatsApp Notification API?",
    answer:
      "Tentu saja. Dengan integrasi Inception, Anda dapat mengotomatisasi pesan untuk menyederhanakan operasi Anda. Ini termasuk pesan selamat datang, respons terhadap pertanyaan umum, dan lain sebagainya.",
  },
  {
    question:
      "Bisakah WhatsApp Notification API diintegrasikan dengan sistem yang sudah ada?",
    answer:
      "Ya, WhatsApp Notification API dapat diintegrasikan dengan mulus ke dalam sistem yang sudah ada, memungkinkan pendekatan komunikasi yang terpadu. Ini memastikan transisi yang lancar dan efisiensi yang ditingkatkan.",
  },
  {
    question:
      "Jenis dukungan apa yang tersedia untuk bisnis yang menggunakan WhatsApp Notification API?",
    answer:
      "Inception menawarkan dukungan khusus untuk bisnis yang menggunakan WhatsApp Notification API. Tim kami di sini untuk membantu dalam proses onboard, dukungan teknis, dan pertanyaan apa pun yang Anda miliki.",
  },
  {
    question:
      "Apakah semua bisnis dapat menggunakan WhatsApp Notification API?",
    answer:
      "Ya, WhatsApp Notification API dapat disesuaikan dengan berbagai industri bisnis termasuk e-commerce, layanan keuangan, perhotelan, dan lain-lain.",
  },
];

export const Faq = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col gap-4 ">
      <h2 className="font-semibold text-2xl">
        Frequently Asked Questions (FAQ)
      </h2>
      <Accordion
        type="multiple"
        className="w-full md:grid md:grid-cols-2 gap-8"
      >
        {FAQ.map((faq) => (
          <AccordionItem key={faq.question} value={faq.question}>
            <AccordionTrigger onClick={() => sendGAEvent("event", "accordion")}>
              <h3>{faq.question}</h3>
            </AccordionTrigger>
            <AccordionContent>
              <p>{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
