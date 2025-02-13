"use client";
import { LuCopy } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { Textarea } from "@/components/ui/textarea";
import { useTranslationStore } from "@/app/(languageai)/languageai/translate/_lib/useTranslateStore";
import { useShallow } from "zustand/react/shallow";
import TranslateCompletion from "@/app/(languageai)/languageai/translate/_components/translate-completion";
import { createTranslationStorage } from "@/lib/api/translation/createTranslationStorage";
import { toast } from "react-toastify";
import { useLanguageaiSubscriptionStore } from "@/app/(languageai)/_lib/use-languageai-subscription-store";
import { ELanguageaSubscriptionLimit } from "@/lib/enums/languageai-subscription-limit";
import { useContext } from "react";
import { UseCompletionHelpers } from "@ai-sdk/react";
import { TranslateContext } from "@/app/(languageai)/languageai/translate/_components/translate-provider";
import LanguageAiSaveToStorageDialog from "@/app/(languageai)/_components/dialogs/save-to-storage";

const TranslateResult = () => {
  const { isLoading } = useContext<UseCompletionHelpers>(TranslateContext);
  const { updateSubscriptionStore } = useLanguageaiSubscriptionStore(
    useShallow((state) => ({
      updateSubscriptionStore: state.updateStore,
    })),
  );
  const { updatedCompletion, updateStore, translationId } = useTranslationStore(
    useShallow((state) => ({
      translationId: state.translationId,
      updatedCompletion: state.updatedCompletion,
      updateStore: state.updateStore,
    })),
  );

  const onSaveClick = async (title: string) => {
    try {
      const translationStorage = await createTranslationStorage(translationId, {
        title,
        updated_completion: updatedCompletion,
      });
      if (translationStorage.status === 402) {
        updateSubscriptionStore(
          "limitDialog",
          ELanguageaSubscriptionLimit.Storage,
        );
        return;
      }
      if (translationStorage.data.id) toast.success("Saved to storage");
    } catch (e) {
      console.error(e);
      toast.error("Fail to save, please try again");
    }
  };

  return (
    <div className="border rounded-md overflow-hidden h-fit">
      <div className="flex gap-2">
        {updatedCompletion ? (
          <Textarea
            value={updatedCompletion}
            className="placeholder:opacity-50 flex-1 text-sm h-60 lg:h-[90vh] overflow-y-auto focus-visible:ring-transparent border-none resize-none"
            onChange={(e) => updateStore("updatedCompletion", e.target.value)}
          />
        ) : (
          <TranslateCompletion />
        )}
        <div className="flex flex-col gap-1">
          <Button
            type="button"
            size="icon"
            variant="ghost"
            onClick={async () =>
              isLoading
                ? toast.warning("Text is still loading")
                : await copyToClipboard(updatedCompletion)
            }
          >
            <LuCopy />
          </Button>
          {!isLoading && translationId !== 0 && (
            <LanguageAiSaveToStorageDialog
              label="Enter translation title"
              onSaveClick={onSaveClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TranslateResult;
