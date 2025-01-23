import LanguageaiPlanList from "@/app/(languageai)/languageai/plans/_components/languageai-plan-list";
import { Suspense } from "react";

export const revalidate = 0;

const LanguageaiPlans = () => {
  return (
    <section className="p-4 overflow-y-auto border h-screen pb-16 lg:pb-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-center lg:mt-8">
        LANGUAGE AI PLANS & PRICING
      </h1>
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
        &quot;Quality is remembered long after price is forgotten.&quot;
      </h2>
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-center italic mb-8">
        Gucci
      </h3>

      <Suspense
        fallback={
          <div className="bg-popover/50 animate-pulse w-full h-[50vh] max-w-5xl mx-auto rounded-lg" />
        }
      >
        <div className="flex items-center justify-center">
          <LanguageaiPlanList />
        </div>
      </Suspense>
    </section>
  );
};

export default LanguageaiPlans;
