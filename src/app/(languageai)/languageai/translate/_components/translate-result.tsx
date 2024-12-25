"use client";

import { useContext } from "react";
import { TranslateContext } from "@/app/(languageai)/languageai/translate/_components/translate-provider";
import { UseCompletionHelpers } from "@ai-sdk/react";
import { LuCopy, LuGripHorizontal } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/copyToClipboard";

const TranslateResult = () => {
  const { completion, isLoading } =
    useContext<UseCompletionHelpers>(TranslateContext);
  return (
    <div className="p-2 border h-[95vh] rounded-md">
      <div className="text-xs flex items-center gap-1 mb-2 lg:hidden opacity-50">
        * Drag <LuGripHorizontal /> icon to resize
      </div>
      <div className="flex gap-2">
        <div className="flex-1 text-sm">
          {completion
            ? completion
            : isLoading
              ? "Translating..."
              : "Translation will show here"}
        </div>
        <Button
          type="button"
          size="icon"
          variant="secondary"
          onClick={async () => await copyToClipboard(completion)}
        >
          <LuCopy />
        </Button>
      </div>
    </div>
  );
};

export default TranslateResult;
