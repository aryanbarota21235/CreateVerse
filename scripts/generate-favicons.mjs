import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const projectRoot = 'e:/CreateVerse';
const logoPath = path.join(projectRoot, 'public/logo.png');
const logoBuf = fs.readFileSync(logoPath);

function createIco(pngBuffers) {
  // pngBuffers: array of { width, height, buffer }
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
  const targetWidth = 464; // Maximize logo legibility in browser tab
  
  const logoResized = await sharp(logoBuf)
    .resize({ width: targetWidth, fit: 'inside' })
    .toBuffer();

  const logoMeta = await sharp(logoResized).metadata();
  console.log('Resized logo:', logoMeta.width, 'x', logoMeta.height);

  // Clean, modern rounded white square badge with subtle border
  const badgeSvg = `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="${size - 20}" height="${size - 20}" rx="100" fill="#ffffff" stroke="#E2E8F0" stroke-width="12"/>
    </svg>
  `;

  // 512x512 Master Badge PNG
  const master512 = await sharp(Buffer.from(badgeSvg))
    .composite([{
      input: logoResized,
      gravity: 'center'
    }])
    .png()
    .toBuffer();

  // Generate all standard sizes
  const sizes = [16, 32, 48, 96, 144, 180, 192, 512];
  const rendered = {};

  for (const s of sizes) {
    rendered[s] = await sharp(master512)
      .resize(s, s)
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
  // We embed the logo as base64 PNG inside the SVG for instant vector rendering
  const base64Logo = logoResized.toString('base64');
  const faviconSvgContent = `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="492" height="492" rx="100" fill="#ffffff" stroke="#E2E8F0" stroke-width="12"/>
  <image href="data:image/png;base64,${base64Logo}" x="${(512 - logoMeta.width) / 2}" y="${(512 - logoMeta.height) / 2}" width="${logoMeta.width}" height="${logoMeta.height}"/>
</svg>`;

  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconSvgContent);
  fs.writeFileSync(path.join(appDir, 'icon.svg'), faviconSvgContent);

  console.log('All favicon, icon, and Google Search assets generated successfully!');
}

generate();

