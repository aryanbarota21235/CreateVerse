import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/*
 * A tiny document store for the admin panel and the review service.
 *
 * Every record lives in one Supabase table, `cv_records` (collection, id, data jsonb), see
 * supabase/schema.sql. Without SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY (local dev) records are kept
 * in .data/db.json instead. Vercel's filesystem is read-only, so there the keys are required.
 */

export type Collection = "businesses" | "events" | "plans" | "signups" | "payments" | "enquiries" | "suggestions" | "daily" | "categories" | "library";

export interface Doc {
  id: string;
  createdAt: string;
}

type Row = { collection: Collection; id: string; data: Record<string, unknown>; created_at: string };

let client: SupabaseClient | null | undefined;
function supabase(): SupabaseClient | null {
  if (client === undefined) {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    client = url && key ? createClient(url, key, { auth: { persistSession: false } }) : null;
  }
  return client;
}

export const storageLabel = () => (supabase() ? "Supabase" : "Local file (.data/db.json)");

// ---------- local fallback ----------
const FILE = path.join(process.cwd(), ".data", "db.json");
type Local = Partial<Record<Collection, Record<string, unknown>[]>>;

async function readLocal(): Promise<Local> {
  try {
    return JSON.parse(await fs.readFile(FILE, "utf8")) as Local;
  } catch {
    return {};
  }
}
async function writeLocal(data: Local) {
  if (process.env.VERCEL) {
    throw new Error("Storage is not set up: add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in Vercel, then redeploy.");
  }
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(data, null, 2));
}

// Local mode keeps one JSON file, so every read-modify-write runs one at a time.
let queue: Promise<unknown> = Promise.resolve();
function locked<T>(fn: () => Promise<T>): Promise<T> {
  const run = queue.then(fn, fn);
  queue = run.catch(() => undefined);
  return run;
}

const fromRow = <T extends Doc>(r: Row): T => ({ ...(r.data as object), id: r.id, createdAt: r.created_at }) as T;

// ---------- API ----------

/** All records of a collection, newest first. `where` matches top-level fields exactly. */
export async function list<T extends Doc>(collection: Collection, where?: Partial<Record<keyof T, string>>): Promise<T[]> {
  const s = supabase();
  if (s) {
    let q = s.from("cv_records").select("*").eq("collection", collection);
    for (const [k, v] of Object.entries(where ?? {})) q = q.eq(`data->>${k}`, v as string);
    const { data, error } = await q.order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return (data as Row[]).map((r) => fromRow<T>(r));
  }
  const all = ((await readLocal())[collection] ?? []) as unknown as T[];
  const matched = all.filter((d) =>
    Object.entries(where ?? {}).every(([k, v]) => String((d as Record<string, unknown>)[k] ?? "") === v),
  );
  return [...matched].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function get<T extends Doc>(collection: Collection, id: string): Promise<T | null> {
  const s = supabase();
  if (s) {
    const { data, error } = await s.from("cv_records").select("*").eq("collection", collection).eq("id", id).maybeSingle();
    if (error) throw new Error(error.message);
    return data ? fromRow<T>(data as Row) : null;
  }
  const all = ((await readLocal())[collection] ?? []) as unknown as T[];
  return all.find((d) => d.id === id) ?? null;
}

export async function findOne<T extends Doc>(collection: Collection, where: Partial<Record<keyof T, string>>): Promise<T | null> {
  return (await list<T>(collection, where))[0] ?? null;
}

export async function insert<T extends Doc>(collection: Collection, data: Omit<T, "id" | "createdAt">): Promise<T> {
  const id = randomUUID();
  const createdAt = new Date().toISOString();
  const s = supabase();
  if (s) {
    const { data: row, error } = await s
      .from("cv_records")
      .insert({ collection, id, data, created_at: createdAt })
      .select("*")
      .single();
    if (error) throw new Error(error.message);
    return fromRow<T>(row as Row);
  }
  return locked(async () => {
    const local = await readLocal();
    const doc = { ...data, id, createdAt } as unknown as T;
    local[collection] = [...(local[collection] ?? []), doc as unknown as Record<string, unknown>];
    await writeLocal(local);
    return doc;
  });
}

export async function update<T extends Doc>(
  collection: Collection,
  id: string,
  patch: Partial<Omit<T, "id" | "createdAt">>,
): Promise<T | null> {
  const current = await get<T>(collection, id);
  if (!current) return null;
  const { id: _i, createdAt: _c, ...rest } = { ...current, ...patch } as T & Record<string, unknown>;
  void _i;
  void _c;
  const s = supabase();
  if (s) {
    const { data, error } = await s
      .from("cv_records")
      .update({ data: rest })
      .eq("collection", collection)
      .eq("id", id)
      .select("*")
      .single();
    if (error) throw new Error(error.message);
    return fromRow<T>(data as Row);
  }
  return locked(async () => {
    const local = await readLocal();
    const next = { ...rest, id, createdAt: current.createdAt } as unknown as T;
    local[collection] = (local[collection] ?? []).map((d) => (d.id === id ? (next as unknown as Record<string, unknown>) : d));
    await writeLocal(local);
    return next;
  });
}

export async function remove(collection: Collection, id: string): Promise<void> {
  const s = supabase();
  if (s) {
    const { error } = await s.from("cv_records").delete().eq("collection", collection).eq("id", id);
    if (error) throw new Error(error.message);
    return;
  }
  await locked(async () => {
    const local = await readLocal();
    local[collection] = (local[collection] ?? []).filter((d) => d.id !== id);
    await writeLocal(local);
  });
}

/** Deletes every record in `collection` whose `field` equals `value` (e.g. a business's events). */
export async function removeWhere(collection: Collection, field: string, value: string): Promise<void> {
  const s = supabase();
  if (s) {
    const { error } = await s.from("cv_records").delete().eq("collection", collection).eq(`data->>${field}`, value);
    if (error) throw new Error(error.message);
    return;
  }
  await locked(async () => {
    const local = await readLocal();
    local[collection] = (local[collection] ?? []).filter((d) => String(d[field] ?? "") !== value);
    await writeLocal(local);
  });
}

// ---------- daily scan counters (table cv_daily_stats, see supabase/schema.sql) ----------

export type StatColumn = "rated1" | "rated2" | "rated3" | "rated4" | "rated5" | "copied";
export type StatTotals = Record<StatColumn, number>;
const STAT_COLUMNS: StatColumn[] = ["rated1", "rated2", "rated3", "rated4", "rated5", "copied"];
type LocalDaily = { businessId: string; day: string } & StatTotals;

/** Adds 1 to one counter for a business on a day ("YYYY-MM-DD"), atomically. */
export async function bumpStat(businessId: string, day: string, column: StatColumn): Promise<void> {
  const s = supabase();
  if (s) {
    const { error } = await s.rpc("cv_bump_stat", { p_business: businessId, p_day: day, p_col: column });
    if (error) throw new Error(error.message);
    return;
  }
  await locked(async () => {
    const local = await readLocal();
    const rows = (local.daily ?? []) as unknown as LocalDaily[];
    let row = rows.find((r) => r.businessId === businessId && r.day === day);
    if (!row) {
      row = { businessId, day, rated1: 0, rated2: 0, rated3: 0, rated4: 0, rated5: 0, copied: 0 };
      rows.push(row);
    }
    row[column] += 1;
    local.daily = rows as unknown as Record<string, unknown>[];
    await writeLocal(local);
  });
}

/** All-time totals per business. */
export async function statTotals(): Promise<Record<string, StatTotals>> {
  const out: Record<string, StatTotals> = {};
  const s = supabase();
  if (s) {
    const { data, error } = await s.from("cv_stats_totals").select("*");
    if (error) throw new Error(error.message);
    for (const r of data as ({ business_id: string } & StatTotals)[]) {
      out[r.business_id] = Object.fromEntries(STAT_COLUMNS.map((c) => [c, Number(r[c]) || 0])) as StatTotals;
    }
    return out;
  }
  for (const r of ((await readLocal()).daily ?? []) as unknown as LocalDaily[]) {
    const t = (out[r.businessId] ??= { rated1: 0, rated2: 0, rated3: 0, rated4: 0, rated5: 0, copied: 0 });
    for (const c of STAT_COLUMNS) t[c] += r[c];
  }
  return out;
}

export async function removeStats(businessId: string): Promise<void> {
  const s = supabase();
  if (s) {
    const { error } = await s.from("cv_daily_stats").delete().eq("business_id", businessId);
    if (error) throw new Error(error.message);
    return;
  }
  await locked(async () => {
    const local = await readLocal();
    local.daily = ((local.daily ?? []) as unknown as LocalDaily[]).filter((r) => r.businessId !== businessId) as unknown as Record<string, unknown>[];
    await writeLocal(local);
  });
}

/** Only some top-level fields of a collection's records (much lighter than list() for big records). */
export async function listFields<K extends string>(collection: Collection, fields: K[]): Promise<Record<K, string>[]> {
  const s = supabase();
  if (s) {
    const select = fields.map((f) => `${f}:data->>${f}`).join(",");
    const { data, error } = await s.from("cv_records").select(select).eq("collection", collection);
    if (error) throw new Error(error.message);
    return data as unknown as Record<K, string>[];
  }
  return (((await readLocal())[collection] ?? []) as Record<string, unknown>[]).map(
    (r) => Object.fromEntries(fields.map((f) => [f, String(r[f] ?? "")])) as Record<K, string>,
  );
}
