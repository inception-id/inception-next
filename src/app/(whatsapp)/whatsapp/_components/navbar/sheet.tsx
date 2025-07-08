"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LuMenu, LuMessageCircle, LuX } from "react-icons/lu";
import { ThemeToggle } from "@/components/custom-ui/theme-toggle";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { sendGAEvent } from "@next/third-parties/google";

export const NavbarSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className="theme-whatsapp">
        <LuMenu />
      </SheetTrigger>
      <SheetContent className="theme-whatsapp">
        <SheetHeader>
          <div className="flex items-center justify-between">
            <SheetTitle className="flex items-center gap-1">
              <LuMessageCircle />
              INCEPTION
            </SheetTitle>
            <SheetClose>
              <LuX />
            </SheetClose>
          </div>
          <SheetDescription />
        </SheetHeader>
        <div className="flex flex-col gap-2">
          <Link
            href="/whatsapp"
            className={cn(
              buttonVariants({ variant: "link" }),
              "w-full justify-start",
            )}
          >
            Beranda
          </Link>
          <Link
            href="/whatsapp"
            className={cn(
              buttonVariants({ variant: "link" }),
              "w-full justify-start",
            )}
            onClick={() => sendGAEvent("event", "whatsapp_pricing")}
          >
            Harga
          </Link>
        </div>
        <SheetFooter>
          <ThemeToggle />
          <Link
            href="/whatsapp"
            className={cn(buttonVariants({ variant: "outline" }), "w-full")}
            onClick={() => sendGAEvent("event", "whatsapp_login")}
          >
            Login
          </Link>
          <Link
            href="/whatsapp"
            className={cn(buttonVariants({ variant: "outline" }), "w-full")}
            onClick={() => sendGAEvent("event", "whatsapp_faq")}
          >
            Hubungi Kami
          </Link>
          <Link
            href="/whatsapp"
            className={cn(buttonVariants(), "w-full ")}
            onClick={() => sendGAEvent("event", "whatsapp_test")}
          >
            Coba Gratis
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
