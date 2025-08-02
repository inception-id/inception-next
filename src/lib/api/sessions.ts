"use server";
import { env } from "@/lib/env";
import { ApiResponse } from "./types";

const url = env.API_URL + "/sessions";

export const verifySession = async (
  token: string,
): Promise<ApiResponse<boolean>> => {
  try {
    const res = await fetch(url + "/verify", {
      method: "POST",
      headers: {
        "x-api-key": env.API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
    return res.json();
  } catch (error) {
    throw error;
  }
};

export type SessionToken = {
  token: string;
  expiry: number;
  createdTime: number;
};

type RefreshSessionResponse = {
  status: string;
  accessToken?: SessionToken;
  refreshToken?: SessionToken;
};

export const refreshSession = async (
  refresh_token: string,
): Promise<ApiResponse<RefreshSessionResponse>> => {
  try {
    const res = await fetch(url + "/refresh", {
      method: "POST",
      headers: {
        "x-api-key": env.API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh_token }),
    });
    return res.json();
  } catch (error) {
    throw error;
  }
};

type RemoveSessionResponse = {
  status: string;
  sessionHandlesRevoked: string[];
};

export const removeSession = async (
  userId: string,
): Promise<ApiResponse<RemoveSessionResponse>> => {
  try {
    const res = await fetch(url + "/remove/" + userId, {
      method: "POST",
      headers: {
        "x-api-key": env.API_KEY,
        "Content-Type": "application/json",
      },
    });
    return res.json();
  } catch (error) {
    throw error;
  }
};
