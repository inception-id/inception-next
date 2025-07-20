"use client";
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
          <NavigationMenuLink
            href="/whatsapp/pricing"
            className={cn(buttonVariants({ variant: "link" }))}
            onClick={() => sendGAEvent("event", "whatsapp_pricing")}
          >
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/auth/login"
            className={cn(buttonVariants({ variant: "link" }))}
            onClick={() => sendGAEvent("event", "whatsapp_login")}
          >
            Login
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <ThemeToggle variant="ghost" />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
