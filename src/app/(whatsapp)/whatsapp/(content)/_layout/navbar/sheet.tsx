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
import { LuMenu, LuX } from "react-icons/lu";
import { ThemeToggle } from "@/components/custom-ui/theme-toggle";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { sendGAEvent } from "@next/third-parties/google";
import { useState } from "react";

export const NavbarSheet = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <Sheet open={sheetOpen}>
      <SheetTrigger
        className={cn(buttonVariants({ variant: "ghost" }), "md:hidden")}
        onClick={() => setSheetOpen(true)}
      >
        <LuMenu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex-row items-center justify-between w-full gap-0">
          <SheetTitle>INCEPTION</SheetTitle>
          <SheetClose
            className={cn(buttonVariants({ variant: "ghost" }), "ml-auto")}
          >
            <LuX />
          </SheetClose>
          <SheetDescription />
        </SheetHeader>
        <div className="flex flex-col gap-2">
          <Link
            href="/whatsapp"
            className={cn(
              buttonVariants({ variant: "link" }),
              "w-full justify-start",
            )}
            onClick={() => setSheetOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/whatsapp/pricing"
            className={cn(
              buttonVariants({ variant: "link" }),
              "w-full justify-start",
            )}
            onClick={() => {
              sendGAEvent("event", "whatsapp_pricing");
              setSheetOpen(false);
            }}
          >
            Pricing
          </Link>
          <Link
            href="/auth/login"
            className={cn(
              buttonVariants({ variant: "link" }),
              "w-full justify-start",
            )}
            onClick={() => {
              sendGAEvent("event", "whatsapp_login");
              setSheetOpen(false);
            }}
          >
            Login
          </Link>
        </div>
        <SheetFooter>
          <ThemeToggle />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
