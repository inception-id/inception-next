"use client";
import Link from "next/link";
// import { RegisterForm } from "./_components";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "./form";
import { useQuery } from "@tanstack/react-query";
import { useVerifyUserEmailOption } from "@/lib/api/users-hooks";

type LoginCardProps = {
  token?: string;
};

export const LoginCard = ({ token }: LoginCardProps) => {
  useQuery({ ...useVerifyUserEmailOption(token) });
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Login</CardTitle>
        <CardDescription>Enter your credential below to login</CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter className="flex items-center justify-between text-sm">
        <Link
          href="/auth/reset-password "
          className="hover:underline underline-offset-4"
        >
          Forgot Password
        </Link>

        <Link href="/auth/register" className="underline underline-offset-4">
          Register
        </Link>
      </CardFooter>
    </Card>
  );
};
