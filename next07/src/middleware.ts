import { NextResponse } from "next/server";
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://example.com"]
    : ["http://localhost:3000/"];

export function middleware(request: Request) {
  console.log("MiddleWare!");
  console.log("request:", request.method);
  console.log("request:", request.url);

  const origin = request.headers.get("origin");
  console.log("origin:", origin);

  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 403,
      statusText: "Forbidden",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
