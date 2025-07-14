import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { LuMessageCircle } from "react-icons/lu";
import { NavbarSheet } from "./sheet";
import { cn } from "@/lib/utils";
import { MdWhatsapp } from "react-icons/md";
import { NavbarMenu } from "./menu";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="container mx-auto flex items-center justify-between py-4 pr-2 lg:px-0">
      <Link
        href="/whatsapp"
        className={cn(buttonVariants({ variant: "link" }), "font-bold")}
      >
        INCEPTION
      </Link>
      <NavbarMenu />
      <div className="flex items-center gap-4 md:hidden">
        <Link
          href="/whatsapp"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          <MdWhatsapp />
          Whatsapp Kami
        </Link>
        <NavbarSheet />
      </div>
    </div>
  );
};
