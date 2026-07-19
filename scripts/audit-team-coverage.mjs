import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const app = await fs.readFile(path.join(root, "app.js"), "utf8");
const errors = [];

const archetypes = evaluateBlock(
  "const teamArchetypes = ",
  "\n};\n\nconst dataConfidence",
  { archetype: (label, ideal = [], note = "") => ({ label, ideal, note }) }
);
const characters = evaluateBlock(
  "const characters = ",
  "\n];\n\nconst state",
  { c: (slug, name, element, weaponType, roles) => ({ slug, name, element, weaponType, roles }) }
);
const slugs = new Set(characters.map((character) => character.slug));

for (const [main, archetype] of Object.entries(archetypes)) {
  if (!slugs.has(main)) errors.push(`Unknown archetype main: ${main}`);
  if (!archetype.ideal.length) errors.push(`No documented team shells for ${main}`);
  for (const pair of archetype.ideal) {
    if (pair.length !== 2 || new Set([main, ...pair]).size !== 3) errors.push(`Invalid shell for ${main}: ${pair.join(" / ")}`);
    pair.forEach((slug) => { if (!slugs.has(slug)) errors.push(`Unknown teammate ${slug} in ${main}`); });
  }
}

for (const character of characters.filter((entry) => entry.roles.includes("main") && entry.slug !== "rover")) {
  if (!archetypes[character.slug]) errors.push(`Main DPS lacks reviewed archetype: ${character.slug}`);
}

assertShell("iuno", ["iuno", "lynae", "mornye"]);
assertShell("phoebe", ["phoebe", "lynae", "rover"]);
assertShell("zani", ["zani", "phoebe", "shorekeeper"]);
assertShell("phrolova", ["phrolova", "lucilla", "qiuyuan"]);
assertShell("galbrena", ["galbrena", "qiuyuan", "shorekeeper"]);

if (!app.includes('character.slug === "qiuyuan" && Number(state.owned.qiuyuan?.chain || 0) >= 3')) {
  errors.push("Qiuyuan R3 carry unlock is missing");
}
if (!app.includes('if (main.slug === "phoebe") return false;')) errors.push("Phoebe mode guard is missing");
if (!app.includes("team-validation-warning")) errors.push("Unverified fallback warning is missing");

for (const character of characters) {
  const file = path.join(root, "characters", character.slug, "index.html");
  const html = await fs.readFile(file, "utf8");
  const match = html.match(/<script type="application\/json" id="wavekit-character-guide-data">([\s\S]*?)<\/script>/);
  if (!match) {
    errors.push(`Guide data missing: ${character.slug}`);
    continue;
  }
  const data = JSON.parse(match[1]);
  for (const shell of data.shells || []) {
    if (shell.length !== 3 || new Set(shell).size !== 3) errors.push(`Bad guide shell on ${character.slug}: ${shell.join(" / ")}`);
    shell.forEach((slug) => { if (!slugs.has(slug)) errors.push(`Unknown guide teammate ${slug} on ${character.slug}`); });
  }
  if (archetypes[character.slug] && !(data.shells || []).some((shell) => shell[0] === character.slug)) {
    errors.push(`Guide omits ${character.slug}'s own team route`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Team coverage audit passed: ${characters.length} Resonators, ${Object.keys(archetypes).length} carry archetypes.`);

function evaluateBlock(prefix, suffix, context) {
  const start = app.indexOf(prefix);
  const end = app.indexOf(suffix, start);
  if (start < 0 || end < 0) throw new Error(`Could not find ${prefix.trim()}`);
  return vm.runInNewContext(`(${app.slice(start + prefix.length, end + 2)})`, context);
}

function assertShell(main, shell) {
  const key = shell.slice(1).sort().join("|");
  const found = archetypes[main]?.ideal.some((pair) => [...pair].sort().join("|") === key);
  if (!found) errors.push(`Required reviewed shell missing: ${shell.join(" / ")}`);
}
