"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CARD, FIELD, LABEL, PRIMARY, ROOT } from "@/lib/reviews/look";

export default function Login({ configured }: { configured: boolean }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const router = useRouter();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const res = await fetch("/api/review-studio/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setBusy(false);
    if (res.ok) router.refresh();
    else setError((await res.json().catch(() => ({}))).error || "Login failed.");
  }

  return (
    <div className={`${ROOT} flex items-center justify-center px-4`}>
      <div className="w-full max-w-[22rem]">
        <div className="mb-6 flex flex-col items-center gap-2">
          <Image src="/logo.png" alt="CreateVerse" width={160} height={66} priority className="h-auto w-40" />
          <span className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-xs font-semibold text-slate-600">
            Review Studio
          </span>
        </div>
        <form onSubmit={submit} className={`${CARD} p-6`}>
          <h1 className="text-[24px] font-semibold leading-tight tracking-[-0.03em] text-slate-900">Sign in</h1>
          {!configured ? (
            <p className="mt-2 text-sm text-slate-500">
              Set <code className="rounded bg-slate-100 px-1 text-slate-700">REVIEW_ADMIN_PASSWORD</code> in the
              environment, then restart the server.
            </p>
          ) : (
            <>
              <p className="mt-1.5 text-sm text-slate-500">CreateVerse team only. Use the team password.</p>
              <label htmlFor="pw" className={`${LABEL} mt-5`}>
                Password
              </label>
              <input
                id="pw"
                type="password"
                autoFocus
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={FIELD}
              />
              {error && (
                <p className="mt-3 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-[13px] text-rose-700">
                  {error}
                </p>
              )}
              <button disabled={busy || !password} className={`${PRIMARY} mt-5 w-full`}>
                {busy ? "Signing in…" : "Sign in"}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
