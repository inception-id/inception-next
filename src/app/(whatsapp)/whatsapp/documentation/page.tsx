import Link from "next/link";
import { Content, Faq } from "./_components";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WhatsappDocumentation = () => {
  return (
    <div className="container mx-auto p-4 lg:flex gap-8 ">
      <div className="hidden lg:flex flex-col gap-4">
        <div className="font-bold text-lg">TABLE OF CONTENTS</div>
        <Link
          href="#first"
          className={cn(buttonVariants({ variant: "link" }), "justify-start")}
        >
          Login or Register
        </Link>
        <Link
          href="#second"
          className={cn(buttonVariants({ variant: "link" }), "justify-start")}
        >
          Add Phone Number
        </Link>
        <Link
          href="#third"
          className={cn(buttonVariants({ variant: "link" }), "justify-start")}
        >
          Send messages
        </Link>
        <Link
          href="#faq"
          className={cn(buttonVariants({ variant: "link" }), "justify-start")}
        >
          FAQ
        </Link>
      </div>
      <div className="grid gap-8 flex-1">
        <Content />
        <Faq />
      </div>
    </div>
  );
};

export default WhatsappDocumentation;
