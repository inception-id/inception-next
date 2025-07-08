import { Button } from "@/components/ui/button";
import { HeroSection, Navbar, Testimonial, WhyUs } from "./_components";
import Image from "next/image";

const WhatsappPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="p-4 flex flex-col gap-4">
        <h2 className="text-center text-2xl font-bold">
          Telah dipercaya oleh 35.000+ bisnis di Asia Tenggara
        </h2>
        <Image
          src="/images/whatsapp/indonesia-45-companies.jpg"
          alt="WhatsApp Notification Customer"
          width={400}
          height={400}
          className="w-full h-auto object-cover md:w-[50%] md:mx-auto md:object-contain aspect-video"
        />
      </div>
      <WhyUs />
      <Testimonial />
    </>
  );
};

export default WhatsappPage;
