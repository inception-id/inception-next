"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";
import HeroSectionOne from "@/components/custom-ui/hero/one";

export const HeroSection = () => {
  return (
    <HeroSectionOne
      title="Send Whatsapp Notification with Rp. 1"
      description="That's right, you can send a Whatsapp notification with just Rp. 1"
      imageSrc="/images/whatsapp/hero.webp"
      ctaOne={
        <Link
          href="/auth/login"
          className={cn(buttonVariants({ size: "lg" }))}
          onClick={() => sendGAEvent("whatsapp_login")}
        >
          Explore now
        </Link>
      }
      ctaTwo={
        <Link
          href="#"
          className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
          onClick={() => sendGAEvent("whatsapp_documentation")}
        >
          Documentation
        </Link>
      }
    />
  );
};
