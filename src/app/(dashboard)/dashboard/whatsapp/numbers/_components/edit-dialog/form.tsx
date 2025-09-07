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
import {
  createWhatsappSession,
  updateWhatsappSession,
  WhatsappSession,
} from "@/lib/api/whatsapp/client";
import { toast } from "sonner";
import { useAddWhatsappStore } from "../../_hooks";

const formSchema = z.object({
  hourly_limit: z.string().min(1, "Hourly limit can not be empty"),
  daily_limit: z.string().min(1, "Daily limit can not be empty"),
});

type EditWhatsappFormProps = {
  session: WhatsappSession;
  onCloseClick: () => void;
};

export const EditWhatsappForm = ({
  session,
  onCloseClick,
}: EditWhatsappFormProps) => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hourly_limit: String(session.hourly_limit),
      daily_limit: String(session.daily_limit),
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    startTransition(async () => {
      try {
        const updatedSession = await updateWhatsappSession(session.id, {
          daily_limit: Number(values.daily_limit),
          hourly_limit: Number(values.hourly_limit),
        });
        if (updatedSession.status === 200) {
          toast.success("Whatsapp session updated successfully");
          onCloseClick();
        } else {
          toast.error("Failed to update Whatsapp session");
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to update Whatsapp session");
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
          name="hourly_limit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hourly Limit</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="100"
                  type="number"
                  className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="daily_limit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Daily Limit</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="1000"
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
          {isPending ? "Saving..." : "Save"}
        </Button>
      </form>
    </Form>
  );
};
