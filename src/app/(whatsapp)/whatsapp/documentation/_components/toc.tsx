"use client";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export const TableOfContent = () => {
  const router = useRouter();
  return (
    <Card className="gap-2 max-w-md h-fit">
      <CardHeader>
        <CardTitle>Table of Contents</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          role="button"
          className="py-2 w-full underline hover:text-blue-700 cursor-pointer"
          onClick={() => router.push("#login")}
        >
          1. Login/Register
        </div>
        <div
          role="button"
          className="py-2 w-full underline hover:text-blue-700 cursor-pointer"
          onClick={() => router.push("#key")}
        >
          2. Create API Key
        </div>
        <div
          role="button"
          className="py-2 w-full underline hover:text-blue-700 cursor-pointer"
          onClick={() => router.push("#wa-inception")}
        >
          3. Sending message/notification via Inception number
        </div>
        <div
          role="button"
          className="py-2 w-full underline hover:text-blue-700 cursor-pointer"
          onClick={() => router.push("#wa-self")}
        >
          4. Sending message/notification with your number
        </div>
      </CardContent>
    </Card>
  );
};
