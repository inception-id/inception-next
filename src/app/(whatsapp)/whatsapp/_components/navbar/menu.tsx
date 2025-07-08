import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/custom-ui";

export const NavbarMenu = () => {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList className="gap-4">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/whatsapp/pricing"
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              Harga
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/whatsapp/auth/login"
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              Login
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/whatsapp/contact-us"
              className={cn(buttonVariants({ variant: "outline" }), "w-full")}
            >
              Hubungi Kami
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="/whatsapp/auth/login"
            className={cn(buttonVariants(), "w-full ")}
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
