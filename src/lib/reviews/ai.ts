/*
 * Free-tier AI providers, tried in order: Groq, then Gemini, then any OpenAI-compatible
 * provider you set with AI_BASE_URL (e.g. OpenRouter). All speak the same OpenAI-style
 * /chat/completions request, so switching provider is a Vercel setting.
 *
 *   GROQ_API_KEY    (+ optional GROQ_MODEL)     https://console.groq.com/keys
 *   GEMINI_API_KEY  (+ optional GEMINI_MODEL)   https://aistudio.google.com/apikey
 *   AI_BASE_URL + AI_API_KEY + AI_MODEL         any other OpenAI-compatible provider
 *
 * Each provider has a list of models, best first. A model the account can't use (404, or
 * "model not found") is skipped for the next one, so a retired or restricted model never
 * silently drops every review to the templates.
 */

interface Provider {
  name: string;
  url: string;
  key: string;
  models: string[];
}

const list = (preferred: string | undefined, defaults: string[]) =>
  [...new Set([...(preferred ? [preferred] : []), ...defaults])];

export function providers(): Provider[] {
  const out: Provider[] = [];
  if (process.env.GROQ_API_KEY) {
    out.push({
      name: "Groq",
      url: "https://api.groq.com/openai/v1/chat/completions",
      key: process.env.GROQ_API_KEY,
      models: list(process.env.GROQ_MODEL, ["openai/gpt-oss-120b", "llama-3.3-70b-versatile", "openai/gpt-oss-20b", "llama-3.1-8b-instant"]),
    });
  }
  if (process.env.GEMINI_API_KEY) {
    out.push({
      name: "Gemini",
      url: "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
      key: process.env.GEMINI_API_KEY,
      models: list(process.env.GEMINI_MODEL, ["gemini-3.5-flash-lite", "gemini-3.1-flash-lite"]),
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
    for (const model of p.models) {
      const id = `${p.name}:${model}`;
      if (missing.has(id)) continue;
      try {
        const payload: Record<string, unknown> = {
          model,
          temperature: 0.8,
          // Short reviews never need more; caps a runaway reply's cost.
          max_tokens: 2600,
          messages: [
            { role: "system", content: system },
            { role: "user", content: user },
          ],
        };
        // gpt-oss "thinks" before answering, and those hidden tokens are billed as output.
        // Writing short reviews needs very little of it.
        if (/gpt-oss/.test(model)) {
          payload.reasoning_effort = "low";
          payload.include_reasoning = false;
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
