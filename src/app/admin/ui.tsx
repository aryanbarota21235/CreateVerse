"use client";

import { useEffect, useState, type ReactNode } from "react";

export * from "./kit";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { PLAIN, PRIMARY } from "@/lib/reviews/look";

/* Interactive pieces of the admin panel (dialogs, actions). Display pieces are in ./kit. */

export function Dialog({
  title,
  onClose,
  children,
  footer,
  wide,
  onSubmit,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
  wide?: boolean;
  onSubmit?: (e: React.FormEvent) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  const Box = onSubmit ? "form" : "div";
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/40 sm:items-center sm:p-4" onMouseDown={onClose}>
      <Box
        onSubmit={onSubmit}
        onMouseDown={(e: React.MouseEvent) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={`flex max-h-[92dvh] w-full ${wide ? "max-w-2xl" : "max-w-xl"} flex-col rounded-t-2xl bg-white shadow-[0_8px_24px_-6px_rgb(15_23_42/0.16),0_0_0_1px_rgb(15_23_42/0.06)] sm:rounded-2xl`}
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3.5">
          <h2 className="text-base font-semibold tracking-tight text-slate-900">{title}</h2>
          <button type="button" onClick={onClose} aria-label="Close" className="flex size-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100">
            <X size={18} />
          </button>
        </div>
        <div className="overflow-y-auto px-5 py-5">{children}</div>
        {footer && <div className="flex flex-wrap justify-end gap-2 border-t border-slate-100 px-5 py-3.5">{footer}</div>}
      </Box>
    </div>
  );
}

export function DialogButtons({ onClose, busy, label }: { onClose: () => void; busy: boolean; label: string }) {
  return (
    <>
      <button type="button" onClick={onClose} className={PLAIN}>
        Cancel
      </button>
      <button disabled={busy} className={PRIMARY}>
        {busy ? "Saving…" : label}
      </button>
    </>
  );
}

export function Problem({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-3 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-[13px] text-rose-700">{message}</p>;
}

/** Calls an admin API, then reloads the server data on success. */
export function useAction() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function run(url: string, method: string, data?: unknown): Promise<Record<string, unknown> | null> {
    setBusy(true);
    setError("");
    try {
      const res = await fetch(url, {
        method,
        headers: data ? { "Content-Type": "application/json" } : undefined,
        body: data ? JSON.stringify(data) : undefined,
      });
      const json = (await res.json().catch(() => ({}))) as Record<string, unknown>;
      if (!res.ok) {
        setError(String(json.error || "Something went wrong."));
        return null;
      }
      router.refresh();
      return json;
    } catch {
      setError("Network problem. Try again.");
      return null;
    } finally {
      setBusy(false);
    }
  }
  return { run, busy, error, setError };
}

