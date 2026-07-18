import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const characterRoot = path.join(root, "characters");

const specificGuides = {
  rebecca: {
    shells: [["lucy", "rebecca", "mornye"], ["lucy", "rebecca", "shorekeeper"], ["lucy", "rebecca", "verina"], ["yangyang-xuanling", "rebecca", "chisa"]],
    panels: `<div class="seo-team-panels"><div class="seo-team-panel"><header><strong>Lucy Hack-Shifting team</strong><span>Recommended</span></header><p>Lucy / Rebecca / Mornye</p><p class="seo-team-note">Rebecca is Lucy's intended Hack-Shifting partner. Mornye supplies the real sustain slot.</p></div><div class="seo-team-panel"><header><strong>Lucy comfort alternative</strong><span>Alternative</span></header><p>Lucy / Rebecca / Shorekeeper or Verina</p><p class="seo-team-note">Keep the Lucy and Rebecca core, then use an owned healer when Mornye is unavailable.</p></div><div class="seo-team-panel"><header><strong>Heavy Attack support route</strong><span>Alternative</span></header><p>Yangyang: Xuanling / Rebecca / Chisa</p><p class="seo-team-note">Rebecca supports the Heavy Attack direction while Chisa covers utility and limited recovery.</p></div></div>`,
    direction: `Rebecca is a Heavy Attack and Hack-Shifting sub-DPS. Her clearest current pairing is Lucy, with Mornye, Shorekeeper, or Verina covering sustain. She can also support other Heavy Attack teams when their mechanics match her buff window.`,
    teammates: `Prioritise Lucy for the intended Hack-Shifting core. Yangyang: Xuanling is another relevant Heavy Attack carry, while Mornye, Shorekeeper, or Verina can fill the sustain slot.`,
    faq: `Rebecca's clearest team is Lucy / Rebecca / Mornye. Shorekeeper or Verina can replace Mornye for a comfortable owned alternative, and Rebecca can also support compatible Heavy Attack carries.`
  },
  ciaccona: {
    shells: [["cartethyia", "ciaccona", "chisa"], ["cartethyia", "ciaccona", "rover"], ["cartethyia", "ciaccona", "shorekeeper"]],
    panels: `<div class="seo-team-panels"><div class="seo-team-panel"><header><strong>Cartethyia Erosion team</strong><span>Recommended</span></header><p>Cartethyia / Ciaccona / Chisa</p><p class="seo-team-note">Ciaccona is the premium Erosion setup partner; Chisa adds Bane support and limited recovery.</p></div><div class="seo-team-panel"><header><strong>Accessible Erosion route</strong><span>Alternative</span></header><p>Cartethyia / Ciaccona / Aero Rover</p><p class="seo-team-note">Aero Rover supplies an accessible Erosion-compatible third slot, but is not a dedicated healer.</p></div><div class="seo-team-panel"><header><strong>Comfort route</strong><span>Alternative</span></header><p>Cartethyia / Ciaccona / Shorekeeper</p><p class="seo-team-note">Use Shorekeeper when reliable healing and a lower-stress rotation matter more than the specialist third slot.</p></div></div>`,
    direction: `Ciaccona is an Aero Erosion sub-DPS and support specialist. Cartethyia is her clearest current carry partner, while the third slot can trade specialist synergy for safer sustain.`,
    teammates: `Prioritise Cartethyia for the clearest Erosion pairing. Chisa is the specialist utility route, Aero Rover is an accessible Erosion-compatible option, and Shorekeeper or Verina can make the team safer.`,
    faq: `Ciaccona's clearest team direction is Cartethyia / Ciaccona with Chisa, Aero Rover, or a dedicated healer in the third slot. Choose the third member based on specialist synergy versus safety.`
  }
};

const directories = (await fs.readdir(characterRoot, { withFileTypes: true })).filter((entry) => entry.isDirectory());
for (const directory of directories) {
  const file = path.join(characterRoot, directory.name, "index.html");
  let html = await fs.readFile(file, "utf8");
  html = html.replaceAll("Best-shell target", "Recommended team").replaceAll("Useful shell", "Alternative team");
  html = html.replace(/(<img src="https:\/\/cdn\.prydwen\.gg\/images\/wuthering-waves\/weapons\/[^"]+")(?!(?:[^>]*onerror))/g, `$1 onerror="this.onerror=null;this.src='../../assets/weapons/unknown.svg'"`);

  const fix = specificGuides[directory.name];
  if (fix) {
    html = html.replace(/("shells":)\[[^\]]*(?:\][^\]]*)*\](,"names":)/, `$1${JSON.stringify(fix.shells)}$2`);
    html = html.replace(/<div class="seo-team-panels">.*?<\/div><\/div>\s*<\/div>\s*<div class="seo-module seo-new-player-module">/s, `${fix.panels}\n            </div>\n            <div class="seo-module seo-new-player-module">`);
    html = html.replace(/<div class="seo-card">\s*<h2>Team direction<\/h2>.*?<\/div>\s*<div class="seo-card">\s*<h2>Useful teammates<\/h2>.*?<\/div>/s, `<div class="seo-card">\n            <h2>Team direction</h2>\n            <p>${fix.direction}</p>\n          </div>\n          <div class="seo-card">\n            <h2>Useful teammates</h2>\n            <p>${fix.teammates}</p>\n          </div>`);
    html = html.replace(/(<summary>What teams work with [^<]+<\/summary><p>).*?(<\/p>)/, `$1${fix.faq}$2`);
  }

  if (directory.name === "chisa") {
    html = html
      .replace("<strong>Healer support</strong>", "<strong>Support with sustain</strong>")
      .replace("<span>Havoc</span><span>Broadblade</span><span>Healer support</span>", "<span>Havoc</span><span>Broadblade</span><span>Support with sustain</span>")
      .replace("Chisa is a Havoc healer support in Wuthering Waves.", "Chisa is a Havoc support with limited sustain in Wuthering Waves.")
      .replace("<dt>Role</dt><dd>Healer support</dd>", "<dt>Role</dt><dd>Support with sustain</dd>");
  }

  await fs.writeFile(file, html);
}

const directoryFile = path.join(characterRoot, "index.html");
let directoryHtml = await fs.readFile(directoryFile, "utf8");
directoryHtml = directoryHtml
  .replace("<strong>Chisa</strong><small>Havoc · Healer support</small>", "<strong>Chisa</strong><small>Havoc · Support with sustain</small>")
  .replace("<strong>Ciaccona</strong><small>Aero · Sub DPS</small>", "<strong>Ciaccona</strong><small>Aero · Sub DPS / Support</small>");
await fs.writeFile(directoryFile, directoryHtml);

console.log(`Applied feedback guide fixes to ${directories.length} character pages.`);
