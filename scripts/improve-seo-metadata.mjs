import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const characterRoot = path.join(root, "characters");
const sitemapPath = path.join(root, "sitemap.xml");
const today = new Date().toISOString().slice(0, 10);

function escapeAttribute(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function decodeEntities(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&#39;", "'")
    .replaceAll("&quot;", '"')
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function text(value) {
  return decodeEntities(value.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim());
}

function field(html, label) {
  const match = html.match(new RegExp(`<div><span>${label}</span><strong>([\\s\\S]*?)</strong></div>`, "i"));
  return match ? text(match[1]) : "";
}

function tags(html) {
  const match = html.match(/<div class="tag-row"[^>]*>([\s\S]*?)<\/div>/i);
  return match ? [...match[1].matchAll(/<span>([^<]+)<\/span>/gi)].map((item) => text(item[1])) : [];
}

function genericDescription(html, name) {
  const heroTags = tags(html);
  const element = heroTags[0] || "Resonator";
  const role = heroTags[2] || "team option";
  const weapon = field(html, "Best weapon") || "weapon options";
  const sonata = field(html, "Sonata") || "recommended Echo sets";
  const echoCost = field(html, "Echo cost") || "the right Echo cost pattern";
  return `${name} Wuthering Waves build and teams: ${element} ${role}, ${sonata} Echoes, ${weapon}, ${echoCost} setup, stats, materials, and team advice.`;
}

const entries = fs.readdirSync(characterRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => ({ slug: entry.name, file: path.join(characterRoot, entry.name, "index.html") }))
  .filter(({ file }) => fs.existsSync(file));

const changedSlugs = [];
for (const { slug, file } of entries) {
  let html = fs.readFileSync(file, "utf8");
  const name = text(html.match(/<h1[^>]*>([^<]+?) build,/i)?.[1] || "");
  if (!name) continue;
  if (/data-rover-heading/i.test(html)) {
    const roverTitle = "Rover Forms Build &amp; Teams | Wuthering Waves | WaveKit";
    html = html.replace(/<title>[^<]*<\/title>/i, `<title>${roverTitle}</title>`);
    html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*>/i, `<meta property="og:title" content="${roverTitle}">`);
    html = html.replace(/<meta\s+name="twitter:title"\s+content="[^"]*"\s*>/i, `<meta name="twitter:title" content="${roverTitle}">`);
    html = html.replace(/("headline":")[^"]*(")/i, `$1Rover Forms Build & Teams | Wuthering Waves | WaveKit$2`);
    fs.writeFileSync(file, html);
    changedSlugs.push(slug);
    continue;
  }

  const descriptionMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  if (!descriptionMatch) continue;
  const currentDescription = descriptionMatch[1];
  const isTemplateDescription = currentDescription.includes("best weapons, Echoes, Sonata, stats, teams, play notes, and easy team-helper advice")
    || currentDescription.startsWith(`${name} Wuthering Waves build, team, and Echo guide:`);
  if (!isTemplateDescription) {
    html = html.replace(
      /<title>[^<]*<\/title>/i,
      `<title>${name} Build &amp; Teams | Wuthering Waves | WaveKit</title>`
    );
    html = html.replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*>/i,
      `<meta property="og:title" content="${name} Build &amp; Teams | Wuthering Waves | WaveKit">`
    );
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*>/i,
      `<meta name="twitter:title" content="${name} Build &amp; Teams | Wuthering Waves | WaveKit">`
    );
    html = html.replace(
      /("headline":")[^"]*(")/i,
      `$1${name} Build & Teams | Wuthering Waves | WaveKit$2`
    );
    fs.writeFileSync(file, html);
    changedSlugs.push(slug);
    continue;
  }

  const description = genericDescription(html, name);
  const escapedCurrent = escapeAttribute(currentDescription);
  const escapedDescription = escapeAttribute(description);
  html = html.replaceAll(escapedCurrent, escapedDescription);
  html = html.replace(
    /<title>[^<]*<\/title>/i,
    `<title>${name} Build &amp; Teams | Wuthering Waves | WaveKit</title>`
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*>/i,
    `<meta property="og:title" content="${name} Build &amp; Teams | Wuthering Waves | WaveKit">`
  );
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*>/i,
    `<meta name="twitter:title" content="${name} Build &amp; Teams | Wuthering Waves | WaveKit">`
  );
  html = html.replace(
    /("headline":")[^"]*(")/i,
    `$1${name} Build & Teams | Wuthering Waves | WaveKit$2`
  );
  fs.writeFileSync(file, html);
  changedSlugs.push(slug);
}

let sitemap = fs.readFileSync(sitemapPath, "utf8");
for (const slug of changedSlugs) {
  const block = new RegExp(`(<loc>https://wavekit\\.net/characters/${slug}/</loc>[\\s\\S]*?<lastmod>)[^<]+(</lastmod>)`, "i");
  sitemap = sitemap.replace(block, `$1${today}$2`);
}
fs.writeFileSync(sitemapPath, sitemap);

console.log(`Updated search metadata for ${entries.length} character pages; ${changedSlugs.length} pages received focused snippets and refreshed titles.`);
