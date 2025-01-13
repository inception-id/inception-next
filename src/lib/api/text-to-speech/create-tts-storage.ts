import { TApiResponse } from "@/lib/api/ApiResponse";
import { fetchApi } from "@/lib/api/fetchApi";

export type TTextToSpeechStorage = {
    id: number;
    user_id: string;
    text_to_speech_id: number;
    created_at: string;
    updated_at: string;
    input_content: string;
    audio_url: string;
    voice: string;
};

export const createTextToSpeechStorage = async (
    tts_id: number): Promise<TApiResponse<TTextToSpeechStorage>> => {
    try {
        return await fetchApi("/tts/create-storage", {
            method: "POST",
            body: JSON.stringify({ tts_id }),
        });
    } catch (e) {
        throw e;
    }
};
