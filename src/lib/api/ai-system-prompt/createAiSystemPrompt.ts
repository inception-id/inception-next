"use server";

import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";

type TAiSystemPrompt = {
  id:number;
  created_at: string;
  updated_at: string;
  product_name: string;
  prompt: string;
}

export const createAiSystemPrompt = async (product_name: string, prompt: string, name:string): Promise<TApiResponse<TAiSystemPrompt>> => {
  try {
    return await fetchApi(true, "/ai-system-prompts/create", {
      method: "POST",
      body: JSON.stringify({ product_name, prompt, name }),
    });
  } catch (e) {
    throw e;
  }
};
