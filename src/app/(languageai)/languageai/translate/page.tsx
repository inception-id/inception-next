import TranslateProvider from "@/app/(languageai)/languageai/translate/_components/translate-provider";
import TranslateMobile from "@/app/(languageai)/languageai/translate/_components/translate-mobile";
import TranslateDesktop from "@/app/(languageai)/languageai/translate/_components/translate-desktop";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "AI Translate | Understandable",
    description: "Process, visualize, and analyse your translation into multiple languages for free with Language AI Translate.",
    keywords: "translate, translation, AI translate, AI translation",
};

const LanguageaiTranslate = async () => {
  return (
    <TranslateProvider>
      <section className="w-full h-screen overflow-hidden">
        <TranslateMobile />
        <TranslateDesktop />
      </section>
    </TranslateProvider>
  );
};

export default LanguageaiTranslate;
