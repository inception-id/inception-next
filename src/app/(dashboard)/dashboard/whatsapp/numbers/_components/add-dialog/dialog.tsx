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
import { WhatsappQrCode } from "./whatsapp-qr-code";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { sendGAEvent } from "@next/third-parties/google";

export const AddWhatsappDialog = () => {
  const dialogCloseRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const { showQr, toggleQr } = useAddWhatsappStore();

  return (
    <Dialog
      onOpenChange={(isOpen) => {
        if (isOpen) {
          sendGAEvent("event", "whatsapp_click_add_number");
        } else {
          toggleQr(false, "");
          router.refresh();
        }
      }}
    >
      <DialogTrigger className={cn(buttonVariants())}>
        <LuPlus />
        <span>Add a Number</span>
      </DialogTrigger>
      <DialogContent className="bg-[#FCF5EB] text-black">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Steps to log in</DialogTitle>
            <DialogClose
              ref={dialogCloseRef}
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            >
              <LuX />
            </DialogClose>
          </div>
          <DialogDescription />
        </DialogHeader>
        {showQr ? (
          <WhatsappQrCode closeDialog={() => dialogCloseRef.current?.click()} />
        ) : (
          <AddWhatsappForm />
        )}
      </DialogContent>
    </Dialog>
  );
};
