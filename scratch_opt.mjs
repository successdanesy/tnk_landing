import sharp from "sharp";
import { statSync } from "fs";

const jobs = [
  { in: "public/photos/hero.png", out: "public/photos/hero.webp", q: 80, w: 1800 },
  { in: "public/photos/hero-mobile.png", out: "public/photos/hero-mobile.webp", q: 80, w: 900 },
];

for (const j of jobs) {
  await sharp(j.in).resize({ width: j.w, withoutEnlargement: true }).webp({ quality: j.q }).toFile(j.out);
  const a = statSync(j.in).size, b = statSync(j.out).size;
  console.log(`${j.out}  ${(a/1024|0)}KB -> ${(b/1024|0)}KB`);
}

// optimise the 6 avatars in place (webp copies alongside the jpg, keep jpg as fallback? just recompress jpg smaller)
import { readdirSync } from "fs";
for (const f of readdirSync("public/photos/avatars")) {
  if (!f.endsWith(".jpg")) continue;
  const p = `public/photos/avatars/${f}`;
  const buf = await sharp(p).resize({ width: 160, withoutEnlargement: true }).jpeg({ quality: 72, mozjpeg: true }).toBuffer();
  const before = statSync(p).size;
  const { writeFileSync } = await import("fs");
  writeFileSync(p, buf);
  console.log(`${p}  ${(before/1024|0)}KB -> ${(buf.length/1024|0)}KB`);
}
