import Link from "next/link";
import { RegisterForm } from "./_components";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RegisterPage = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm ">
        <h1 className="mb-4 text-2xl">INCEPTION</h1>
        <Card>
          <CardHeader>
            <CardTitle>Register account</CardTitle>
            <CardDescription>
              Enter your credential below to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RegisterForm />
          </CardContent>
          <CardFooter className="text-sm gap-1">
            <span>Have an account?</span>
            <Link href="/auth/login" className="underline underline-offset-4">
              Login
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
