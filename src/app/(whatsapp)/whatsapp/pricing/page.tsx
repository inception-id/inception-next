import { WhatsappEnvironment } from "@/lib/api/whatsapp/client";
import { countPricePerWhatsapp } from "@/lib/whatsapp";
import { generateMetadata } from "./_lib/metadata";

export const metadata = generateMetadata();

const PricingTable = () => {
  return (
    <div>
      <div className="grid grid-cols-3 font-semibold">
        <span className="border px-3 py-2">Messages per Month</span>
        <span className="border px-3 py-2">per Message</span>
        <span className="border px-3 py-2">Environment</span>
      </div>
      <div className="grid grid-cols-3">
        <span className="border px-3 py-2">1 ~ 500</span>
        <span className="border px-3 py-2">Free</span>
        <span className="border px-3 py-2 text-sm">
          {WhatsappEnvironment.Development}
        </span>
      </div>
      <div className="grid grid-cols-3">
        <span className="border px-3 py-2">1 ~ 500</span>
        <span className="border px-3 py-2">Rp {countPricePerWhatsapp(1)}</span>
        <span className="border px-3 py-2 text-sm">
          {WhatsappEnvironment.Production}
        </span>
      </div>
      <div className="grid grid-cols-3">
        <span className="border px-3 py-2">501 ~ 1.000</span>
        <span className="border px-3 py-2">
          Rp {countPricePerWhatsapp(501).toLocaleString("id-ID")}
        </span>
        <span className="border px-3 py-2 text-sm">
          {WhatsappEnvironment.Production}
        </span>
      </div>
      <div className="grid grid-cols-3">
        <span className="border px-3 py-2">1.001 ~ 5000</span>
        <span className="border px-3 py-2">
          Rp {countPricePerWhatsapp(1001).toLocaleString("id-ID")}
        </span>
        <span className="border px-3 py-2 text-sm">
          {WhatsappEnvironment.Production}
        </span>
      </div>
      <div className="grid grid-cols-3">
        <span className="border px-3 py-2">5.001 ~ 10.000</span>
        <span className="border px-3 py-2">
          Rp {countPricePerWhatsapp(5001).toLocaleString("id-ID")}
        </span>
        <span className="border px-3 py-2 text-sm">
          {WhatsappEnvironment.Production}
        </span>
      </div>
      <div className="grid grid-cols-3">
        <span className="border px-3 py-2">{"> 10.000"}</span>
        <span className="border px-3 py-2">
          Rp {countPricePerWhatsapp(10001).toLocaleString("id-ID")}
        </span>
        <span className="border px-3 py-2 text-sm">
          {WhatsappEnvironment.Production}
        </span>
      </div>
    </div>
  );
};

const WhatsappPricing = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen gap-8 p-4">
      <div className="flex flex-col gap-4">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          Whatsapp Pricing
        </h1>
        <h3 className="scroll-m-20 text-2xl text-muted-foreground tracking-tight">
          Start for free, and the price will go down as you grow.
        </h3>
      </div>

      <PricingTable />
      <div>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          FAQ
        </h4>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            You are automatically assigned to DEVELOPMENT environment when
            testing our Whatsapp REST API.
          </li>
          <li>
            Once you have reached the limit for DEVELOPMENT environment, you are
            automatically switched to PRODUCTION environment.
          </li>
          <li>
            Billing will be sent every 1st day of each month if you have any
            PRODUCTION message.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhatsappPricing;
