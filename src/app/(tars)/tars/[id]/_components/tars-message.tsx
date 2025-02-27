"use client";
import { UseChatHelpers } from "ai/react";
import { useContext, useEffect, useRef } from "react";
import { TarsContext } from "./tars-provider";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { TbCopy } from "react-icons/tb";
import { copyToClipboard } from "@/lib/copyToClipboard";

const TarsMessages = () => {
  const { messages } = useContext<UseChatHelpers>(TarsContext);
  const messagesEndRef = useRef<any>(null);

  useEffect(() => {
    if (messages.length > 0 && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return (
    <div className="h-[75vh] md:h-[85vh] overflow-y-auto text-base flex flex-col gap-2 px-2 leading-8 md:mb-4">
      {messages.length === 0 && (
        <h1 className="text-5xl font-semibold hidden md:flex items-center justify-center h-full">
          TARS{" "}
        </h1>
      )}
      {messages.map((message) => (
        <div
          key={message.id}
          className={cn(
            message.role === "user"
              ? "text-right bg-popover text-popover-foreground ml-auto rounded-3xl"
              : "text-left",
            "py-1 px-3 w-fit max-w-screen whitespace-pre-line break-words",
          )}
        >
          <div>{message.content}</div>
          {message.role === "assistant" && (
            <Button
              className="mt-2"
              variant="outline"
              size="icon"
              onClick={async () => await copyToClipboard(message.content)}
            >
              <TbCopy />
            </Button>
          )}
        </div>
      ))}

      <div ref={messagesEndRef} />
    </div>
  );
};

export default TarsMessages;
