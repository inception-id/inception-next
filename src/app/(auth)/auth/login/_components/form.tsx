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
import { loginUser } from "@/lib/api/users";
import { useTransition } from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { setSessionCookies } from "@/lib/cookies/set-session-cookies";

const formSchema = z.object({
  email: z
    .string()
    .min(1, "Email can't be empty.")
    .email("Invalid email address."),
  password: z.string().min(1, "Password can't be empty."),
});

export function LoginForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        const loginSession = await loginUser(values.email, values.password);
        if (loginSession.status === 200) {
          const accessToken = loginSession.data.accessToken.token;
          const refreshToken = loginSession.data.refreshToken.token;
          await setSessionCookies(accessToken, refreshToken);
          toast.success("Login successful.", {
            description: "Have a great day!",
          });
          router.push("/whatsapp/dashboard");
        } else if (loginSession.status === 403) {
          toast.warning("User email is not verified.", {
            description: "Please check your email for verification.",
          });
        } else {
          toast.warning(loginSession.message);
        }
      } catch (error) {
        console.error(error);
        toast.error("Login failed. Please try again later.");
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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
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
          {isPending ? "Loading..." : "Login"}
        </Button>
      </form>
    </Form>
  );
}
