import { env } from "@/lib/env";
import { ApiResponse, Pagination } from "../types";
import { getTokenCookie } from "@/lib/cookies/get-token-cookie";

export type WhatsappSession = {
  id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  phone: string;
  is_ready: boolean;
};

export enum WhatsappMessageType {
  Development = "DEVELOPMENT",
  Production = "PRODUCTION",
}

export type WhatsappMessage = {
  id: string;
  session_id: string;
  created_at: string;
  updated_at: string;
  target_phone: string;
  message_type: WhatsappMessageType;
  text_message: string | null;
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

export const deleteWhatsappSession = async (
  sessionId: string,
): Promise<ApiResponse<WhatsappSession[]>> => {
  try {
    const token = (await getTokenCookie()) as string;
    const res = await fetch(url + `/sessions/${sessionId}`, {
      method: "DELETE",
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

export type FindWhatsappMessagesSearchParams = {
  environment?: WhatsappMessageType;
};

export const findWhatsappMessages = async (
  searchParams: FindWhatsappMessagesSearchParams,
): Promise<
  ApiResponse<{ messages: WhatsappMessage[]; pagination: Pagination }>
> => {
  try {
    const token = (await getTokenCookie()) as string;
    const newSearchParams = new URLSearchParams();
    if (searchParams) {
      Object.entries(searchParams).forEach(([key, value]) => {
        if (key) {
          newSearchParams.set(key, value);
        }
      });
    }

    const res = await fetch(url + "/messages?" + newSearchParams.toString(), {
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

export enum WhatsappEnvironment {
  Development = "DEVELOPMENT",
  Production = "PRODUCTION",
}

export type WhatsappNotification = {
  id: string;
  session_id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  target_phone: string;
  text_message: string | null;
  environment: WhatsappEnvironment;
};

export const findWhatsappNotifications = async (
  searchParams: FindWhatsappMessagesSearchParams,
): Promise<
  ApiResponse<{ notifications: WhatsappNotification[]; pagination: Pagination }>
> => {
  try {
    const token = (await getTokenCookie()) as string;
    const newSearchParams = new URLSearchParams();
    if (searchParams) {
      Object.entries(searchParams).forEach(([key, value]) => {
        if (key) {
          newSearchParams.set(key, value);
        }
      });
    }

    const res = await fetch(
      url + "/notifications?" + newSearchParams.toString(),
      {
        method: "GET",
        headers: {
          "x-access-token": token,
          "Content-Type": "application/json",
        },
      },
    );
    return res.json();
  } catch (error) {
    throw error;
  }
};

export type AllTimeWhatsappCount = {
  year: string;
  month: string;
  count: string;
  environment: WhatsappEnvironment;
};

export const countAllTimeWhatsappMessagesAndNotifications = async (): Promise<
  ApiResponse<{
    notifications: AllTimeWhatsappCount[];
    messages: AllTimeWhatsappCount[];
  }>
> => {
  try {
    const token = (await getTokenCookie()) as string;

    const res = await fetch(url + "/all-time-counts", {
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
