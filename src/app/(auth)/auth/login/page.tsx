import Link from "next/link";
// import { RegisterForm } from "./_components";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "./_components";
const LoginPage = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm ">
        <h1 className="mb-4 text-2xl">INCEPTION</h1>
        <Card className="border-none shadow-none py-0">
          <CardHeader className="px-0">
            <CardTitle>Account Login</CardTitle>
            <CardDescription>
              Enter your credential below to login
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <LoginForm />

            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/register"
                className="underline underline-offset-4"
              >
                Register
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
