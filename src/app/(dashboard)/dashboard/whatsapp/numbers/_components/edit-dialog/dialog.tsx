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
import { LuPen, LuPlus, LuX } from "react-icons/lu";
import { useAddWhatsappStore } from "../../_hooks";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { EditWhatsappForm } from "./form";
import { WhatsappSession } from "@/lib/api/whatsapp/client";

type EditWhatsappDialogProps = {
  session: WhatsappSession;
};

export const EditWhatsappDialog = ({ session }: EditWhatsappDialogProps) => {
  const dialogCloseRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  return (
    <Dialog
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          router.refresh();
        }
      }}
    >
      <DialogTrigger className={cn(buttonVariants())}>
        <LuPen />
        Edit
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-left">
              Edit Whatsapp Number
            </DialogTitle>
            <DialogClose
              ref={dialogCloseRef}
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            >
              <LuX />
            </DialogClose>
          </div>
          <DialogDescription>
            Edit Hourly and Daily request limits for your Whatsapp number.
          </DialogDescription>
        </DialogHeader>
        <EditWhatsappForm
          session={session}
          onCloseClick={() => dialogCloseRef.current?.click()}
        />
      </DialogContent>
    </Dialog>
  );
};
