import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const echoAliases = {
  "Reminiscence: Nightmare Adam Smasher": "Reminiscence - Nightmare: Adam Smasher",
  "Twin Nova - Nebulous Cannon": "Twin Nova: Nebulous Cannon"
};

const echoFiles = {
  "Bell-Borne Geochelone": "bell-borne-geochelone.webp",
  Capitaneus: "capitaneus.webp",
  Corrosaurus: "corrosaurus.webp",
  Dreamless: "dreamless.webp",
  "Dragon of Dirge": "dragon-of-dirge.webp",
  "Fallacy of No Return": "fallacy-of-no-return.webp",
  Hecate: "hecate.webp",
  Hyvatia: "hyvatia.webp",
  "Impermanence Heron": "impermanence-heron.webp",
  "Jué": "ju.webp",
  "Lady of the Sea": "lady-of-the-sea.webp",
  "Lioness of Glory": "lioness-of-glory.webp",
  Lorelei: "lorelei.webp",
  "Nameless Explorer": "nameless-explorer.webp",
  "Nightmare: Crownless": "nightmare-crownless.webp",
  "Nightmare: Feilian Beringal": "nightmare-feilian-beringal.webp",
  "Nightmare: Hecate": "nightmare-hecate.webp",
  "Nightmare: Impermanence Heron": "nightmare-impermanence-heron.webp",
  "Nightmare: Inferno Rider": "nightmare-inferno-rider.webp",
  "Nightmare: Lampylumen Myriad": "nightmare-lampylumen-myriad.webp",
  "Nightmare: Tempest Mephis": "nightmare-tempest-mephis.webp",
  "Nightmare: Thundering Mephis": "nightmare-thundering-mephis.webp",
  "Reactor Husk": "reactor-husk.webp",
  "Reminiscence - Nightmare: Adam Smasher": "reminiscence-nightmare-adam-smasher.webp",
  "Reminiscence: Denia": "reminiscence-denia.webp",
  "Reminiscence: Fenrico": "reminiscence-fenrico.webp",
  "Reminiscence: Fleurdelys": "reminiscence-fleurdelys.webp",
  "Reminiscence: Threnodian - Leviathan": "reminiscence-threnodian-leviathan.webp",
  "Reminiscence: Threnodian - Voidborne Construct": "reminiscence-threnodian-voidborne-construct.webp",
  "Sentry Construct": "sentry-construct.webp",
  Sigillum: "sigillum.webp",
  "The False Sovereign": "the-false-sovereign.webp",
  "Thousand-Puppet Pavilion": "thousand-puppet-pavilion.webp",
  "Twin Nova: Nebulous Cannon": "twin-nova-nebulous-cannon.webp"
};

const decodeHtml = (value) => value
  .replaceAll("&amp;", "&")
  .replaceAll("&#39;", "'")
  .replaceAll("&quot;", '"');

const escapeHtml = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#39;");

const slugify = (value) => value.toLowerCase()
  .normalize("NFKD")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

const splitPriorities = (value) => decodeHtml(value)
  .split(/\s+(?:or|&)\s+/i)
  .map((item) => item.trim())
  .filter(Boolean);

const statLane = (cost, value, note) => {
  if (!value) return "";
  const choices = splitPriorities(value);
  return `<div class="seo-stat-lane"><header><span>${cost}</span><div><strong>${cost}-cost main stat</strong><small>${escapeHtml(note)}</small></div></header><ol>${choices.map((choice, index) => `<li><b>${index + 1}</b><span>${escapeHtml(choice)}</span></li>`).join("")}</ol></div>`;
};

const echoModulePattern = /<div class="seo-module(?: seo-echo-module)?">\s*<h2>Echo setup<\/h2>[\s\S]*?<div class="seo-cost-grid">([\s\S]*?)<\/div>[\s\S]*?<\/div>\s*(?=<div class="seo-module">\s*<h2>Substat priority)/;
const mainStatsPattern = /<dt>Main stats<\/dt><dd>(.*?)<\/dd>/;
const mainEchoPattern = /<dt>Main Echo<\/dt><dd>(.*?)<\/dd>/;
const sonataPattern = /<dt>Sonata<\/dt><dd>(.*?)<\/dd>/;

const characterRoot = path.join(root, "characters");
const slugs = (await fs.readdir(characterRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

for (const slug of slugs) {
  const file = path.join(characterRoot, slug, "index.html");
  let html = await fs.readFile(file, "utf8");
  const existingModule = html.match(echoModulePattern);
  const mainStats = decodeHtml(html.match(mainStatsPattern)?.[1] || "");
  const rawMainEcho = decodeHtml(html.match(mainEchoPattern)?.[1] || "");
  const sonata = decodeHtml(html.match(sonataPattern)?.[1] || "");
  const sonataImage = html.match(/<h2>Echo setup<\/h2>[\s\S]*?<div class="seo-sonata-focus">\s*<img src="([^"]+)"/)?.[1]
    || html.match(/<h2>Echo setup<\/h2>\s*<div class="seo-echo-focus">\s*<img src="([^"]+)"/)?.[1]
    || `../../assets/sonatas/${slugify(sonata.split(",")[0])}.png`;
  if (!existingModule || !mainStats || !rawMainEcho || !sonata) {
    throw new Error(`Could not read Echo data for ${slug}`);
  }

  const costs = [...existingModule[1].matchAll(/<small>([431])<\/small>/g)].map((match) => match[1]);
  const parts = mainStats.split("/").map((part) => part.trim());
  const hasThreeCost = costs.includes("3");
  const [fourCost, threeCost, oneCost] = hasThreeCost
    ? [parts[0], parts[1], parts[2]]
    : [parts[0], "", parts[1]];

  const rawChoices = rawMainEcho.split(/\s+or\s+/i).map((choice) => choice.trim());
  const echoChoices = rawChoices
    .map((choice) => echoAliases[choice] || choice)
    .filter((choice) => echoFiles[choice]);
  if (!echoChoices.length) throw new Error(`No local Echo artwork mapped for ${slug}: ${rawMainEcho}`);

  const echoCards = echoChoices.map((name, index) => `<div class="seo-main-echo${index ? " is-alternate" : ""}"><img src="../../assets/echoes/${echoFiles[name]}" alt="${escapeHtml(name)} Echo icon" loading="lazy" decoding="async"><span><small>${index ? "Alternate main Echo" : "Recommended main Echo"}</small><strong>${escapeHtml(name)}</strong><em>${index ? "Use when it better fits the active Rover form." : "Place this in the active Echo slot."}</em></span></div>`).join("");
  const releaseNote = slug === "suisui" ? `<p class="seo-echo-caution"><strong>Pre-release:</strong> this is a provisional support direction. Avoid heavy farming until release testing confirms the final setup.</p>` : "";
  const module = `<div class="seo-module seo-echo-module">
              <h2>Echo setup</h2>
              <div class="seo-echo-showcase">${echoCards}<div class="seo-sonata-focus"><img src="${sonataImage}" alt="" loading="lazy" decoding="async"><span><small>Recommended Sonata</small><strong>${escapeHtml(sonata)}</strong><em>Complete the listed set bonus before chasing perfect substats.</em></span></div></div>
              <div class="seo-cost-grid">${existingModule[1]}</div>
              <div class="seo-stat-lanes">${statLane("4", fourCost, costs.filter((cost) => cost === "4").length > 1 ? "Use both listed priorities across the two 4-cost slots." : "Choose the option that balances your current build.")}${statLane("3", threeCost, "The first option is the normal damage target; use the fallback when the rotation needs it.")}${statLane("1", oneCost, "Use this scaling stat on the common Echo slots.")}</div>
              <p class="seo-echo-help"><strong>What about the other four Echoes?</strong> Their exact creature names do not matter. Choose Echoes from the recommended Sonata that complete this cost pattern and use the listed main stats.</p>
              ${releaseNote}
            </div>`;
  html = html.replace(echoModulePattern, module);

  const teammatesStart = html.indexOf('<h2>Useful teammates</h2>');
  if (teammatesStart === -1) throw new Error(`Missing teammate section for ${slug}`);
  const teammatesEnd = html.indexOf('<div class="seo-card">', teammatesStart + 30);
  const end = teammatesEnd === -1 ? html.indexOf("</section>", teammatesStart) : teammatesEnd;
  const section = html.slice(teammatesStart, end);
  const upgraded = section.replace(/<div class="tag-row">([\s\S]*?)<\/div>/g, (_, contents) => {
    const names = [...contents.matchAll(/<span>(.*?)<\/span>/g)].map((match) => decodeHtml(match[1]));
    return `<div class="seo-teammate-row">${names.map((name) => {
      const teammateSlug = slugify(name);
      return `<a class="seo-teammate-chip" href="../${teammateSlug}/"><img src="../../assets/characters/${teammateSlug}.webp" alt="" loading="lazy" decoding="async"><span>${escapeHtml(name)}</span></a>`;
    }).join("")}</div>`;
  });
  html = html.slice(0, teammatesStart) + upgraded + html.slice(end);
  html = html.replace(/styles\.css\?v=[^\"']+/g, "styles.css?v=echo-guides-1");
  html = html.replace(/[ \t]+$/gm, "");
  await fs.writeFile(file, html);
}

console.log(`Updated Echo and teammate guidance on ${slugs.length} character pages.`);
