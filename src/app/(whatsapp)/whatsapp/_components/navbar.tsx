import { ThemeToggle } from "@/components/custom-ui/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { LuMessageCircle } from "react-icons/lu";

export const Navbar = () => {
  return (
    <div className="container mx-auto flex items-center justify-between py-2 pr-2 lg:px-0">
      <Link href="/" className={buttonVariants({ variant: "link" })}>
        <LuMessageCircle />
        INCEPTION
      </Link>
      <ThemeToggle />
    </div>
  );
};
