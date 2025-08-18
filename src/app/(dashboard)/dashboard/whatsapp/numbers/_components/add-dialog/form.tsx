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
  phone: z
    .string()
    .min(9, "Phone number must be at least 9 characters long")
    .max(13, "Phone number must be at most 13 characters long")
    .regex(
      /^08\d*$/,
      "Phone number must start with 08 and contains only numbers",
    )
    .transform((s) => (s.startsWith("0") ? s.slice(1) : s)),
});

export const AddWhatsappForm = () => {
  const toggleQr = useAddWhatsappStore((state) => state.toggleQr);
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    startTransition(async () => {
      try {
        const whatsappSession = await createWhatsappSession(values.phone);
        if (whatsappSession.status === 201) {
          toggleQr(true, whatsappSession.data.qr);
        } else {
          toast.error(whatsappSession.message);
        }
      } catch (error) {
        console.error(error);
        toast.error(
          "Failed to create Whatsapp session, please try again later",
        );
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
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Whatsapp Number</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="08..."
                  type="number"
                  className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
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
          {isPending ? "Loading..." : "Continue"}
        </Button>
      </form>
    </Form>
  );
};
