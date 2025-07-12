"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          // Override the 'description' element styling:
          description: "!text-foreground/50", // <-- Add your desired Tailwind class here
        },
      }}
      style={
        {
          "--normal-bg": "var(--foreground)",
          "--normal-text": "var(--popover)",
          "--normal-border": "var(--border)",
          description: "var(--popover-foreground)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
