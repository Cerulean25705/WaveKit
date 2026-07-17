import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const api = "https://api-v2.encore.moe/api/en";
const characterRoot = path.join(root, "characters");

const slugify = (value) => String(value || "")
  .toLowerCase()
  .replace(/:/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

const readJson = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.json();
};

const characterList = (await readJson(`${api}/character`)).roleList;
const weaponList = (await readJson(`${api}/weapon`)).weapons;
const itemList = (await readJson(`${api}/item`)).itemList;
const itemIndex = new Map(itemList.map((item) => [Number(item.Id), item]));
const guideDirectories = (await fs.readdir(characterRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

const guideBySlug = new Map();
const weaponUsers = new Map();
for (const slug of guideDirectories) {
  const html = await fs.readFile(path.join(characterRoot, slug, "index.html"), "utf8");
  const match = html.match(/<script type="application\/json" id="wavekit-character-guide-data">([^<]+)<\/script>/);
  if (!match) continue;
  const guide = JSON.parse(match[1]);
  guideBySlug.set(slug, guide);
  for (const weapon of guide.weaponOptions || []) {
    if (!weaponUsers.has(weapon)) weaponUsers.set(weapon, []);
    weaponUsers.get(weapon).push({ slug, name: guide.name });
  }
}

const manualWeaponUsers = {
  "Bloodpact's Pledge": [["rover", "Rover (Aero)"], ["brant", "Brant"]],
  "Boson Astrolabe": [["denia", "Denia"], ["lucilla", "Lucilla"], ["suisui", "Suisui"]],
  "Freeze Frame": [["lucilla", "Lucilla"], ["suisui", "Suisui"]],
  "Laser Shearer": [["sanhua", "Sanhua"], ["yangyang", "Yangyang"], ["rover", "Rover (Aero)"], ["brant", "Brant"]],
  "Phasic Homogenizer": [["lynae", "Lynae"], ["rebecca", "Rebecca"], ["lucy", "Lucy"], ["galbrena", "Galbrena"], ["ciaccona", "Ciaccona"], ["carlotta", "Carlotta"]],
  "Pulsation Bracer": [["luuk-herssen", "Luuk Herssen"], ["sigrika", "Sigrika"], ["xiangli-yao", "Xiangli Yao"]],
  "Radiance Cleaver": [["chisa", "Chisa"], ["augusta", "Augusta"], ["jinhsi", "Jinhsi"], ["calcharo", "Calcharo"]]
};

const characterAliases = new Map([["rover", "Rover: Spectro"]]);
const getName = (value) => typeof value === "string" ? value : value?.Content || "";
const compactCosts = (costs = []) => costs.map((cost) => [Number(cost.Key), Number(cost.Value)]);
const skillTypeKeys = new Map([
  ["Normal Attack", "normal"],
  ["Resonance Skill", "skill"],
  ["Forte Circuit", "forte"],
  ["Resonance Liberation", "liberation"],
  ["Intro Skill", "intro"]
]);

const characterRecords = {};
const usedItems = new Set([2, 43010001, 43010002, 43010003, 43010004, 43020001, 43020002, 43020003, 43020004]);
for (const [slug, guide] of guideBySlug) {
  const desiredName = characterAliases.get(slug) || guide.name;
  const summary = characterList.find((entry) => entry.Name === desiredName);
  if (!summary) {
    console.warn(`No character match for ${guide.name} (${slug})`);
    continue;
  }
  const detail = await readJson(`${api}/character/${summary.Id}`);
  const skills = {};
  for (const entry of detail.Skills || []) {
    const key = skillTypeKeys.get(entry.SkillType);
    if (!key) continue;
    skills[key] = {
      name: getName(entry.SkillName),
      levels: (entry.Consumes || []).map((level) => ({
        level: Number(level.SkillId),
        costs: compactCosts(level.Consume)
      }))
    };
    for (const level of entry.Consumes || []) for (const cost of level.Consume || []) usedItems.add(Number(cost.Key));
  }
  const passives = [];
  for (const node of detail.SkillTree || []) {
    const costs = compactCosts(node.Consume);
    if (!costs.length) continue;
    passives.push(costs);
    for (const [id] of costs) usedItems.add(id);
  }
  const characterBreaches = [...(detail.Breaches || [])].sort((a, b) => Number(a.BreachLevel) - Number(b.BreachLevel));
  const ascensions = characterBreaches.slice(1).map((entry, index) => {
    const costs = compactCosts(entry.BreachConsume);
    for (const [id] of costs) usedItems.add(id);
    return { stage: Number(entry.BreachLevel), unlock: Number(characterBreaches[index].MaxLevel), cap: Number(entry.MaxLevel), costs };
  });
  characterRecords[slug] = {
    id: Number(summary.Id),
    name: guide.name,
    rarity: Number(summary.QualityId),
    weaponType: detail.WeaponTypeName || summary.WeaponTypeName || "",
    ascensions,
    skills,
    passives
  };
}

const weaponRecords = {};
const concurrency = 8;
let weaponCursor = 0;
await Promise.all(Array.from({ length: concurrency }, async () => {
  while (weaponCursor < weaponList.length) {
    const summary = weaponList[weaponCursor++];
    if (Number(summary.QualityId) < 3) continue;
    const detail = await readJson(`${api}/weapon/${summary.Id}`);
    const weaponBreaches = [...(detail.Breaches || [])].sort((a, b) => Number(a.Level) - Number(b.Level));
    const ascensions = weaponBreaches.slice(0, -1).map((entry, index) => {
      const costs = compactCosts(entry.Consume || entry.BreachConsume);
      if (entry.GoldConsume && !costs.some(([id]) => id === 2)) costs.push([2, Number(entry.GoldConsume)]);
      for (const [id] of costs) usedItems.add(id);
      return { stage: index + 1, unlock: Number(entry.LevelLimit), cap: Number(weaponBreaches[index + 1].LevelLimit), costs };
    });
    weaponRecords[summary.Name] = {
      id: Number(summary.Id),
      name: summary.Name,
      slug: slugify(summary.Name),
      rarity: Number(summary.QualityId),
      type: summary.TypeName || detail.WeaponTypeName || "",
      icon: summary.Icon,
      ascensions,
      goodFor: weaponUsers.get(summary.Name)
        || (manualWeaponUsers[summary.Name] || []).map(([slug, name]) => ({ slug, name }))
        || []
    };
  }
}));

const items = {};
for (const id of [...usedItems].sort((a, b) => a - b)) {
  const item = itemIndex.get(id);
  if (!item) continue;
  items[id] = { id, name: item.Name, icon: item.Icon, rarity: Number(item.QualityId || 0), type: item.TypeName || "Material" };
}

const data = {
  version: "3.5",
  checkedAt: new Date().toISOString().slice(0, 10),
  sources: {
    gameData: "https://api-v2.encore.moe/",
    levelTables: "https://wutheringwaves.fandom.com/wiki/Resonator/Leveling"
  },
  exp: {
    character: { 1: 0, 10: 7000, 20: 33300, 30: 94500, 40: 208800, 50: 397100, 60: 683700, 70: 1096700, 80: 1669100, 90: 2438000 },
    weapon: {
      5: { 1: 0, 10: 8900, 20: 36900, 30: 92500, 40: 187700, 50: 338500, 60: 566400, 70: 900000, 80: 1374800, 90: 2289200 },
      4: { 1: 0, 10: 5340, 20: 22140, 30: 55500, 40: 112620, 50: 203100, 60: 339840, 70: 540000, 80: 824880, 90: 1373520 },
      3: { 1: 0, 10: 4450, 20: 18450, 30: 46250, 40: 93850, 50: 169250, 60: 283200, 70: 450000, 80: 687400, 90: 1144600 }
    },
    itemValues: { 43010001: 1000, 43010002: 3000, 43010003: 8000, 43010004: 20000, 43020001: 1000, 43020002: 3000, 43020003: 8000, 43020004: 20000 }
  },
  items,
  characters: characterRecords,
  weapons: Object.fromEntries(Object.entries(weaponRecords).sort(([a], [b]) => a.localeCompare(b)))
};

const output = `/* Generated by scripts/generate-material-data.mjs. Do not edit by hand. */\nwindow.WAVEKIT_MATERIAL_DATA = ${JSON.stringify(data)};\n`;
await fs.writeFile(path.join(root, "assets", "material-data.js"), output);
console.log(`Generated ${Object.keys(characterRecords).length} characters, ${Object.keys(weaponRecords).length} weapons, and ${Object.keys(items).length} material items.`);
