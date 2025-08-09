"use client";
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
import { AddWhatsappForm } from "./form";
import { useAddWhatsappStore } from "../../_hooks";
import { useShallow } from "zustand/shallow";
import { WhatsappQrCode } from "./whatsapp-qr-code";

export const AddWhatsappDialog = () => {
  const showQr = useAddWhatsappStore(useShallow((state) => state.showQr));
  return (
    <Dialog>
      <DialogTrigger className={cn(buttonVariants({ variant: "outline" }))}>
        <LuPlus />
        <span>Add a Number</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-left">
              {showQr
                ? "Scan the QR code to add your Whatsapp number."
                : "Add Whatsapp Number"}
            </DialogTitle>
            <DialogClose
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            >
              <LuX />
            </DialogClose>
          </div>
          <DialogDescription>
            {showQr ? "QR is valid for 30 seconds." : ""}
          </DialogDescription>
        </DialogHeader>
        {showQr ? <WhatsappQrCode /> : <AddWhatsappForm />}
      </DialogContent>
    </Dialog>
  );
};
