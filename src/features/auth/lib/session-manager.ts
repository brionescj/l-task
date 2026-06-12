import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

const SECRET = new TextEncoder().encode(process.env.SESSION_SECRET);
const COOKIE_NAME = "l-session";
const MAX_AGE = 60 * 60 * 24 * 1;

type SessionPayload = {
  email: string;
  userId: string;
  name: string;
};

export const sessionManager = {
  createSession: async (payload: SessionPayload) => {
    const token = await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime(Math.floor(Date.now() / 1000) + MAX_AGE)
      .sign(SECRET);

    const cookieStore = await cookies();

    cookieStore.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: MAX_AGE,
      path: "/",
    });
  },

  getSesssion: async () => {
    const cookieStore = await cookies();

    const token = cookieStore.get(COOKIE_NAME)?.value;
    if (!token) return null;

    try {
      const { payload } = await jwtVerify(token, SECRET);
      return payload;
    } catch (_error) {
      return null;
    }
  },

  deleteSession: async () => {
    const cookieStore = await cookies();
    cookieStore.delete(COOKIE_NAME);
  },
};
