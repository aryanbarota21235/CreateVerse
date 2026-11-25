import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

/*
 * Minimal password gate for the Review Studio (CreateVerse staff only).
 * Set REVIEW_ADMIN_PASSWORD. The cookie holds an HMAC of a fixed label keyed by that
 * password, so changing the password logs everyone out.
 */

export const ADMIN_COOKIE = "cv_review_admin";
const MAX_AGE = 60 * 60 * 24 * 14; // 14 days

function token(password: string) {
  return createHmac("sha256", password).update("createverse-review-studio-v1").digest("hex");
}

function safeEqual(a: string, b: string) {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && timingSafeEqual(ab, bb);
}

export function adminConfigured() {
  return Boolean(process.env.REVIEW_ADMIN_PASSWORD);
}

export function checkPassword(input: string) {
  const pw = process.env.REVIEW_ADMIN_PASSWORD;
  return Boolean(pw) && safeEqual(input, pw!);
}

export async function isAdmin(): Promise<boolean> {
  const pw = process.env.REVIEW_ADMIN_PASSWORD;
  if (!pw) return false;
  const value = (await cookies()).get(ADMIN_COOKIE)?.value;
  return Boolean(value) && safeEqual(value!, token(pw));
}

export async function setAdminCookie() {
  (await cookies()).set(ADMIN_COOKIE, token(process.env.REVIEW_ADMIN_PASSWORD!), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function clearAdminCookie() {
  (await cookies()).delete(ADMIN_COOKIE);
}
