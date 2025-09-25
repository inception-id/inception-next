"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const TableOfContent = () => {
  const router = useRouter();
  return (
    <Card className="w-full max-w-sm h-fit gap-0">
      <CardHeader>
        <CardTitle>Table of Contents</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple">
          <AccordionItem value="auth">
            <AccordionTrigger>1. Authentication</AccordionTrigger>
            <AccordionContent className="flex flex-col">
              <Link
                href="#auth-login"
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "justify-start",
                )}
              >
                1.1 Login/Register
              </Link>
              <Link
                href="#auth-key"
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "justify-start",
                )}
              >
                1.2 API Key
              </Link>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="notification">
            <AccordionTrigger>2. Send via Inception number</AccordionTrigger>
            <AccordionContent className="flex flex-col">
              <Link
                href="notification-single"
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "justify-start",
                )}
              >
                2.1 Send one message/notification
              </Link>
              <Link
                href="#notification-multiple"
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "justify-start",
                )}
              >
                2.2 Send multiple messages/notifications
              </Link>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="message">
            <AccordionTrigger>3. Send with your number</AccordionTrigger>
            <AccordionContent className="flex flex-col">
              <Link
                href="message-single"
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "justify-start",
                )}
              >
                3.1 Send one message/notification
              </Link>
              <Link
                href="message-multiple"
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "justify-start",
                )}
              >
                3.2 Send multiple messages/notifications
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Link
          href="#faq"
          className={cn(
            buttonVariants({ variant: "link" }),
            "justify-start px-0 w-full",
          )}
        >
          4. FAQ
        </Link>
      </CardContent>
    </Card>
  );
};
