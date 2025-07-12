import { ThemeToggle } from "@/components/custom-ui/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="container mx-auto flex items-center justify-between py-2 px-4 lg:px-0">
      <Link href="/" className={buttonVariants({ variant: "link" })}>
        Inception
      </Link>
      <ThemeToggle />
    </div>
  );
};
