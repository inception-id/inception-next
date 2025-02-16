"use server";

import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";

export type TLanguageaiSubscriptionPlan = {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  initial_price: string;
  discounted_price: string | null;
  history_limit: number | null;
  storage_limit: number | null;
  translation_limit: number | null;
  checkbot_limit: number | null;
  text_to_speech_limit: number | null;
  speech_to_text_limit: number | null;
  description: string | null;
  category: string | null;
  is_active: boolean | null;
};

export const findAllLanguageaiSubscriptionPlans = async (): Promise<
  TApiResponse<TLanguageaiSubscriptionPlan[]>
> => {
  try {
    return await fetchApi(`/languageai/subscriptions/plans`);
  } catch (e) {
    console.error(e);
    return {
      status: 500,
      data: [],
      message: "Internal server error",
    };
  }
};
