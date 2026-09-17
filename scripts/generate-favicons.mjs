import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const projectRoot = 'e:/CreateVerse';
const logoPath = path.join(projectRoot, 'public/logo.png');
const logoBuf = fs.readFileSync(logoPath);

function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6;
  const entrySize = 16;
  let offset = headerSize + entrySize * count;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(count, 4);

  const entries = [];
  const imageBuffers = [];

  for (const item of pngBuffers) {
    const { width, height, buffer } = item;
    const entry = Buffer.alloc(entrySize);
    entry.writeUInt8(width >= 256 ? 0 : width, 0);
    entry.writeUInt8(height >= 256 ? 0 : height, 1);
    entry.writeUInt8(0, 2); // color palette count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(buffer.length, 8); // image size
    entry.writeUInt32LE(offset, 12); // image offset

    entries.push(entry);
    imageBuffers.push(buffer);
    offset += buffer.length;
  }

  return Buffer.concat([header, ...entries, ...imageBuffers]);
}

async function generate() {
  const size = 512;
  const trimmed = await sharp(logoBuf).trim().toBuffer();

  // Extract CREATE (letters 0 to 160) and VERSE (letters 164 to 297)
  const createBuf = await sharp(trimmed)
    .extract({ left: 0, top: 0, width: 160, height: 44 })
    .trim()
    .toBuffer();

  const verseBuf = await sharp(trimmed)
    .extract({ left: 164, top: 0, width: 133, height: 44 })
    .trim()
    .toBuffer();

  // Scale CREATE & VERSE to maximize visibility in square favicons & Google Search SERP
  const targetWidth = 430;
  const scaleC = await sharp(createBuf).resize({ width: targetWidth, kernel: 'lanczos3' }).toBuffer();
  const scaleV = await sharp(verseBuf).resize({ width: targetWidth, kernel: 'lanczos3' }).toBuffer();

  const scMeta = await sharp(scaleC).metadata();
  const svMeta = await sharp(scaleV).metadata();

  const gap = 16;
  const totalContentHeight = scMeta.height + svMeta.height + gap;
  const startY = Math.round((size - totalContentHeight) / 2);

  // Clean, modern rounded white square badge with subtle border
  const badgeSvg = `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="12" width="${size - 24}" height="${size - 24}" rx="108" fill="#ffffff" stroke="#E2E8F0" stroke-width="12"/>
    </svg>
  `;

  // 512x512 Master Badge PNG
  const master512 = await sharp(Buffer.from(badgeSvg))
    .composite([
      { input: scaleC, left: Math.round((size - scMeta.width) / 2), top: startY },
      { input: scaleV, left: Math.round((size - svMeta.width) / 2), top: startY + scMeta.height + gap },
    ])
    .png()
    .toBuffer();

  // Generate all standard sizes
  const sizes = [16, 32, 48, 96, 144, 180, 192, 512];
  const rendered = {};

  for (const s of sizes) {
    rendered[s] = await sharp(master512)
      .resize(s, s, { kernel: 'lanczos3' })
      .png()
      .toBuffer();
  }

  // Create multi-size ICO (16, 32, 48) for legacy browsers & Google search
  const icoBuf = createIco([
    { width: 16, height: 16, buffer: rendered[16] },
    { width: 32, height: 32, buffer: rendered[32] },
    { width: 48, height: 48, buffer: rendered[48] },
  ]);

  // Destination directories
  const publicDir = path.join(projectRoot, 'public');
  const appDir = path.join(projectRoot, 'src/app');

  // Write to public/
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuf);
  fs.writeFileSync(path.join(publicDir, 'icon-48.png'), rendered[48]);
  fs.writeFileSync(path.join(publicDir, 'icon-96.png'), rendered[96]);
  fs.writeFileSync(path.join(publicDir, 'icon-192.png'), rendered[192]);
  fs.writeFileSync(path.join(publicDir, 'icon-512.png'), rendered[512]);
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), rendered[180]);
  fs.writeFileSync(path.join(publicDir, 'icon.png'), rendered[512]);

  // Write to src/app/ for Next.js App Router native detection
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuf);
  fs.writeFileSync(path.join(appDir, 'icon.png'), rendered[192]);
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), rendered[180]);

  // Vector SVG Favicon for modern browsers
  const base64Master = master512.toString('base64');
  const faviconSvgContent = `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <image href="data:image/png;base64,${base64Master}" x="0" y="0" width="512" height="512"/>
</svg>`;

  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconSvgContent);
  fs.writeFileSync(path.join(appDir, 'icon.svg'), faviconSvgContent);

  console.log('All favicon, icon, and Google Search assets generated successfully!');
}

generate();
