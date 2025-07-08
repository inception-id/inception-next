import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { LuMessageCircle } from "react-icons/lu";
import { NavbarSheet } from "./sheet";
import { cn } from "@/lib/utils";
import { MdWhatsapp } from "react-icons/md";

export const Navbar = () => {
  return (
    <div className="container mx-auto flex items-center justify-between py-2 pr-2 lg:px-0">
      <Link href="/" className={buttonVariants({ variant: "link" })}>
        <LuMessageCircle />
        INCEPTION
      </Link>
      <div className="flex items-center gap-4 lg:hidden">
        <Link
          href="/whatsapp/contact-us"
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
