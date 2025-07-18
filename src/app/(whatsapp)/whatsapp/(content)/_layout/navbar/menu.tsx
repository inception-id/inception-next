"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/custom-ui";
import { sendGAEvent } from "@next/third-parties/google";

export const NavbarMenu = () => {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList className="gap-4">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/whatsapp/pricing"
              className={cn(buttonVariants({ variant: "ghost" }))}
              onClick={() => sendGAEvent("event", "whatsapp_pricing")}
            >
              Harga
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/auth/login"
              className={cn(buttonVariants({ variant: "ghost" }))}
              onClick={() => sendGAEvent("event", "whatsapp_login")}
            >
              Login
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="#"
              className={cn(buttonVariants({ variant: "outline" }), "w-full")}
              onClick={() => sendGAEvent("event", "whatsapp_ask")}
            >
              Hubungi Kami
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="/auth/login"
            className={cn(buttonVariants(), "w-full ")}
            onClick={() => sendGAEvent("event", "whatsapp_test")}
          >
            Coba Gratis
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <ThemeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
