import Link from "next/link";
import { Content, Faq, TableOfContent } from "./_components";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WhatsappDocumentation = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-8">
      <TableOfContent />
      <div>
        <Content />
      </div>
    </div>
  );
};

export default WhatsappDocumentation;
