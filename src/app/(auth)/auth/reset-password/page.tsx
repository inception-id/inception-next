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
import { EmailCard } from "./components";

const ResetPasswordPage = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm ">
        <h1 className="mb-4 text-2xl">INCEPTION</h1>
        <EmailCard />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
