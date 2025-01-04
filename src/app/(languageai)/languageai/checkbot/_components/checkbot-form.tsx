"use client";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { UseCompletionHelpers } from "@ai-sdk/react";
import { LuLoader } from "react-icons/lu";
import { toast } from "react-toastify";
import { useLoginStore } from "@/app/(auth)/auth/login/_lib/useLoginStore";
import { useShallow } from "zustand/react/shallow";
import { fetchCookieToken } from "@/lib/fetchCookieToken";
import { CheckbotContext } from "@/app/(languageai)/languageai/checkbot/_components/checkbot-provider";
import CheckbotInstructionSelection from "@/app/(languageai)/languageai/checkbot/_components/checkbot-instruction-select";
import { useCheckbotStore } from "@/app/(languageai)/languageai/checkbot/_lib/useCheckbotStore";
import { createCheckbot } from "@/lib/api/checkbot/createCheckbot";
import CheckbotTextarea from "@/app/(languageai)/languageai/checkbot/_components/checkbot-textarea";

const CheckbotForm = () => {
  const { complete, isLoading } =
    useContext<UseCompletionHelpers>(CheckbotContext);

  const { updateStore } = useLoginStore(
    useShallow((state) => ({
      updateStore: state.updateStore,
    })),
  );

  const { instructions } = useCheckbotStore(
    useShallow((state) => ({
      instructions: state.instructions,
    })),
  );

  const handleAction = async (formData: FormData) => {
    const content = formData.get("checkbot_content") as string;
    const instructionId = formData.get("instruction_id") as string;

    if (!content) {
      toast.error("Please enter your text");
      return;
    }

    if (!instructionId) {
      toast.error("Please select instruction");
      return;
    }

    const selectedInstruction = instructions.filter(
      (instruction) => String(instruction.id) === instructionId,
    )[0];
    try {
      const token = await fetchCookieToken();
      if (!token) {
        updateStore("openLoginDialog", true);
        return;
      }

      const completion = await complete(content, {
        body: {
          system: selectedInstruction.prompt,
        },
      });
      if (completion) {
        const createCheckbotPayload = {
          instruction: selectedInstruction.name,
          ai_system_prompt: selectedInstruction.prompt,
          content,
          completion,
        };

        await createCheckbot(createCheckbotPayload);
      }
      return;
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <form action={handleAction} className="flex flex-col">
      <CheckbotTextarea />
      <CheckbotInstructionSelection />
      <div className="flex justify-end pr-2">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? <LuLoader className="animate-spin" /> : "Check"}
        </Button>
      </div>
    </form>
  );
};

export default CheckbotForm;
