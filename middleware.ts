import { NextResponse } from "next/server";

export async function middleware(request: any) {
  // const { pathname } = request.nextUrl;
  const isAuthenication = false;

  if (!isAuthenication) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/bookings"],
};
