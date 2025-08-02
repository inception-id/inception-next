import { NextResponse, NextRequest } from "next/server";
import {
  ACCESS_TOKEN_COOKIE,
  REFRESH_TOKEN_COOKIE,
} from "./lib/cookies/constant";
import { refreshSession, verifySession } from "./lib/api/sessions";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get(ACCESS_TOKEN_COOKIE)?.value;
  const refreshToken = request.cookies.get(REFRESH_TOKEN_COOKIE)?.value;
  if (!accessToken || !refreshToken) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Check if the access token is expired
  const isValidSession = await verifySession(accessToken);
  if (!isValidSession.data) {
    const newSession = await refreshSession(refreshToken);

    if (newSession.data?.accessToken && newSession.data?.refreshToken) {
      const response = NextResponse.next();
      response.cookies.set(
        ACCESS_TOKEN_COOKIE,
        newSession.data.accessToken.token,
      );
      response.cookies.set(
        REFRESH_TOKEN_COOKIE,
        newSession.data.refreshToken.token,
      );
      return response;
    } else {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"],
};
