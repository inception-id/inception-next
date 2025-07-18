"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { sendPasswordResetEmail } from "@/lib/api/users";
import { useTransition } from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z
    .string()
    .min(1, "Email can't be empty.")
    .email("Invalid email address."),
});

export function ResetPasswordEmailForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        const email = await sendPasswordResetEmail(values.email);
        if (email.status === 200) {
          toast.success("Reset Password request received!", {
            description: "Please check your email for verification.",
          });
          router.push("/auth/login");
        } else {
          toast.warning(email.message);
        }
      } catch (error) {
        console.error(error);
        toast.error("Fail to submit request. Please try again later.");
      }
    });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="user@email.com"
                  type="email"
                  required
                  {...field}
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
          {isPending ? "Loading..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
