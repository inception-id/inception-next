"use client"; // Error boundaries must be Client Components
import { MdMessage, MdWhatsapp } from "react-icons/md";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-full flex flex-col items-center justify-center h-full gap-2">
      <MdWhatsapp className="size-32" />
      <h1 className="text-2xl font-bold">An error occurred</h1>

      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
