/*
 * AI providers, tried in order: Google Gemini, then any OpenAI-compatible provider set with
 * AI_BASE_URL. Both speak the OpenAI-style /chat/completions request.
 *
 *   GEMINI_API_KEY  (+ optional GEMINI_MODEL)   https://aistudio.google.com/apikey
 *   AI_BASE_URL + AI_API_KEY + AI_MODEL         any other OpenAI-compatible provider
 *
 * Gemini's model is picked automatically: the account's model list is read once per server
 * instance and the newest Flash model goes first, then the newest Flash-Lite (each model has its
 * own free daily limit, so when one is used up the next one answers). GEMINI_MODEL, if set, is
 * tried before those. A model that answers "not found" or "quota used up" is skipped.
 */

interface Provider {
  name: string;
  url: string;
  key: string;
  models: string[] | (() => Promise<string[]>);
}

const GEMINI_FALLBACK = ["gemini-2.5-flash", "gemini-2.5-flash-lite"];
let geminiList: string[] | null = null;

/** The account's Gemini text models, best first: newest Flash, then newest Flash-Lite. */
async function geminiModels(key: string): Promise<string[]> {
  const preferred = process.env.GEMINI_MODEL ? [process.env.GEMINI_MODEL] : [];
  if (!geminiList) {
    try {
      const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models?pageSize=1000", {
        headers: { "x-goog-api-key": key },
        signal: AbortSignal.timeout(8_000),
      });
      const data = (await res.json()) as { models?: { name: string; supportedGenerationMethods?: string[] }[] };
      const ids = (data.models ?? [])
        .filter((m) => m.supportedGenerationMethods?.includes("generateContent"))
        .map((m) => m.name.replace(/^models\//, ""))
        .filter((id) => /^gemini-\d+(\.\d+)?-flash(-lite)?$/.test(id));
      const version = (id: string) => parseFloat(id.match(/gemini-(\d+(?:\.\d+)?)/)?.[1] ?? "0");
      const newest = (a: string, b: string) => version(b) - version(a);
      const flash = ids.filter((id) => !id.endsWith("-lite")).sort(newest);
      const lite = ids.filter((id) => id.endsWith("-lite")).sort(newest);
      if (flash.length || lite.length) geminiList = [...flash.slice(0, 2), ...lite.slice(0, 2)];
      console.log(`[ai] Gemini models: ${(geminiList ?? GEMINI_FALLBACK).join(", ")}`);
    } catch (e) {
      console.error("[ai] could not list Gemini models", e instanceof Error ? e.message : e);
    }
  }
  return [...new Set([...preferred, ...(geminiList ?? GEMINI_FALLBACK)])];
}

export function providers(): Provider[] {
  const out: Provider[] = [];
  const gemini = process.env.GEMINI_API_KEY;
  if (gemini) {
    out.push({
      name: "Gemini",
      url: "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
      key: gemini,
      models: () => geminiModels(gemini),
    });
  }
  if (process.env.AI_BASE_URL && process.env.AI_API_KEY && process.env.AI_MODEL) {
    out.push({
      name: "Custom",
      url: `${process.env.AI_BASE_URL.replace(/\/$/, "")}/chat/completions`,
      key: process.env.AI_API_KEY,
      models: [process.env.AI_MODEL],
    });
  }
  return out;
}

export const providerNames = () => providers().map((p) => p.name);

/** Models that answered "not found" are remembered for this server instance and skipped. */
const missing = new Set<string>();

/** Pulls the first JSON object out of a model reply (some models wrap it in ``` fences). */
function parseJson(text: string): unknown {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start < 0 || end <= start) throw new Error("no JSON in reply");
  return JSON.parse(text.slice(start, end + 1));
}

/**
 * Asks each provider/model in turn for a JSON reply and returns the first one that parses and
 * passes `accept`. Returns null when none is configured or all fail (quota, outage, bad output).
 */
export async function askJson<T>(
  system: string,
  user: string,
  accept: (v: unknown) => T | null,
): Promise<{ value: T; provider: string } | null> {
  for (const p of providers()) {
    const models = typeof p.models === "function" ? await p.models() : p.models;
    for (const model of models) {
      const id = `${p.name}:${model}`;
      if (missing.has(id)) continue;
      try {
        const payload: Record<string, unknown> = {
          model,
          temperature: 0.8,
          // Room for ten detailed drafts plus a little thinking; caps a runaway reply.
          max_tokens: 4000,
          messages: [
            { role: "system", content: system },
            { role: "user", content: user },
          ],
        };
        // gpt-oss "thinks" before answering, and those hidden tokens are billed as output.
        // Writing short reviews needs very little of it.
        // Gemini "thinks" too; reviews need little of it, and less thinking answers faster.
        if (/gpt-oss/.test(model)) {
          payload.reasoning_effort = "low";
          payload.include_reasoning = false;
        } else if (/gemini/.test(model)) {
          payload.reasoning_effort = "low";
        }
        const call = (body: Record<string, unknown>) =>
          fetch(p.url, {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${p.key}` },
            body: JSON.stringify(body),
            signal: AbortSignal.timeout(30_000),
          });
        let res = await call(payload);
        if (res.status === 400 && "reasoning_effort" in payload) {
          // A provider that doesn't know the reasoning settings: try once without them.
          const body = (await res.clone().text()).slice(0, 300);
          if (/reasoning/i.test(body)) {
            delete payload.reasoning_effort;
            delete payload.include_reasoning;
            res = await call(payload);
          }
        }
        if (!res.ok) {
          const body = (await res.text()).slice(0, 300);
          console.error(`[ai] ${id} HTTP ${res.status}: ${body}`);
          if (res.status === 404 || /model_not_found|does not exist|not found/i.test(body)) {
            missing.add(id);
            continue; // try the next model
          }
          // Free daily or per-minute limit used up: each model has its own, so try the next one.
          if (res.status === 429) continue;
          break; // quota / auth / outage: try the next provider
        }
        const data = (await res.json()) as {
          choices?: { message?: { content?: string } }[];
          usage?: { prompt_tokens?: number; completion_tokens?: number; total_tokens?: number };
        };
        // One line per call in the Vercel logs, to keep an eye on token use.
        console.log(`[ai] ${id} tokens in=${data.usage?.prompt_tokens ?? "?"} out=${data.usage?.completion_tokens ?? "?"}`);
        const value = accept(parseJson(data.choices?.[0]?.message?.content ?? ""));
        if (value) return { value, provider: p.name };
        console.error(`[ai] ${id} returned unusable output`);
      } catch (e) {
        console.error(`[ai] ${id} failed:`, e instanceof Error ? e.message : e);
      }
    }
  }
  return null;
}
