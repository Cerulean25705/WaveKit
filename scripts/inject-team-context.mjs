import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const charactersRoot = path.join(root, "characters");
const script = '    <script src="../../assets/team-build-context.js?v=20260722-team-context-2"></script>\n';

const entries = await fs.readdir(charactersRoot, { withFileTypes: true });
let updated = 0;
for (const entry of entries.filter((item) => item.isDirectory())) {
  const file = path.join(charactersRoot, entry.name, "index.html");
  let html = await fs.readFile(file, "utf8");
  html = html.replace(/styles\.css\?v=[^"]+/, "styles.css?v=release-20260722-team-context-2");
  html = html.replace(/team-build-context\.js\?v=[^"]+/, "team-build-context.js?v=20260722-team-context-2");
  if (html.includes("assets/team-build-context.js")) {
    await fs.writeFile(file, html);
    continue;
  }
  const marker = '    <script src="../../assets/material-data.js?v=20260722-1"></script>\n';
  if (!html.includes(marker)) throw new Error(`Missing script marker in ${entry.name}`);
  html = html.replace(marker, marker + script);
  await fs.writeFile(file, html);
  updated += 1;
}
console.log(`Added team context support to ${updated} character guides.`);
