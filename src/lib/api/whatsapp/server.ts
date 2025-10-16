import { env } from "@/lib/env";
import { ApiResponse } from "../types";
import { getTokenCookie } from "@/lib/cookies/get-token-cookie";
import { WhatsappPayment } from "./types";

const url = env.NEXT_PUBLIC_API_EXPRESS_URL + "/whatsapp";

export const findWhatsappPayments = async (): Promise<
  ApiResponse<WhatsappPayment[]>
> => {
  try {
    const token = (await getTokenCookie()) as string;
    const res = await fetch(url + "/payments?", {
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

export const createWhatsappPayment = async (
  paymentId: string,
): Promise<ApiResponse<WhatsappPayment>> => {
  try {
    const token = (await getTokenCookie()) as string;
    const res = await fetch(url + `/payments/${paymentId}`, {
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
