import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const characterRoot = path.join(root, "characters");
const errors = [];

const loadBrowserData = async (file, key) => {
  const source = await fs.readFile(path.join(root, file), "utf8");
  const context = { window: {} };
  vm.runInNewContext(source, context);
  return context.window[key];
};

const verified = await loadBrowserData("assets/verified-guide-data.js", "WAVEKIT_VERIFIED_GUIDES");
const material = await loadBrowserData("assets/material-data.js", "WAVEKIT_MATERIAL_DATA");
const app = await fs.readFile(path.join(root, "app.js"), "utf8");
const archetypeStart = app.indexOf("const teamArchetypes = ");
const archetypeEnd = app.indexOf("\n};\n\nconst dataConfidence", archetypeStart);
const finderArchetypes = vm.runInNewContext(
  `(${app.slice(archetypeStart + "const teamArchetypes = ".length, archetypeEnd + 2)})`,
  { archetype: (label, ideal = [], note = "") => ({ label, ideal, note }) }
);
const weaponCatalogStart = app.indexOf("const weaponCatalog = ");
const weaponCatalogEnd = app.indexOf("\n]);\n\nconst weaponPurposeHints", weaponCatalogStart);
const helperWeaponCatalog = vm.runInNewContext(app.slice(weaponCatalogStart + "const weaponCatalog = ".length, weaponCatalogEnd + 4));
const directories = (await fs.readdir(characterRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

if (!app.includes("window.WAVEKIT_VERIFIED_GUIDES")) errors.push("Helper does not load verified guide data");
if (!app.includes("characterWeaponAlternates[slug] = weaponOptions.slice(1)")) errors.push("Helper weapon alternatives are not synchronized");
if (Object.keys(verified).length !== directories.length) errors.push(`Verified guide count is ${Object.keys(verified).length}, expected ${directories.length}`);

for (const slug of directories) {
  const html = await fs.readFile(path.join(characterRoot, slug, "index.html"), "utf8");
  const embedded = html.match(/<script type="application\/json" id="wavekit-character-guide-data">([^<]+)<\/script>/)?.[1];
  if (!embedded) {
    errors.push(`${slug}: missing embedded guide data`);
    continue;
  }
  const guide = JSON.parse(embedded);
  const chainCount = (html.match(/class="seo-chain-item"/g) || []).length;
  const expectedChains = slug === "rover" ? 24 : 6;
  if (chainCount !== expectedChains) errors.push(`${slug}: ${chainCount} chain rows, expected ${expectedChains}`);
  if ((html.match(/<!-- wavekit-depth-start -->/g) || []).length !== 1) errors.push(`${slug}: generated depth section is not unique`);
  const chainLinks = (html.match(/<a href="#chains">Chains<\/a>/g) || []).length;
  if (chainLinks !== 1) errors.push(`${slug}: ${chainLinks} Chains jump links, expected 1`);
  if (!html.includes('"dateModified":"2026-07-22"')) errors.push(`${slug}: stale structured-data date`);
  if (!verified[slug]) errors.push(`${slug}: missing helper guide record`);
  if (!material.characters[slug]) errors.push(`${slug}: missing material planner record`);

  for (const weapon of guide.weaponOptions || []) {
    const users = material.weapons[weapon]?.goodFor || [];
    if (!users.some((entry) => entry.slug === slug)) errors.push(`${slug}: ${weapon} is not linked back from the weapon directory`);
    if (!helperWeaponCatalog.has(weapon)) errors.push(`${slug}: ${weapon} is missing from the helper weapon catalog`);
  }

  for (const shell of (guide.shells || []).filter((entry) => entry[0] === slug)) {
    const pairKey = shell.slice(1).sort().join("|");
    const finderHasShell = finderArchetypes[slug]?.ideal.some((pair) => [...pair].sort().join("|") === pairKey);
    if (!finderHasShell) errors.push(`${slug}: guide shell ${shell.join(" / ")} is missing from the team finder`);
  }
}

for (const slug of ["aemeath", "iuno", "phoebe", "rover", "denia", "lynae", "lucilla"]) {
  const html = await fs.readFile(path.join(characterRoot, slug, "index.html"), "utf8");
  if (!html.includes("Playstyles and modes")) errors.push(`${slug}: missing mode/playstyle guidance`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Guide consistency audit passed: ${directories.length} guides, ${Object.values(material.weapons).length} weapons.`);
