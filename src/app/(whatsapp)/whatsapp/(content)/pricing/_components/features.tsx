import { LuHeadphones, LuShield, LuZap } from "react-icons/lu";

export const Features = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      <div className="text-center">
        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <LuZap className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
        <p className="text-gray-600">
          Kirim notifikasi dengan cepat menggunakan infrastruktur API
          berperforma tinggi kami.
        </p>
      </div>
      <div className="text-center">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <LuShield className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
        <p className="text-gray-600">
          Keamanan dengan 99% uptime yang terjamin untuk pengiriman pesan Anda.
        </p>
      </div>
      <div className="text-center">
        <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <LuHeadphones className="h-8 w-8 text-purple-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
        <p className="text-gray-600">
          Dapatkan bantuan setiap saat dari tim dukungan kami yang siap membantu
          Anda.
        </p>
      </div>
    </div>
  );
};
