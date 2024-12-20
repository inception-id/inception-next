import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LuMenu, LuX } from "react-icons/lu";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const HeaderMenuDialog = () => {
  return (
    <Dialog>
      <DialogTrigger
        className={buttonVariants({ variant: "ghost", size: "icon" })}
      >
        <LuMenu />
      </DialogTrigger>
      <DialogContent>
        <div className="flex items-center justify-between mb-4">
          <DialogTitle>Menu</DialogTitle>
          <DialogClose>
            <LuX />
          </DialogClose>
        </div>
        <div className="flex flex-col">
          <DialogClose>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "link" }),
                "w-full justify-start",
              )}
            >
              Home
            </Link>
          </DialogClose>
          <DialogClose>
            <Link
                href="/retail"
                className={cn(
                    buttonVariants({ variant: "link" }),
                    "w-full justify-start",
                )}
            >
              Retail solution
            </Link>
          </DialogClose>
          <DialogClose>
            <Link
                href="/account"
                className={cn(
                    buttonVariants({ variant: "link" }),
                    "w-full justify-start",
                )}
            >
              Account
            </Link>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HeaderMenuDialog;