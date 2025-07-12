"use client";

import { ThemeProvider } from "next-themes";
import { TanstackProviders } from "@/components/custom-ui/tanstack-providers";
import { GoogleAnalytics } from "@next/third-parties/google";
import { env } from "@/lib/env";
import { Toaster } from "../ui/sonner";

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
      <Toaster position="top-center" />
      <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_ID} />
    </TanstackProviders>
  );
};
