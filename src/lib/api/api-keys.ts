"use server";

import { getTokenCookie } from "../cookies/get-token-cookie";
import { env } from "../env";
import { ApiResponse } from "./types";

const url = env.NEXT_PUBLIC_API_URL + "/api-keys";

export const createApiKey = async (): Promise<ApiResponse<string>> => {
  try {
    const token = (await getTokenCookie()) as string;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "x-access-token": token,
        "Content-Type": "application/json",
      },
    });
    return res.json();
  } catch (error) {
    throw error;
  }
};
