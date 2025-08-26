"use server";

import { cookies } from "next/headers";
import { ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE } from "./constant";

export const setSessionCookies = async (
  accessToken: string,
  refreshToken: string,
) => {
  const cookieStore = await cookies();
  cookieStore.set(ACCESS_TOKEN_COOKIE, accessToken, { maxAge: 60 * 60 * 24 }); // 1 day
  cookieStore.set(REFRESH_TOKEN_COOKIE, refreshToken, { maxAge: 60 * 60 * 24 });
  return cookieStore.toString();
};
