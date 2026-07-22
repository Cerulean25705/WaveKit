import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const characterRoot = path.join(root, "characters");
const api = "https://api-v2.encore.moe/api/en";

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#39;");

const cleanGameText = (value = "") => String(value)
  .replace(/<br\s*\/?\s*>/gi, "\n")
  .replace(/<\/?(?:span|te|size)[^>]*>/gi, "")
  .replace(/<[^>]+>/g, "")
  .replace(/\r/g, "")
  .replace(/[ \t]+\n/g, "\n")
  .replace(/\n{3,}/g, "\n\n")
  .trim();

const paragraphs = (value) => cleanGameText(value)
  .split(/\n+/)
  .filter(Boolean)
  .map((line) => `<p>${escapeHtml(line)}</p>`)
  .join("");

const summary = (value) => {
  const text = cleanGameText(value).replace(/\n+/g, " ");
  const sentence = text.match(/^.{1,210}?(?:[.!?](?=\s|$)|$)/)?.[0] || text.slice(0, 210);
  return `${escapeHtml(sentence.trim())}${sentence.length < text.length ? "…" : ""}`;
};

const fetchJson = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.json();
};

const materialSource = await fs.readFile(path.join(root, "assets", "material-data.js"), "utf8");
const context = { window: {} };
vm.runInNewContext(materialSource, context);
const materialCharacters = context.window.WAVEKIT_MATERIAL_DATA.characters;
const characterList = (await fetchJson(`${api}/character`)).roleList;
const summaryById = new Map(characterList.map((entry) => [Number(entry.Id), entry]));

const playstyleNotes = {
  aemeath: [
    ["Tune Rupture", "Use Lynae with Mornye or another suitable sustain. Keep this route separate from Aemeath's Fusion Burst specialists."],
    ["Fusion Burst", "Use Denia with Chisa for the dedicated Fusion Burst shell. Lupa is the main damage-focused alternative."],
    ["Mono Fusion", "Lupa enables the mono-Fusion route; Mornye supplies the stable support slot."]
  ],
  phoebe: [
    ["Absolution", "The field-time damage stance. Build the team around Phoebe's personal Spectro Frazzle damage."],
    ["Confession", "The faster support stance. Use it when another damage dealer should receive the larger field window." ]
  ],
  iuno: [
    ["Main DPS", "Iuno takes the central field-time role. Lynae and Mornye form her premium hypercarry route."],
    ["Hybrid support", "Iuno supports another carry while contributing meaningful damage. Augusta is the clearest established partner." ]
  ],
  "qiuyuan": [
    ["Echo Skill support", "The usual low-chain plan: rotate quickly, amplify Echo Skill damage, and hand field time to the carry."],
    ["R3+ damage", "Higher Resonance Chains can justify a more damage-focused build and longer personal field window." ]
  ],
  brant: [
    ["Hybrid support", "Build Energy Regen first so Brant can heal, shield, and supply his Outro amplification reliably."],
    ["Personal damage", "A higher-investment route that keeps Brant active longer, usually when the team already meets its comfort needs." ]
  ],
  cantarella: [
    ["Sub DPS", "Prioritise her coordinated damage and fast handoff into a Havoc or Resonance Skill-focused carry."],
    ["Sustain hybrid", "Her healing can improve comfort, but it is lighter than a dedicated healer and should not be treated as identical." ]
  ],
  jianxin: [
    ["Defensive support", "Use her shield, grouping, and Liberation amplification for a safer, lower-pressure team."],
    ["Field-time damage", "A flexible alternative for early accounts, though it asks for more field time than her support route." ]
  ],
  chisa: [
    ["Bane specialist", "Her strongest value comes from teams that actively use Bane mechanics and want her specialist amplification."],
    ["Comfort sustain", "Her healing and defensive utility can cover a support slot, but her sustain profile differs from a pure healer." ]
  ],
  rover: [
    ["Spectro", "A flexible Spectro damage and support form with its own Resonance Chain progression."],
    ["Havoc", "A burst-focused damage form with a separate build and Resonance Chain progression."],
    ["Aero", "An Aero Erosion-focused form that can contribute damage and team utility; it is not a universal healer."],
    ["Electro", "An Electro form with its own kit, build, teams, and Resonance Chain progression." ]
  ]
};

const formLabels = {
  rover: ["Rover: Spectro", "Rover: Havoc", "Rover: Aero", "Rover: Electro"]
};

const milestoneGuides = {
  aemeath: {
    intro: "Aemeath's chain levels mostly add power spikes and comfort rather than changing her core plan. R2, R3, and R6 are the largest direct upgrades; R1, R4, and R5 add safety and utility.",
    items: [
      ["R1", "Heavy Attacks gain a major Crit DMG increase during Instant Response, while defeated-target Rupture or Fusion Trail stacks can carry to the next target."],
      ["R2", "Greatly increases Seraphic Duet and strengthens its mode-specific Tune Rupture or Fusion Burst payoff."],
      ["R3", "Strengthens her Liberation finishers and improves her mode-specific self-buffs."],
      ["R4", "Adds a 20% team-wide All-Attribute DMG Bonus after key Intro or Resonance Skill casts."],
      ["R5", "Adds resource recovery on defeated targets and a long-cooldown save-from-defeat effect."],
      ["R6", "Adds a large Liberation damage increase and guaranteed-crit rules for her mode-specific reaction damage."]
    ]
  }
};

const branchCards = (detail) => (detail.SkillBranches || []).map((branch) => {
  const name = branch.Name?.Content || branch.BranchName?.Content || branch.Name || branch.BranchName || "Alternate mode";
  const description = branch.Desc?.Content || branch.BranchDesc?.Content || branch.Description?.Content || branch.Desc || branch.BranchDesc || branch.Description || "Selectable kit route.";
  return [cleanGameText(name), cleanGameText(description)];
}).filter(([name]) => name);

const renderModes = (slug, details) => {
  const apiModes = details.flatMap(branchCards);
  const modes = apiModes.length ? apiModes : (playstyleNotes[slug] || []);
  if (!modes.length) return "";
  return `<section class="seo-playstyle-guide" aria-labelledby="playstyle-title">
    <div class="seo-depth-subheading"><span>How the kit can be played</span><h3 id="playstyle-title">Playstyles and modes</h3></div>
    <div class="seo-mode-grid">${modes.map(([name, description]) => `<article class="seo-mode-item"><h4>${escapeHtml(name)}</h4><p>${escapeHtml(description)}</p></article>`).join("")}</div>
  </section>`;
};

const renderChain = (chain, label = "") => {
  const rows = [...(chain || [])]
    .sort((a, b) => Number(a.GroupIndex) - Number(b.GroupIndex))
    .slice(0, 6)
    .map((entry) => `<details class="seo-chain-item">
      <summary><span class="seo-chain-index">R${Number(entry.GroupIndex)}</span><span><strong>${escapeHtml(cleanGameText(entry.NodeName))}</strong><small>${summary(entry.AttributesDescription)}</small></span><i aria-hidden="true">+</i></summary>
      <div class="seo-chain-effect">${paragraphs(entry.AttributesDescription)}</div>
    </details>`).join("");
  return `${label ? `<h3 class="seo-rover-chain-form">${escapeHtml(label)}</h3>` : ""}<div class="seo-chain-list">${rows}</div>`;
};

const renderMilestones = (slug) => {
  const guide = milestoneGuides[slug];
  if (!guide) return "";
  return `<section class="seo-chain-milestones" aria-labelledby="chain-milestone-title"><div class="seo-depth-subheading"><span>Quick investment read</span><h3 id="chain-milestone-title">Notable milestones</h3></div><p>${escapeHtml(guide.intro)}</p><div class="seo-milestone-grid">${guide.items.map(([level, note]) => `<span><strong>${level}</strong><small>${escapeHtml(note)}</small></span>`).join("")}</div></section>`;
};

const renderDepth = (slug, detailRecords) => {
  const primary = detailRecords[0];
  const tags = (primary.Tags || []).slice(0, 6);
  const chains = detailRecords.map((detail, index) => renderChain(detail.ResonantChain, formLabels[slug]?.[index] || "")).join("");
  const intro = slug === "aemeath"
    ? "Aemeath's Resonance Chains add both personal damage and team utility. Expand a level for the exact in-game effect; keep her Tune Rupture and Fusion Burst team plans separate."
    : slug === "suisui"
      ? "Suisui is still unreleased. These Resonance Chain effects follow current pre-release game-data records and may change before her expected July 31 banner."
    : "Each Resonance Chain level comes from duplicate copies of this Resonator. Expand a level for the exact in-game effect and use the short line for a quick read.";
  return `<!-- wavekit-depth-start -->
  <section id="chains" class="seo-card seo-depth-card">
    <div class="seo-depth-heading"><div><span>Investment guide</span><h2>Resonance Chain overview</h2><p>${escapeHtml(intro)}</p></div><strong class="seo-depth-count">${detailRecords.length * 6}<small>chain levels</small></strong></div>
    ${tags.length ? `<div class="seo-kit-tags" aria-label="Official kit roles">${tags.map((tag) => `<span><strong>${escapeHtml(tag.TagName)}</strong><small>${escapeHtml(tag.TagDesc)}</small></span>`).join("")}</div>` : ""}
    ${renderModes(slug, detailRecords)}
    ${renderMilestones(slug)}
    <section class="seo-chain-guide" aria-labelledby="chain-list-title"><div class="seo-depth-subheading"><span>R1 to R6</span><h3 id="chain-list-title">Chain effects</h3></div>${chains}</section>
    <p class="seo-depth-source">Effect names, numbers, and conditions follow current public game-data records. WaveKit keeps the full wording available so important conditions are not lost in a tier label.</p>
  </section>
  <!-- wavekit-depth-end -->`;
};

const directories = (await fs.readdir(characterRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

let updated = 0;
for (const slug of directories) {
  const record = materialCharacters[slug];
  if (!record) throw new Error(`Missing material character record for ${slug}`);
  const ids = slug === "rover"
    ? [...new Map(characterList
      .filter((entry) => /^Rover: /.test(entry.Name))
      .map((entry) => [entry.Name, Number(entry.Id)])).values()]
    : [Number(record.id)];
  const details = await Promise.all(ids.map((id) => fetchJson(`${api}/character/${summaryById.get(id)?.Id || id}`)));
  if (details.some((detail) => (detail.ResonantChain || []).length < 6)) throw new Error(`Incomplete Resonance Chain data for ${slug}`);

  const file = path.join(characterRoot, slug, "index.html");
  let html = await fs.readFile(file, "utf8");
  html = html.replace(/\s*<!-- wavekit-depth-start -->[\s\S]*?<!-- wavekit-depth-end -->\s*/g, "\n");
  if (slug === "aemeath") {
    html = html.replace(/\s*<div class="seo-card">\s*<h2>Resonance Chain overview<\/h2>[\s\S]*?<p class="seo-echo-help">[\s\S]*?<\/p>\s*<\/div>/, "");
  }
  const insertion = html.indexOf('<div class="seo-card">\n            <h2>Team direction</h2>');
  const compactInsertion = html.indexOf('<div class="seo-card"><h2>Team direction</h2>');
  const position = insertion >= 0 ? insertion : compactInsertion;
  if (position < 0) throw new Error(`Could not find Team direction insertion point for ${slug}`);
  html = `${html.slice(0, position)}${renderDepth(slug, details)}\n          ${html.slice(position)}`;
  html = html.replaceAll('<a href="#chains">Chains</a>', "");
  html = html.replace(/(<a href="#teams">Teams<\/a>)/, '$1<a href="#chains">Chains</a>');
  html = html.replaceAll('material-data.js?v=3.5-1', 'material-data.js?v=20260722-1');
  html = html.replaceAll('styles.css?v=release-20260719-beta-3', 'styles.css?v=release-20260722-guides-1');
  html = html.replace(/"dateModified":"[^"]+"/, '"dateModified":"2026-07-22"');
  html = html.replace(/[ \t]+$/gm, "");
  await fs.writeFile(file, html);
  updated += 1;
}

const sitemapFile = path.join(root, "sitemap.xml");
let sitemap = await fs.readFile(sitemapFile, "utf8");
sitemap = sitemap.replace(/(<loc>https:\/\/wavekit\.net\/characters(?:\/[^<]*)?<\/loc>\s*<lastmod>)[^<]+(<\/lastmod>)/g, "$12026-07-22$2");
await fs.writeFile(sitemapFile, sitemap);

console.log(`Updated depth guidance for ${updated} character guides.`);
