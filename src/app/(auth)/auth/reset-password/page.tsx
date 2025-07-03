import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LuChevronLeft } from "react-icons/lu";
import { ResetPasswordEmailForm } from "./components";

type ResetPasswordPageProps = {
  searchParams?: {
    t?: string;
  };
};

const ResetPasswordPage = ({ searchParams }: ResetPasswordPageProps) => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm ">
        <h1 className="mb-4 text-2xl">INCEPTION</h1>
        <Card className="border-none shadow-none py-0">
          <CardHeader className="px-0">
            <CardTitle>Reset Password</CardTitle>
            <CardDescription>
              Enter your email below to receive a password reset link
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <ResetPasswordEmailForm />
          </CardContent>
          <CardFooter className="px-0">
            <Link
              href="/auth/login"
              className="underline underline-offset-4 flex items-center gap-1"
            >
              <LuChevronLeft />
              <span>Back to Login</span>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
