"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { createApiKey } from "@/lib/api/api-keys";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuCopy, LuX } from "react-icons/lu";
import { toast } from "sonner";

export const CreateDialog = () => {
  const router = useRouter();
  const [apiKey, setApiKey] = useState("");
  const mutation = useMutation({
    mutationFn: createApiKey,
    onSuccess: (data) => setApiKey(data.data),
  });
  return (
    <Dialog
      onOpenChange={() => {
        setApiKey("");
        router.refresh();
      }}
    >
      <DialogTrigger
        className={cn(buttonVariants())}
        onClick={() => mutation.mutate()}
      >
        Create New Key
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-left">New API Key</DialogTitle>
            <DialogClose
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            >
              <LuX />
            </DialogClose>
          </div>

          <DialogDescription className="text-left">
            Please copy and save the following keys, you will not be able to see
            it again after this popup closed.
          </DialogDescription>
        </DialogHeader>
        {mutation.isPending ? (
          <div className="h-12 w-full rounded bg-accent animate-pulse" />
        ) : (
          <div className="h-full w-full rounded border p-2 flex items-center justify-center break-all">
            {mutation.isError
              ? "FAIL TO CREATE API KEY, PLEASE TRY AGAIN"
              : apiKey}
          </div>
        )}
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => {
              window.navigator.clipboard.writeText(apiKey);
              toast.info("Copied to clipboard");
            }}
          >
            <LuCopy />
            Copy
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
