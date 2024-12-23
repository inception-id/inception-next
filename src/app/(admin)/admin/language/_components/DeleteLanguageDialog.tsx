"use client";
import { LuTrash } from "react-icons/lu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Row } from "@tanstack/table-core";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {TLanguage} from "@/lib/api/languages/createLanguage";
import {deleteLanguage} from "@/lib/api/languages/deleteLanguage";

const DeleteLanguageDialog = ({ row }: { row: Row<TLanguage> }) => {
  const router = useRouter();

  const onDeleteClick = async () => {
    try {
      const deletedPrompt = await deleteLanguage(row.getValue("id"));
      toast(deletedPrompt.message);
      router.refresh();
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  return (
    <Dialog>
      <DialogTrigger
        className={cn(buttonVariants({ variant: "destructive", size: "icon" }))}
      >
        <LuTrash />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="font-semibold mb-4">
          Are you sure to delete ${row.getValue("title")} language?
        </DialogTitle>
        <div className="grid grid-cols-2 gap-8">
          <DialogClose
            className={buttonVariants({ variant: "destructive" })}
            onClick={onDeleteClick}
          >
            Delete
          </DialogClose>

          <DialogClose className={buttonVariants({ variant: "outline" })}>
            Cancel
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteLanguageDialog;
