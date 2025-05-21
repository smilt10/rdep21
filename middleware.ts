import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request: NextRequest) {
  // Get the pathname
  const path = request.nextUrl.pathname

  // If it's an API route that needs protection
  if (
    path.startsWith("/api/") &&
    (path.includes("/admin") ||
      (path.includes("/projects") && request.method !== "GET") ||
      (path.includes("/testimonials") && request.method !== "GET") ||
      (path.includes("/carousel") && request.method !== "GET") ||
      (path.includes("/content") && request.method !== "GET"))
  ) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    })

    // Check if the user is authenticated and is an admin
    if (!token || !token.isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
  }

  // If it's the admin page
  if (path.startsWith("/admin") && path !== "/admin/login") {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    })

    // Check if the user is authenticated and is an admin
    if (!token || !token.isAdmin) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin/:path*", "/api/:path*"],
}
