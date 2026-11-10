/*
 * Validates publishable portfolio images. Run with: node scripts/audit-images.mjs
 *
 * The site accepts only .webp files below assets/images/. It rejects WebP files
 * containing EXIF, XMP, or ICCP chunks, which avoids publishing common embedded
 * camera and author metadata. It does not inspect visible information in pixels.
 */
import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";

const imagesRoot = join(process.cwd(), "assets", "images");
const allowedWebPChunks = new Set(["VP8 ", "VP8L", "VP8X", "ALPH", "ANIM", "ANMF"]);
const metadataChunks = new Set(["EXIF", "XMP ", "ICCP"]);

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(fullPath));
    else files.push(fullPath);
  }
  return files;
}

function getWebPChunks(bytes) {
  if (bytes.length < 12 || bytes.toString("ascii", 0, 4) !== "RIFF" || bytes.toString("ascii", 8, 12) !== "WEBP") {
    return null;
  }
  const chunks = [];
  let offset = 12;
  while (offset + 8 <= bytes.length) {
    const type = bytes.toString("ascii", offset, offset + 4);
    const size = bytes.readUInt32LE(offset + 4);
    chunks.push(type);
    offset += 8 + size + (size % 2);
  }
  return offset === bytes.length ? chunks : null;
}

const imageFiles = (await walk(imagesRoot)).filter((file) => !file.endsWith(".gitkeep"));
const problems = [];

for (const file of imageFiles) {
  const label = relative(process.cwd(), file).replaceAll("\\", "/");
  if (!file.toLowerCase().endsWith(".webp")) {
    problems.push(`${label}: publish portfolio images as .webp files only.`);
    continue;
  }
  const chunks = getWebPChunks(await readFile(file));
  if (!chunks) {
    problems.push(`${label}: is not a valid RIFF/WebP file.`);
    continue;
  }
  const foundMetadata = chunks.filter((chunk) => metadataChunks.has(chunk));
  if (foundMetadata.length) {
    problems.push(`${label}: contains metadata chunk(s): ${foundMetadata.join(", ")}. Re-export with metadata stripped.`);
  }
  const unknown = chunks.filter((chunk) => !allowedWebPChunks.has(chunk) && !metadataChunks.has(chunk));
  if (unknown.length) {
    problems.push(`${label}: has unsupported WebP chunk(s): ${unknown.join(", ")}. Review before publishing.`);
  }
}

if (problems.length) {
  console.error("Image policy check failed:\n\n" + problems.map((problem) => `- ${problem}`).join("\n"));
  process.exit(1);
}

console.log(`Image policy check passed: ${imageFiles.length} publishable WebP image(s), with no EXIF, XMP, or ICCP chunks.`);
