"use server";
import { env } from "@/lib/env";
import { ApiResponse } from "./types";
import { SessionToken } from "./sessions";

const url = env.API_URL + "/users";

export type User = {
  id: string;
  supertokens_user_id?: string;
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

export const sendPasswordResetEmail = async (
  email: string,
): Promise<ApiResponse<User>> => {
  try {
    const res = await fetch(url + "/password/reset/email", {
      method: "POST",
      headers: {
        "x-api-key": env.API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    return res.json();
  } catch (error) {
    throw error;
  }
};

export const resetPassword = async (
  token: string,
  password: string,
): Promise<ApiResponse<User>> => {
  try {
    const res = await fetch(url + "/password/reset", {
      method: "POST",
      headers: {
        "x-api-key": env.API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, password }),
    });
    return res.json();
  } catch (error) {
    throw error;
  }
};

export type LoginUserResponse = {
  status: string;
  accessToken: SessionToken;
  refreshToken: SessionToken;
};

export const loginUser = async (
  email: string,
  password: string,
): Promise<ApiResponse<LoginUserResponse>> => {
  try {
    const res = await fetch(url + "/login", {
      method: "POST",
      headers: {
        "x-api-key": env.API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return res.json();
  } catch (error) {
    throw error;
  }
};

export const verifyUserEmail = async (
  token?: string,
): Promise<ApiResponse<User>> => {
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
