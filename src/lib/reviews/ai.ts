/*
 * Free-tier AI providers, tried in order: Gemini, then Groq, then any OpenAI-compatible
 * provider you set with AI_BASE_URL (e.g. OpenRouter). All three speak the same
 * OpenAI-style /chat/completions request, so switching provider is a Vercel setting.
 *
 *   GEMINI_API_KEY  (+ optional GEMINI_MODEL)   https://aistudio.google.com/apikey
 *   GROQ_API_KEY    (+ optional GROQ_MODEL)     https://console.groq.com/keys
 *   AI_BASE_URL + AI_API_KEY + AI_MODEL         any other OpenAI-compatible provider
 */

interface Provider {
  name: string;
  url: string;
  key: string;
  model: string;
}

export function providers(): Provider[] {
  const list: Provider[] = [];
  if (process.env.GEMINI_API_KEY) {
    list.push({
      name: "Gemini",
      url: "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
      key: process.env.GEMINI_API_KEY,
      model: process.env.GEMINI_MODEL || "gemini-3.5-flash-lite",
    });
  }
  if (process.env.GROQ_API_KEY) {
    list.push({
      name: "Groq",
      url: "https://api.groq.com/openai/v1/chat/completions",
      key: process.env.GROQ_API_KEY,
      model: process.env.GROQ_MODEL || "llama-3.3-70b-versatile",
    });
  }
  if (process.env.AI_BASE_URL && process.env.AI_API_KEY && process.env.AI_MODEL) {
    list.push({
      name: "Custom",
      url: `${process.env.AI_BASE_URL.replace(/\/$/, "")}/chat/completions`,
      key: process.env.AI_API_KEY,
      model: process.env.AI_MODEL,
    });
  }
  return list;
}

export const providerNames = () => providers().map((p) => p.name);

/** Pulls the first JSON object out of a model reply (some models wrap it in ``` fences). */
function parseJson(text: string): unknown {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start < 0 || end <= start) throw new Error("no JSON in reply");
  return JSON.parse(text.slice(start, end + 1));
}

/**
 * Asks each provider in turn for a JSON reply and returns the first one that parses and passes
 * `accept`. Returns null when none is configured or all fail (quota, outage, bad output).
 */
export async function askJson<T>(
  system: string,
  user: string,
  accept: (v: unknown) => T | null,
): Promise<{ value: T; provider: string } | null> {
  for (const p of providers()) {
    try {
      const res = await fetch(p.url, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${p.key}` },
        body: JSON.stringify({
          model: p.model,
          temperature: 0.9,
          messages: [
            { role: "system", content: system },
            { role: "user", content: user },
          ],
        }),
        signal: AbortSignal.timeout(25_000),
      });
      if (!res.ok) {
        console.error(`[ai] ${p.name} HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
        continue;
      }
      const data = (await res.json()) as { choices?: { message?: { content?: string } }[] };
      const value = accept(parseJson(data.choices?.[0]?.message?.content ?? ""));
      if (value) return { value, provider: p.name };
      console.error(`[ai] ${p.name} returned unusable output`);
    } catch (e) {
      console.error(`[ai] ${p.name} failed:`, e instanceof Error ? e.message : e);
    }
  }
  return null;
}
