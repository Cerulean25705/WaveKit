import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const characterRoot = path.join(root, "characters");
const directories = (await fs.readdir(characterRoot, { withFileTypes: true })).filter((entry) => entry.isDirectory());

for (const directory of directories) {
  const file = path.join(characterRoot, directory.name, "index.html");
  let html = await fs.readFile(file, "utf8");
  html = html.replaceAll("styles.css?v=mobile-qa-1", "styles.css?v=materials-1");
  if (!html.includes('href="../../weapons/"')) {
    html = html.replace('<a href="../">Characters</a>', '<a href="../">Characters</a>\n        <a href="../../weapons/">Weapons</a>');
  }
  if (!html.includes('<a href="#materials">Materials</a>')) {
    html = html.replace('<a href="#account">Account</a>', '<a href="#materials">Materials</a>\n          <a href="#account">Account</a>');
  }
  if (!html.includes("material-data.js")) {
    html = html.replace(
      '<script src="../../assets/character-progress.js?v=planner-sync-1"></script>',
      '<script src="../../assets/material-data.js?v=3.5-1"></script>\n    <script src="../../assets/material-planner-core.js?v=materials-1"></script>\n    <script src="../../assets/character-progress.js?v=materials-1"></script>'
    );
  }
  await fs.writeFile(file, html);
}

console.log(`Integrated materials into ${directories.length} character pages.`);
