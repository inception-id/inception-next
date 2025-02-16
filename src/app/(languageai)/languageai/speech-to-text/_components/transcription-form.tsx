"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import TranscriptionLanguageSelection from "@/app/(languageai)/languageai/speech-to-text/_components/transcription-language-select";
import { toast } from "react-toastify";
import { fetchCookieToken } from "@/lib/fetchCookieToken";
import { useLoginStore } from "@/app/(auth)/auth/login/_lib/useLoginStore";
import { useShallow } from "zustand/react/shallow";
import { createTranscription } from "@/lib/openai/createTranscription";
import { useTranscriptionStore } from "@/app/(languageai)/languageai/speech-to-text/_lib/useTranscriptionStore";
import { LuLoader } from "react-icons/lu";
import { createSpeechToText } from "@/lib/api/speech-to-text/createTranscription";
import { useLanguageaiSubscriptionStore } from "@/app/(languageai)/_lib/use-languageai-subscription-store";
import { checkLanguageaiSubscriptionExceedLimit } from "@/lib/api/languageai-subscriptions/find-languageai-subscription-exceed-limit";
import { ELanguageaSubscriptionLimit } from "@/lib/enums/languageai-subscription-limit";

const TranscriptionForm = () => {
  const { updateLoginStore } = useLoginStore(
    useShallow((state) => ({
      updateLoginStore: state.updateStore,
    })),
  );

  const { updateSubscriptionStore } = useLanguageaiSubscriptionStore(
    useShallow((state) => ({
      updateSubscriptionStore: state.updateStore,
    })),
  );

  const { updateStore, isLoading } = useTranscriptionStore(
    useShallow((state) => ({
      isLoading: state.isLoading,
      updateStore: state.updateStore,
    })),
  );
  const handleAction = async (formData: FormData) => {
    const audioFile = formData.get("audio_file") as File;
    const language = formData.get("language") as string;
    if (!audioFile.size) {
      toast.error("Please upload audio file");
      return;
    }

    const maxFileSize = 24 * 1024 * 1024; // 24MB
    if (audioFile.size > maxFileSize) {
      toast.error("Max file size is 24MB");
      return;
    }

    if (!language) {
      toast.error("Please select audio language");
      return;
    }

    updateStore("speechToTextId", 0);
    updateStore("isLoading", true);
    try {
      const token = await fetchCookieToken();
      if (!token) {
        updateLoginStore("openLoginDialog", true);
        return;
      }

      const passLimit = await checkLanguageaiSubscriptionExceedLimit(
        ELanguageaSubscriptionLimit.SpeechToText,
      );
      if (passLimit.status === 401) {
        updateLoginStore("openLoginDialog", true);
        return;
      }

      if (passLimit.data) {
        updateSubscriptionStore(
          "limitDialog",
          ELanguageaSubscriptionLimit.SpeechToText,
        );
        return;
      }

      // 25mb .mp3 file is 25 min | 25mb .wav file is 2,5 min
      const audioMinutes = audioFile.name.includes("mp3")
        ? Math.round(audioFile.size / 1024 / 1024)
        : Math.round(audioFile.size / 1024 / 1024 / 10);

      const transcription = await createTranscription(formData);
      const createSpeechToTextPayload = {
        audio_url: transcription.audio_url,
        transcription_text: transcription.transcription.text,
        language,
        audio_minutes: audioMinutes > 0 ? audioMinutes : 1,
      };
      const speechToText = await createSpeechToText(createSpeechToTextPayload);
      updateStore("speechToTextId", speechToText.data.id);
      updateStore("text", speechToText.data.transcription_text);
      toast.success("Transcription success");
    } catch (e: any) {
      console.error(e.message);
      toast.error("Something went wrong, please try again");
    } finally {
      updateStore("isLoading", false);
    }
  };

  return (
    <div>
      <h1 className="font-bold text-xl mb-4">Transcription</h1>
      <form action={handleAction}>
        <Label>Upload audio</Label>
        <Input
          type="file"
          accept="audio/*"
          className="mb-4"
          name="audio_file"
        />

        <TranscriptionLanguageSelection />

        <div className="flex justify-end">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? <LuLoader className="animate-spin" /> : "Convert"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TranscriptionForm;
