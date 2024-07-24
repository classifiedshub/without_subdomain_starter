import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!api/|_next/|_static/|[\\w-]+\\.\\w+).*)"],
};

const NO_AUTH_REQUIRED_PATHS = [
  "/login",
  "/forgot-password",
  "/register",
  "/verify",
  "/onboard",
  "/about",
  "/pricing",
  "/resources",
  "/privacy-policy",
  "/terms-conditions",
];

const AUTH_REQUIRED_PATHS = ["/dashboard/*"];

function isNoAuthRequired(pathname) {
  return NO_AUTH_REQUIRED_PATHS.some((path) => pathname.startsWith(path));
}

function isAuthRequired(pathname) {
  return AUTH_REQUIRED_PATHS.some((path) => pathname.startsWith(path));
}

export default async function middleware(req) {
  const url = req.nextUrl;
  const pathname = url.pathname;
  const session = await getToken({ req });

  if (!session && !isNoAuthRequired(pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  } else if (session && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Continue to the requested page if no redirect is necessary
  return NextResponse.next();
}
