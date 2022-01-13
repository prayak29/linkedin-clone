import { getToken } from "next-auth/jwt";       //jwt web token whenever user login it will provide a token on backend basically get the token, look into the cookies/header n from their we retrive it
import { NextResponse } from "next/server";

export async function middleware(req) {
  if (req.nextUrl.pathname === "/") {
    const session = await getToken({
      req,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });
    // You could also check for any property on the session object,
    // like role === "admin" or name === "John Doe", etc.
    if (!session) return NextResponse.redirect("/home");
    // If user is authenticated, continue.
  }
}