"use server";

import { cookies } from "next/headers";

export const setSessionCookies = async (
  accessToken: string,
  refreshToken: string,
) => {
  const cookieStore = await cookies();
  cookieStore.set("access-token", accessToken);
  cookieStore.set("refresh-token", refreshToken);
  return cookieStore.toString();
};
