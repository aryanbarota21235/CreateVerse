import QRCode from "qrcode";
import { poppins } from "@/lib/reviews/look";
import type { ReviewBusiness } from "@/lib/reviews/types";

function save(dataUrl: string, filename: string) {
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = filename;
  a.click();
}

export async function downloadQr(b: ReviewBusiness, link: string) {
  save(await QRCode.toDataURL(link, { width: 1200, margin: 2 }), `${b.slug}-qr.png`);
}

/**
 * A printable A5 table card in the same look as the customer review page: soft blue
 * background, the business name on top, one white card holding the stars and the QR code,
 * and a quiet "Powered by CreateVerse" at the foot.
 */
export async function downloadPoster(b: ReviewBusiness, link: string) {
  // Laid out on a 1240 x 1748 grid (A5 portrait, 1 : 1.41, the standard counter-stand size)
  // and drawn at 300 DPI (1748 x 2480 px) so it prints sharp.
  const W = 1240;
  const SCALE = 1748 / 1240;
  const H = 2480 / SCALE; // exactly 2480 px tall once scaled
  const font = poppins.style.fontFamily;
  const name = b.name.replace(/\s+/g, " ").trim();
  await document.fonts.ready;
  const canvas = document.createElement("canvas");
  canvas.width = 1748;
  canvas.height = 2480;
  const ctx = canvas.getContext("2d")!;
  ctx.scale(SCALE, SCALE);
  ctx.imageSmoothingEnabled = false;
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";

  // Background: the review page's gradient
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, "#DCEBF8");
  bg.addColorStop(0.45, "#EEF4FA");
  bg.addColorStop(1, "#F4F7FA");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // Business name and type
  ctx.fillStyle = "#0f172a";
  ctx.font = `600 84px ${font}`;
  const lines = wrap(ctx, name, W - 240);
  let y = 230;
  lines.forEach((l, i) => ctx.fillText(l, W / 2, y + i * 96));
  y += (lines.length - 1) * 96;
  ctx.fillStyle = "#64748b";
  ctx.font = `400 38px ${font}`;
  ctx.fillText((b.tagline || b.category).replace(/\s+/g, " ").trim(), W / 2, y + 66);

  // The card carries the depth: a wide soft shadow plus a closer, tighter one (like a card
  // lifted off the page), and a faint light edge on top.
  const cardX = 110;
  const cardW = W - 220;
  const cardY = y + 140;
  // Fits above the footer even when a long name takes two lines
  const cardH = Math.min(1110, H - 250 - cardY);
  const cardPath = () => {
    ctx.beginPath();
    ctx.roundRect(cardX, cardY, cardW, cardH, 72);
  };
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.shadowColor = "rgba(15, 42, 80, 0.18)";
  ctx.shadowBlur = 140;
  ctx.shadowOffsetY = 70;
  cardPath();
  ctx.fill();
  ctx.shadowColor = "rgba(15, 42, 80, 0.10)";
  ctx.shadowBlur = 24;
  ctx.shadowOffsetY = 10;
  cardPath();
  ctx.fill();
  ctx.restore();
  ctx.save();
  ctx.strokeStyle = "rgba(15, 42, 80, 0.06)";
  ctx.lineWidth = 2;
  cardPath();
  ctx.stroke();
  ctx.restore();

  // Inside the card: question, gold stars, QR, call to action
  ctx.fillStyle = "#0f172a";
  ctx.font = `600 56px ${font}`;
  ctx.fillText("Loved your visit?", W / 2, cardY + 130);
  const starSize = 76;
  const gap = 22;
  const starsW = 5 * starSize + 4 * gap;
  for (let i = 0; i < 5; i++) drawStar(ctx, (W - starsW) / 2 + starSize / 2 + i * (starSize + gap), cardY + 225, starSize / 2, "#FBBC04");

  // The QR is flat on the card, white on white, so it blends in.
  const qrSize = 600;
  const qr = new window.Image();
  qr.src = await QRCode.toDataURL(link, { width: Math.round(qrSize * SCALE), margin: 0, color: { dark: "#0f172a", light: "#ffffff" } });
  await qr.decode();
  ctx.drawImage(qr, (W - qrSize) / 2, cardY + 300, qrSize, qrSize);
  ctx.imageSmoothingEnabled = true;

  ctx.fillStyle = "#0f172a";
  ctx.font = `600 54px ${font}`;
  ctx.fillText("Scan to review us on Google", W / 2, cardY + 1010);
  ctx.fillStyle = "#64748b";
  ctx.font = `400 36px ${font}`;
  ctx.fillText("Takes less than a minute", W / 2, cardY + 1064);

  // Footer
  const logo = new window.Image();
  logo.src = "/logo.png";
  await logo.decode();
  ctx.fillStyle = "#94a3b8";
  ctx.font = `400 28px ${font}`;
  ctx.fillText("Powered by", W / 2, H - 170);
  ctx.drawImage(logo, (W - 220) / 2, H - 150, 220, 91);

  save(canvas.toDataURL("image/png"), `${b.slug}-review-poster.png`);
}

/** A rounded five-point star, centred on (cx, cy). */
function drawStar(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number, color: string) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.lineJoin = "round";
  ctx.lineWidth = r * 0.18;
  ctx.beginPath();
  for (let i = 0; i < 10; i++) {
    const radius = i % 2 === 0 ? r : r * 0.48;
    const angle = -Math.PI / 2 + (i * Math.PI) / 5;
    const px = cx + radius * Math.cos(angle);
    const py = cy + radius * Math.sin(angle);
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

function wrap(ctx: CanvasRenderingContext2D, text: string, maxW: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (ctx.measureText(test).width > maxW && line) {
      lines.push(line);
      line = w;
    } else line = test;
  }
  lines.push(line);
  return lines.slice(0, 2);
}
