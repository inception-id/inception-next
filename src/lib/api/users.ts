"use server";
import { env } from "@/lib/env";
import { ApiResponse } from "./types";

const url = new URL(env.API_URL + "/users");

export type User = {
  id: string;
  supertokens_user_id: string;
  created_at: string;
  updated_at: string;
  email: string;
  phone?: string;
};

type RegisterUserRequest = {
  email: string;
  phone?: string;
  password: string;
};

export const registerUser = async (
  payload: RegisterUserRequest,
): Promise<ApiResponse<User>> => {
  try {
    const res = await fetch(url + "/register", {
      method: "POST",
      headers: {
        "x-api-key": env.API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return res.json();
  } catch (error) {
    throw error;
  }
};
