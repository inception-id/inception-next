import type { Metadata } from "next";
import { TypographyH1 } from "@/components/ui/typography/typography-h1";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Language AI plans | Free | Premium quality",
  description:
    "Select your plans starting with Rp 0, all comes with a quality.",
  keywords: "Language AI, Plans, Subscriptions",
};

const LanguageaiPlans = () => {
  return (
    <div className="p-4 overflow-y-auto h-screen flex-1 flex flex-col gap-4">
      <TypographyH1 className="text-center">Service discontinued</TypographyH1>
    </div>
  );
};

export default LanguageaiPlans;
