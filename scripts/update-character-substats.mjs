import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const priorities = {
  aalto: ["Energy Regen for reliable Liberation and Outro timing", "CRIT Rate and CRIT DMG", "ATK%", "Basic Attack DMG Bonus"],
  aemeath: ["Energy Regen to roughly 122% for a smooth burst cycle", "CRIT Rate and CRIT DMG", "ATK%", "Resonance Liberation DMG Bonus"],
  augusta: ["CRIT Rate and CRIT DMG", "Heavy Attack DMG Bonus", "ATK%", "Energy Regen if Liberation is not ready each rotation"],
  baizhi: ["Energy Regen until Liberation is ready each rotation", "HP%", "Flat HP", "DEF% for extra survivability"],
  brant: ["Energy Regen toward roughly 250% for Tidebreaking Courage", "CRIT Rate and CRIT DMG", "Basic Attack DMG Bonus", "ATK%"],
  buling: ["Energy Regen until healing is available each rotation", "ATK% for healing and support scaling", "Flat ATK", "Defensive HP% or DEF%"],
  calcharo: ["CRIT Rate and CRIT DMG", "Resonance Liberation DMG Bonus", "ATK%", "Energy Regen for reliable Death Messenger windows"],
  camellya: ["CRIT Rate and CRIT DMG", "Basic Attack DMG Bonus", "ATK%", "Energy Regen only if Liberation timing is inconsistent"],
  cantarella: ["CRIT Rate and CRIT DMG", "ATK%", "Energy Regen for consistent Concerto and Liberation setup", "Resonance Skill DMG Bonus"],
  carlotta: ["CRIT Rate and CRIT DMG", "Resonance Skill DMG Bonus", "ATK%", "Energy Regen only if Liberation is delayed"],
  cartethyia: ["CRIT Rate and CRIT DMG", "HP% for her damage scaling", "Flat HP", "Energy Regen only if Liberation is not ready on time"],
  changli: ["CRIT Rate and CRIT DMG", "Resonance Skill DMG Bonus", "ATK%", "Resonance Liberation DMG Bonus"],
  chisa: ["CRIT Rate and CRIT DMG", "Energy Regen to roughly 125-130%", "ATK% for damage, shields, and healing", "Resonance Liberation DMG Bonus"],
  chixia: ["CRIT Rate and CRIT DMG", "Resonance Skill DMG Bonus", "ATK%", "Energy Regen only if Liberation is delayed"],
  ciaccona: ["CRIT Rate and CRIT DMG", "ATK%", "Energy Regen for consistent Erosion setup", "Resonance Liberation DMG Bonus"],
  danjin: ["CRIT Rate and CRIT DMG", "Heavy Attack DMG Bonus", "ATK%", "Resonance Skill DMG Bonus"],
  denia: ["CRIT Rate and CRIT DMG", "ATK%", "Resonance Liberation DMG Bonus", "Energy Regen for a consistent burst rotation"],
  encore: ["CRIT Rate and CRIT DMG", "Basic Attack DMG Bonus", "ATK%", "Resonance Liberation DMG Bonus"],
  galbrena: ["CRIT Rate and CRIT DMG", "Heavy Attack DMG Bonus", "ATK%", "Energy Regen only if her burst cycle slips"],
  hiyuki: ["CRIT Rate and CRIT DMG", "ATK%", "Resonance Skill DMG Bonus", "Energy Regen for consistent Chafe rotations"],
  iuno: ["CRIT Rate and CRIT DMG", "Heavy Attack DMG Bonus", "ATK%", "Energy Regen for reliable support windows"],
  jianxin: ["Energy Regen for reliable Liberation grouping", "ATK% for shield and healing scaling", "CRIT Rate and CRIT DMG if building damage", "Resonance Liberation DMG Bonus"],
  jinhsi: ["CRIT Rate and CRIT DMG", "Resonance Skill DMG Bonus", "ATK%", "Energy Regen only if Incarnation cycles are delayed"],
  jiyan: ["CRIT Rate and CRIT DMG", "Heavy Attack DMG Bonus", "ATK%", "Energy Regen until Liberation is ready each rotation"],
  lingyang: ["CRIT Rate and CRIT DMG", "Basic Attack DMG Bonus", "ATK%", "Energy Regen only if Striding Lion starts late"],
  lucilla: ["CRIT Rate and CRIT DMG", "Resonance Skill DMG Bonus", "ATK%", "Energy Regen for consistent quick-swap setup"],
  lucy: ["CRIT Rate and CRIT DMG", "Heavy Attack DMG Bonus", "ATK%", "Energy Regen only if Liberation is delayed"],
  lumi: ["CRIT Rate and CRIT DMG", "Resonance Skill DMG Bonus", "ATK%", "Energy Regen for smoother Outro rotations"],
  lupa: ["CRIT Rate and CRIT DMG", "ATK%", "Resonance Liberation DMG Bonus", "Energy Regen until her team buff is reliably available"],
  "luuk-herssen": ["CRIT Rate and CRIT DMG", "Basic Attack DMG Bonus", "ATK%", "Energy Regen only if his Tune cycle is delayed"],
  lynae: ["Energy Regen for a complete support rotation", "CRIT Rate and CRIT DMG", "ATK%", "Resonance Skill DMG Bonus"],
  mornye: ["Energy Regen toward roughly 240-260% for full Liberation support", "DEF% for healing and support scaling", "CRIT DMG after Energy and DEF needs are met", "Flat DEF"],
  mortefi: ["Energy Regen until Liberation is ready every rotation", "CRIT Rate and CRIT DMG", "Resonance Liberation DMG Bonus", "ATK%"],
  phoebe: ["CRIT Rate and CRIT DMG", "ATK%", "Resonance Skill DMG Bonus", "Energy Regen for consistent Frazzle setup"],
  phrolova: ["CRIT Rate and CRIT DMG", "ATK%", "Resonance Skill DMG Bonus", "Energy Regen only if Liberation timing is inconsistent"],
  qiuyuan: ["CRIT Rate and CRIT DMG", "Resonance Skill DMG Bonus", "ATK%", "Energy Regen for a smooth Echo Skill rotation"],
  rebecca: ["CRIT Rate and CRIT DMG", "Heavy Attack DMG Bonus", "ATK%", "Energy Regen for consistent Hack-Shifting setup"],
  roccia: ["Energy Regen for reliable Liberation and Outro timing", "CRIT Rate and CRIT DMG", "ATK%", "Resonance Skill DMG Bonus"],
  rover: ["CRIT Rate and CRIT DMG", "ATK%", "The active form's main damage bonus", "Energy Regen based on the selected form's rotation"],
  sanhua: ["Energy Regen until Liberation is ready every rotation", "CRIT Rate and CRIT DMG", "Heavy Attack DMG Bonus for Detonations", "ATK%"],
  shorekeeper: ["Energy Regen toward roughly 230% for full rotation support", "HP% for healing and Intro damage", "CRIT DMG for her enhanced Intro damage", "Flat HP"],
  sigrika: ["CRIT Rate and CRIT DMG", "Resonance Skill DMG Bonus", "ATK%", "Energy Regen for a stable Echo Skill cycle"],
  suisui: ["Pre-release: exact substat order is not yet verified", "Energy Regen is the safest early support target", "Keep kit-scaling pieces until release testing", "Avoid heavy farming before final values are confirmed"],
  taoqi: ["DEF% for shield and damage scaling", "Energy Regen for reliable Liberation and Outro access", "CRIT Rate and CRIT DMG if building damage", "Resonance Skill DMG Bonus"],
  verina: ["Energy Regen until Liberation is ready every rotation", "ATK% for healing scaling", "Flat ATK", "Defensive HP% or DEF%"],
  "xiangli-yao": ["CRIT Rate and CRIT DMG", "Resonance Liberation DMG Bonus", "ATK%", "Energy Regen until Liberation is ready each rotation"],
  yangyang: ["Energy Regen for reliable Liberation and Concerto generation", "CRIT Rate and CRIT DMG", "ATK%", "Resonance Liberation DMG Bonus"],
  "yangyang-xuanling": ["Energy Regen to roughly 120% for a smooth rotation", "CRIT Rate and CRIT DMG", "ATK%", "Resonance Liberation DMG Bonus"],
  yinlin: ["CRIT Rate and CRIT DMG", "ATK%", "Resonance Skill DMG Bonus", "Energy Regen for reliable Liberation and Outro timing"],
  youhu: ["Energy Regen until healing and Outro are reliably available", "ATK% for healing and damage scaling", "Flat ATK", "CRIT Rate and CRIT DMG after support needs are met"],
  yuanwu: ["DEF% for coordinated attack and shield scaling", "CRIT Rate and CRIT DMG", "Resonance Skill DMG Bonus", "Energy Regen if Liberation is part of the rotation"],
  zani: ["CRIT Rate and CRIT DMG", "Heavy Attack DMG Bonus", "ATK%", "Energy Regen only if Liberation is delayed"],
  zhezhi: ["Energy Regen for reliable Liberation and Outro timing", "CRIT Rate and CRIT DMG", "ATK%", "Resonance Skill DMG Bonus"]
};

const escapeHtml = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#39;");

const listPattern = /(<h2>(?:Substat|Stat) priority<\/h2>\s*)<ul class="seo-check-list">.*?<\/ul>/gs;

for (const [slug, items] of Object.entries(priorities)) {
  const file = path.join(root, "characters", slug, "index.html");
  let html = await fs.readFile(file, "utf8");
  const matches = [...html.matchAll(listPattern)].length;
  if (matches !== 2) throw new Error(`Expected two stat-priority sections for ${slug}, found ${matches}`);
  const list = `<ul class="seo-check-list">${items.map((item, index) => `<li><strong>Priority ${index + 1}:</strong> ${escapeHtml(item)}</li>`).join("")}</ul>`;
  html = html.replace(listPattern, `$1${list}`);
  await fs.writeFile(file, html);
}

console.log(`Updated ${Object.keys(priorities).length} character substat guides.`);
