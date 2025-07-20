import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { NavbarSheet } from "./sheet";
import { cn } from "@/lib/utils";
import { MdWhatsapp } from "react-icons/md";
import { NavbarMenu } from "./menu";

export const Navbar = () => {
  return (
    <div className="container mx-auto flex items-center justify-between py-2">
      <Link
        href="/whatsapp"
        className={cn(buttonVariants({ variant: "link" }), "font-bold")}
      >
        INCEPTION
      </Link>
      <NavbarMenu />
      <NavbarSheet />
    </div>
  );
};
