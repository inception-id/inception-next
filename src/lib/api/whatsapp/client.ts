import { env } from "@/lib/env";
import { ApiResponse } from "../types";
import { getTokenCookie } from "@/lib/cookies/get-token-cookie";
import { decodeToken } from "@/lib/jwt";
import { JwtPayload } from "jsonwebtoken";
import { User } from "../users";

const url = env.NEXT_PUBLIC_API_EXPRESS_URL + "/whatsapp";

export const createWhatsappSession = async (
  phone: string,
): Promise<ApiResponse<{ qr: string }>> => {
  try {
    const token = (await getTokenCookie()) as string;
    const jwt = (await decodeToken(token)) as JwtPayload & User;
    const res = await fetch(url + "/sessions", {
      method: "POST",
      headers: {
        "x-access-token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: jwt.id, phone }),
    });
    return res.json();
  } catch (error) {
    throw error;
  }
};
