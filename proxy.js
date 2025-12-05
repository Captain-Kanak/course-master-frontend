import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function proxy(request) {
  const token = await getToken({ req: request });
  const pathname = request.nextUrl.pathname;

  // Universal auth check
  const protectedRoutes = ["/dashboard", "/payments"];

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Admin routes
  if (pathname.startsWith("/dashboard/admin") && token?.role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard/student", request.url));
  }

  // Student routes
  if (pathname.startsWith("/dashboard/student") && token?.role !== "student") {
    return NextResponse.redirect(new URL("/dashboard/admin", request.url));
  }

  return NextResponse.next();
}
