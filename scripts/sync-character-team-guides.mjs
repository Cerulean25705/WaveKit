import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const appSource = await fs.readFile(path.join(root, "app.js"), "utf8");
const start = appSource.indexOf("const teamArchetypes = {");
const end = appSource.indexOf("\n};\n\nconst dataConfidence", start);
if (start < 0 || end < 0) throw new Error("Could not locate teamArchetypes in app.js");

const objectSource = appSource.slice(start + "const teamArchetypes = ".length, end + 2);
const teamArchetypes = vm.runInNewContext(`(${objectSource})`, {
  archetype: (label, ideal = [], note = "") => ({ label, ideal, note })
});

const characterRoot = path.join(root, "characters");
const directories = (await fs.readdir(characterRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory());
const names = {};

for (const directory of directories) {
  const html = await fs.readFile(path.join(characterRoot, directory.name, "index.html"), "utf8");
  const data = readGuideData(html);
  if (data) names[data.slug] = data.name;
}

const shellsByCharacter = new Map();
for (const slug of Object.keys(names)) shellsByCharacter.set(slug, []);

for (const [main, archetype] of Object.entries(teamArchetypes)) {
  for (const pair of archetype.ideal) {
    const shell = [main, ...pair];
    addShell(main, shell);
    pair.forEach((slug) => addShell(slug, shell));
  }
}

const rewrittenPanels = new Set(["iuno", "phoebe", "phrolova", "galbrena", "qiuyuan"]);
let updated = 0;

for (const directory of directories) {
  const file = path.join(characterRoot, directory.name, "index.html");
  let html = await fs.readFile(file, "utf8");
  const data = readGuideData(html);
  if (!data) continue;
  html = html.replace(/"dateModified":"[^"]+"/g, '"dateModified":"2026-07-19"');
  const hadNoShells = !Array.isArray(data.shells) || data.shells.length === 0;

  const allShells = [...(shellsByCharacter.get(data.slug) || [])];
  if (teamArchetypes[data.slug]) {
    allShells.sort((left, right) => Number(right[0] === data.slug) - Number(left[0] === data.slug));
  }
  const shells = allShells.slice(0, 8);
  data.shells = shells;
  html = html.replace(
    /<script type="application\/json" id="wavekit-character-guide-data">[\s\S]*?<\/script>/,
    `<script type="application/json" id="wavekit-character-guide-data">${JSON.stringify(data)}</script>`
  );

  const reverseGuide = !teamArchetypes[data.slug] && shells.length > 0;
  if ((rewrittenPanels.has(data.slug) || reverseGuide || hadNoShells) && shells.length) {
    html = replaceTeamPanels(html, renderPanels(data.slug, panelShellsFor(data.slug, allShells)));
  }

  if (data.slug === "iuno") {
    html = html
      .replaceAll("<strong>Sub DPS</strong>", "<strong>Main DPS / Hybrid</strong>")
      .replaceAll("<span>Aero</span><span>Gauntlets</span><span>Sub DPS</span>", "<span>Aero</span><span>Gauntlets</span><span>Main DPS / Hybrid</span>")
      .replace("<p>Premium Aero support/sub-DPS.</p>", "<p>Flexible Aero hybrid who can support Augusta or lead a hypercarry team.</p>")
      .replaceAll("Iuno is an Aero Sub DPS in Wuthering Waves.", "Iuno is an Aero Main DPS and hybrid in Wuthering Waves.")
      .replaceAll("<dt>Role</dt><dd>Sub DPS</dd>", "<dt>Role</dt><dd>Main DPS / Hybrid</dd>")
      .replace("Iuno's recommended WaveKit setup is Aero Sub-DPS", "Iuno's recommended WaveKit setup supports both Aero Main DPS and hybrid play")
      .replace("Iuno&#39;s recommended WaveKit setup is Aero Sub-DPS", "Iuno&#39;s recommended WaveKit setup supports both Aero Main DPS and hybrid play")
      .replace("Iuno is flexible, so the best team depends on the Resonators and weapons you own.", "Iuno / Lynae / Mornye is the premium hypercarry route, while Augusta / Iuno / Shorekeeper is her leading hybrid route.")
      .replace(/<div class="seo-card">\s*<h2>Team direction<\/h2>[\s\S]*?<\/div>\s*<div class="seo-card">\s*<h2>Useful teammates<\/h2>[\s\S]*?<\/div>/,
        `<div class="seo-card"><h2>Team direction</h2><p>Iuno has two real jobs: she can support Augusta, or become the main DPS herself. For Iuno hypercarry, Lynae and Mornye are the premium core; Ciaccona, Yinlin, Jianxin, Shorekeeper, Verina, and Aero Rover form documented alternatives.</p></div><div class="seo-card"><h2>Useful teammates</h2><p>Lynae provides Iuno's strongest general buff route, while Mornye belongs specifically with that Lynae core. Aero Rover is a free Aero-focused option; Shorekeeper and Verina provide universal sustain.</p></div>`)
      .replace(/(<summary>What teams work with Iuno\?<\/summary><p>)[\s\S]*?(<\/p>)/,
        `$1Iuno / Lynae / Mornye is the premium hypercarry team. Iuno can also use Ciaccona with Aero Rover or Shorekeeper, Yinlin with Shorekeeper, or Jianxin with Verina.$2`);
  }

  if (data.slug === "phoebe") {
    html = html
      .replace("Phoebe's recommended WaveKit setup is Spectro Frazzle Sub-DPS Build", "Phoebe's recommended WaveKit setup changes between Absolution DPS and Confession support")
      .replace("Phoebe&#39;s recommended WaveKit setup is Spectro Frazzle Sub-DPS Build", "Phoebe&#39;s recommended WaveKit setup changes between Absolution DPS and Confession support")
      .replace("A strong reference shell is Phoebe / Zani / Shorekeeper. WaveKit can also suggest owned alternatives through the team helper.", "Absolution Phoebe uses a buffer plus Spectro Rover or Ciaccona; Confession Phoebe instead supports Zani.")
      .replace(/<div class="seo-card">\s*<h2>Team direction<\/h2>[\s\S]*?<\/div>\s*<div class="seo-card">\s*<h2>Useful teammates<\/h2>[\s\S]*?<\/div>/,
        `<div class="seo-card"><h2>Team direction</h2><p>Phoebe has two separate modes. Absolution is her main-DPS route and requires Spectro Frazzle from Spectro Rover in normal single-wave play or Ciaccona in multi-wave content. Confession is her support route for Zani and should not be mixed into Absolution team rankings.</p></div><div class="seo-card"><h2>Useful teammates</h2><p>For Absolution, use Lynae, Rebecca, or Phrolova alongside Spectro Rover; Ciaccona is the specialist multi-wave applier. For Confession, pair Phoebe with Zani and a sustain such as Shorekeeper or Verina.</p></div>`)
      .replace(/(<summary>What teams work with Phoebe\?<\/summary><p>)[\s\S]*?(<\/p>)/,
        `$1Absolution Phoebe uses a buffer such as Lynae plus Spectro Rover, while Ciaccona replaces Rover for multi-wave Frazzle application. Confession Phoebe instead supports Zani with Shorekeeper or Verina.$2`);
  }

  if (data.slug === "qiuyuan") {
    html = html
      .replaceAll("<strong>Sub DPS</strong>", "<strong>Sub DPS / R3+ Main DPS</strong>")
      .replaceAll("<span>Aero</span><span>Sword</span><span>Sub DPS</span>", "<span>Aero</span><span>Sword</span><span>Sub DPS / R3+ Main DPS</span>")
      .replaceAll("Qiuyuan is an Aero Sub DPS in Wuthering Waves.", "Qiuyuan is an Aero Sub DPS who unlocks a main-DPS route at R3 in Wuthering Waves.")
      .replaceAll("<dt>Role</dt><dd>Sub DPS</dd>", "<dt>Role</dt><dd>Sub DPS / R3+ Main DPS</dd>")
      .replace("Qiuyuan is flexible, so the best team depends on the Resonators and weapons you own.", "Below R3, Qiuyuan supports Echo Skill carries. At R3 or higher, Qiuyuan can lead a carry team with Iuno and Ciaccona or a universal sustain.")
      .replace(/<div class="seo-card">\s*<h2>Team direction<\/h2>[\s\S]*?<\/div>\s*<div class="seo-card">\s*<h2>Useful teammates<\/h2>[\s\S]*?<\/div>/,
        `<div class="seo-card"><h2>Team direction</h2><p>Below R3, use Qiuyuan as an Echo Skill buffer for Phrolova, Galbrena, or Sigrika. At R3 or higher, his extended Skill sequence unlocks a separate main-DPS route.</p></div><div class="seo-card"><h2>Useful teammates</h2><p>As a support, Qiuyuan belongs with Echo Skill carries. As an R3+ carry, Iuno is his strongest focused helper; Ciaccona, Shorekeeper, Mortefi, Rebecca, and Verina are documented alternatives.</p></div>`)
      .replace(/(<summary>What teams work with Qiuyuan\?<\/summary><p>)[\s\S]*?(<\/p>)/,
        `$1Below R3, Qiuyuan supports Phrolova, Galbrena, and Sigrika. At R3 or higher, he can lead teams such as Qiuyuan / Iuno / Ciaccona or Qiuyuan / Iuno / Shorekeeper.$2`);
  }

  await fs.writeFile(file, html);
  updated += 1;
}

const sitemapFile = path.join(root, "sitemap.xml");
let sitemap = await fs.readFile(sitemapFile, "utf8");
sitemap = sitemap.replace(/<url>[\s\S]*?<\/url>/g, (entry) => {
  const location = entry.match(/<loc>([^<]+)<\/loc>/)?.[1] || "";
  if (location === "https://wavekit.net/" || location === "https://wavekit.net/characters/" || location.includes("/characters/")) {
    return entry.replace(/<lastmod>[^<]+<\/lastmod>/, "<lastmod>2026-07-19</lastmod>");
  }
  return entry;
});
await fs.writeFile(sitemapFile, sitemap);

function addShell(slug, shell) {
  if (!shellsByCharacter.has(slug)) return;
  const current = shellsByCharacter.get(slug);
  const key = shell.join("|");
  if (!current.some((entry) => entry.join("|") === key)) current.push(shell);
}

function readGuideData(html) {
  const match = html.match(/<script type="application\/json" id="wavekit-character-guide-data">([\s\S]*?)<\/script>/);
  if (!match) return null;
  return JSON.parse(match[1]);
}

function replaceTeamPanels(html, panels) {
  return html.replace(
    /<div class="seo-team-panels">[\s\S]*?<\/div>\s*<\/div>\s*<div class="seo-module seo-new-player-module">/,
    `${panels}\n            </div>\n            <div class="seo-module seo-new-player-module">`
  );
}

function renderPanels(subject, shells) {
  return `<div class="seo-team-panels">${shells.map((shell, index) => {
    const label = teamRouteLabel(subject, shell, index);
    return `<div class="seo-team-panel"><header><strong>${label}</strong><span>${index === 0 ? "Recommended" : "Alternative"}</span></header><div class="seo-team-strip">${shell.map((slug, slot) => `<span><img src="../../assets/characters/${slug}.webp" alt="" loading="lazy" decoding="async"><small>${slot === 0 ? "Main damage" : slot === 1 ? "Setup helper" : "Support slot"}</small><strong>${escapeHtml(names[slug] || slug)}</strong><em>${slot === 0 ? "Leads the damage plan" : slot === 1 ? "Enables the team route" : "Completes this composition"}</em></span>`).join("")}</div><p class="seo-team-note">${escapeHtml(teamArchetypes[shell[0]]?.note || "A reviewed composition from WaveKit's current team rules.")}</p></div>`;
  }).join("")}</div>`;
}

function teamRouteLabel(subject, shell, index) {
  if (subject === "aemeath") {
    if (shell.includes("denia")) return "Fusion Burst route";
    if (shell.includes("lynae")) return "Tune Rupture route";
    return "Mono Fusion route";
  }
  if (subject === "phoebe") return shell[0] === "phoebe" ? "Absolution DPS route" : "Confession support route";
  if (subject === "iuno") return shell[0] === "iuno" ? (index === 0 ? "Iuno hypercarry" : "Iuno DPS alternative") : "Hybrid support route";
  if (subject === "qiuyuan") return shell[0] === "qiuyuan" ? "R3+ Qiuyuan carry" : "Echo Skill support route";
  if (shell[0] !== subject) return `${names[shell[0]] || shell[0]} team`;
  return index === 0 ? "Recommended team" : "Alternative team";
}

function panelShellsFor(subject, shells) {
  const own = shells.filter((shell) => shell[0] === subject);
  const support = shells.filter((shell) => shell[0] !== subject);
  if (subject === "iuno") return [own[0], own[1], support.find((shell) => shell[0] === "augusta")].filter(Boolean);
  if (subject === "phoebe") return [own[0], own.find((shell) => shell.includes("ciaccona")) || own[1], support.find((shell) => shell[0] === "zani")].filter(Boolean);
  if (subject === "qiuyuan") return [own[0], support.find((shell) => shell[0] === "phrolova"), support.find((shell) => shell[0] === "galbrena")].filter(Boolean);
  return shells.slice(0, 3);
}

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

console.log(`Synced team data across ${updated} character guides.`);
