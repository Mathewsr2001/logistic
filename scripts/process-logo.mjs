/**
 * Genera `public/logo/logistic-logoicon.png` desde `public/galeria/logistic-LOGOICON.jpeg`:
 * 1) Inundación desde el borde: vuelve transparente el fondo uniforme (negro/gris claro) conectado al exterior.
 * 2) Limpia halos JPEG muy claros (gris/blanco).
 *
 * Ajusta EDGE_BG_TOL o THRESHOLD si se recorta demasiado el logo.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const input = path.join(root, "public/galeria/logistic-LOGOICON.jpeg");
const outDir = path.join(root, "public/logo");
const output = path.join(outDir, "logistic-logoicon.png");

/** Tolerancia vs color medio de esquinas (fondo exterior). */
const EDGE_BG_TOL = 44;
const THRESHOLD = 236;
/** Si el color es casi gris (poca saturación) y muy claro → halo JPEG. */
const SAT_MAX = 0.22;

/**
 * @param {Buffer} buf
 * @param {number} width
 * @param {number} height
 */
function transparentEdgeBackground(buf, width, height) {
  const stride = 4;
  const count = width * height;
  const visited = new Uint8Array(count);
  /** @type {number[]} */
  const queue = [];

  const corners = [
    [0, 0],
    [width - 1, 0],
    [0, height - 1],
    [width - 1, height - 1],
  ];
  let sr = 0;
  let sg = 0;
  let sb = 0;
  for (const [x, y] of corners) {
    const i = (y * width + x) * stride;
    sr += buf[i];
    sg += buf[i + 1];
    sb += buf[i + 2];
  }
  const bgR = sr / 4;
  const bgG = sg / 4;
  const bgB = sb / 4;

  function matchIdx(idx) {
    const px = idx * stride;
    const r = buf[px];
    const g = buf[px + 1];
    const b = buf[px + 2];
    return (
      Math.abs(r - bgR) <= EDGE_BG_TOL &&
      Math.abs(g - bgG) <= EDGE_BG_TOL &&
      Math.abs(b - bgB) <= EDGE_BG_TOL
    );
  }

  function push(idx) {
    if (visited[idx] || !matchIdx(idx)) return;
    visited[idx] = 1;
    queue.push(idx);
  }

  for (let x = 0; x < width; x++) {
    push(x);
    push((height - 1) * width + x);
  }
  for (let y = 0; y < height; y++) {
    push(y * width);
    push(y * width + width - 1);
  }

  for (let qi = 0; qi < queue.length; qi++) {
    const idx = queue[qi];
    const x = idx % width;
    const y = (idx / width) | 0;
    if (x > 0) push(idx - 1);
    if (x < width - 1) push(idx + 1);
    if (y > 0) push(idx - width);
    if (y < height - 1) push(idx + width);
  }

  for (let idx = 0; idx < count; idx++) {
    if (visited[idx]) {
      const px = idx * stride;
      buf[px + 3] = 0;
    }
  }
}

async function main() {
  if (!fs.existsSync(input)) {
    console.error("Missing:", input);
    process.exit(1);
  }
  fs.mkdirSync(outDir, { recursive: true });

  const pipeline = sharp(input).ensureAlpha();
  const { data, info } = await pipeline.clone().raw().toBuffer({ resolveWithObject: true });

  if (info.channels !== 4) {
    console.error("Expected 4 channels after ensureAlpha, got", info.channels);
    process.exit(1);
  }

  const buf = Buffer.from(data);
  transparentEdgeBackground(buf, info.width, info.height);

  const len = buf.length;
  for (let i = 0; i < len; i += 4) {
    if (buf[i + 3] === 0) continue;
    const r = buf[i];
    const g = buf[i + 1];
    const b = buf[i + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const sat = max === 0 ? 0 : (max - min) / max;

    const light = r >= THRESHOLD && g >= THRESHOLD && b >= THRESHOLD;
    const boring = sat <= SAT_MAX;

    if (light && boring) {
      buf[i + 3] = 0;
    }
  }

  await sharp(buf, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png({ compressionLevel: 9, effort: 10 })
    .toFile(output);

  console.log("OK:", output, `${info.width}x${info.height}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
