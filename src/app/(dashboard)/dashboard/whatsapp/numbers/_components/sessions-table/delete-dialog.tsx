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
import {
  deleteWhatsappSession,
  WhatsappSession,
} from "@/lib/api/whatsapp/client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { LuTrash2 } from "react-icons/lu";
import { toast } from "sonner";

type DeleteDialog = {
  session: WhatsappSession;
};

export const DeleteDialog = ({ session }: DeleteDialog) => {
  const router = useRouter();
  return (
    <Dialog>
      <DialogTrigger
        className={cn(buttonVariants({ variant: "destructive", size: "icon" }))}
      >
        <LuTrash2 />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Whatsapp</DialogTitle>
          <DialogDescription>Phone Number: {session.phone}</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4">
          <DialogClose
            onClick={async () => {
              try {
                const whatsapp = await deleteWhatsappSession(session.id);
                if (whatsapp.status === 200) {
                  toast.success("Whatsapp Number Deleted Successfully");
                  router.refresh();
                } else {
                  toast.error("Failed to delete Whatsapp Number");
                }
              } catch (error) {
                console.error(error);
                toast.error("Failed to delete Whatsapp Number");
              }
            }}
            className={cn(buttonVariants({ variant: "destructive" }))}
          >
            Yes
          </DialogClose>
          <DialogClose className={cn(buttonVariants({ variant: "outline" }))}>
            No
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
