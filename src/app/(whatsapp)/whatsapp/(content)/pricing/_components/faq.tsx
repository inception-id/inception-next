import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
export const Faq = () => {
  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle>Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold mb-2">
            Bagaimana pembayaran Pay after you use?
          </h4>
          <p className="text-gray-600">
            Hanya dengan Rp. 1 per API Request Anda sudah dapat menggunakan
            WhatsApp Notification API. Tagihan akan dikirim setiap akhir bulan
            ke email Anda.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">
            Apakah ada biaya setup atau minimum bulanan?
          </h4>
          <p className="text-gray-600">
            Tanpa biaya setup atau minimum bulanan. Bayar hanya untuk yang Anda
            gunakan.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">
            Apa metode pembayaran yang diterima?
          </h4>
          <p className="text-gray-600">
            Kami menerima semua pembayaran melalui bank transfer, kartu kredit,
            dan dompet digital.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">
            Dapatkah saya mengubah paket pembayaran kapanpun?
          </h4>
          <p className="text-gray-600">
            Ya, Anda dapat mengubah paket pembayaran kapanpun sesuai kebutuhan
            Anda.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
