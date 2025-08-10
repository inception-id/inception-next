import { env } from "@/lib/env";
import { ApiResponse } from "../types";
import { getTokenCookie } from "@/lib/cookies/get-token-cookie";
import { decodeToken } from "@/lib/jwt";
import { JwtPayload } from "jsonwebtoken";
import { User } from "../users";

export type WhatsappSession = {
  id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  phone: string;
  is_ready: boolean;
};

const url = env.NEXT_PUBLIC_API_EXPRESS_URL + "/whatsapp";

export const createWhatsappSession = async (
  phone: string,
): Promise<ApiResponse<{ qr: string }>> => {
  try {
    const token = (await getTokenCookie()) as string;
    const res = await fetch(url + "/sessions", {
      method: "POST",
      headers: {
        "x-access-token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone }),
    });
    return res.json();
  } catch (error) {
    throw error;
  }
};

export const findWhatsappSessions = async (): Promise<
  ApiResponse<WhatsappSession[]>
> => {
  try {
    const token = (await getTokenCookie()) as string;
    const res = await fetch(url + "/sessions", {
      method: "GET",
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
