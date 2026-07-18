import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const characterRoot = path.join(root, "characters");
const sitemapFile = path.join(root, "sitemap.xml");
const directories = (await fs.readdir(characterRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory());

let sitemap = await fs.readFile(sitemapFile, "utf8");
sitemap = sitemap.replace(
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">'
);

for (const directory of directories) {
  const html = await fs.readFile(path.join(characterRoot, directory.name, "index.html"), "utf8");
  const imageUrl = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/)?.[1];
  if (!imageUrl) throw new Error(`Missing social image for ${directory.name}`);
  const pageUrl = `https://wavekit.net/characters/${directory.name}/`;
  const blockPattern = new RegExp(`(<loc>${pageUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}<\\/loc>)([\\s\\S]*?)(<\\/url>)`);
  const match = sitemap.match(blockPattern);
  if (!match) throw new Error(`Missing sitemap entry for ${directory.name}`);
  const body = match[2].replace(/\s*<image:image>[\s\S]*?<\/image:image>/g, "");
  sitemap = sitemap.replace(blockPattern, `$1\n    <image:image>\n      <image:loc>${imageUrl}</image:loc>\n    </image:image>${body}$3`);
}

await fs.writeFile(sitemapFile, sitemap);
console.log(`Added ${directories.length} character images to the sitemap.`);
