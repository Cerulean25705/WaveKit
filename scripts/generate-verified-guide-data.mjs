import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const characterRoot = path.join(root, "characters");

const decodeHtml = (value = "") => value
  .replaceAll("&amp;", "&")
  .replaceAll("&#39;", "'")
  .replaceAll("&quot;", '"')
  .replaceAll("&gt;", ">")
  .replaceAll("&lt;", "<");

const stripHtml = (value = "") => decodeHtml(value.replace(/<[^>]+>/g, " "))
  .replace(/\s+/g, " ")
  .trim();

const field = (html, label) => {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return stripHtml(html.match(new RegExp(`<dt>${escaped}<\\/dt><dd>(.*?)<\\/dd>`))?.[1] || "");
};

const guides = {};
const directories = (await fs.readdir(characterRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

for (const slug of directories) {
  const html = await fs.readFile(path.join(characterRoot, slug, "index.html"), "utf8");
  const embedded = html.match(/<script type="application\/json" id="wavekit-character-guide-data">([^<]+)<\/script>/)?.[1];
  if (!embedded) throw new Error(`Missing embedded guide data for ${slug}`);
  const guide = JSON.parse(embedded);
  const substats = [...html.matchAll(/<li><strong>Priority \d+:<\/strong>\s*([^<]+)<\/li>/g)]
    .slice(0, 4)
    .map((match) => stripHtml(match[1]));
  const skills = [...html.matchAll(/<div class="seo-talent-step">[\s\S]*?<span>\d+<\/span>[\s\S]*?<strong>(.*?)<\/strong>[\s\S]*?<\/div>/g)]
    .map((match) => stripHtml(match[1]));

  guides[slug] = {
    name: guide.name,
    role: field(html, "Role"),
    teamType: field(html, "Team type"),
    weaponOptions: guide.weaponOptions || [],
    sonata: field(html, "Sonata"),
    echoCost: field(html, "Echo cost"),
    mainEcho: field(html, "Main Echo"),
    mainStats: field(html, "Main stats"),
    substats,
    skills
  };
}

const output = `// Generated from the verified public character guides. Do not edit by hand.\nwindow.WAVEKIT_VERIFIED_GUIDES = ${JSON.stringify(guides, null, 2)};\n`;
await fs.writeFile(path.join(root, "assets", "verified-guide-data.js"), output);
console.log(`Generated verified helper data for ${Object.keys(guides).length} character guides.`);
