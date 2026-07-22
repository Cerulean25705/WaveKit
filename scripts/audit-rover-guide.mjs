import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const page = fs.readFileSync(path.join(root, "characters/rover/index.html"), "utf8");
const script = fs.readFileSync(path.join(root, "assets/rover-guide.js"), "utf8");
const forms = ["Spectro", "Havoc", "Aero", "Electro"];
const failures = [];

for (const form of forms) {
  if (!page.includes(`data-rover-form="${form}"`)) failures.push(`Missing ${form} selector`);
  const chainStart = page.indexOf(`<h3 class="seo-rover-chain-form">Rover: ${form}</h3>`);
  if (chainStart < 0) {
    failures.push(`Missing ${form} chain group`);
    continue;
  }
  const nextForm = forms
    .map((candidate) => page.indexOf(`<h3 class="seo-rover-chain-form">Rover: ${candidate}</h3>`, chainStart + 1))
    .filter((index) => index > chainStart)
    .sort((a, b) => a - b)[0] ?? page.indexOf("</section>", chainStart);
  const chainCount = (page.slice(chainStart, nextForm).match(/class="seo-chain-item"/g) || []).length;
  if (chainCount !== 6) failures.push(`${form} has ${chainCount} chain entries instead of 6`);
  if (!new RegExp(`\\n    ${form}: \\{`).test(script)) failures.push(`Missing ${form} guide data`);
}

const requiredFacts = [
  "Bloodpact's Pledge",
  "Rejuvenating Glow",
  "Spectro Frazzle",
  "Havoc Eclipse",
  "Electro Flare",
  "window.renderCharacterGuideAccount?.()"
];
for (const fact of requiredFacts) {
  if (!script.includes(fact)) failures.push(`Missing Rover guide fact or integration: ${fact}`);
}

if (!page.includes("assets/rover-guide.js")) failures.push("Rover guide script is not loaded by the page");
if (failures.length) {
  console.error(`Rover guide audit failed:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}

console.log("Rover guide audit passed: four form selectors, four exact six-chain groups, and form-aware account integration.");
