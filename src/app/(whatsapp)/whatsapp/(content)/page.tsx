import { Faq, HeroSection, Testimonial, WhyUs } from "./_components";
import Image from "next/image";

const WhatsappPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <HeroSection />
      <div className="p-4 flex flex-col">
        <h2 className="text-center text-3xl font-bold">
          Telah dipercaya oleh 3500+ bisnis di Indonesia
        </h2>
        <Image
          src="/images/whatsapp/indonesia-45-companies.jpg"
          alt="WhatsApp Notification Customer"
          width={400}
          height={400}
          className="w-full h-auto object-cover lg:w-[75%] md:mx-auto md:object-contain aspect-video"
        />
      </div>
      <WhyUs />
      <Testimonial />
      <Faq />
    </div>
  );
};

export default WhatsappPage;
