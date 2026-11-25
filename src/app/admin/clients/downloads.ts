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

/** A printable A5-ratio table card: business name, stars, QR, "Scan to review us", CreateVerse logo. */
export async function downloadPoster(b: ReviewBusiness, link: string) {
  const W = 1240;
  const H = 1748;
  const font = poppins.style.fontFamily;
  await document.fonts.ready;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "#f5f8f6";
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.roundRect(70, 70, W - 140, H - 140, 48);
  ctx.fill();
  ctx.stroke();
  const band = ctx.createLinearGradient(70, 0, W - 70, 0);
  band.addColorStop(0, "#0284C7");
  band.addColorStop(1, "#EA580C");
  ctx.fillStyle = band;
  ctx.fillRect(160, 70, W - 320, 10);

  ctx.textAlign = "center";
  ctx.fillStyle = "#0284C7";
  ctx.font = `700 34px ${font}`;
  ctx.fillText("LOVED YOUR VISIT?", W / 2, 230);
  ctx.fillStyle = "#0f172a";
  ctx.font = `600 72px ${font}`;
  const lines = wrap(ctx, b.name, W - 280);
  lines.forEach((l, i) => ctx.fillText(l, W / 2, 330 + i * 84));

  const starsY = 330 + lines.length * 84 + 20;
  ctx.fillStyle = "#fbbf24";
  ctx.font = `72px ${font}`;
  ctx.fillText("★★★★★", W / 2, starsY);

  const qrSize = 700;
  const qrY = starsY + 60;
  const qr = new window.Image();
  qr.src = await QRCode.toDataURL(link, { width: qrSize, margin: 1, color: { dark: "#0f172a", light: "#ffffff" } });
  await qr.decode();
  ctx.strokeStyle = "#e2e8f0";
  ctx.beginPath();
  ctx.roundRect((W - qrSize - 60) / 2, qrY, qrSize + 60, qrSize + 60, 32);
  ctx.stroke();
  ctx.drawImage(qr, (W - qrSize) / 2, qrY + 30, qrSize, qrSize);

  ctx.fillStyle = "#0f172a";
  ctx.font = `600 54px ${font}`;
  ctx.fillText("Scan to review us on Google", W / 2, qrY + qrSize + 160);
  ctx.fillStyle = "#64748b";
  ctx.font = `400 34px ${font}`;
  ctx.fillText("Takes less than a minute", W / 2, qrY + qrSize + 215);

  const logo = new window.Image();
  logo.src = "/logo.png";
  await logo.decode();
  ctx.font = `500 24px ${font}`;
  ctx.fillStyle = "#94a3b8";
  ctx.fillText("Powered by", W / 2, H - 205);
  ctx.drawImage(logo, (W - 240) / 2, H - 190, 240, 99);

  save(canvas.toDataURL("image/png"), `${b.slug}-review-poster.png`);
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
