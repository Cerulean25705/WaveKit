import fs from "node:fs";

const app = fs.readFileSync(new URL("../app.js", import.meta.url), "utf8");
const aemeathPage = fs.readFileSync(new URL("../characters/aemeath/index.html", import.meta.url), "utf8");

const archetypeLine = app.match(/^  aemeath: archetype\(.+$/m)?.[0] || "";
const guideData = aemeathPage.match(/<script type="application\/json" id="wavekit-character-guide-data">([\s\S]*?)<\/script>/)?.[1];

const requiredPairs = [
  ["denia", "chisa"],
  ["denia", "lupa"],
  ["lynae", "mornye"],
  ["lupa", "mornye"]
];
const crossedPairs = [
  ["denia", "mornye"],
  ["lynae", "chisa"]
];

function pairSource(pair) {
  return `["${pair[0]}", "${pair[1]}"]`;
}

for (const pair of requiredPairs) {
  if (!archetypeLine.includes(pairSource(pair))) {
    throw new Error(`Missing Aemeath mode shell: ${pair.join(" + ")}`);
  }
}

for (const pair of crossedPairs) {
  if (archetypeLine.includes(pairSource(pair))) {
    throw new Error(`Crossed Aemeath modes must not be an archetype: ${pair.join(" + ")}`);
  }
}

if (!guideData) throw new Error("Aemeath guide data is missing");
const shells = JSON.parse(guideData).shells.map((shell) => shell.slice(1));

for (const pair of crossedPairs) {
  if (shells.some((shell) => pair.every((slug) => shell.includes(slug)))) {
    throw new Error(`Aemeath guide contains a crossed mode shell: ${pair.join(" + ")}`);
  }
}

console.log("Aemeath mode audit passed");
