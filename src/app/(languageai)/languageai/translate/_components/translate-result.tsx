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
import LanguageAiSaveToStorageDialog from "@/app/(languageai)/_components/dialogs/save-to-storage";
import { Tooltip } from "react-tooltip";
import { cn } from "@/lib/utils";

const TranslateResult = () => {
  const { updateSubscriptionStore } = useLanguageaiSubscriptionStore(
    useShallow((state) => ({
      updateSubscriptionStore: state.updateStore,
    })),
  );
  const { updatedCompletion, updateStore, translationId, loadingText } =
    useTranslationStore(
      useShallow((state) => ({
        loadingText: state.loadingText,
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
    <div className="border rounded-md overflow-y-auto flex-1 flex">
      {loadingText === "" && updatedCompletion ? (
        <Textarea
          value={updatedCompletion}
          className="text-sm overflow-y-auto border-none resize-none focus-visible:ring-transparent flex-1"
          onChange={(e) => updateStore("updatedCompletion", e.target.value)}
        />
      ) : (
        <TranslateCompletion />
      )}
      <div
        className={cn("flex-col gap-1", loadingText === "" ? "flex" : "hidden")}
      >
        <Button
          data-tooltip-id="copy-tooltip"
          data-tooltip-content="Copy"
          data-tooltip-place="left"
          type="button"
          size="icon"
          variant="ghost"
          onClick={async () => await copyToClipboard(updatedCompletion)}
        >
          <Tooltip id="copy-tooltip" />
          <LuCopy />
        </Button>
        {translationId > 0 && (
          <LanguageAiSaveToStorageDialog
            label="Enter translation title"
            onSaveClick={onSaveClick}
          />
        )}
      </div>
    </div>
  );
};

export default TranslateResult;
