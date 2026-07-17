import fs from "node:fs";
import vm from "node:vm";

const appSource = fs.readFileSync(new URL("../app.js", import.meta.url), "utf8");
const materialSource = fs.readFileSync(new URL("../assets/material-data.js", import.meta.url), "utf8");

function namesFromSet(name) {
  const block = appSource.match(new RegExp(`const ${name} = new Set\\(\\[([\\s\\S]*?)\\n\\]\\);`));
  if (!block) throw new Error(`Could not find ${name} in app.js`);
  return new Set([...block[1].matchAll(/"([^"]+)"/g)].map((match) => match[1]));
}

const fiveStarWeapons = namesFromSet("fiveStarWeapons");
const threeStarWeapons = namesFromSet("threeStarWeapons");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(materialSource, context);

const mismatches = Object.values(context.window.WAVEKIT_MATERIAL_DATA.weapons)
  .map((weapon) => ({
    name: weapon.name,
    expected: weapon.rarity,
    helper: fiveStarWeapons.has(weapon.name) ? 5 : threeStarWeapons.has(weapon.name) ? 3 : 4
  }))
  .filter((weapon) => weapon.expected !== weapon.helper);

if (mismatches.length) {
  console.error("Weapon rarity mismatches:");
  mismatches.forEach(({ name, expected, helper }) => console.error(`- ${name}: helper ${helper}, data ${expected}`));
  process.exitCode = 1;
} else {
  console.log(`Weapon rarity audit passed for ${Object.keys(context.window.WAVEKIT_MATERIAL_DATA.weapons).length} weapons.`);
}
