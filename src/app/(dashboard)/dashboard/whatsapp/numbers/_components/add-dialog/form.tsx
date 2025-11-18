import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useTransition } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { createWhatsappSession } from "@/lib/api/whatsapp/client";
import { toast } from "sonner";
import { useAddWhatsappStore } from "../../_hooks";

const formSchema = z.object({
  name: z.string().min(1, "Device name can't be empty"),
});

export const AddWhatsappForm = () => {
  const toggleQr = useAddWhatsappStore((state) => state.toggleQr);
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    startTransition(async () => {
      try {
        const whatsappSession = await createWhatsappSession(values.name);
        if (whatsappSession.status === 201) {
          toggleQr(true, whatsappSession.data.qr);
        } else {
          toast.error(whatsappSession.message);
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to register your number, please try again later");
      }
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Device Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="My Phone" type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isPending}
          className={cn("cursor-pointer", isPending && "animate-pulse")}
        >
          {isPending ? "Generating QR code..." : "Next"}
        </Button>
      </form>
    </Form>
  );
};
