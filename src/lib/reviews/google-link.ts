/*
 * Turns any Google link for a business into its "write a review" link, with no owner access
 * and no API key.
 *
 * Every public Google Maps link for a place carries its feature ID ("0x390e71b6981506ad:
 * 0x63339ee0bff3d658"). A Place ID ("ChIJ...") is that same pair of numbers, packed:
 *   base64url( 0x0a 0x12 | 0x09 <first, 8 bytes little-endian> | 0x11 <second, 8 bytes LE> )
 * so the review link can be built from any Maps link. Short share links (maps.app.goo.gl/...)
 * are followed to the full link first.
 */

export interface ResolvedLink {
  placeId: string;
  reviewUrl: string;
}

export function placeIdFromFeatureId(a: string, b: string): string {
  const bytes = new Uint8Array(20);
  bytes.set([0x0a, 0x12, 0x09], 0);
  new DataView(bytes.buffer).setBigUint64(3, BigInt(a), true);
  bytes[11] = 0x11;
  new DataView(bytes.buffer).setBigUint64(12, BigInt(b), true);
  return Buffer.from(bytes).toString("base64url");
}

/** Finds a place in one URL or piece of text, or returns null. */
function fromText(text: string): ResolvedLink | null {
  let t = text;
  try {
    t = decodeURIComponent(text);
  } catch {
    /* keep raw */
  }
  // A g.page review link from the owner's "Ask for reviews": use as it is.
  const gpage = t.match(/https:\/\/g\.page\/r\/[A-Za-z0-9_-]+(\/review)?/);
  if (gpage) return { placeId: "", reviewUrl: gpage[0].endsWith("/review") ? gpage[0] : `${gpage[0]}/review` };
  // Place ID written out (writereview?placeid=, place_id:, or pasted on its own).
  const pid = t.match(/(?:placeid=|place_id[:=])?(ChIJ[A-Za-z0-9_-]{20,})/);
  if (pid) return { placeId: pid[1], reviewUrl: "" };
  // Feature ID inside a Maps link: ...!1s0x390e71b6981506ad:0x63339ee0bff3d658...
  const fid = t.match(/(0x[0-9a-f]{1,16}):(0x[0-9a-f]{1,16})/i);
  if (fid) return { placeId: placeIdFromFeatureId(fid[1], fid[2]), reviewUrl: "" };
  return null;
}

const SHORT = /^https?:\/\/(maps\.app\.goo\.gl|goo\.gl\/maps|g\.co\/kgs|maps\.google\.[a-z.]+\/\?|share\.google)\b/i;

/** Follows a short share link's redirects (at most 6), checking every hop for the place. */
async function followShortLink(url: string): Promise<ResolvedLink | null> {
  let next = url;
  for (let hop = 0; hop < 6; hop++) {
    const res = await fetch(next, {
      redirect: "manual",
      headers: { "User-Agent": "Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Mobile Safari/537.36" },
      signal: AbortSignal.timeout(8000),
    });
    const location = res.headers.get("location");
    if (location) {
      const found = fromText(location);
      if (found) return found;
      next = new URL(location, next).toString();
      continue;
    }
    // No more redirects: look in the page itself (some links land on an HTML hop).
    const found = fromText(next) ?? fromText((await res.text()).slice(0, 200_000));
    return found;
  }
  return null;
}

export async function resolveGoogleLink(input: string): Promise<ResolvedLink | null> {
  const text = input.trim();
  if (!text) return null;
  const direct = fromText(text);
  if (direct) return direct;
  const url = text.match(/https?:\/\/\S+/)?.[0];
  if (url && SHORT.test(url)) {
    try {
      return await followShortLink(url);
    } catch {
      return null;
    }
  }
  return null;
}
