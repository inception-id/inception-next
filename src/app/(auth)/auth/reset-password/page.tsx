import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResetPasswordEmailForm, ResetPasswordForm } from "./_components";

type ResetPasswordPageProps = {
  searchParams: Promise<{
    t?: string;
  }>;
};

const ResetPasswordPage = async ({ searchParams }: ResetPasswordPageProps) => {
  const { t } = await searchParams;
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm ">
        <h1 className="mb-4 text-2xl">INCEPTION</h1>
        <Card>
          <CardHeader>
            <CardTitle>Reset Password</CardTitle>
            <CardDescription>
              {t
                ? "Enter your new password below"
                : "Enter your email below to receive a password reset link"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {t ? <ResetPasswordForm token={t} /> : <ResetPasswordEmailForm />}
          </CardContent>
          <CardFooter className="justify-between">
            <Link
              href="/auth/login"
              className="flex items-center hover:underline underline-offset-4"
            >
              Back to Login
            </Link>
            {t && (
              <Link
                href="/auth/reset-password"
                className="underline underline-offset-4 flex items-center "
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
