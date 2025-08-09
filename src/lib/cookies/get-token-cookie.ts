"use server";

import { cookies } from "next/headers";
import { ACCESS_TOKEN_COOKIE } from "./constant";

export const getTokenCookie = async () => {
  const cookieStore = await cookies();
  return cookieStore.get(ACCESS_TOKEN_COOKIE)?.value;
};
