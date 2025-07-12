import Link from "next/link";
import { RegisterForm } from "./_components";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RegisterPage = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm ">
        <h1 className="mb-4 text-2xl">INCEPTION</h1>
        <Card className="border-none shadow-none py-0">
          <CardHeader className="px-0">
            <CardTitle>Register account</CardTitle>
            <CardDescription>
              Enter your credential below to create an account
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <RegisterForm />

            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/auth/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
