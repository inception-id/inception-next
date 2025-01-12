"use client";

import {LuCopy, LuGripHorizontal, LuSave} from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/copyToClipboard";
import CheckbotCompletion from "@/app/(languageai)/languageai/checkbot/_components/checkbot-completion";
import {useShallow} from "zustand/react/shallow";
import {useCheckbotStore} from "@/app/(languageai)/languageai/checkbot/_lib/useCheckbotStore";
import {Textarea} from "@/components/ui/textarea";
import {toast} from "react-toastify";
import {createCheckbotStorage} from "@/lib/api/checkbot/create-checkbot-storage";

const CheckbotResult = () => {
    const { updatedCompletion, updateStore, checkbotId} = useCheckbotStore(
        useShallow((state) => ({
            checkbotId: state.checkbotId,
            updatedCompletion: state.updatedCompletion,
            updateStore: state.updateStore,
        })),
    );

    const onSaveClick = async () => {
        try {
           const storage = await createCheckbotStorage(checkbotId, updatedCompletion);
           if (storage.data.id) toast.success("Saved to storage");
        } catch (e:any) {
           console.error(e.message);
           toast.error("Fail to save, please try again")
        }
    }
  return (
    <div className="border rounded-md overflow-hidden">
      <div className="text-xs flex items-center gap-1 p-2 lg:hidden opacity-50">
        * Drag <LuGripHorizontal /> icon to resize
      </div>
      <div className="flex gap-2">
          {updatedCompletion ? <Textarea
              value={updatedCompletion}
              className="placeholder:opacity-50 flex-1 text-sm h-[90vh]  lg:h-[95vh] overflow-y-auto focus-visible:ring-transparent border-none resize-none"
              onChange={(e) => updateStore("updatedCompletion", e.target.value)}
          />:
          <CheckbotCompletion />}
          <div className="flex flex-col gap-1">

        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={async () => await copyToClipboard(updatedCompletion)}
        >
          <LuCopy />
        </Button>
              <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  onClick={onSaveClick}
              >
                  <LuSave />
              </Button>
          </div>
      </div>
    </div>
  );
};

export default CheckbotResult;
