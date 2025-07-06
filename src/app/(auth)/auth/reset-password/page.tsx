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
import { ResetPasswordEmailForm, ResetPasswordForm } from "./components";

type ResetPasswordPageProps = {
  searchParams: {
    t?: string;
  };
};

const ResetPasswordPage = async ({ searchParams }: ResetPasswordPageProps) => {
  const { t } = searchParams;
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm ">
        <h1 className="mb-4 text-2xl">INCEPTION</h1>
        <Card className="border-none shadow-none py-0">
          <CardHeader className="px-0">
            <CardTitle>Reset Password</CardTitle>
            <CardDescription>
              {t
                ? "Enter your new password below"
                : "Enter your email below to receive a password reset link"}
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            {t ? <ResetPasswordForm token={t} /> : <ResetPasswordEmailForm />}
          </CardContent>
          <CardFooter className="px-0 flex items-center justify-between">
            <Link href="/auth/login" className="flex items-center gap-1">
              <LuChevronLeft />
              <span>Back to Login</span>
            </Link>
            {t && (
              <Link
                href="/auth/reset-password"
                className="underline underline-offset-4 flex items-center gap-1"
              >
                Send new email
              </Link>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
