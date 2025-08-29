"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";
import { HeroSectionOne } from "@/components/custom-ui";

export const HeroSection = () => {
  return (
    <HeroSectionOne
      title="Send Whatsapp Notification with Rp. 50"
      description="Official REST API partner, send Whatsapp Notification with Rp. 50 per message"
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
          href="/whatsapp/documentation"
          className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
          onClick={() => sendGAEvent("whatsapp_documentation")}
        >
          Documentation
        </Link>
      }
    />
  );
};
