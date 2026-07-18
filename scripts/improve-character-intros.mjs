import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const characterRoot = path.join(root, "characters");
const modifiedDate = "2026-07-18";
const directories = (await fs.readdir(characterRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory());

const field = (html, label) => html.match(new RegExp(`<dt>${label}</dt><dd>(.*?)</dd>`))?.[1]?.trim() || "";

let updated = 0;
for (const directory of directories) {
  const file = path.join(characterRoot, directory.name, "index.html");
  let html = await fs.readFile(file, "utf8");
  const name = html.match(/<h1>(.*?) build,/i)?.[1]?.trim();
  const element = html.match(/<span>(Aero|Electro|Fusion|Glacio|Havoc|Spectro)</)?.[1];
  const role = field(html, "Role");
  const weapon = field(html, "Best weapon");
  const sonata = field(html, "Sonata");
  if (!name || (!element && directory.name !== "rover") || !role || !weapon || !sonata) {
    throw new Error(`Missing guide fields for ${directory.name}`);
  }

  const article = /^[AEIOU]/i.test(element || "") ? "an" : "a";
  const roleDisplay = role.replace(/\b(healer|support|sustain|skill|damage)\b/g, (word) => `${word[0].toUpperCase()}${word.slice(1)}`);
  const introduction = directory.name === "rover"
    ? `<p>Rover is a multi-form ${roleDisplay} in Wuthering Waves. The recommended build changes with the active element, so this guide compares weapon, Echo, stat, teammate, and rotation choices for Spectro, Havoc, Aero, and Electro Rover.</p>`
    : `<p>${name} is ${article} ${element} ${roleDisplay} in Wuthering Waves. Its recommended build starts with ${weapon}, while its Echo plan uses ${sonata}. The guide also covers stat priorities, compatible teammates, and a practical rotation.</p>`;
  const pattern = new RegExp(`<p>${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")} is [\\s\\S]*?This WaveKit guide focuses on the practical build choices most players need first:[\\s\\S]*?<\\/p>`);
  const currentPattern = new RegExp(`<p>${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")} is [\\s\\S]*?(?:Its recommended build starts|The recommended build changes)[\\s\\S]*?<\\/p>`);
  if (pattern.test(html)) html = html.replace(pattern, introduction);
  else if (currentPattern.test(html)) html = html.replace(currentPattern, introduction);
  else if (!html.includes(introduction)) throw new Error(`Missing introduction for ${directory.name}`);
  html = html.replace(/"dateModified":"\d{4}-\d{2}-\d{2}"/, `"dateModified":"${modifiedDate}"`);
  await fs.writeFile(file, html);
  updated += 1;
}

const sitemapFile = path.join(root, "sitemap.xml");
let sitemap = await fs.readFile(sitemapFile, "utf8");
sitemap = sitemap.replace(/(<loc>https:\/\/wavekit\.net\/characters(?:\/[^<]+)?<\/loc>\s*<lastmod>)\d{4}-\d{2}-\d{2}(<\/lastmod>)/g, `$1${modifiedDate}$2`);
await fs.writeFile(sitemapFile, sitemap);

console.log(`Improved ${updated} character introductions and refreshed their modified dates.`);
