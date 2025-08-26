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
import { ApiKey, deleteApiKey } from "@/lib/api/api-keys";
import {
  deleteWhatsappSession,
  WhatsappSession,
} from "@/lib/api/whatsapp/client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { LuTrash2 } from "react-icons/lu";
import { toast } from "sonner";

type DeleteDialogProps = {
  apiKey: ApiKey;
};

export const DeleteDialog = ({ apiKey }: DeleteDialogProps) => {
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
          <DialogTitle>Delete Api Key</DialogTitle>
          <DialogDescription>
            This action can&apos;t be undone. Continue?
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4">
          <DialogClose
            onClick={async () => {
              try {
                const apiKeyRes = await deleteApiKey(apiKey.id);
                if (apiKeyRes.status === 200) {
                  toast.success("API Key Deleted Successfully");
                  router.refresh();
                } else {
                  toast.error("Failed to delete API key");
                }
              } catch (error) {
                console.error(error);
                toast.error("Failed to delete API key");
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
