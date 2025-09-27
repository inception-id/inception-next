"use client";
import { LuCopy } from "react-icons/lu";
import { Button } from "../../../../../../components/ui/button";
import { toast } from "sonner";

type CurlCardProps = {
  code: string;
};

export const CurlCard = ({ code }: CurlCardProps) => {
  return (
    <div className="border rounded mt-4 w-full overflow-x-auto">
      <div className="bg-muted border-b p-1">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => {
            navigator.clipboard.writeText(code);
            toast.success("Copied to clipboard");
          }}
        >
          <LuCopy />
        </Button>
      </div>
      <pre className="pb-4">
        <code>{code}</code>
      </pre>
    </div>
  );
};
