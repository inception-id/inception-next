"use server";

import { cookies } from "next/headers";
import { ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE } from "./constant";

export const setSessionCookies = async (
  accessToken: string,
  refreshToken: string,
) => {
  const cookieStore = await cookies();
  cookieStore.set(ACCESS_TOKEN_COOKIE, accessToken);
  cookieStore.set(REFRESH_TOKEN_COOKIE, refreshToken);
  return cookieStore.toString();
};
