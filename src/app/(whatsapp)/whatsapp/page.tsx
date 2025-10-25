import {
  FeaturesSectionOne,
  FeaturesSectionTwo,
  HeroSection,
} from "./_components";
import { generateWhatsappMetadata } from "@/lib/seo/whatsapp";

export const metadata = generateWhatsappMetadata("/whatsapp");

const WhatsappPage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSectionOne />
      <FeaturesSectionTwo />
    </>
  );
};

export default WhatsappPage;
