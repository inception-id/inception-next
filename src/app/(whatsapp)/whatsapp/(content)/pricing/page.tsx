import { LuZap } from "react-icons/lu";
import { Calculator, PriceCards } from "./_components";

const WhatsappPricing = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl text-center font-bold">WhatsApp API Pricing</h1>
        <p className="text-center">
          Pay after you use dengan WhatsApp Notification API.
        </p>
        <div className="flex items-center bg-accent text-accent-foreground text-center px-3 py-1 justify-center rounded-full w-fit mx-auto font-semibold gap-1">
          <LuZap />
          Hanya dengan Rp. 1 per API request
        </div>
      </div>
      <div className="flex gap-16 flex-col md:flex-row justify-between w-full">
        <Calculator />
        <PriceCards />
      </div>
    </div>
  );
};

export default WhatsappPricing;
