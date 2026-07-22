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
  cartethyia: {
    shells: [["cartethyia", "ciaccona", "chisa"], ["cartethyia", "ciaccona", "rover"], ["cartethyia", "ciaccona", "shorekeeper"], ["cartethyia", "sanhua", "rover"]],
    panels: `<div class="seo-team-panels"><div class="seo-team-panel"><header><strong>Best team</strong><span>Recommended</span></header><p>Cartethyia / Ciaccona / Chisa</p><p class="seo-team-note">This is Cartethyia's best specialist composition. Ciaccona applies Aero Erosion while Chisa adds the specialist stack, damage, healing, and shielding tools. Kumokiri raises Chisa's team-damage ceiling further.</p></div><div class="seo-team-panel"><header><strong>Accessible alternative</strong><span>Free healer route</span></header><p>Cartethyia / Ciaccona / Aero Rover</p><p class="seo-team-note">Aero Rover is the free, reliable healing alternative to Chisa. Both third-slot options help Cartethyia reach the higher Erosion stack limit; choose Rover when comfort, access, or multi-wave reliability matters.</p></div><div class="seo-team-panel"><header><strong>Comfort route</strong><span>Safer alternative</span></header><p>Cartethyia / Ciaccona / Shorekeeper</p><p class="seo-team-note">Keep Ciaccona's Erosion core, then use Shorekeeper when healing, Crit support, and a calmer multi-wave rotation matter more than maximum specialist output.</p></div></div>`,
    direction: `Cartethyia is an HP-scaling Aero Erosion main DPS. Ciaccona is the core Erosion partner. Chisa is the best specialist third slot, while Aero Rover is the free healing alternative and Shorekeeper is the safer multi-wave option. Cartethyia's Sequence 2 adds the extra Erosion stack limit herself, so the third slot becomes less mechanically mandatory at that point, but the team roles still matter for damage and comfort.`,
    teammates: `Prioritise Ciaccona first, then choose Chisa for the highest-output specialist route, Aero Rover for free healing and consistent comfort, or Shorekeeper for safer multi-wave play. Sanhua remains the straightforward F2P helper when Ciaccona is unavailable.`,
    faq: `Cartethyia's best specialist team is Cartethyia / Ciaccona / Chisa. Aero Rover is the accessible healing alternative, while Shorekeeper is a safer multi-wave option. Cartethyia's Sequence 2 increases the Erosion stack limit and reduces her dependence on a third-slot stack helper.`
  },
  ciaccona: {
    shells: [["cartethyia", "ciaccona", "chisa"], ["cartethyia", "ciaccona", "rover"], ["cartethyia", "ciaccona", "shorekeeper"]],
    panels: `<div class="seo-team-panels"><div class="seo-team-panel"><header><strong>Best Cartethyia team</strong><span>Recommended</span></header><p>Cartethyia / Ciaccona / Chisa</p><p class="seo-team-note">Ciaccona is Cartethyia's core Erosion partner, while Chisa is the best specialist third slot for the highest-output version of the team.</p></div><div class="seo-team-panel"><header><strong>Accessible Cartethyia team</strong><span>Free healer route</span></header><p>Cartethyia / Ciaccona / Aero Rover</p><p class="seo-team-note">Aero Rover fills the same stack-support job with reliable healing and a free dedicated weapon, making this the most accessible alternative to Chisa.</p></div><div class="seo-team-panel"><header><strong>Comfort route</strong><span>Alternative</span></header><p>Cartethyia / Ciaccona / Shorekeeper</p><p class="seo-team-note">Use Shorekeeper when healing, Crit support, and a calmer multi-wave rotation matter more than specialist output.</p></div></div>`,
    direction: `Ciaccona is an Aero Erosion sub-DPS and support specialist. Cartethyia is her clearest current carry partner, with Chisa as the best specialist third slot and Aero Rover as the accessible healing alternative.`,
    teammates: `Prioritise Cartethyia for the clearest Erosion pairing. Chisa is the highest-output specialist third slot, Aero Rover is the free healing replacement, and Shorekeeper is the safer multi-wave option.`,
    faq: `Ciaccona's best specialist team is Cartethyia / Ciaccona / Chisa. Aero Rover can replace Chisa for free healing and comfort, while Shorekeeper is a safer multi-wave alternative.`
  }
};

const directories = (await fs.readdir(characterRoot, { withFileTypes: true })).filter((entry) => entry.isDirectory());
for (const directory of directories) {
  const file = path.join(characterRoot, directory.name, "index.html");
  let html = await fs.readFile(file, "utf8");
  html = html
    .replaceAll("Best-shell target", "Recommended team")
    .replaceAll("Useful shell", "Alternative team")
    .replaceAll("Ciaccona plus Aero Rover is Cartethyia's strongest low-sequence Erosion core. Chisa is a real specialist option at any sequence and can overtake Rover with Kumokiri; from R2, Cartethyia no longer relies on Rover for the extra stack limit. Shorekeeper and Verina are safer but lower-synergy alternatives, not direct replacements for Chisa.", "Cartethyia's best specialist route is Ciaccona plus Chisa. Aero Rover is the free healing alternative, while Shorekeeper and Verina are comfort options. Cartethyia's Sequence 2 raises the Erosion stack limit and reduces the third slot's mechanical burden.")
    .replaceAll("At R0-R1, Cartethyia / Ciaccona / Aero Rover is the primary target. Chisa is a real specialist alternative at any sequence and can overtake Rover with Kumokiri; from R2, Cartethyia no longer relies on Rover for the extra stack limit. Shorekeeper is a comfort alternative.", "Cartethyia's best specialist team is Cartethyia / Ciaccona / Chisa. Aero Rover is the accessible healing alternative, while Shorekeeper is a safer multi-wave option. Cartethyia's Sequence 2 increases the Erosion stack limit.")
    .replaceAll("If you are only checking Cartethyia before selecting your Resonators, start with her sequence and Chisa's weapon. R0-R1 generally prefers Ciaccona and Aero Rover, but Chisa is already a valid specialist and can pull ahead with Kumokiri. From R2, Cartethyia supplies the extra stack limit herself. Shorekeeper remains a comfortable healer option when safety matters more than maximum damage.", "If you are only checking Cartethyia before selecting your Resonators, start with Ciaccona and Chisa for the best specialist route. Aero Rover is the free healing alternative, while Shorekeeper is the safer multi-wave option. Cartethyia's Sequence 2 increases the Erosion stack limit and makes the third slot less mechanically mandatory.");
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
