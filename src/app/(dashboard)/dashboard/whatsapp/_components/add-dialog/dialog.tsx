import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { LuPlus, LuX } from "react-icons/lu";
import { MdWhatsapp } from "react-icons/md";
import { AddWhatsappForm } from "./form";

export const AddWhatsappDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className={cn(buttonVariants({ variant: "outline" }))}>
        <LuPlus />
        <span>Add a Number</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex-row items-center justify-between">
          <DialogTitle>Add Whatsapp Number</DialogTitle>
          <DialogClose
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          >
            <LuX />
          </DialogClose>
        </DialogHeader>
        <DialogDescription />
        <AddWhatsappForm />
      </DialogContent>
    </Dialog>
  );
};
