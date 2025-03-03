import { fetchCookieToken } from "@/lib/fetchCookieToken";
import LanguageaiLoginCard from "@/app/(languageai)/_components/languageai-login-card";
import { Suspense } from "react";
import type { Metadata } from "next";
import LanguageaiActiveSubscriptionTable from "./_components/languageai-active-subscription-table";

export const metadata: Metadata = {
  title: "Language AI Subscriptions",
};

const LanguageaiSubscriptionPage = async () => {
  const accessToken = await fetchCookieToken();
  if (!accessToken) {
    return <LanguageaiLoginCard />;
  }

  return (
    <section className="p-4 h-screen overflow-y-auto pb-16">
      <h1 className="font-bold text-2xl">SUBSCRIPTION</h1>
      <p className="opacity-50 mb-4">See your current plan details</p>

      <Suspense
        fallback={
          <div className="bg-popover/50 animate-pulse w-full max-w-5xl h-[45vh] rounded-lg" />
        }
      >
        <LanguageaiActiveSubscriptionTable />
      </Suspense>
    </section>
  );
};

export default LanguageaiSubscriptionPage;
