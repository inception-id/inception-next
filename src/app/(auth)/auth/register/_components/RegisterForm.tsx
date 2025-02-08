"use client";
import { toast } from "react-toastify";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { signupSupertokens } from "@/lib/supertokens/signupSupertokens";
import { createUser } from "@/lib/api/createUser";
import { SUPERTOKENS_EMAIL_ALREADY_EXIST } from "@/lib/supertokens/constant";
import { useRouter } from "next/navigation";
import { sendVerificationEmail } from "@/lib/mail/send-verification-email";

const RegisterForm = () => {
  const router = useRouter();

  const handleAction = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const validEmailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/g;
    if (!validEmailRegex.test(email)) {
      toast.error("Invalid email format");
      return;
    }

    try {
      const supertokens = await signupSupertokens(email, password);
      if (supertokens.status === SUPERTOKENS_EMAIL_ALREADY_EXIST) {
        toast.error("Email already exist");
        return;
      }

        const user = await createUser(supertokens.recipeUserId, email);
        const smtp =  await sendVerificationEmail(supertokens.user.id, user.data.email);
        if (smtp.accepted.length > 0) {
            toast.success(
                "Sign up successful, please check your email for verification",
            );
            router.push("/auth/login")
        }
      return;
    } catch (e: any) {
      toast.error("Registration fail, please try again.");
      console.error(e.message);
      return;
    }
  };

  return (
    <form action={handleAction} className="mb-2">
      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        required
        className="mb-4"
      />

      <Label htmlFor="password">Password</Label>
      <Input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        required
        className="mb-4"
      />

      <Button type="submit" className="w-full">
        Sign up
      </Button>
    </form>
  );
};

export default RegisterForm;
