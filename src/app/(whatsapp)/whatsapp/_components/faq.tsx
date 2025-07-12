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
    question: "Apa itu WhatsApp Business API?",
    answer:
      "WhatsApp Business API adalah alat komunikasi yang sangat kuat yang memungkinkan bisnis berinteraksi dengan pelanggan menjadi lebih efisien melalui WhatsApp. Ini memungkinkan bisnis untuk mengirim pesan, memberikan dukungan, dan berinteraksi dengan pelanggan di platform yang sudah mereka gunakan dan percayai.",
  },
  {
    question: "Mengapa bisnis saya harus menggunakan WhatsApp Business API?",
    answer:
      "WhatsApp Business API menawarkan saluran langsung dan nyaman untuk berinteraksi dengan pelanggan. Ini memungkinkan komunikasi yang dipersonalisasi, waktu respons yang lebih cepat, dan kemampuan untuk mencapai audiens yang lebih luas. Ditambah lagi, ini terintegrasi dengan mulus ke dalam Mekari Qontak untuk pengalaman omnichannel yang lengkap.",
  },
  {
    question:
      "Apakah WhatsApp Business API dari Mekari Qontak aman dan terpercaya?",
    answer:
      "Ya, WhatsApp Business API dari Mekari Qontak dirancang dengan mempertimbangkan keamanan pengguna. Pesan dienkripsi, memastikan privasi data dan keamanan komunikasi Anda dengan pelanggan.",
  },
  {
    question:
      "Berapa biaya dan harga WhatsApp Business API resmi di Mekari Qontak?",
    answer:
      "Pengguna WhatsApp Business API akan dikenakan tarif berbayar. Besarnya biaya dan harga dibedakan berdasarkan kategori percakapan (marketing, utility, authentication dan service). Sementara untuk besaran tarifnya dibedakan berdasarkan lokasi atau negara asal pengguna. Untuk pengguna di Indonesia, daftar biaya penggunaan WhatsApp API resmi terbaru di Mekari Qontak dengan durasi sesi 24 jam dibagi seperti ini: Marketing: Rp596.33 / sesi",
  },
  {
    question:
      "Bagaimana WhatsApp Business API dapat menguntungkan penjualan dan pemasaran saya?",
    answer:
      "WhatsApp Business API memperluas jangkauan Anda dan memungkinkan pendekatan penjualan yang dipersonalisasi. Ini memungkinkan waktu respons yang lebih cepat, yang dapat mengarah pada konversi yang lebih cepat. Ditambah lagi, dengan fitur pengiriman massal, Anda dapat mengelola kampanye dengan efisien.",
  },
  {
    question: "Apakah saya mengotomatisasi pesan dengan WhatsApp Business API?",
    answer:
      "Tentu saja. Dengan integrasi Mekari Qontak, Anda dapat mengotomatisasi pesan untuk menyederhanakan operasi Anda. Ini termasuk pesan selamat datang, respons terhadap pertanyaan umum, dan lain sebagainya.",
  },
];

export const Faq = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col gap-4 ">
      <h2 className="font-semibold text-2xl">
        Frequently Asked Questions (FAQ)
      </h2>
      <div className="md:max-w-lg">
        <Accordion type="single" collapsible className="w-full">
          {FAQ.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger
                onClick={() => sendGAEvent("event", "accordion")}
              >
                <h3>{faq.question}</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
