"use client";

import { ThemeProvider } from "next-themes";
import { TanstackProviders } from "@/components/custom-ui/tanstack-providers";

type TProviders = {
  children: React.ReactNode;
};

export const Providers = ({ children }: TProviders) => {
  return (
    <TanstackProviders>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </TanstackProviders>
  );
};
