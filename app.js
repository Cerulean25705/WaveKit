const wallpaper = (slug, file) => [slug, file];

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}

const wallpapers = new Map([
  wallpaper("aalto", "aalto.webp"), wallpaper("aemeath", "aemeath.webp"), wallpaper("augusta", "augusta.webp"),
  wallpaper("baizhi", "baizhi.webp"), wallpaper("brant", "brant.jpg"), wallpaper("buling", "buling.webp"),
  wallpaper("calcharo", "calcharo.jpg"), wallpaper("camellya", "camellya.jpg"), wallpaper("cantarella", "cantarella.jpg"),
  wallpaper("carlotta", "carlotta.jpg"), wallpaper("cartethyia", "cartethyia.webp"), wallpaper("changli", "changli.jpg"),
  wallpaper("chisa", "chisa.webp"), wallpaper("chixia", "chixia.webp"), wallpaper("ciaccona", "ciaccona.webp"),
  wallpaper("danjin", "danjin.webp"), wallpaper("denia", "denia.webp"), wallpaper("encore", "encore.jpg"),
  wallpaper("galbrena", "galbrena.webp"), wallpaper("hiyuki", "hiyuki.webp"), wallpaper("iuno", "iuno.webp"),
  wallpaper("jianxin", "jianxin.jpg"), wallpaper("jinhsi", "jinhsi.jpg"), wallpaper("jiyan", "jiyan.jpg"),
  wallpaper("lingyang", "lingyang.jpg"), wallpaper("lucilla", "lucilla.webp"), wallpaper("lucy", "lucy.webp"),
  wallpaper("lumi", "lumi.webp"), wallpaper("lupa", "lupa.webp"), wallpaper("luuk-herssen", "luuk-herssen.webp"),
  wallpaper("lynae", "lynae.webp"), wallpaper("mornye", "mornye.webp"), wallpaper("mortefi", "mortefi.webp"),
  wallpaper("phoebe", "phoebe.jpg"), wallpaper("phrolova", "phrolova.webp"), wallpaper("qiuyuan", "qiuyuan.webp"),
  wallpaper("rebecca", "rebecca.webp"), wallpaper("roccia", "roccia.jpg"), wallpaper("rover", "rover.jpg"),
  wallpaper("sanhua", "sanhua.webp"), wallpaper("shorekeeper", "shorekeeper.jpg"), wallpaper("sigrika", "sigrika.webp"),
  wallpaper("taoqi", "taoqi.webp"), wallpaper("verina", "verina.jpg"), wallpaper("xiangli-yao", "xiangli-yao.jpg"),
  wallpaper("yangyang", "yangyang.webp"), wallpaper("yangyang-xuanling", "yangyang-xuanling.webp"),
  wallpaper("yinlin", "yinlin.jpg"), wallpaper("youhu", "youhu.webp"), wallpaper("suisui", "suisui.webp"),
  wallpaper("yuanwu", "yuanwu.webp"), wallpaper("zani", "zani.webp"), wallpaper("zhezhi", "zhezhi.jpg")
]);

const builds = Object.fromEntries([
  ["shorekeeper", "Healer-Support Build", "Stellar Symphony", "Rejuvenating Glow", "Fallacy of No Return", "Healing Bonus or CRIT DMG / Energy Regen or HP% / HP%"],
  ["yangyang-xuanling", "Current Patch Havoc DPS Build", "Azure Oath", "Song of Feathered Trace", "Thousand-Puppet Pavilion", "CRIT Rate or CRIT DMG / Havoc DMG or ATK% / ATK%"],
  ["suisui", "Upcoming Support Build", "Firstlight's Herald", "Moonlit Clouds or Rejuvenating Glow", "Impermanence Heron or support Echo", "Energy Regen / kit-scaling stat / comfort"],
  ["phrolova", "Havoc DPS Build", "Lethean Elegy", "Dream of the Lost, Havoc Eclipse", "Nightmare: Hecate", "Crit DMG or CRIT Rate / Havoc DMG / ATK%"],
  ["augusta", "Electro DPS", "Thunderflare Dominion", "Crown of Valor, Void Thunder", "The False Sovereign", "Crit DMG or CRIT Rate / Electro DMG or ATK% / ATK%"],
  ["iuno", "Aero Sub-DPS", "Moongazer's Sigil", "Crown of Valor, Sierra Gale", "Lady of the Sea", "Crit DMG or CRIT Rate / Aero DMG / ATK%"],
  ["lynae", "Spectro Sub-DPS Build", "Spectrum Blaster", "Pact of Neonlight Leap", "Hyvatia", "CRIT Rate or CRIT DMG / Spectro DMG or Energy Regen / ATK%"],
  ["mornye", "DEF-Based Healer Support Build", "Starfield Calibrator", "Halo of Starry Radiance", "Reactor Husk", "Healing Bonus / Energy Regen / DEF%"],
  ["aemeath", "Tune Rupture/Fusion Burst DPS Build", "Everbright Polestar", "Trailblazing Star", "Sigillum", "Crit Rate or Crit DMG / Fusion DMG or ATK% / ATK%"],
  ["luuk-herssen", "Tune Strain Basic ATK DPS Build", "Daybreaker's Spine", "Rite of Gilded Revelation", "Twin Nova - Nebulous Cannon", "Crit Rate or Crit DMG / Spectro DMG / ATK%"],
  ["sigrika", "Echo Skill Aero DPS Build", "Solsworn Ciphers", "Sound of True Name", "Nameless Explorer", "Crit DMG or CRIT Rate / Energy Regen or ATK% / ATK%"],
  ["hiyuki", "Glacio Chafe DPS Build", "Frostburn", "Wishes of Quiet Snowfall", "Reminiscence: Threnodian - Voidborne Construct", "Crit Rate or Crit DMG / Glacio DMG or ATK% / ATK%"],
  ["denia", "Fusion Burst Sub-DPS Build", "Forged Dwarf Star", "Chromatic Foam", "Reminiscence: Denia", "Crit Rate or Crit DMG / Fusion DMG / ATK%"],
  ["lucilla", "Glacio Chafe Support Build", "Freeze Frame", "Wishes of Quiet Snowfall", "Glommoth", "CRIT Rate or CRIT DMG / Glacio DMG or ATK% / ATK%"],
  ["verina", "Full Support Build", "Stellar Symphony", "Rejuvenating Glow", "Fallacy of No Return", "Healing Bonus or ATK% / Energy Regen / ATK%"],
  ["jiyan", "Liberation DPS Build", "Verdant Summit", "Sierra Gale", "Nightmare: Feilian Beringal", "CRIT Rate or CRIT DMG / Aero DMG / ATK%"],
  ["carlotta", "Glacio Main DPS Build", "The Last Dance", "Frosty Resolve", "Sentry Construct", "CRIT Rate or CRIT DMG / Glacio DMG or ATK% / ATK%"],
  ["phoebe", "Spectro Frazzle Sub-DPS Build", "Luminous Hymn", "Eternal Radiance", "Capitaneus", "CRIT Rate or CRIT DMG / Spectro DMG / ATK%"],
  ["brant", "Fusion DPS Build", "Unflickering Valor", "Tidebreaking Courage", "Dragon of Dirge", "CRIT Rate or CRIT DMG / Energy Regen or Fusion DMG / ATK%"],
  ["cantarella", "Havoc Sub-DPS Build", "Whispers of Sirens", "Midnight Veil", "Lorelei", "CRIT Rate or CRIT DMG / Havoc DMG / ATK%"],
  ["zani", "Spectro Frazzle Main DPS Build", "Blazing Justice", "Eternal Radiance", "Capitaneus", "CRIT Rate or CRIT DMG / Spectro DMG / ATK%"],
  ["ciaccona", "Aero Erosion Sub-DPS Build", "Woodland Aria", "Gusts of Welkin", "Reminiscence: Fleurdelys", "CRIT Rate or CRIT DMG / Aero DMG / ATK%"],
  ["cartethyia", "Aero Erosion DPS", "Defier's Thorn", "Windward Pilgrimage", "Reminiscence: Fleurdelys", "Crit Rate & Crit DMG / HP%"],
  ["lupa", "Fusion Enabler Build", "Wildfire Mark", "Flaming Clawprint", "Lioness of Glory", "Crit Rate or Crit DMG / Fusion DMG / ATK%"],
  ["galbrena", "Fusion Echo Skill DPS Build", "Lux & Umbra", "Flamewing's Shadow, Flaming Clawprint", "Corrosaurus", "Crit Rate or Crit DMG / Fusion DMG / ATK%"],
  ["qiuyuan", "Full Echo Sub-DPS Build", "Emerald Sentence", "Law of Harmony, Sierra Gale", "Reminiscence: Fenrico", "Crit Rate or Crit DMG / Aero DMG / ATK%"],
  ["chisa", "Havoc Bane Support Build", "Kumokiri", "Thread of Severed Fate, Havoc Eclipse", "Reminiscence: Threnodian - Leviathan", "Crit Rate or Crit DMG / ATK% or Havoc DMG / ATK%"],
  ["rebecca", "Heavy Attack Buffer Sub-DPS Build", "Skull Thrasher", "Shadow of Shattered Dreams, Void Thunder, Reel of Spliced Memories", "Reminiscence: Nightmare Adam Smasher", "Crit Rate or Crit DMG / Electro DMG / ATK%"],
  ["lucy", "Heavy Attack DMG DPS Build", "Spectral Trigger", "Shadow of Shattered Dreams, Rite of Gilded Revelation, Celestial Light", "Reminiscence: Nightmare Adam Smasher", "Crit Rate or Crit DMG / Spectro DMG / ATK%"],
  ["sanhua", "Basic ATK Sub-DPS Build", "Emerald of Genesis", "Moonlit Clouds", "Impermanence Heron", "CRIT Rate or CRIT DMG / Glacio DMG or Energy Regen / ATK%"],
  ["calcharo", "Electro DPS Build", "Lustrous Razor", "Void Thunder", "Nightmare: Thundering Mephis", "CRIT Rate or CRIT DMG / Electro DMG / ATK%"],
  ["encore", "Fusion DPS Build", "Stringmaster", "Molten Rift", "Nightmare: Inferno Rider", "CRIT Rate or CRIT DMG / Fusion DMG / ATK% or Energy Regen"],
  ["rover", "Flexible Rover Build", "Emerald of Genesis", "Moonlit Clouds or matching element set", "Impermanence Heron or Dreamless", "CRIT Rate or CRIT DMG / Element DMG or Energy Regen / ATK%"],
  ["jinhsi", "Burst DPS Build", "Ages of Harvest", "Celestial Light", "Jué", "CRIT Rate or CRIT DMG / Spectro DMG / ATK%"],
  ["changli", "Fusion DMG Build", "Blazing Brilliance", "Molten Rift", "Nightmare: Inferno Rider", "CRIT Rate or CRIT DMG / Fusion DMG / ATK%"],
  ["zhezhi", "Glacio Sub-DPS Build", "Rime-Draped Sprouts", "Empyrean Anthem", "Nightmare: Lampylumen Myriad", "CRIT Rate or CRIT DMG / Glacio DMG or Energy Regen / ATK%"],
  ["xiangli-yao", "Electro DPS Build", "Verity's Handle", "Void Thunder", "Nightmare: Thundering Mephis", "CRIT Rate or CRIT DMG / Electro DMG / ATK%"],
  ["camellya", "Havoc Main DPS Build", "Red Spring", "Havoc Eclipse", "Nightmare: Crownless", "CRIT Rate or CRIT DMG / Havoc DMG / ATK%"],
  ["roccia", "Havoc Sub-DPS Build", "Tragicomedy", "Midnight Veil", "Nightmare: Impermanence Heron", "CRIT Rate or CRIT DMG / Havoc DMG or Energy Regen / ATK%"],
  ["buling", "Skill Damage Support Build", "Stringmaster", "Rejuvenating Glow", "Fallacy of No Return", "CRIT Rate or CRIT DMG / Electro DMG or Energy Regen / ATK%"],
  ["mortefi", "Coordinated ATK Sub-DPS Build", "Static Mist", "Empyrean Anthem", "Hecate", "CRIT Rate / Fusion DMG or Energy Regen / ATK%"],
  ["danjin", "Havoc DPS Build", "Blazing Brilliance", "Havoc Eclipse", "Nightmare: Crownless", "CRIT Rate or CRIT DMG / Havoc DMG / ATK%"],
  ["jianxin", "Crowd Control Sub-DPS Build", "Verity's Handle", "Moonlit Clouds", "Impermanence Heron", "CRIT Rate or CRIT DMG / Aero DMG or Energy Regen / ATK%"],
  ["lingyang", "Glacio DPS Build", "Abyss Surges", "Frosty Resolve", "Sentry Construct", "CRIT Rate or CRIT DMG / Glacio DMG / ATK%"],
  ["yinlin", "Sub-DPS Build", "Stringmaster", "Moonlit Clouds", "Impermanence Heron", "CRIT Rate or CRIT DMG / Electro DMG or Energy Regen / ATK%"],
  ["aalto", "DPS-Support Build", "The Last Dance", "Moonlit Clouds", "Impermanence Heron", "CRIT DMG or CRIT Rate / Aero DMG or Energy Regen / ATK%"],
  ["yuanwu", "Sub-DPS Build", "Abyss Surges", "Empyrean Anthem", "Nightmare: Tempest Mephis", "CRIT Rate or CRIT DMG / Electro DMG / DEF%"],
  ["chixia", "Fusion DPS Build", "The Last Dance", "Molten Rift", "Nightmare: Inferno Rider", "CRIT DMG or CRIT Rate / Fusion DMG / ATK%"],
  ["baizhi", "Full Support Build", "Stellar Symphony", "Rejuvenating Glow", "Bell-Borne Geochelone", "Healing Bonus or HP% / Energy Regen / HP%"],
  ["yangyang", "Energy Regen Sub-DPS Build", "Emerald of Genesis", "Moonlit Clouds", "Bell-Borne Geochelone", "CRIT Rate or CRIT DMG / Aero DMG / ATK%"],
  ["taoqi", "Tank Sub-DPS Build", "Dauntless Evernight", "Moonlit Clouds", "Bell-Borne Geochelone", "CRIT Rate or CRIT DMG / Havoc DMG / DEF%"],
  ["youhu", "Full Support Healer Build", "Abyss Surges", "Rejuvenating Glow", "Bell-Borne Geochelone", "Healing Bonus or ATK% / Energy Regen or ATK% / ATK%"],
  ["lumi", "Resonance Skill Sub DPS", "Lustrous Razor", "Moonlit Clouds", "Impermanence Heron", "CRIT Rate or CRIT DMG / Electro DMG or Energy Regen / ATK%"]
].map(([slug, build, weapon, sonata, echo, stats]) => [slug, { build, weapon, sonata, echo, stats }]));

const echoCosts = {
  cartethyia: "4-4-1-1-1",
  "yangyang-xuanling": "4-3-3-1-1",
  zani: "3-4-3-1-1",
  phoebe: "3-4-3-1-1",
  "luuk-herssen": "3-4-3-1-1",
  galbrena: "3-4-3-1-1",
  phrolova: "4-3-3-1-1",
  shorekeeper: "4-3-3-1-1",
  verina: "4-3-3-1-1",
  mornye: "4-3-3-1-1",
  baizhi: "4-3-3-1-1",
  youhu: "4-3-3-1-1",
  buling: "4-3-3-1-1",
  suisui: "4-3-3-1-1"
};

const weaponFallbacks = {
  Sword: ["Emerald of Genesis", "Blazing Brilliance", "Commando of Conviction", "Lunar Cutter"],
  Rectifier: ["Stringmaster", "Cosmic Ripples", "Augment", "Jinzhou Keeper"],
  Broadblade: ["Verdant Summit", "Lustrous Razor", "Autumntrace", "Helios Cleaver"],
  Gauntlets: ["Abyss Surges", "Verity's Handle", "Stonard", "Marcato"],
  Pistols: ["Static Mist", "The Last Dance", "Thunderbolt", "Cadenza"]
};

const roleWeaponFallbacks = {
  support: {
    Sword: ["Emerald of Genesis", "Commando of Conviction", "Lunar Cutter"],
    Rectifier: ["Stellar Symphony", "Variation", "Rectifier#25", "Comet Flare"],
    Broadblade: ["Dauntless Evernight", "Discord", "Broadblade#41"],
    Gauntlets: ["Marcato", "Originite: Type IV", "Gauntlets#21D"],
    Pistols: ["Static Mist", "Cadenza", "Pistols#26"]
  },
  damage: {
    Sword: ["Emerald of Genesis", "Blazing Brilliance", "Lumingloss", "Commando of Conviction"],
    Rectifier: ["Stringmaster", "Cosmic Ripples", "Augment", "Jinzhou Keeper"],
    Broadblade: ["Verdant Summit", "Lustrous Razor", "Autumntrace", "Helios Cleaver"],
    Gauntlets: ["Abyss Surges", "Verity's Handle", "Stonard", "Marcato"],
    Pistols: ["Static Mist", "The Last Dance", "Thunderbolt", "Novaburst"]
  }
};

const characterWeaponAlternates = {
  shorekeeper: ["Variation", "Rectifier#25", "Comet Flare"],
  verina: ["Variation", "Rectifier#25", "Comet Flare"],
  baizhi: ["Variation", "Rectifier#25", "Comet Flare"],
  buling: ["Lethean Elegy", "Rime-Draped Sprouts", "Luminous Hymn", "Cosmic Ripples", "Waltz in Masquerade"],
  lucilla: ["Whispers of Sirens", "Stringmaster", "Lethean Elegy", "Rime-Draped Sprouts", "Augment", "Waltz in Masquerade"],
  mornye: ["Discord", "Dauntless Evernight", "Broadblade#41"],
  youhu: ["Marcato", "Originite: Type IV", "Gauntlets#21D"],
  taoqi: ["Discord", "Dauntless Evernight", "Broadblade#41"],
  mortefi: ["Static Mist", "Cadenza", "Thunderbolt"],
  sanhua: ["Emerald of Genesis", "Commando of Conviction", "Lunar Cutter"],
  yangyang: ["Emerald of Genesis", "Commando of Conviction", "Lunar Cutter"],
  "yangyang-xuanling": ["Emerald Sentence", "Emerald of Genesis", "Red Spring", "Everbright Polestar", "Frostburn"],
  danjin: ["Emerald of Genesis", "Lumingloss", "Commando of Conviction"],
  chixia: ["Static Mist", "Thunderbolt", "Novaburst"],
  aalto: ["Static Mist", "Cadenza", "Novaburst"],
  carlotta: ["Static Mist", "Thunderbolt", "Novaburst"],
  camellya: ["Emerald of Genesis", "Blazing Brilliance", "Lumingloss"]
};

const weaponCatalog = new Map([
  ["Abyss Surges", "Gauntlets"],
  ["Ages of Harvest", "Broadblade"],
  ["Amity Accord", "Gauntlets"],
  ["Augment", "Rectifier"],
  ["Aether Strike", "Gauntlets"],
  ["Autumntrace", "Broadblade"],
  ["Aureate Zenith", "Broadblade"],
  ["Azure Oath", "Sword"],
  ["Beguiling Melody", "Broadblade"],
  ["Blazing Brilliance", "Sword"],
  ["Blazing Justice", "Gauntlets"],
  ["Bloodpact's Pledge", "Sword"],
  ["Boson Astrolabe", "Rectifier"],
  ["Broadblade of Night", "Broadblade"],
  ["Broadblade of Voyager", "Broadblade"],
  ["Broadblade#41", "Broadblade"],
  ["Cadenza", "Pistols"],
  ["Call of the Abyss", "Rectifier"],
  ["Celestial Spiral", "Gauntlets"],
  ["Comet Flare", "Rectifier"],
  ["Commando of Conviction", "Sword"],
  ["Cosmic Ripples", "Rectifier"],
  ["Daybreaker's Spine", "Gauntlets"],
  ["Dauntless Evernight", "Broadblade"],
  ["Defier's Thorn", "Sword"],
  ["Discord", "Broadblade"],
  ["Emerald Sentence", "Sword"],
  ["Emerald of Genesis", "Sword"],
  ["Endless Collapse", "Sword"],
  ["Everbright Polestar", "Sword"],
  ["Fables of Wisdom", "Sword"],
  ["Feather Edge", "Sword"],
  ["Firstlight's Herald", "Rectifier"],
  ["Forged Dwarf Star", "Rectifier"],
  ["Freeze Frame", "Rectifier"],
  ["Frostburn", "Sword"],
  ["Fusion Accretion", "Rectifier"],
  ["Gauntlets of Night", "Gauntlets"],
  ["Gauntlets of Voyager", "Gauntlets"],
  ["Gauntlets#21D", "Gauntlets"],
  ["Guardian Broadblade", "Broadblade"],
  ["Guardian Gauntlets", "Gauntlets"],
  ["Guardian Pistols", "Pistols"],
  ["Guardian Rectifier", "Rectifier"],
  ["Guardian Sword", "Sword"],
  ["Helios Cleaver", "Broadblade"],
  ["Hollow Mirage", "Gauntlets"],
  ["Jinzhou Keeper", "Rectifier"],
  ["Kumokiri", "Broadblade"],
  ["Laser Shearer", "Sword"],
  ["Legend of Drunken Hero", "Gauntlets"],
  ["Lethean Elegy", "Rectifier"],
  ["Luminous Hymn", "Rectifier"],
  ["Lux & Umbra", "Pistols"],
  ["Lumingloss", "Sword"],
  ["Lunar Cutter", "Sword"],
  ["Lustrous Razor", "Broadblade"],
  ["Marcato", "Gauntlets"],
  ["Meditations on Mercy", "Broadblade"],
  ["Moongazer's Sigil", "Gauntlets"],
  ["Novaburst", "Pistols"],
  ["Ocean's Gift", "Rectifier"],
  ["Originite: Type I", "Broadblade"],
  ["Originite: Type II", "Sword"],
  ["Originite: Type III", "Pistols"],
  ["Originite: Type IV", "Gauntlets"],
  ["Originite: Type V", "Rectifier"],
  ["Overture", "Sword"],
  ["Phasic Homogenizer", "Pistols"],
  ["Pistols of Night", "Pistols"],
  ["Pistols of Voyager", "Pistols"],
  ["Pistols#26", "Pistols"],
  ["Pulsation Bracer", "Gauntlets"],
  ["Radiance Cleaver", "Broadblade"],
  ["Radiant Dawn", "Rectifier"],
  ["Rectifier of Night", "Rectifier"],
  ["Rectifier of Voyager", "Rectifier"],
  ["Rectifier#25", "Rectifier"],
  ["Red Spring", "Sword"],
  ["Relativistic Jet", "Pistols"],
  ["Rime-Draped Sprouts", "Rectifier"],
  ["Romance in Farewell", "Pistols"],
  ["Skull Thrasher", "Pistols"],
  ["Solar Flame", "Pistols"],
  ["Solsworn Ciphers", "Gauntlets"],
  ["Somnoire Anchor", "Sword"],
  ["Spectral Trigger", "Pistols"],
  ["Spectrum Blaster", "Pistols"],
  ["Starfield Calibrator", "Broadblade"],
  ["Static Mist", "Pistols"],
  ["Stellar Symphony", "Rectifier"],
  ["Stonard", "Gauntlets"],
  ["Stringmaster", "Rectifier"],
  ["Sword of Night", "Sword"],
  ["Sword of Voyager", "Sword"],
  ["Sword#18", "Sword"],
  ["The Last Dance", "Pistols"],
  ["Thunderbolt", "Pistols"],
  ["Thunderflare Dominion", "Broadblade"],
  ["Tragicomedy", "Gauntlets"],
  ["Undying Flame", "Pistols"],
  ["Unflickering Valor", "Sword"],
  ["Variation", "Rectifier"],
  ["Verdant Summit", "Broadblade"],
  ["Verity's Handle", "Gauntlets"],
  ["Waltz in Masquerade", "Rectifier"],
  ["Waning Redshift", "Broadblade"],
  ["Whispers of Sirens", "Rectifier"],
  ["Wildfire Mark", "Broadblade"],
  ["Woodland Aria", "Pistols"]
]);

const weaponPurposeHints = {
  "Broadblade of Night": "Starter Broadblade DPS",
  "Broadblade of Voyager": "Starter Broadblade DPS",
  "Broadblade#41": "Budget Broadblade DPS",
  "Guardian Broadblade": "Early Broadblade sustain",
  "Originite: Type I": "Early Broadblade comfort",
  "Dauntless Evernight": "Defensive Broadblade support",
  "Discord": "Energy Broadblade support",
  "Helios Cleaver": "Budget Broadblade DPS",
  "Autumntrace": "Battle Pass Broadblade DPS",
  "Beguiling Melody": "Broadblade healer/support",
  "Meditations on Mercy": "Broadblade support option",
  "Radiance Cleaver": "Broadblade ATK DPS",
  "Waning Redshift": "Broadblade damage option",

  "Sword of Night": "Starter Sword DPS",
  "Sword of Voyager": "Starter Sword DPS",
  "Sword#18": "Budget Sword DPS",
  "Guardian Sword": "Early Sword comfort",
  "Originite: Type II": "Early Sword comfort",
  "Commando of Conviction": "Budget Sword DPS",
  "Lunar Cutter": "Quick-swap Sword DPS",
  "Lumingloss": "Skill Sword DPS",
  "Overture": "Energy Sword support",
  "Laser Shearer": "Sword DPS option",
  "Feather Edge": "Sword DPS option",
  "Endless Collapse": "Sword DPS option",
  "Fables of Wisdom": "Sword support option",
  "Bloodpact's Pledge": "Sword damage support",
  "Somnoire Anchor": "Event Sword DPS",
  "Azure Oath": "Current patch Sword DPS option",

  "Pistols of Night": "Starter Pistols DPS",
  "Pistols of Voyager": "Starter Pistols DPS",
  "Pistols#26": "Budget Pistols support",
  "Guardian Pistols": "Early Pistols comfort",
  "Originite: Type III": "Early Pistols comfort",
  "Cadenza": "Energy Pistols support",
  "Thunderbolt": "Budget Pistols DPS",
  "Novaburst": "Budget Pistols DPS",
  "Undying Flame": "Fusion Pistols DPS",
  "Relativistic Jet": "Energy Pistols support",
  "Romance in Farewell": "Craftable Pistols DPS",
  "Solar Flame": "Pistols DPS option",
  "Phasic Homogenizer": "Pistols DPS option",

  "Gauntlets of Night": "Starter Gauntlets DPS",
  "Gauntlets of Voyager": "Starter Gauntlets DPS",
  "Gauntlets#21D": "Budget Gauntlets support",
  "Guardian Gauntlets": "Early Gauntlets comfort",
  "Originite: Type IV": "Early Gauntlets comfort",
  "Marcato": "Energy Gauntlets support",
  "Stonard": "Battle Pass Gauntlets DPS",
  "Hollow Mirage": "Gauntlets DPS option",
  "Amity Accord": "Gauntlets support option",
  "Pulsation Bracer": "Gauntlets DPS option",
  "Celestial Spiral": "Gauntlets DPS option",
  "Legend of Drunken Hero": "Gauntlets DPS option",
  "Aether Strike": "Current patch Gauntlets option",

  "Rectifier of Night": "Starter Rectifier DPS",
  "Rectifier of Voyager": "Starter Rectifier DPS",
  "Rectifier#25": "Budget Rectifier support",
  "Guardian Rectifier": "Early Rectifier comfort",
  "Originite: Type V": "Early Rectifier comfort",
  "Variation": "Energy Rectifier support",
  "Comet Flare": "Healing Rectifier support",
  "Jinzhou Keeper": "Budget Rectifier DPS",
  "Augment": "Battle Pass Rectifier DPS",
  "Fusion Accretion": "Rectifier DPS option",
  "Freeze Frame": "Rectifier DPS option",
  "Waltz in Masquerade": "Rectifier DPS option",
  "Radiant Dawn": "Rectifier DPS option",
  "Ocean's Gift": "Rectifier support option",
  "Call of the Abyss": "Rectifier support option",
  "Firstlight's Herald": "Current patch Rectifier option"
};

const fiveStarWeapons = new Set([
  "Abyss Surges", "Ages of Harvest", "Blazing Brilliance", "Blazing Justice", "Bloodpact's Pledge",
  "Cosmic Ripples", "Daybreaker's Spine", "Defier's Thorn", "Emerald Sentence", "Emerald of Genesis",
  "Everbright Polestar", "Forged Dwarf Star", "Frostburn", "Lethean Elegy", "Luminous Hymn",
  "Lux & Umbra", "Lustrous Razor", "Moongazer's Sigil", "Red Spring", "Rime-Draped Sprouts",
  "Solsworn Ciphers", "Spectral Trigger", "Spectrum Blaster", "Starfield Calibrator", "Static Mist",
  "Stellar Symphony", "Stringmaster", "The Last Dance", "Thunderflare Dominion", "Tragicomedy",
  "Unflickering Valor", "Verdant Summit", "Verity's Handle", "Whispers of Sirens", "Wildfire Mark",
  "Woodland Aria", "Azure Oath", "Firstlight's Herald", "Aether Strike"
]);

const fourStarResonators = new Set([
  "buling",
  "aalto", "baizhi", "chixia", "danjin", "lumi", "mortefi", "sanhua", "taoqi", "yangyang",
  "yuanwu", "youhu"
]);

const upcomingCharacters = new Set(["suisui"]);
const upcomingWeapons = new Set(["Firstlight's Herald"]);

const roverForms = {
  Spectro: {
    element: "Spectro",
    roles: ["main", "sub"],
    score: 75,
    synergies: ["spectro", "any"],
    tags: ["flexible", "burst"],
    note: "Flexible Spectro Rover setup. Good when you need a familiar account anchor or an extra Spectro body.",
    build: {
      build: "Spectro Rover flexible build",
      weapon: "Emerald of Genesis",
      sonata: "Celestial Light or Moonlit Clouds",
      echo: "Jué, Mourning Aix, or Impermanence Heron",
      stats: "CRIT Rate or CRIT DMG / Spectro DMG or Energy Regen / ATK%"
    }
  },
  Havoc: {
    element: "Havoc",
    roles: ["main", "sub"],
    score: 78,
    synergies: ["havoc"],
    tags: ["havoc", "burst"],
    note: "Havoc Rover is a practical damage option when you want a familiar on-field or quick-swap carry.",
    build: {
      build: "Havoc Rover damage build",
      weapon: "Emerald of Genesis",
      sonata: "Havoc Eclipse or Moonlit Clouds",
      echo: "Dreamless or Nightmare: Crownless",
      stats: "CRIT Rate or CRIT DMG / Havoc DMG / ATK%"
    }
  },
  Aero: {
    element: "Aero",
    roles: ["main", "sub", "support"],
    score: 84,
    synergies: ["aero"],
    tags: ["aero", "erosion", "flexible"],
    note: "Aero Rover can slot into Aero Erosion teams as accessible utility. They are not a true healer like Shorekeeper, Verina, Baizhi, or Youhu.",
    build: {
      build: "Aero Rover damage build",
      weapon: "Emerald of Genesis",
      sonata: "Windward Pilgrimage or Sierra Gale",
      echo: "Reminiscence: Fleurdelys or Feilian Beringal",
      stats: "CRIT Rate or CRIT DMG / Aero DMG / ATK%"
    }
  },
  Electro: {
    element: "Electro",
    roles: ["sub"],
    score: 80,
    synergies: ["electro", "any"],
    tags: ["electro", "flare", "skill", "flexible"],
    note: "Electro Rover is a flexible version 3.5 sub-DPS/support with team ATK utility. Current testing is still developing, so WaveKit does not treat this form as a standalone carry.",
    build: {
      build: "Electro Rover sub-DPS/support build",
      weapon: "Emerald of Genesis",
      sonata: "Void Thunder or Moonlit Clouds",
      echo: "Nightmare: Tempest Mephis or Impermanence Heron",
      stats: "CRIT Rate or CRIT DMG / Electro DMG or Energy Regen / ATK%"
    }
  }
};

const knownWeaponTypes = {
  "Stellar Symphony": "Rectifier",
  "Lethean Elegy": "Rectifier",
  "Thunderflare Dominion": "Broadblade",
  "Moongazer's Sigil": "Gauntlets",
  "Spectrum Blaster": "Pistols",
  "Starfield Calibrator": "Broadblade",
  "Everbright Polestar": "Sword",
  "Daybreaker's Spine": "Gauntlets",
  "Solsworn Ciphers": "Gauntlets",
  "Frostburn": "Sword",
  "Forged Dwarf Star": "Rectifier",
  "Defier's Thorn": "Sword",
  "Red Spring": "Sword",
  "Ages of Harvest": "Broadblade",
  "Blazing Justice": "Gauntlets",
  "Whispers of Sirens": "Rectifier",
  "Woodland Aria": "Pistols",
  "Rime-Draped Sprouts": "Rectifier",
  "Emerald Sentence": "Sword",
  "Kumokiri": "Broadblade",
  "Skull Thrasher": "Pistols",
  "Spectral Trigger": "Pistols",
  "Static Mist": "Pistols",
  "Emerald of Genesis": "Sword",
  "Abyss Surges": "Gauntlets",
  "The Last Dance": "Pistols",
  "Variation": "Rectifier",
  "Rectifier#25": "Rectifier",
  "Comet Flare": "Rectifier",
  "Jinzhou Keeper": "Rectifier",
  "Commando of Conviction": "Sword",
  "Lunar Cutter": "Sword",
  "Lumingloss": "Sword",
  "Autumntrace": "Broadblade",
  "Helios Cleaver": "Broadblade",
  "Dauntless Evernight": "Broadblade",
  "Discord": "Broadblade",
  "Broadblade#41": "Broadblade",
  "Stonard": "Gauntlets",
  "Marcato": "Gauntlets",
  "Originite: Type IV": "Gauntlets",
  "Gauntlets#21D": "Gauntlets",
  "Thunderbolt": "Pistols",
  "Cadenza": "Pistols",
  "Novaburst": "Pistols",
  "Pistols#26": "Pistols",
  "Azure Oath": "Sword",
  "Firstlight's Herald": "Rectifier",
  "Aether Strike": "Gauntlets"
};

const characters = [
  c("shorekeeper", "Shorekeeper", "Spectro", "Rectifier", ["healer", "support"], 99, ["any"], ["crit", "sustain"], "Premium sustain. Healing, Crit support, and low-stress team flow."),
  c("yangyang-xuanling", "Yangyang: Xuanling", "Havoc", "Sword", ["main"], 100, ["havoc"], ["havoc", "heavy", "bane", "hypercarry", "current-patch"], "Version 3.5 Havoc Bane and Heavy Attack hypercarry. Rebecca, Lynae, or Phrolova support her damage plan; Chisa is the premium third slot, with Mornye in Lynae teams and Verina as an accessible fallback."),
  c("verina", "Verina", "Spectro", "Rectifier", ["healer", "support"], 96, ["any"], ["atk", "sustain"], "Very forgiving healer and universal support."),
  c("phrolova", "Phrolova", "Havoc", "Rectifier", ["main", "sub"], 98, ["havoc"], ["havoc", "coordinated"], "High-value Havoc carry/sub-DPS. Likes Havoc helpers and stable sustain."),
  c("cartethyia", "Cartethyia", "Aero", "Sword", ["main"], 98, ["aero"], ["aero", "erosion", "negative"], "Aero carry with strong payoff when the team supports her Erosion mechanic."),
  c("jinhsi", "Jinhsi", "Spectro", "Broadblade", ["main"], 92, ["spectro"], ["coordinated", "burst"], "Burst carry that wants helpers who enable her damage window."),
  c("zani", "Zani", "Spectro", "Gauntlets", ["main"], 92, ["spectro"], ["frazzle"], "Spectro damage dealer that appreciates Frazzle or Spectro support."),
  c("camellya", "Camellya", "Havoc", "Sword", ["main"], 90, ["havoc"], ["havoc"], "Strong Havoc carry, but asks for more comfort and timing."),
  c("augusta", "Augusta", "Electro", "Broadblade", ["main"], 98, ["electro"], ["electro", "heavy"], "Premium Electro carry that wants Heavy Attack/all-attribute support."),
  c("carlotta", "Carlotta", "Glacio", "Pistols", ["main"], 91, ["glacio"], ["glacio"], "Glacio carry with precise damage windows."),
  c("jiyan", "Jiyan", "Aero", "Broadblade", ["main"], 89, ["aero"], ["heavy"], "Readable Aero carry, friendly for players who like clear burst windows."),
  c("xiangli-yao", "Xiangli Yao", "Electro", "Gauntlets", ["main"], 88, ["electro"], ["liberation"], "Electro carry with a clear core loop."),
  c("changli", "Changli", "Fusion", "Sword", ["main", "support"], 88, ["fusion"], ["fusion"], "Fusion damage with hybrid support value."),
  c("lupa", "Lupa", "Fusion", "Broadblade", ["main", "support"], 87, ["fusion"], ["fusion"], "Fusion enabler who can anchor or improve Fusion teams."),
  c("encore", "Encore", "Fusion", "Rectifier", ["main"], 82, ["fusion"], ["fusion"], "Comfortable ranged Fusion carry."),
  c("calcharo", "Calcharo", "Electro", "Broadblade", ["main"], 78, ["electro"], ["electro"], "High commitment Electro carry. Better for players comfortable with timing."),
  c("danjin", "Danjin", "Havoc", "Sword", ["main"], 76, ["havoc"], ["havoc"], "Risky but rewarding Havoc carry. Needs safety notes."),
  c("lingyang", "Lingyang", "Glacio", "Gauntlets", ["main"], 72, ["glacio"], ["glacio"], "Aerial Glacio carry. Fun but less relaxed."),
  c("chixia", "Chixia", "Fusion", "Pistols", ["main"], 68, ["fusion"], ["ranged"], "Simple ranged carry for early accounts."),
  c("aemeath", "Aemeath", "Fusion", "Sword", ["main"], 98, ["fusion", "tune"], ["rupture", "tune", "liberation", "burst"], "Flexible Fusion carry with premium Tune Rupture and Denia-led Fusion Burst routes."),
  c("hiyuki", "Hiyuki", "Glacio", "Sword", ["main"], 96, ["glacio"], ["chafe"], "Newer Glacio damage entry. Keep recommendations conservative."),
  c("sigrika", "Sigrika", "Aero", "Gauntlets", ["main"], 98, ["aero", "echo-skill"], ["echo-skill"], "Premium Aero Echo Skill carry that strongly wants Qiuyuan-style support."),
  c("galbrena", "Galbrena", "Fusion", "Pistols", ["main"], 97, ["fusion", "echo-skill"], ["echo-skill", "heavy"], "Premium Fusion Echo Skill carry."),
  c("lucy", "Lucy", "Spectro", "Pistols", ["main"], 86, ["spectro"], ["heavy"], "New collab damage character. Keep long-term assumptions cautious."),
  c("luuk-herssen", "Luuk Herssen", "Spectro", "Gauntlets", ["main"], 85, ["spectro"], ["basic"], "Spectro basic-attack damage entry."),
  c("cantarella", "Cantarella", "Havoc", "Rectifier", ["sub", "support"], 94, ["havoc"], ["havoc", "utility"], "Havoc helper for damage and utility."),
  c("qiuyuan", "Qiuyuan", "Aero", "Sword", ["sub", "support"], 95, ["aero", "echo-skill"], ["echo", "echo-skill"], "Premium Echo Skill buffer/sub-DPS."),
  c("ciaccona", "Ciaccona", "Aero", "Pistols", ["sub"], 95, ["aero"], ["erosion", "negative"], "Premium Aero Erosion sub-DPS."),
  c("yinlin", "Yinlin", "Electro", "Rectifier", ["sub"], 88, ["electro"], ["coordinated"], "Electro off-field pressure and coordinated damage."),
  c("zhezhi", "Zhezhi", "Glacio", "Rectifier", ["sub", "support"], 87, ["glacio"], ["skill"], "Glacio helper and support."),
  c("sanhua", "Sanhua", "Glacio", "Sword", ["sub", "support"], 84, ["glacio"], ["basic"], "Excellent low-cost helper, especially for Basic Attack teams."),
  c("mortefi", "Mortefi", "Fusion", "Pistols", ["sub"], 82, ["fusion"], ["coordinated", "heavy"], "Coordinated attack helper for heavy-attack carries."),
  c("roccia", "Roccia", "Havoc", "Gauntlets", ["sub", "support"], 84, ["havoc"], ["group"], "Havoc grouping and support."),
  c("jianxin", "Jianxin", "Aero", "Gauntlets", ["support", "defense"], 72, ["aero"], ["shield", "group"], "Defensive comfort, grouping, and safer fights."),
  c("yangyang", "Yangyang", "Aero", "Sword", ["support", "sub"], 68, ["aero"], ["energy", "group"], "Beginner-friendly grouping and Energy help."),
  c("yuanwu", "Yuanwu", "Electro", "Gauntlets", ["sub", "defense"], 68, ["electro"], ["coordinated", "defense"], "Set-and-forget Electro utility."),
  c("aalto", "Aalto", "Aero", "Pistols", ["sub"], 64, ["aero"], ["aero"], "Aero ranged helper with movement tools."),
  c("lumi", "Lumi", "Electro", "Broadblade", ["sub"], 64, ["electro"], ["skill"], "Electro quick-swap helper."),
  c("iuno", "Iuno", "Aero", "Gauntlets", ["sub", "support"], 94, ["aero", "heavy"], ["utility", "heavy"], "Premium Aero support/sub-DPS."),
  c("lynae", "Lynae", "Spectro", "Pistols", ["sub", "support"], 94, ["spectro", "tune"], ["spectro", "tune", "rupture", "strain"], "Premium Tune sub-DPS/buffer."),
  c("denia", "Denia", "Fusion", "Rectifier", ["sub"], 90, ["fusion"], ["burst"], "Fusion Burst sub-DPS."),
  c("rebecca", "Rebecca", "Electro", "Pistols", ["sub", "support"], 86, ["electro"], ["heavy"], "Heavy Attack buffer/sub-DPS."),
  c("lucilla", "Lucilla", "Glacio", "Rectifier", ["sub"], 88, ["glacio", "echo-skill", "chafe"], ["glacio", "echo-skill", "chafe"], "Flexible support for Glacio Chafe and Echo Skill teams. Her Sonata and main Echo change with the team she is supporting."),
  c("phoebe", "Phoebe", "Spectro", "Rectifier", ["main", "sub", "support"], 88, ["spectro"], ["frazzle"], "Flexible Spectro/Frazzle damage or support direction."),
  c("brant", "Brant", "Fusion", "Sword", ["support", "main"], 86, ["fusion"], ["fusion", "comfort"], "Fusion support/hybrid with comfort value."),
  c("chisa", "Chisa", "Havoc", "Broadblade", ["support", "healer"], 86, ["havoc"], ["bane"], "Havoc support with sustain utility."),
  c("mornye", "Mornye", "Spectro", "Broadblade", ["healer", "support"], 98, ["any", "tune"], ["sustain", "def", "tune"], "Premium DEF-based healer support for Tune shells and safer rotations."),
  c("suisui", "Suisui", "Glacio", "Rectifier", ["support", "healer"], 82, ["any"], ["sustain", "upcoming"], "Unreleased Resonator. Suisui is expected on the second half of the version 3.5 banner, July 31 to August 20, 2026, so WaveKit lists her guide info but does not use her in the team helper yet."),
  c("baizhi", "Baizhi", "Glacio", "Rectifier", ["healer", "support"], 74, ["any"], ["sustain"], "Accessible healer for early accounts."),
  c("youhu", "Youhu", "Glacio", "Gauntlets", ["healer", "support"], 70, ["any"], ["sustain"], "Support healer with more specific kit management."),
  c("buling", "Buling", "Electro", "Rectifier", ["healer", "support"], 82, ["skill"], ["skill", "sustain"], "Electro support who heals while amplifying Resonance Skill damage. She is most valuable beside Skill-focused carries such as Carlotta and Phrolova."),
  c("taoqi", "Taoqi", "Havoc", "Broadblade", ["defense", "support"], 62, ["havoc"], ["shield"], "Defensive support for safer teams."),
  c("rover", "Rover", "Spectro / Havoc / Aero / Electro", "Sword", ["main", "sub", "support"], 75, ["any"], ["flexible"], "Flexible account anchor with four currently available forms.")
];

const state = {
  activeProfileId: "",
  editMode: true,
  profiles: [],
  profileName: "",
  experience: "New",
  priority: "Balanced",
  goal: "General play",
  suggestionStyle: "Best Teams",
  roleFilter: "All",
  search: "",
  weaponSearch: "",
  weaponTypeFilter: "All",
  roverForm: "Aero",
  roverForms: new Set(["Aero"]),
  selectedTeamKey: "",
  showAllTeams: false,
  flowVisitedResults: false,
  flowBuildsOpened: false,
  owned: {},
  focus: new Set(),
  weapons: new Set(),
  progress: {},
  weaponProgress: {},
  profileAvatar: "rover",
  profileAccent: "aero",
  savedTeams: [],
  buildPlan: []
};

let autoSaveTimer = null;
let autoSyncRetryTimer = null;
let autoSyncing = false;
let teamTunerDraft = null;
let materialKitPromise = null;

const suggestionStyleOptions = ["Best Teams", "Ready Now", "Build Priority"];
const roleFilters = ["All", "Main DPS", "Sub DPS", "Support", "Healer", "Defense"];
const weaponTypeFilters = ["All", "Sword", "Broadblade", "Gauntlets", "Pistols", "Rectifier"];

const carryCeilingScores = {
  cartethyia: 100,
  phrolova: 100,
  augusta: 99,
  sigrika: 98,
  aemeath: 97,
  hiyuki: 97,
  galbrena: 95,
  "yangyang-xuanling": 100,
  jiyan: 92,
  jinhsi: 92,
  changli: 91,
  camellya: 91,
  carlotta: 91,
  phoebe: 90,
  zani: 90,
  lupa: 89,
  "xiangli-yao": 88,
  brant: 87,
  lucy: 85,
  "luuk-herssen": 85,
  encore: 82,
  calcharo: 78,
  danjin: 76,
  lingyang: 72,
  chixia: 68
};

const teamPreferences = {
  phrolova: pref(["cantarella", "qiuyuan", "roccia"], ["chisa", "taoqi", "danjin"], ["shorekeeper", "verina", "chisa", "baizhi"]),
  "yangyang-xuanling": pref(["rebecca", "lynae", "phrolova"], ["mortefi"], ["chisa", "mornye", "verina", "shorekeeper", "baizhi"], ["chisa", "verina"]),
  cartethyia: pref(["ciaccona", "chisa", "rover", "sanhua", "aalto"], ["sanhua", "aalto", "iuno"], ["chisa", "rover", "shorekeeper", "verina", "baizhi"]),
  jinhsi: pref(["zhezhi", "yinlin", "mortefi", "yuanwu"], ["taoqi", "sanhua"], ["shorekeeper", "verina", "baizhi"]),
  zani: pref(["phoebe", "rover", "lynae"], ["shorekeeper", "verina", "mornye", "sanhua"], ["shorekeeper", "verina", "baizhi"]),
  camellya: pref(["cantarella", "roccia", "sanhua"], ["taoqi", "danjin", "chisa"], ["shorekeeper", "verina", "chisa", "baizhi"]),
  augusta: pref(["iuno", "rebecca", "yinlin"], ["yuanwu", "lumi", "jianxin"], ["shorekeeper", "verina", "buling", "mornye", "baizhi"]),
  carlotta: pref(["zhezhi", "taoqi", "lumi", "lucilla"], ["sanhua", "youhu", "baizhi"], ["shorekeeper", "verina", "baizhi", "youhu"]),
  jiyan: pref(["mortefi", "qiuyuan", "iuno"], ["yangyang", "ciaccona", "jianxin"], ["shorekeeper", "verina", "baizhi"]),
  "xiangli-yao": pref(["yinlin", "mornye", "lynae", "yuanwu"], ["lumi", "rebecca", "mortefi"], ["shorekeeper", "verina", "baizhi"]),
  changli: pref(["brant", "lupa", "denia"], ["mortefi", "encore", "sanhua"], ["shorekeeper", "verina", "baizhi"]),
  lupa: pref(["brant", "changli", "denia"], ["mortefi", "encore", "sanhua"], ["shorekeeper", "verina", "baizhi"]),
  encore: pref(["changli", "lupa", "brant"], ["mortefi", "denia", "sanhua"], ["shorekeeper", "verina", "baizhi"]),
  calcharo: pref(["lynae", "mornye", "yinlin"], ["yuanwu", "jianxin", "lumi"], ["shorekeeper", "verina", "baizhi", "mornye"]),
  danjin: pref(["roccia", "cantarella", "taoqi"], ["chisa", "sanhua", "yangyang"], ["shorekeeper", "verina", "chisa", "baizhi"]),
  lingyang: pref(["zhezhi", "sanhua", "lucilla"], ["youhu", "baizhi", "jianxin"], ["shorekeeper", "verina", "baizhi", "youhu"]),
  chixia: pref(["changli", "brant", "lupa"], ["mortefi", "denia", "sanhua"], ["shorekeeper", "verina", "baizhi"]),
  aemeath: pref(["lynae", "lupa", "denia", "changli", "brant"], ["mornye", "chisa", "shorekeeper", "verina"], ["mornye", "chisa", "shorekeeper", "verina", "buling", "baizhi"]),
  hiyuki: pref(["lucilla", "lynae", "chisa", "zhezhi"], ["sanhua", "youhu", "baizhi", "jianxin"], ["chisa", "mornye", "shorekeeper", "verina", "buling", "baizhi", "youhu"]),
  sigrika: pref(["lucilla", "qiuyuan", "ciaccona", "iuno"], ["yangyang", "jianxin", "aalto"], ["shorekeeper", "mornye", "verina", "buling", "chisa", "baizhi"]),
  galbrena: pref(["lucilla", "qiuyuan", "lupa", "brant", "iuno"], ["changli", "mortefi", "denia"], ["shorekeeper", "lupa", "verina", "buling", "baizhi"]),
  lucy: pref(["rebecca", "lynae", "phoebe"], ["zhezhi", "sanhua"], ["mornye", "shorekeeper", "verina", "buling", "baizhi"]),
  "luuk-herssen": pref(["denia", "lynae", "sanhua", "roccia"], ["phoebe", "zhezhi"], ["mornye", "shorekeeper", "verina", "baizhi"]),
  brant: pref(["lupa", "changli", "denia"], ["mortefi", "encore", "sanhua"], ["shorekeeper", "verina", "baizhi"]),
  phoebe: pref(["zani", "lynae", "rover"], ["shorekeeper", "verina", "mornye", "sanhua"], ["shorekeeper", "verina", "mornye", "baizhi"]),
  rover: pref(["ciaccona", "shorekeeper", "verina", "sanhua"], ["yangyang", "mortefi", "baizhi"], ["shorekeeper", "verina", "baizhi"])
};

const teamArchetypes = {
  phrolova: archetype("Havoc Echo Skill", [["cantarella", "qiuyuan"], ["cantarella", "shorekeeper"], ["roccia", "cantarella"]], "Phrolova wants Havoc/Echo Skill setup before she takes over."),
  "yangyang-xuanling": archetype("Havoc Bane Hypercarry", [["rebecca", "chisa"], ["lynae", "mornye"], ["phrolova", "chisa"], ["lynae", "chisa"], ["rebecca", "verina"], ["phrolova", "verina"]], "Yangyang: Xuanling is a Havoc Bane and Heavy Attack hypercarry. Rebecca, Lynae, and Phrolova are her primary helpers; Chisa is the strongest general third slot, Mornye suits the Lynae route, and Verina is the accessible fallback."),
  cartethyia: archetype("Aero Erosion", [["ciaccona", "chisa"], ["ciaccona", "rover"], ["ciaccona", "shorekeeper"], ["sanhua", "rover"], ["aalto", "shorekeeper"], ["sanhua", "shorekeeper"]], "Cartethyia is strongest when the team feeds Aero Erosion. Ciaccona is the premium enabler, while Chisa or Aero Rover handle the Erosion support slot when owned."),
  jinhsi: archetype("Spectro Burst", [["zhezhi", "shorekeeper"], ["yinlin", "shorekeeper"], ["mortefi", "verina"]], "Jinhsi wants coordinated or skill-friendly helpers to feed her burst window."),
  zani: archetype("Spectro Frazzle", [["phoebe", "shorekeeper"], ["phoebe", "verina"], ["rover", "shorekeeper"]], "Zani needs Spectro Frazzle support before generic damage buffs."),
  camellya: archetype("Havoc Basic", [["roccia", "shorekeeper"], ["sanhua", "shorekeeper"], ["danjin", "verina"]], "Camellya values Basic Attack/Havoc setup and enough safety for her field time."),
  augusta: archetype("Heavy Attack Carry", [["iuno", "shorekeeper"], ["iuno", "verina"], ["iuno", "buling"], ["rebecca", "shorekeeper"]], "Augusta wants Heavy Attack/all-attribute support before generic Electro pairing."),
  carlotta: archetype("Glacio Skill", [["zhezhi", "shorekeeper"], ["taoqi", "shorekeeper"], ["lumi", "verina"]], "Carlotta wants Skill-focused support; Taoqi and Lumi are valid fallbacks because the buff type matters."),
  jiyan: archetype("Aero Heavy", [["mortefi", "shorekeeper"], ["mortefi", "verina"], ["yangyang", "shorekeeper"]], "Jiyan wants Heavy Attack/coordinated support, with Yangyang as an energy comfort fallback."),
  "xiangli-yao": archetype("Electro Liberation", [["yinlin", "shorekeeper"], ["lynae", "mornye"], ["yuanwu", "verina"]], "Xiangli Yao likes Electro/Liberation support or the newer Tune shell if those pieces are owned."),
  changli: archetype("Fusion Dual DPS", [["brant", "lupa"], ["brant", "shorekeeper"], ["lupa", "verina"]], "Changli works well in Fusion dual-DPS shells where field time is shared."),
  lupa: archetype("Mono Fusion", [["brant", "changli"], ["changli", "shorekeeper"], ["brant", "verina"]], "Lupa amplifies Fusion teams and can trade comfort for higher Fusion damage."),
  encore: archetype("Fusion Carry", [["changli", "shorekeeper"], ["brant", "verina"], ["sanhua", "baizhi"]], "Encore prefers Changli or Fusion helpers, with Sanhua as an accessible quick helper."),
  calcharo: archetype("Electro Carry", [["yinlin", "shorekeeper"], ["lynae", "mornye"], ["yuanwu", "verina"]], "Calcharo wants off-field Electro/Liberation pressure or a flexible Tune shell."),
  danjin: archetype("High-risk Havoc", [["roccia", "shorekeeper"], ["cantarella", "verina"], ["taoqi", "baizhi"]], "Danjin needs the site to protect players from stress: damage is high, safety matters."),
  lingyang: archetype("Glacio Basic", [["zhezhi", "shorekeeper"], ["sanhua", "verina"], ["lucilla", "baizhi"]], "Lingyang likes Glacio or Basic Attack helpers, but comfort support should stay visible."),
  chixia: archetype("Fusion Ranged", [["changli", "shorekeeper"], ["brant", "verina"], ["mortefi", "baizhi"]], "Chixia is a simple ranged carry; keep teams readable and safe."),
  aemeath: archetype("Tune Rupture / Fusion Burst", [["lynae", "mornye"], ["lynae", "chisa"], ["denia", "mornye"], ["denia", "chisa"], ["lupa", "mornye"], ["denia", "lupa"], ["changli", "mornye"], ["brant", "mornye"], ["lynae", "shorekeeper"]], "Aemeath has two supported directions: Lynae plus Mornye for premium Tune Rupture, or Denia plus Mornye or Chisa for Fusion Burst. Lupa remains a useful alternative Fusion partner."),
  hiyuki: archetype("Glacio Chafe", [["lucilla", "chisa"], ["lucilla", "mornye"], ["lynae", "chisa"], ["lynae", "mornye"], ["lucilla", "shorekeeper"], ["lucilla", "verina"], ["zhezhi", "shorekeeper"]], "Hiyuki's best owned shells should surface before generic Glacio helpers, with Lucilla/Lynae plus Chisa or Mornye treated as current-patch targets."),
  sigrika: archetype("Aero Echo Skill", [["lucilla", "shorekeeper"], ["lucilla", "mornye"], ["qiuyuan", "shorekeeper"], ["qiuyuan", "ciaccona"], ["lucilla", "verina"], ["qiuyuan", "mornye"], ["lucilla", "buling"], ["lucilla", "chisa"], ["lynae", "mornye"], ["qiuyuan", "verina"], ["qiuyuan", "buling"]], "Sigrika is an Echo Skill carry. Lucilla hypercarry shells should stay visible when owned, while Qiuyuan remains a valid premium route and can use Moonlit Clouds as Sigrika's support setup."),
  galbrena: archetype("Fusion Echo Skill", [["lucilla", "shorekeeper"], ["qiuyuan", "shorekeeper"], ["qiuyuan", "lupa"], ["lucilla", "lupa"], ["brant", "lupa"], ["qiuyuan", "verina"], ["qiuyuan", "buling"]], "Galbrena is an Echo Skill carry, so Lucilla and Qiuyuan should surface before generic Fusion matching when owned."),
  lucy: archetype("Hack-Shifting Heavy", [["rebecca", "mornye"], ["rebecca", "shorekeeper"], ["rebecca", "verina"], ["rebecca", "buling"], ["lynae", "shorekeeper"]], "Lucy and Rebecca are prioritised together because their Hack-Shifting mechanics are intended to work in tandem, with Mornye or Shorekeeper as the main comfort slots."),
  "luuk-herssen": archetype("Tune Strain", [["denia", "mornye"], ["lynae", "mornye"], ["sanhua", "mornye"], ["denia", "shorekeeper"], ["lynae", "shorekeeper"]], "Luuk Herssen wants a Tune Strain shell first. Denia is treated as his strongest current helper, Lynae is a strong alternate, and Sanhua remains the accessible fallback."),
  brant: archetype("Fusion Hybrid", [["changli", "lupa"], ["changli", "shorekeeper"], ["lupa", "verina"]], "Brant can play damage or comfort utility inside Fusion teams."),
  phoebe: archetype("Spectro Frazzle", [["zani", "shorekeeper"], ["zani", "verina"], ["rover", "shorekeeper"]], "Phoebe is a premium Spectro Frazzle piece, especially for Zani.")
};

const dataConfidence = {
  "yangyang-xuanling": ["checked", "Guide checked for version 3.5"],
  suisui: ["review", "Unreleased - banner expected July 31 to August 20, 2026"],
  aemeath: ["checked", "Guide checked for version 3.5"],
  hiyuki: ["checked", "Guide checked for version 3.5"],
  denia: ["checked", "Guide checked"],
  lucilla: ["checked", "Guide checked for version 3.5"],
  lucy: ["checked", "Guide checked"],
  rebecca: ["checked", "Guide checked"],
  buling: ["checked", "Guide checked for version 3.5"],
  sigrika: ["checked", "Guide checked"],
  galbrena: ["checked", "Guide checked"],
  "luuk-herssen": ["checked", "Guide checked"],
  mornye: ["checked", "Guide checked"]
};

const $ = (selector) => document.querySelector(selector);
const characterGrid = $("#character-grid");
const weaponGrid = $("#weapon-grid");
const teamResults = $("#team-results");
const buildResults = $("#build-results");
const profileEditor = $("#profile-editor");
const profileList = $("#profile-list");
const profileSummary = $("#profile-summary");
const accountOverview = $("#account-overview");
const teamTuner = $("#team-tuner");
const teamTunerContent = $("#team-tuner-content");
const flowNext = $("#flow-next");
const flowNextStep = $("#flow-next-step");
const flowNextTitle = $("#flow-next-title");
const flowNextDetail = $("#flow-next-detail");
const flowNextButton = $("#flow-next-button");
const navLinks = [...document.querySelectorAll(".topnav a[href^='#']")];
const navSections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
let currentSectionHash = "#home";
const profileStorageKey = "wavekit-profiles-v1";
const legacyProfileKey = "tacet-team-helper-profile";
const legacyProfilesKey = "tacet-team-helper-profiles-v2";
const cloud = {
  api: null,
  configured: false,
  initializing: true,
  authResolved: false,
  user: null,
  busy: false,
  loadedForUid: ""
};

function c(slug, name, element, weaponType, roles, score, synergies, tags, note) {
  const build = builds[slug] || genericBuild(element, weaponType, roles);
  return { slug, name, element, weaponType, roles, score, synergies, tags, note, build };
}

function pref(core = [], good = [], sustain = [], comfort = []) {
  return { core, good, sustain, comfort };
}

function archetype(label, ideal = [], note = "") {
  return { label, ideal, note };
}

function genericBuild(element, weaponType, roles) {
  const utility = roles.includes("healer") || roles.includes("support") || roles.includes("defense");
  return {
    build: utility ? "Support setup" : "Damage setup",
    weapon: weaponType === "Unknown" ? "Best matching weapon pending" : `${weaponType} with useful main stats`,
    sonata: roles.includes("healer") ? "Rejuvenating Glow or Moonlit Clouds" : utility ? "Moonlit Clouds or matching utility set" : `${firstElement(element)} damage or matching set`,
    echo: roles.includes("healer") ? "Support Echo" : utility ? "Utility Echo" : "Main damage Echo",
    stats: roles.includes("healer") ? "Energy Regen / healing or scaling stat / comfort" : utility ? "Energy Regen or kit-scaling stat / comfort" : "CRIT Rate or CRIT DMG / Element DMG / ATK%"
  };
}

function firstElement(element) {
  return element.split("/")[0].trim();
}

function activeCharacters() {
  return characters
    .filter((character) => !upcomingCharacters.has(character.slug))
    .map((character) => character.slug === "rover" ? activeRover() : character);
}

function isUpcomingCharacter(slug) {
  return upcomingCharacters.has(slug);
}

function activeRover() {
  const form = roverForms[state.roverForm] || roverForms.Aero;
  return {
    ...characters.find((character) => character.slug === "rover"),
    name: `Rover (${state.roverForm})`,
    element: form.element,
    roles: form.roles,
    score: form.score,
    synergies: form.synergies,
    tags: form.tags,
    note: form.note,
    build: form.build
  };
}

function renderSegmented(containerId, values, selected, onSelect) {
  const container = $(containerId);
  if (!container) return;
  container.innerHTML = values.map((value) => `
    <button class="${value === selected ? "is-active" : ""}" type="button" data-value="${value}">${value}</button>
  `).join("");
  container.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => onSelect(button.dataset.value));
  });
}

function renderRoleFilters() {
  const container = $("#role-filters");
  container.innerHTML = roleFilters.map((role) => `
    <button class="filter ${state.roleFilter === role ? "is-active" : ""}" type="button" data-role="${role}">${role}</button>
  `).join("");
  container.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.roleFilter = button.dataset.role;
      render();
    });
  });
}

function renderWeaponTypeFilters() {
  const container = $("#weapon-type-filters");
  container.innerHTML = weaponTypeFilters.map((type) => `
    <button class="filter ${state.weaponTypeFilter === type ? "is-active" : ""}" type="button" data-weapon-type="${type}">${type}</button>
  `).join("");
  container.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.weaponTypeFilter = button.dataset.weaponType;
      renderWeapons();
    });
  });
}

function characterMatches(character) {
  const displayCharacter = character.slug === "rover" ? activeRover() : character;
  const query = state.search.toLowerCase();
  const roleMatch = state.roleFilter === "All"
    || (state.roleFilter === "Main DPS" && displayCharacter.roles.includes("main"))
    || (state.roleFilter === "Sub DPS" && displayCharacter.roles.includes("sub"))
    || (state.roleFilter === "Support" && displayCharacter.roles.includes("support"))
    || (state.roleFilter === "Healer" && displayCharacter.roles.includes("healer"))
    || (state.roleFilter === "Defense" && displayCharacter.roles.includes("defense"));
  const roverText = character.slug === "rover" ? `rover ${Object.keys(roverForms).join(" ")}` : "";
  const text = `${displayCharacter.name} ${roverText} ${displayCharacter.element} ${displayCharacter.roles.join(" ")} ${displayCharacter.tags.join(" ")}`.toLowerCase();
  return roleMatch && (!query || text.includes(query));
}

function renderCharacters() {
  const visible = characters
    .filter(characterMatches)
    .map((character) => character.slug === "rover" ? activeRover() : character)
    .sort(sortByRarityThenName);
  characterGrid.innerHTML = raritySections(visible, characterRarity).map(({ rarity, items }) => `
    <section class="selection-rarity-group rarity-${rarity}">
      <header class="selection-rarity-heading">
        <span>${rarityLabel(rarity)}</span>
        <small>${items.length} Resonator${items.length === 1 ? "" : "s"}</small>
      </header>
      <div class="selection-rarity-grid">
        ${items.map(characterCard).join("")}
      </div>
    </section>
  `).join("");
  characterGrid.querySelectorAll("[data-character-card]").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest(".chain-row")) return;
      if (event.target.closest(".rover-form-row")) return;
      if (isUpcomingCharacter(card.dataset.characterCard)) return;
      toggleCharacter(card.dataset.characterCard);
    });
  });
  characterGrid.querySelectorAll("[data-rover-form]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      selectRoverForm(button.dataset.roverForm);
      resetFlowGuide();
      markUnsaved();
      render();
    });
  });
  characterGrid.querySelectorAll("[data-focus-character]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleFocus(button.dataset.focusCharacter);
    });
  });
  characterGrid.querySelectorAll("[data-chain-minus]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      changeChain(button.dataset.chainMinus, -1);
    });
  });
  characterGrid.querySelectorAll("[data-chain-plus]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      changeChain(button.dataset.chainPlus, 1);
    });
  });
}

function characterCard(character) {
  const upcoming = isUpcomingCharacter(character.slug);
  const owned = upcoming ? false : state.owned[character.slug];
  const focused = upcoming ? false : state.focus.has(character.slug);
  const isRover = character.slug === "rover";
  const displayName = isRover ? "Rover" : character.name;
  const characterDetail = upcoming
    ? "Unreleased · July 31 banner"
    : isRover
      ? `${rarityStars(characterRarity(character))} · Active: ${state.roverForm} · Forms: ${Object.keys(roverForms).join(" / ")}`
      : `${rarityStars(characterRarity(character))} · ${roleLabel(character)} · ${character.element}`;
  return `
    <article class="character-card ${owned ? "is-owned" : ""} ${focused ? "is-focused" : ""} ${upcoming ? "is-upcoming" : ""} ${isRover ? "is-rover" : ""} element-${firstElement(isRover ? state.roverForm : character.element).toLowerCase()}" data-character-card="${character.slug}">
      <button class="character-toggle" type="button" data-character="${character.slug}" aria-pressed="${Boolean(owned)}" ${upcoming ? "disabled" : ""}>
        ${visual(character)}
        <span class="character-info">
          <strong>${displayName}</strong>
          <small>${characterDetail}</small>
        </span>
      </button>
      <button class="focus-toggle" type="button" data-focus-character="${character.slug}" aria-pressed="${focused}" aria-label="Prioritise ${displayName}" ${upcoming ? "disabled" : ""}>
        ${focused ? "★" : "☆"}
      </button>
      <span class="character-owned-badge" aria-hidden="true">Owned</span>
      ${upcoming ? `<span class="upcoming-badge">Unreleased</span>` : ""}
      ${isRover ? roverFormPicker() : ""}
      <div class="chain-row" aria-label="${displayName} Resonance Chain" ${upcoming ? `aria-disabled="true"` : ""}>
        <span>RC</span>
        <button type="button" data-chain-minus="${character.slug}" data-chain-action="decrease" ${upcoming ? "disabled" : ""}>-</button>
        <strong>${owned?.chain ?? 0}</strong>
        <button type="button" data-chain-plus="${character.slug}" data-chain-action="increase" ${upcoming ? "disabled" : ""}>+</button>
      </div>
    </article>
  `;
}

function selectRoverForm(form) {
  if (!roverForms[form]) return;
  if (!state.owned.rover) state.owned.rover = { chain: 0 };
  state.roverForms.add(form);
  state.roverForm = form;
  state.selectedTeamKey = "";
}

function roverFormPicker() {
  return `
    <div class="rover-form-row" aria-label="Rover form">
      ${Object.keys(roverForms).map((form) => `
        <button class="${state.roverForms.has(form) ? "is-owned" : ""} ${state.roverForm === form ? "is-active" : ""}" type="button" data-rover-form="${form}" aria-pressed="${state.roverForms.has(form)}">
          <span>${form}</span>
          ${state.roverForm === form ? "<small>active</small>" : ""}
        </button>
      `).join("")}
    </div>
  `;
}

function renderWeapons() {
  const query = state.weaponSearch.toLowerCase();
  const weapons = selectableWeapons()
    .filter((weapon) => {
      const type = weaponTypeFor(weapon);
      const typeMatch = state.weaponTypeFilter === "All" || type === state.weaponTypeFilter;
      const text = `${weapon} ${weaponHint(weapon)} ${type}`.toLowerCase();
      return typeMatch && (!query || text.includes(query));
    });
  const input = $("#weapon-search");
  if (input && input.value !== state.weaponSearch) input.value = state.weaponSearch;
  weaponGrid.innerHTML = raritySections(weapons, weaponRarity).map(({ rarity, items }) => `
    <section class="selection-rarity-group rarity-${rarity}">
      <header class="selection-rarity-heading">
        <span>${rarityLabel(rarity)}</span>
        <small>${items.length} Weapon${items.length === 1 ? "" : "s"}</small>
      </header>
      <div class="selection-rarity-grid">
        ${items.map(weaponCard).join("")}
      </div>
    </section>
  `).join("");
  weaponGrid.querySelectorAll("[data-weapon]").forEach((button) => {
    button.addEventListener("click", () => {
      const weapon = button.dataset.weapon;
      state.weapons.has(weapon) ? state.weapons.delete(weapon) : state.weapons.add(weapon);
      resetFlowGuide();
      markUnsaved();
      render();
    });
  });
}

function weaponCard(weapon) {
  return `
    <button class="weapon-card ${state.weapons.has(weapon) ? "is-owned" : ""}" type="button" data-weapon="${weapon}">
      ${weaponVisual(weapon)}
      <span class="weapon-copy">
        <strong>${weapon}</strong>
        <small>${rarityStars(weaponRarity(weapon))} · ${weaponTypeFor(weapon)} · ${weaponHint(weapon)}</small>
      </span>
      <span class="owned-badge">${state.weapons.has(weapon) ? "Owned" : "Tap to add"}</span>
    </button>
  `;
}

function selectableWeapons() {
  return [...new Set([
    ...weaponCatalog.keys(),
    ...activeCharacters().flatMap((character) => [character.build.weapon, ...alternateWeapons(character)]).filter(Boolean)
  ])].filter(isSelectableWeapon).sort();
}

function setFourStarWeapons(owned) {
  selectableWeapons()
    .filter((weapon) => weaponRarity(weapon) === 4)
    .forEach((weapon) => {
      if (owned) {
        state.weapons.add(weapon);
      } else {
        state.weapons.delete(weapon);
      }
    });
  markUnsaved();
  resetFlowGuide();
  render();
}

function raritySections(items, getRarity) {
  return [5, 4, 3]
    .map((rarity) => ({ rarity, items: items.filter((item) => getRarity(item) === rarity) }))
    .filter((group) => group.items.length);
}

function sortByRarityThenName(a, b) {
  return characterRarity(b) - characterRarity(a)
    || a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
}

function characterRarity(character) {
  return fourStarResonators.has(character.slug) ? 4 : 5;
}

function weaponRarity(weapon) {
  if (fiveStarWeapons.has(weapon)) return 5;
  if (/^(Training|Tyro|Guardian)\s/.test(weapon)) return 3;
  if (/(?: of Night| of Voyager|#\d+)/.test(weapon)) return 3;
  if (/^Originite:/.test(weapon)) return 3;
  return 4;
}

function rarityLabel(rarity) {
  return `${rarityStars(rarity)} ${rarity}-star`;
}

function rarityStars(rarity) {
  return "★".repeat(rarity);
}

function weaponVisual(weapon) {
  const type = weaponTypeFor(weapon);
  const typeSlug = weaponTypeSlug(type);
  const officialImage = window.weaponImageMap?.[weapon];
  const fallbackImage = `assets/weapons/${typeSlug}.svg`;
  const image = officialImage || fallbackImage;
  return `
    <span class="weapon-art" aria-hidden="true">
      <img src="${image}" alt="" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='${fallbackImage}';this.classList.add('is-fallback')">
      <span class="weapon-icon weapon-${typeSlug}"><b>${weaponInitial(type)}</b></span>
    </span>
  `;
}

function weaponTypeSlug(type) {
  return String(type || "Unknown").toLowerCase().replace(/[^a-z0-9]+/g, "-") || "unknown";
}

function weaponHint(weapon) {
  const owners = activeCharacters().filter((character) => character.build.weapon === weapon).map((character) => character.name);
  if (owners.length) return `Best for ${owners.slice(0, 2).join(", ")}`;
  const alternates = activeCharacters().filter((character) => alternateWeapons(character).includes(weapon)).map((character) => character.name);
  if (alternates.length) return `Good for ${alternates.slice(0, 2).join(", ")}`;
  const inferred = inferredWeaponUsers(weapon);
  if (inferred.length) return `Good for ${inferred.slice(0, 2).join(", ")}`;
  return weaponPurposeHints[weapon] || `${weaponTypeFor(weapon)} flexible option`;
}

function inferredWeaponUsers(weapon) {
  const type = weaponTypeFor(weapon);
  const hint = weaponPurposeHints[weapon] || "";
  const wantsSupport = /support|healing|energy|comfort|defensive/i.test(hint);
  const wantsStarter = /starter|early/i.test(hint);
  return activeCharacters()
    .filter((character) => {
      const characterType = character.weaponType === "Unknown" ? weaponTypeFor(character.build.weapon) : character.weaponType;
      if (characterType !== type) return false;
      if (wantsSupport) return character.roles.includes("healer") || character.roles.includes("support") || character.roles.includes("defense") || character.roles.includes("sub");
      if (wantsStarter) return character.roles.includes("main") || character.roles.includes("sub");
      return character.roles.includes("main") || character.roles.includes("sub");
    })
    .sort((a, b) => b.score - a.score)
    .map((character) => character.name);
}

function isSelectableWeapon(weapon) {
  return weaponCatalog.has(weapon) || Boolean(window.weaponImageMap?.[weapon]) || weaponTypeFor(weapon) !== "Unknown";
}

function weaponTypeFor(weapon) {
  if (knownWeaponTypes[weapon]) return knownWeaponTypes[weapon];
  if (weaponCatalog.has(weapon)) return weaponCatalog.get(weapon);
  const owner = activeCharacters().find((character) => character.build.weapon === weapon && character.weaponType !== "Unknown");
  return owner?.weaponType || "Unknown";
}

function weaponInitial(type) {
  return ({ Sword: "S", Rectifier: "R", Broadblade: "B", Gauntlets: "G", Pistols: "P" })[type] || "?";
}

function alternateWeapons(character) {
  const mode = character.roles.includes("healer") || character.roles.includes("support") || character.roles.includes("defense") ? "support" : "damage";
  const type = character.weaponType === "Unknown" ? weaponTypeFor(character.build.weapon) : character.weaponType;
  const options = characterWeaponAlternates[character.slug]
    || roleWeaponFallbacks[mode]?.[type]
    || weaponFallbacks[type]
    || [];
  return options
    .filter((weapon) => weapon !== character.build.weapon)
    .filter((weapon) => weaponTypeFor(weapon) === type)
    .slice(0, 3);
}

function costPattern(character) {
  return echoCosts[character.slug] || "4-3-3-1-1";
}

function visual(character, mode = "wallpaper") {
  const file = wallpapers.get(character.slug) || wallpapers.get("rover");
  if (mode === "character") {
    return `
      <span class="portrait character-art" aria-hidden="true">
        <img src="assets/characters/${character.slug}.webp" alt="" loading="lazy" decoding="async">
      </span>
    `;
  }
  return `
    <span class="portrait" aria-hidden="true">
      <img src="assets/wallpapers/${file}" alt="" loading="lazy" decoding="async">
    </span>
  `;
}

function roleLabel(character) {
  if (character.roles.includes("healer")) return "Healer support";
  if (character.roles.includes("defense")) return "Defensive support";
  if (character.roles.includes("main") && (character.roles.includes("support") || character.roles.includes("sub"))) return "Hybrid DPS";
  if (character.roles.includes("main")) return "Main DPS";
  if (character.roles.includes("sub")) return "Sub DPS";
  if (character.roles.includes("support")) return "Support";
  return "Utility";
}

function toggleCharacter(slug) {
  if (isUpcomingCharacter(slug)) return;
  if (state.owned[slug]) {
    delete state.owned[slug];
    state.focus.delete(slug);
  } else {
    state.owned[slug] = { chain: 0 };
  }
  markUnsaved();
  resetFlowGuide();
  updateCharacterCard(slug);
  refreshRosterSelection();
}

function setFourStarResonators(owned) {
  activeCharacters()
    .filter((character) => characterRarity(character) === 4)
    .forEach((character) => {
      if (owned) {
        if (!state.owned[character.slug]) state.owned[character.slug] = { chain: 0 };
      } else {
        delete state.owned[character.slug];
        state.focus.delete(character.slug);
      }
    });
  markUnsaved();
  resetFlowGuide();
  render();
}

function changeChain(slug, delta) {
  if (isUpcomingCharacter(slug)) return;
  if (!state.owned[slug] && delta < 1) return;
  if (!state.owned[slug]) state.owned[slug] = { chain: 0 };
  state.owned[slug].chain = Math.max(0, Math.min(6, state.owned[slug].chain + delta));
  markUnsaved();
  resetFlowGuide();
  updateCharacterCard(slug);
  refreshRosterSelection();
}

function updateCharacterCard(slug) {
  const card = characterGrid.querySelector(`[data-character-card="${slug}"]`);
  if (!card) return;
  const owned = state.owned[slug];
  const focused = state.focus.has(slug);
  card.classList.toggle("is-owned", Boolean(owned));
  card.classList.toggle("is-focused", focused);
  card.querySelector(".character-toggle")?.setAttribute("aria-pressed", String(Boolean(owned)));
  const focusButton = card.querySelector(".focus-toggle");
  if (focusButton) {
    focusButton.textContent = focused ? "★" : "☆";
    focusButton.setAttribute("aria-pressed", String(focused));
  }
  const chainValue = card.querySelector(".chain-row strong");
  if (chainValue) chainValue.textContent = owned?.chain ?? 0;
}

function toggleFocus(slug) {
  if (isUpcomingCharacter(slug)) return;
  if (!state.owned[slug]) state.owned[slug] = { chain: 0 };
  state.focus.has(slug) ? state.focus.delete(slug) : state.focus.add(slug);
  markUnsaved();
  resetFlowGuide();
  updateCharacterCard(slug);
  refreshRosterSelection();
}

function refreshRosterSelection() {
  renderProfileSummary();
  renderResults();
}

function resetFlowGuide() {
  state.flowVisitedResults = false;
  state.flowBuildsOpened = false;
}

function generateTeams() {
  const ownedCharacters = activeCharacters().filter((character) => state.owned[character.slug]);
  const sortedMains = ownedCharacters.filter((character) => character.roles.includes("main")).sort((a, b) => scoreCharacter(b) - scoreCharacter(a));
  const mains = sortedMains.slice(0, 6);
  const roverMain = sortedMains.find((character) => character.slug === "rover");
  if (roverMain && !mains.some((character) => character.slug === "rover")) mains.push(roverMain);
  const teams = [];
  mains.forEach((main) => {
    const helpers = ownedCharacters.filter((character) => helperCandidate(main, character));
    const subPool = helpers.filter((character) => character.roles.includes("sub") || character.roles.includes("support") || character.roles.includes("defense"));
    const slotThreePool = helpers.filter((character) => character.roles.includes("healer") || character.roles.includes("support") || character.roles.includes("defense"));
    const candidates = [];
    subPool.forEach((sub) => {
      slotThreePool.forEach((third) => {
        if (sub.slug === third.slug) return;
        const members = [main, sub, third];
        candidates.push({ members, main, score: scoreTeam(main, sub, third), reason: reasonTeam(main, sub, third) });
      });
    });
    const coherentCandidates = candidates.filter(isSuggestibleTeam);
    coherentCandidates.sort((a, b) => b.score - a.score);
    teams.push(...dedupeTeams(coherentCandidates).slice(0, 3).map((team, index) => ({ ...team, mainRank: index + 1 })));
  });
  return includeSavedTeams(keepRoverVisible(teams.sort((a, b) => b.score - a.score)));
}

function includeSavedTeams(teams) {
  const seen = new Set(teams.map((team) => team.members.map((member) => member.slug).join("|")));
  const saved = state.savedTeams.flatMap((record) => {
    if (record.members.includes("rover") && record.roverForm !== state.roverForm) return [];
    const team = teamObjectFromSlugs(record.members);
    if (!team) return [];
    const key = team.members.map((member) => member.slug).join("|");
    if (seen.has(key)) return [];
    seen.add(key);
    return [team];
  });
  return [...teams, ...saved];
}

function teamObjectFromSlugs(slugs) {
  const pool = activeCharacters();
  const members = slugs.map((slug) => pool.find((character) => character.slug === slug));
  if (members.some((member) => !member) || members.some((member) => !state.owned[member.slug])) return null;
  const [main, sub, third] = members;
  return { members, main, score: scoreTeam(main, sub, third), reason: reasonTeam(main, sub, third), custom: true };
}

function keepRoverVisible(teams) {
  const top = teams.slice(0, 18);
  if (!state.owned.rover || top.some((team) => team.main.slug === "rover")) return top;
  const roverTeam = teams.find((team) => team.main.slug === "rover");
  return roverTeam ? [...top.slice(0, 17), roverTeam].sort((a, b) => b.score - a.score) : top;
}

function scoreCharacter(character) {
  const chain = state.owned[character.slug]?.chain || 0;
  const weaponBonus = state.weapons.has(character.build.weapon) ? weaponInvestmentValue(character) : 0;
  const focusBonus = state.focus.has(character.slug) ? 24 : 0;
  return character.score + carryCeilingBonus(character) + chain * chainInvestmentValue(character) + weaponBonus + focusBonus;
}

function carryCeilingBonus(character) {
  if (!character.roles.includes("main")) return 0;
  const ceiling = carryCeilingScores[character.slug] ?? character.score;
  return Math.round((ceiling - 86) * 0.9);
}

function chainInvestmentValue(character) {
  if (!character.roles.includes("main")) return 1.8;
  const ceiling = carryCeilingScores[character.slug] ?? character.score;
  return ceiling >= 94 ? 4.2 : 3.2;
}

function weaponInvestmentValue(character) {
  if (!character.roles.includes("main")) return 10;
  const ceiling = carryCeilingScores[character.slug] ?? character.score;
  return ceiling >= 94 ? 22 : 16;
}

function carryInvestmentTeamScore(character) {
  if (!character.roles.includes("main")) return 0;
  const chain = state.owned[character.slug]?.chain || 0;
  const hasSignature = state.weapons.has(character.build.weapon);
  if (chain >= 6 && hasSignature) return 30;
  if (chain >= 6) return 18;
  if (chain >= 3 && hasSignature) return 16;
  if (chain >= 3) return 8;
  return 0;
}

function scoreTeam(main, sub, sustain) {
  const style = state.suggestionStyle || "Best Teams";
  let score = scoreCharacter(main) * 1.12 + sub.score * 0.55 + sustain.score * 0.62;
  score += synergyScore(main, sub) + synergyScore(main, sustain);
  score += preferredTeamScore(main, sub, sustain);
  score += archetypeTeamScore(main, sub, sustain);
  score += premiumOwnedShellScore(main, sub, sustain);
  score += teamSpecificAdjustment(main, sub, sustain);
  score += carryInvestmentTeamScore(main);
  if (main.score >= 90) score += 12;
  if (main.score < 75) score -= 8;
  if (sustain.roles.includes("healer")) score += style === "Ready Now" ? 16 : 9;
  if (sub.roles.includes("support")) score += 4;
  if (style === "Best Teams" && sub.roles.includes("sub")) score += 7;
  if (style === "Best Teams" && teamFitLabel({ main, members: [main, sub, sustain] }) === "Archetype fit") score += 8;
  if (style === "Ready Now" && sustain.roles.includes("healer") && sub.roles.includes("sub")) score += 5;
  if (style === "Ready Now" && (sustain.roles.includes("healer") || sustain.roles.includes("defense"))) score += 8;
  if (style === "Ready Now" && state.weapons.has(main.build.weapon)) score += 7;
  if (style === "Build Priority" && main.score >= 88) score += 10;
  if (style === "Build Priority" && state.focus.has(main.slug)) score += 12;
  if (style === "Build Priority" && teamFitLabel({ main, members: [main, sub, sustain] }) === "Archetype fit") score += 5;
  if (style !== "Best Teams" && !sustain.roles.includes("healer") && !sustain.roles.includes("defense")) score -= 10;
  if (style === "Ready Now" && !sustain.roles.includes("healer")) score -= 8;
  if (main.roles.includes("main") && sustain.roles.includes("defense") && style === "Ready Now") score += 4;
  if (sub.roles.includes("healer") && sustain.roles.includes("healer")) score -= 34;
  if (sub.roles.includes("healer") && preferredRank(main, sub, "sub") < 18) score -= 12;
  if (sustain.roles.includes("support") && !sustain.roles.includes("healer") && preferredRank(main, sustain, "sustain") < 18) score -= 6;
  return Math.round(score);
}

function helperCandidate(main, character) {
  if (character.slug === main.slug) return false;
  if (!character.roles.includes("main")) return true;
  return character.roles.includes("sub") || character.roles.includes("support") || character.roles.includes("healer") || character.roles.includes("defense");
}

function preferredTeamScore(main, sub, sustain) {
  let score = preferredRank(main, sub, "sub") + preferredRank(main, sustain, "sustain");
  if (teamPreferences[main.slug]?.core.includes(sub.slug) && teamPreferences[main.slug]?.sustain.includes(sustain.slug)) score += 14;
  if (sub.tags.some((tag) => main.tags.includes(tag))) score += 5;
  if (main.tags.includes("erosion") && sub.tags.includes("erosion")) score += 18;
  if (main.tags.includes("frazzle") && sub.tags.includes("frazzle")) score += 18;
  if (main.tags.includes("basic") && sub.tags.includes("basic")) score += 16;
  if (main.tags.includes("heavy") && sub.tags.includes("heavy")) score += 14;
  if (sub.synergies.includes(firstElement(main.element).toLowerCase()) && !teamPreferences[main.slug]?.core.includes(sub.slug)) score -= 6;
  return score;
}

function archetypeTeamScore(main, sub, sustain) {
  const archetype = teamArchetypes[main.slug];
  if (!archetype) return 0;
  const pair = [sub.slug, sustain.slug];
  const idealIndex = archetype.ideal.findIndex((ideal) => idealAllowedForActiveForms(main, ideal) && ideal.every((slug) => pair.includes(slug)));
  if (idealIndex >= 0) return 56 - idealIndex * 7;
  if (archetype.ideal.some((ideal) => idealAllowedForActiveForms(main, ideal) && ideal.includes(sub.slug))) return 16;
  if (archetype.ideal.some((ideal) => idealAllowedForActiveForms(main, ideal) && ideal.includes(sustain.slug))) return 10;
  return 0;
}

function premiumOwnedShellScore(main, sub, sustain) {
  const archetype = teamArchetypes[main.slug];
  if (!archetype) return 0;
  const pair = [sub.slug, sustain.slug];
  const idealIndex = archetype.ideal.findIndex((ideal) => idealAllowedForActiveForms(main, ideal) && ideal.every((slug) => pair.includes(slug)));
  if (idealIndex < 0) return 0;
  const premiumSupport = sustain.score >= 80 || sustain.roles.includes("healer");
  const premiumHelper = sub.score >= 82 || teamPreferences[main.slug]?.core.includes(sub.slug);
  if (!premiumSupport || !premiumHelper) return 0;
  if (idealIndex === 0) return 38;
  return Math.max(10, 24 - idealIndex * 4);
}

function isSuggestibleTeam(team) {
  const main = team.main;
  const sub = team.members[1];
  const third = team.members[2];
  if (!roverHelperAllowed(main, sub) || !roverHelperAllowed(main, third)) return false;
  const pref = teamPreferences[main.slug];
  const hasArchetype = Boolean(teamArchetypes[main.slug]);
  const archetypeFit = teamFitLabel(team) === "Archetype fit";
  const corePreferred = pref?.core.includes(sub.slug) || pref?.core.includes(third.slug);
  const sustainPreferred = pref?.sustain.includes(third.slug);
  const preferredHelpers = preferredHelperList(pref);
  const flexiblePreferred = preferredHelpers.includes(sub.slug) || preferredHelpers.includes(third.slug);
  const safeThird = third.roles.includes("healer") || third.roles.includes("defense");
  const hasNamedPartner = hasArchetype && teamArchetypes[main.slug].ideal.some((ideal) =>
    idealAllowedForActiveForms(main, ideal) && (ideal.includes(sub.slug) || ideal.includes(third.slug))
  );
  const hasSharedPlan = helperSynergyReason(main, sub) || helperSynergyReason(main, third);
  const hasOwnedPreferredHelper = ownedPreferredHelperAvailable(main);
  const roleCompleteFallback = safeThird
    && !sub.roles.includes("healer")
    && (sub.roles.includes("sub") || sub.roles.includes("support") || hasSharedPlan);

  if (archetypeFit) return true;
  if (corePreferred && (sustainPreferred || safeThird || hasNamedPartner)) return true;
  if (flexiblePreferred && sustainPreferred && hasSharedPlan) return true;
  if (!hasArchetype && (corePreferred || hasSharedPlan) && safeThird) return true;
  if (!hasOwnedPreferredHelper && roleCompleteFallback) return true;

  return false;
}

function ownedPreferredHelperAvailable(main) {
  const pref = teamPreferences[main.slug];
  if (!pref) return false;
  const preferred = new Set(preferredHelperList(pref));
  return activeCharacters().some((character) =>
    character.slug !== main.slug
    && state.owned[character.slug]
    && preferred.has(character.slug)
    && !character.roles.includes("healer")
  );
}

function preferredHelperList(pref) {
  return [...(pref?.core || []), ...(pref?.good || []), ...(pref?.comfort || [])];
}

function helperSynergyReason(main, helper) {
  const element = firstElement(main.element).toLowerCase();
  return helper.synergies.includes(element)
    || helper.synergies.includes("any")
    || main.synergies.some((tag) => helper.tags.includes(tag) || helper.synergies.includes(tag))
    || helper.tags.some((tag) => main.tags.includes(tag));
}

function idealAllowedForActiveForms(main, ideal) {
  if (!ideal.includes("rover")) return true;
  if (main.slug === "cartethyia") return state.roverForm === "Aero";
  if (main.slug === "zani" || main.slug === "phoebe") return state.roverForm === "Spectro";
  return true;
}

function roverHelperAllowed(main, helper) {
  if (helper.slug !== "rover") return true;
  if (main.slug === "cartethyia") return state.roverForm === "Aero";
  if (main.slug === "zani" || main.slug === "phoebe") return state.roverForm === "Spectro";
  return true;
}

function teamSpecificAdjustment(main, sub, sustain) {
  const pair = [sub.slug, sustain.slug];
  let score = 0;

  if (main.slug === "cartethyia") {
    if (pair.includes("ciaccona") && pair.includes("chisa")) score += 46;
    if (pair.includes("ciaccona") && pair.includes("rover") && state.roverForm === "Aero") score += 42;
    if (pair.includes("ciaccona") && pair.includes("shorekeeper")) score += 26;
    if (pair.includes("chisa") && pair.includes("rover") && state.roverForm === "Aero") score += 38;
    if (pair.includes("sanhua") && pair.includes("rover") && state.roverForm === "Aero") score += 18;
    if (pair.includes("sanhua") && pair.includes("chisa")) score += 14;
    if (pair.includes("aalto") && pair.includes("shorekeeper")) score += 14;
    if (!pair.includes("ciaccona") && !pair.includes("sanhua") && !pair.includes("aalto")) score -= 18;
    if (pair.includes("mornye") || pair.includes("lynae")) score -= 18;
  }

  if (main.slug === "yangyang-xuanling") {
    if (pair.includes("rebecca") && pair.includes("chisa")) score += 44;
    if (pair.includes("lynae") && pair.includes("mornye")) score += 42;
    if (pair.includes("phrolova") && pair.includes("chisa")) score += 36;
    if (pair.includes("lynae") && pair.includes("chisa")) score += 34;
    if (pair.includes("rebecca") && pair.includes("verina")) score += 24;
    if (pair.includes("phrolova") && pair.includes("verina")) score += 22;
    if (pair.includes("shorekeeper")) score -= 10;
    if (!pair.includes("rebecca") && !pair.includes("lynae") && !pair.includes("phrolova") && !pair.includes("mortefi")) score -= 18;
  }

  if (main.slug === "aemeath") {
    if (pair.includes("lynae") && pair.includes("mornye")) score += 48;
    if (pair.includes("lynae") && pair.includes("chisa")) score += 32;
    if (pair.includes("denia") && pair.includes("mornye")) score += 34;
    if (pair.includes("lupa") && pair.includes("mornye")) score += 28;
    if (pair.includes("denia") && pair.includes("chisa")) score += 28;
    if (pair.includes("denia") && pair.includes("lupa")) score += 24;
    if (pair.includes("changli") && pair.includes("mornye")) score += 22;
    if (pair.includes("brant") && pair.includes("mornye")) score += 18;
    if (pair.includes("lynae") && !pair.includes("mornye")) score += 8;
    if (pair.includes("mornye") && !pair.includes("lynae") && !pair.includes("lupa") && !pair.includes("changli") && !pair.includes("brant")) score += 6;
  }

  if (main.slug === "hiyuki") {
    if (pair.includes("lucilla") && pair.includes("chisa")) score += 42;
    if (pair.includes("lucilla") && pair.includes("mornye")) score += 30;
    if (pair.includes("lynae") && pair.includes("chisa")) score += 24;
    if (pair.includes("lynae") && pair.includes("mornye")) score += 20;
    if (!pair.includes("lucilla") && !pair.includes("lynae")) score -= 12;
  }

  if (main.slug === "sigrika") {
    if (pair.includes("lucilla") && pair.includes("shorekeeper")) score += 44;
    if (pair.includes("lucilla") && pair.includes("mornye")) score += 38;
    if (pair.includes("lucilla") && pair.includes("verina")) score += 34;
    if (pair.includes("lucilla") && pair.includes("buling")) score += 30;
    if (pair.includes("lucilla") && pair.includes("chisa")) score += 26;
    if (pair.includes("qiuyuan") && pair.includes("shorekeeper")) score += 42;
    if (pair.includes("qiuyuan") && pair.includes("ciaccona")) score += 34;
    if (pair.includes("qiuyuan") && pair.includes("mornye")) score += 28;
    if (pair.includes("qiuyuan") && pair.includes("iuno")) score += 26;
    if (pair.includes("qiuyuan") && pair.includes("cantarella")) score += 22;
    if (pair.includes("lynae") && pair.includes("mornye")) score += 16;
    if (!pair.includes("qiuyuan") && pair.includes("cantarella")) score += 12;
    if (!pair.includes("qiuyuan") && pair.includes("lucilla")) score += 18;
    if (!pair.includes("qiuyuan") && !pair.includes("cantarella") && !pair.includes("lucilla")) score -= 18;
  }

  if (main.slug === "galbrena") {
    if (pair.includes("lucilla") && pair.includes("shorekeeper")) score += 44;
    if (pair.includes("qiuyuan") && pair.includes("shorekeeper")) score += 42;
    if (pair.includes("qiuyuan") && pair.includes("lupa")) score += 30;
    if (pair.includes("lucilla") && pair.includes("lupa")) score += 28;
    if (pair.includes("brant") && pair.includes("lupa")) score += 24;
    if (!pair.includes("qiuyuan") && !pair.includes("lucilla") && !pair.includes("lupa")) score -= 14;
  }

  if (main.slug === "lucy") {
    if (pair.includes("rebecca") && pair.includes("mornye")) score += 38;
    if (pair.includes("rebecca") && pair.includes("shorekeeper")) score += 34;
    if (pair.includes("rebecca") && pair.includes("verina")) score += 22;
    if (!pair.includes("rebecca")) score -= 22;
  }

  if (main.slug === "luuk-herssen") {
    if (pair.includes("denia") && pair.includes("mornye")) score += 52;
    if (pair.includes("lynae") && pair.includes("mornye")) score += 38;
    if (pair.includes("denia") && pair.includes("shorekeeper")) score += 22;
    if (sub.slug === "sanhua" && sustain.slug === "mornye") score += state.owned.lynae || state.owned.denia ? -18 : 10;
    if (sub.slug === "sanhua" && sustain.slug !== "mornye") score -= 14;
  }

  if ((main.tags.includes("erosion") || main.tags.includes("frazzle")) && (pair.includes("lynae") || pair.includes("mornye"))) {
    score -= 14;
  }

  return score;
}

function preferredRank(main, teammate, slot) {
  const pref = teamPreferences[main.slug];
  if (!pref) return 0;
  if (slot === "sustain") {
    const sustainIndex = pref.sustain.indexOf(teammate.slug);
    if (sustainIndex >= 0) return Math.max(10, 28 - sustainIndex * 4);
  }
  const coreIndex = pref.core.indexOf(teammate.slug);
  if (coreIndex >= 0) return Math.max(16, 32 - coreIndex * 4);
  const goodIndex = pref.good.indexOf(teammate.slug);
  if (goodIndex >= 0) return Math.max(8, 18 - goodIndex * 3);
  const comfortIndex = pref.comfort.indexOf(teammate.slug);
  if (comfortIndex >= 0) return Math.max(4, 10 - comfortIndex * 2);
  return 0;
}

function synergyScore(main, helper) {
  let score = 0;
  if (helper.synergies.includes(firstElement(main.element).toLowerCase())) score += 14;
  if (main.synergies.some((tag) => helper.tags.includes(tag) || helper.synergies.includes(tag))) score += 10;
  if (helper.synergies.includes("any")) score += 7;
  if (main.tags.includes("heavy") && helper.tags.includes("heavy")) score += 10;
  if (main.tags.includes("coordinated") && helper.tags.includes("coordinated")) score += 8;
  if (helper.tags.includes("sustain")) score += 6;
  return score;
}

function reasonTeam(main, sub, sustain) {
  const reasons = [];
  const archetype = teamArchetypes[main.slug];
  if (archetype) reasons.push(archetype.note);
  if (state.weapons.has(main.build.weapon)) reasons.push(`${main.name} has their listed weapon, so their build path is clearer.`);
  if (teamPreferences[main.slug]?.core.includes(sub.slug)) reasons.push(`${sub.name} is one of ${main.name}'s preferred helper options in this guide.`);
  if (sub.synergies.includes(firstElement(main.element).toLowerCase())) reasons.push(`${sub.name} matches ${main.name}'s ${firstElement(main.element)} direction.`);
  if (sub.tags.some((tag) => main.tags.includes(tag))) reasons.push(`${sub.name} supports a mechanic ${main.name} already wants.`);
  if (teamPreferences[main.slug]?.sustain.includes(sustain.slug)) reasons.push(`${sustain.name} is prioritised for the third slot in this guide.`);
  if (sustain.roles.includes("healer")) reasons.push(`${sustain.name} keeps the team stable, which makes the rotation easier to learn.`);
  if (!sustain.roles.includes("healer") && !sustain.roles.includes("defense")) reasons.push(`${sustain.name} is utility, not a true healer, so this team has less mistake protection.`);
  if (!reasons.length) reasons.push("This is a role-complete shell: damage, helper, and a third-slot utility or sustain pick.");
  return reasons.join(" ");
}

function dedupeTeams(teams) {
  const seen = new Set();
  return teams.filter((team) => {
    const key = team.members.map((member) => member.slug).sort().join("|");
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function renderResults() {
  const teams = generateTeams();
  const selected = teams.find((team) => teamKey(team) === state.selectedTeamKey) || teams[0];
  const grouped = groupTeamsByMain(teams);
  const visibleGroups = state.showAllTeams ? grouped : grouped.slice(0, 4);
  const visibleCount = visibleGroups.reduce((count, group) => count + group.teams.length, 0);
  const hiddenCount = teams.length - visibleCount;
  $("#team-count").textContent = visibleCount;
  $("#team-count-label").textContent = hiddenCount > 0 ? `shown now, ${hiddenCount} more saved` : "team ideas ready";
  $("#empty-results").hidden = teams.length > 0;
  if (teams.length && !teams.some((team) => teamKey(team) === state.selectedTeamKey)) {
    state.selectedTeamKey = teamKey(teams[0]);
  }
  if (!teams.length) state.selectedTeamKey = "";
  teamResults.innerHTML = teams.length ? `
    ${bestTeamPanel(teams[0])}
    <section class="team-results-layout" aria-label="Grouped team suggestions">
      <div class="team-group-list">
        ${visibleGroups.map((group) => teamMainGroup(group, teams)).join("")}
      </div>
      ${selectedTeamPreview(selected)}
    </section>
    ${teamRevealButton(hiddenCount)}
  ` : "";
  const reveal = $("#show-more-teams");
  if (reveal) {
    reveal.addEventListener("click", () => {
      state.showAllTeams = !state.showAllTeams;
      renderResults();
    });
  }
  teamResults.querySelectorAll("[data-team-key]").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest(".team-details")) return;
      if (event.target.closest("[data-report-team]")) return;
      selectTeam(card.dataset.teamKey, Boolean(event.target.closest(".row-action")));
    });
  });
  teamResults.querySelectorAll(".team-details").forEach((details) => {
    details.addEventListener("click", (event) => event.stopPropagation());
  });
  teamResults.querySelectorAll("[data-view-builds]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      selectTeam(button.dataset.viewBuilds, true);
    });
  });
  teamResults.querySelectorAll("[data-report-team]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      reportTeam(button.dataset.reportTeam, teams);
    });
  });
  teamResults.querySelectorAll("[data-tune-team]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const team = teams.find((entry) => teamKey(entry) === button.dataset.tuneTeam);
      if (team) openTeamTuner(team);
    });
  });
  teamResults.querySelectorAll("[data-save-team]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const team = teams.find((entry) => teamKey(entry) === button.dataset.saveTeam);
      if (!team) return;
      saveTeamRecord(team);
      teamResults.querySelectorAll(`[data-save-team="${button.dataset.saveTeam}"]`).forEach((control) => {
        control.textContent = control.classList.contains("row-action") ? "Saved" : "Saved team";
      });
      renderAccountOverview();
    });
  });
  teamResults.querySelectorAll("[data-plan-team]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const team = teams.find((entry) => teamKey(entry) === button.dataset.planTeam);
      if (!team) return;
      state.buildPlan = [...new Set([...state.buildPlan, ...team.members.map((member) => member.slug)])];
      markUnsaved();
      persistImmediateProfileChange();
      teamResults.querySelectorAll(`[data-plan-team="${button.dataset.planTeam}"]`).forEach((control) => {
        control.textContent = control.classList.contains("row-action") ? "Planned" : "Team planned";
      });
      renderAccountOverview();
    });
  });
  renderBuilds(teams);
  renderFeedbackContext(teams);
  renderFlowNext(teams);
}

function groupTeamsByMain(teams) {
  const groups = [];
  teams.forEach((team, index) => {
    let group = groups.find((item) => item.main.slug === team.main.slug);
    if (!group) {
      group = { main: team.main, startRank: index + 1, teams: [] };
      groups.push(group);
    }
    group.teams.push(team);
  });
  return groups.sort((a, b) => scoreCharacter(b.main) - scoreCharacter(a.main) || b.teams[0].score - a.teams[0].score);
}

function bestTeamPanel(team) {
  const key = teamKey(team);
  return `
    <article class="best-team-panel element-${firstElement(team.main.element).toLowerCase()} ${state.selectedTeamKey === key ? "is-selected" : ""}" data-team-key="${key}">
      <div class="best-team-copy">
        <span class="best-label">Best from your roster</span>
        <h3>${team.members.map((member) => member.name).join(" / ")}</h3>
        <p>${bestTeamSummary(team)}</p>
        <div class="reason-strip">
          ${reasonPill("Damage", damageLabel(team))}
          ${reasonPill("Safety", safetyLabel(team))}
          ${reasonPill("Confidence", teamConfidence(team).label)}
        </div>
        <div class="team-actions">
          <button class="button primary team-build-button" type="button" data-view-builds="${key}">View builds</button>
          <button class="button ghost" type="button" data-save-team="${key}">${teamIsSaved(team) ? "Saved team" : "Save team"}</button>
          <button class="button ghost team-report-button" type="button" data-report-team="${key}">Report this team</button>
        </div>
      </div>
      <div class="best-team-visual">
        <div class="portrait-trio" aria-label="Featured team portraits">
          ${team.members.map((member, index) => portraitCard(member, index === 0)).join("")}
        </div>
        ${bestShellStrip(team)}
      </div>
    </article>
  `;
}

function bestTeamSummary(team) {
  const investment = state.owned[team.main.slug]?.chain ? `R${state.owned[team.main.slug].chain} ` : "";
  const weapon = state.weapons.has(team.main.build.weapon) ? ` with ${team.main.build.weapon}` : "";
  return `${investment}${team.main.name}${weapon} is the strongest carry path WaveKit sees from your selected roster. ${team.members[1].name} supports the plan, while ${team.members[2].name} covers the third slot.`;
}

function damageLabel(team) {
  if (state.owned[team.main.slug]?.chain >= 2 && state.weapons.has(team.main.build.weapon)) return "High invested carry";
  if (team.main.score >= 90) return "Premium carry";
  return "Usable carry";
}

function reasonPill(label, value) {
  return `<span><small>${label}</small><strong>${value}</strong></span>`;
}

function portraitCard(character, isMain = false) {
  const file = wallpapers.get(character.slug) || wallpapers.get("rover");
  return `
    <span class="portrait-card ${isMain ? "main" : ""}" style="--chip-focus: ${chipFocus(character)};">
      <img src="assets/wallpapers/${file}" alt="" loading="lazy" decoding="async">
      <b>${character.name}</b>
    </span>
  `;
}

function teamMainGroup(group, teams) {
  return `
    <article class="team-main-group element-${firstElement(group.main.element).toLowerCase()}">
      <div class="group-head">
        <div>
          <h3>${group.main.name} teams</h3>
          <p>${mainGroupNote(group)}</p>
        </div>
        <strong>${groupLabel(group, teams)}</strong>
      </div>
      <div class="compact-team-list">
        ${group.teams.map((team) => teamRow(team, teams.indexOf(team) + 1)).join("")}
      </div>
    </article>
  `;
}

function mainGroupNote(group) {
  if (group.startRank === 1) return "Highest priority DPS path on this account.";
  if (group.main.score >= 90) return "Strong carry option from your roster.";
  return "Usable team options when you want variety or backups.";
}

function groupLabel(group, teams) {
  if (group.startRank === 1) return "Best DPS";
  if (group.startRank <= 4) return "Strong option";
  return `Rank ${group.startRank}`;
}

function teamRow(team, rank) {
  const key = teamKey(team);
  return `
    <article class="team-row ${state.selectedTeamKey === key ? "is-selected" : ""}" data-team-key="${key}">
      <span class="rank">${rank}</span>
      <span>
        <small>${rank === 1 ? "Recommended" : teamFitLabel(team)}</small>
        <span class="team-title-line">
          ${miniTeamIcons(team)}
          <strong>${team.members.map((member) => member.name).join(" / ")}</strong>
        </span>
        <span class="chips">
          ${teamChips(team)}
        </span>
      </span>
      <span class="row-actions">
        <button class="row-action" type="button" data-view-builds="${key}">View builds</button>
        <button class="row-action" type="button" data-save-team="${key}">${teamIsSaved(team) ? "Saved" : "Save"}</button>
        <button class="row-action muted" type="button" data-plan-team="${key}">${teamIsPlanned(team) ? "Planned" : "Plan"}</button>
      </span>
    </article>
  `;
}

function miniTeamIcons(team) {
  return `
    <span class="mini-team" aria-hidden="true">
      ${team.members.map((member) => {
        const file = wallpapers.get(member.slug) || wallpapers.get("rover");
        return `<img src="assets/wallpapers/${file}" alt="" loading="lazy" decoding="async">`;
      }).join("")}
    </span>
  `;
}

function teamChips(team) {
  const chips = [];
  const chain = state.owned[team.main.slug]?.chain || 0;
  if (chain) chips.push(`<span class="chip good">R${chain} carry</span>`);
  if (state.weapons.has(team.main.build.weapon)) chips.push(`<span class="chip good">Weapon owned</span>`);
  if (team.members[2].roles.includes("healer")) chips.push(`<span class="chip good">Healer</span>`);
  if (teamFitLabel(team) === "Archetype fit") chips.push(`<span class="chip good">Target shell</span>`);
  chips.push(`<span class="chip confidence">${teamConfidence(team).label}</span>`);
  const missing = missingBestShellNames(team);
  if (missing.length) chips.push(`<span class="chip missing">Missing ${missing[0]}</span>`);
  if (!chips.length) chips.push(`<span class="chip">${safetyLabel(team)}</span>`);
  return chips.slice(0, 4).join("");
}

function selectedTeamPreview(team) {
  if (!team) return "";
  return `
    <aside class="selected-team-preview" aria-label="Selected team build preview">
      <p class="kicker">Selected team</p>
      <h3>${team.members.map((member) => member.name).join(" / ")}</h3>
      <div class="build-mini">
        ${team.members.map((member) => selectedBuildMini(member, team)).join("")}
      </div>
      <div class="team-actions">
        <button class="button primary team-build-button" type="button" data-view-builds="${teamKey(team)}">Open full build cards</button>
        <button class="button ghost" type="button" data-tune-team="${teamKey(team)}">Tune team</button>
        <button class="button ghost" type="button" data-save-team="${teamKey(team)}">${teamIsSaved(team) ? "Saved team" : "Save team"}</button>
        <button class="button ghost" type="button" data-plan-team="${teamKey(team)}">${teamIsPlanned(team) ? "Team planned" : "Plan this team"}</button>
        <button class="button ghost team-report-button" type="button" data-report-team="${teamKey(team)}">Report this team</button>
      </div>
    </aside>
  `;
}

function selectedBuildMini(character, team) {
  const build = buildForTeam(character, team);
  const file = wallpapers.get(character.slug) || wallpapers.get("rover");
  return `
    <a href="${characterGuideHref(character)}" aria-label="Open ${character.name} guide">
      <img src="assets/wallpapers/${file}" alt="" loading="lazy" decoding="async">
      <div>
        <strong>${character.name}</strong>
        <span>${build.weapon} · ${build.sonata} · ${costPattern(character)}</span>
      </div>
    </a>
  `;
}

function renderFlowNext(teams = generateTeams()) {
  const ownedCount = Object.keys(state.owned).length;
  const selectedTeam = teams.find((team) => teamKey(team) === state.selectedTeamKey);
  const next = nextFlowAction({ ownedCount, selectedTeam, teams });
  if (shouldHideFlowNext(next)) {
    flowNext.hidden = true;
    return;
  }
  flowNext.hidden = false;
  flowNext.dataset.target = next.target;
  flowNextStep.textContent = next.step;
  flowNextTitle.textContent = next.title;
  flowNextDetail.textContent = next.detail;
  flowNextButton.textContent = next.button;
}

function shouldHideFlowNext(next) {
  if (flowSuppressedBySection()) return true;
  return next.target === "builds" && state.flowBuildsOpened;
}

function flowSuppressedBySection() {
  if (location.hash === "#my-wavekit") return true;
  const topbarHeight = $(".topbar")?.getBoundingClientRect().height || 0;
  const profileSection = document.querySelector("#my-wavekit");
  if (profileSection) {
    const profileRect = profileSection.getBoundingClientRect();
    const flowHeight = flowNext?.getBoundingClientRect().height || 100;
    if (profileRect.top < window.innerHeight - flowHeight && profileRect.bottom > topbarHeight) return true;
  }
  return ["#feedback", "#trust", "#sources"].some((hash) => {
    const section = document.querySelector(hash);
    if (!section) return false;
    const rect = section.getBoundingClientRect();
    return rect.top <= topbarHeight + 80 && rect.bottom > topbarHeight + 80;
  });
}

function syncFlowNextVisibility() {
  if (flowSuppressedBySection()) {
    flowNext.hidden = true;
  } else if (flowNext.hidden) {
    renderFlowNext();
  }
}

function nextFlowAction({ ownedCount, selectedTeam, teams }) {
  if (ownedCount < 3) {
    return {
      step: "Step 1 of 3",
      title: `${ownedCount}/3 Resonators selected`,
      detail: "Tap the characters you own. Three is enough to start seeing team ideas.",
      button: "Choose Resonators",
      target: "roster"
    };
  }
  if (!state.weapons.size) {
    return {
      step: "Step 2 of 3",
      title: "Add weapons when ready",
      detail: "This is optional, but owned weapons make build advice more accurate.",
      button: "Add weapons",
      target: "weapons"
    };
  }
  if (!teams.length) {
    return {
      step: "Step 3 of 3",
      title: "Choose a main damage dealer",
      detail: "You have enough picks, but WaveKit needs a usable team shell to score.",
      button: "Check Resonators",
      target: "roster"
    };
  }
  if (!state.flowVisitedResults || !selectedTeam) {
    return {
      step: "Step 3 of 3",
      title: `${teams.length} team ideas ready`,
      detail: "Open the suggestions and pick the team you want to build first.",
      button: "View teams",
      target: "results"
    };
  }
  return {
    step: "Ready",
    title: `${selectedTeam.main.name} team selected`,
    detail: "View focused build cards, then send feedback if anything looks off.",
    button: "View builds",
    target: "builds"
  };
}

function handleFlowNext() {
  const target = flowNext.dataset.target;
  if (target === "roster") {
    scrollToSection("#helper", ".roster-panel");
    return;
  }
  if (target === "weapons") {
    scrollToSection("#helper", ".weapon-panel");
    return;
  }
  if (target === "results") {
    state.flowVisitedResults = true;
    renderFlowNext();
    scrollToSection("#results");
    return;
  }
  if (target === "builds") {
    state.flowBuildsOpened = true;
    renderFlowNext();
    scrollToSection("#builds");
    return;
  }
  scrollToSection("#helper");
}

function scrollToSection(primarySelector, preferredSelector = primarySelector) {
  const target = document.querySelector(preferredSelector) || document.querySelector(primarySelector);
  if (primarySelector.startsWith("#")) setActiveNav(primarySelector);
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setActiveNav(hash) {
  currentSectionHash = hash || currentSectionHash;
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === hash;
    link.classList.toggle("is-active", isActive);
    if (isActive) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

function updateActiveNav() {
  const topbarHeight = $(".topbar")?.getBoundingClientRect().height || 0;
  let currentHash = "";
  navSections.forEach((section) => {
    if (section.getBoundingClientRect().top <= topbarHeight + 92) {
      currentHash = `#${section.id}`;
    }
  });
  const previousHash = currentSectionHash;
  setActiveNav(currentHash);
  if (currentSectionHash !== previousHash) renderFlowNext();
  else syncFlowNextVisibility();
}

function tierTeams(teams) {
  const priorityTeams = teams.filter((team) => team.mainRank <= 2);
  const extraTeams = teams.filter((team) => team.mainRank > 2);
  const t1 = priorityTeams.slice(0, 6);
  const t2 = priorityTeams.slice(6, 12);
  const t3 = [...priorityTeams.slice(12), ...extraTeams].slice(0, 8);
  return [
    { tier: "t1", label: "T1 Best matches", badge: "Best Match", teams: t1 },
    { tier: "t2", label: "T2 Strong alternatives", badge: "Strong Match", teams: t2 },
    { tier: "t3", label: "T3 Situational picks", badge: "Situational", teams: t3 }
  ].filter((group) => group.teams.length);
}

function teamCard(team, group, index) {
  const number = group.tier === "t1" ? index + 1 : index + 1 + (group.tier === "t2" ? 6 : 12);
  const key = teamKey(team);
  return `
    <article class="team-card ${group.tier} ${state.selectedTeamKey === key ? "is-selected" : ""}" data-team-key="${key}">
      <div class="team-heading">
        <span>Suggestion ${number}</span>
        <h3>${team.main.name} team</h3>
        <strong class="match-badge">${group.badge}</strong>
      </div>
      <div class="team-members">
        ${team.members.map((member) => memberChip(member)).join("")}
      </div>
      <div class="team-focus">
        <span>${matchFocus(team)}</span>
        <span>${safetyLabel(team)}</span>
        <span>${teamConfidence(team).label}</span>
      </div>
      ${bestShellStrip(team)}
      <div class="team-plan" aria-label="Team slots">
        <strong>Team slots</strong>
        ${teamSlot(team.members[0], "Slot 1", "Main field time")}
        ${teamSlot(team.members[1], "Slot 2", "Helper setup")}
        ${teamSlot(team.members[2], "Slot 3", slotThreePurpose(team.members[2]))}
      </div>
      <button class="button primary team-build-button" type="button" data-view-builds="${key}">Open builds for this team</button>
      <details class="team-details">
        <summary>Why this suggestion?</summary>
        <div class="detail-grid">
          ${teamInsight("Fit", teamFitLabel(team), teamFitDetail(team))}
          ${teamInsight("Safety", safetyLabel(team), safetyDetail(team))}
          ${teamInsight("How to play", "Simple flow", rotationText(team))}
          ${teamConfidence(team).label === "Needs review" ? teamInsight("Data note", teamConfidence(team).label, teamConfidence(team).detail) : ""}
        </div>
      </details>
    </article>
  `;
}

function teamKey(team) {
  return `${state.roverForm}:${team.members.map((member) => member.slug).join("|")}`;
}

function teamIsSaved(team) {
  const key = teamKey(team);
  return state.savedTeams.some((record) => savedTeamRecordKey(record) === key);
}

function teamIsPlanned(team) {
  return team.members.every((member) => state.buildPlan.includes(member.slug));
}

function openSavedOrSuggestedTeam(key) {
  const [form] = key.split(":");
  if (roverForms[form]) {
    state.roverForm = form;
    state.roverForms.add(form);
  }
  const team = generateTeams().find((entry) => teamKey(entry) === key);
  if (!team) return;
  state.selectedTeamKey = teamKey(team);
  state.flowVisitedResults = true;
  render();
  scrollToSection("#results");
}

function saveTeamRecord(team) {
  const record = { members: team.members.map((member) => member.slug), roverForm: state.roverForm, savedAt: new Date().toISOString() };
  const key = savedTeamRecordKey(record);
  state.savedTeams = [record, ...state.savedTeams.filter((entry) => savedTeamRecordKey(entry) !== key)].slice(0, 12);
  state.selectedTeamKey = key;
  markUnsaved();
  persistImmediateProfileChange();
  return key;
}

function openTeamTuner(team) {
  if (!teamTuner || !teamTunerContent) return;
  teamTunerDraft = {
    original: team.members.map((member) => member.slug),
    members: team.members.map((member) => member.slug),
    slot: 1
  };
  renderTeamTuner();
  if (typeof teamTuner.showModal === "function") teamTuner.showModal();
  else teamTuner.setAttribute("open", "");
}

function renderTeamTuner() {
  if (!teamTunerDraft || !teamTunerContent) return;
  const current = teamObjectFromSlugs(teamTunerDraft.members);
  const original = teamObjectFromSlugs(teamTunerDraft.original);
  if (!current || !original) {
    teamTunerContent.innerHTML = `<div class="empty-state">This team is no longer available from the selected roster.</div>`;
    return;
  }
  const slot = teamTunerDraft.slot;
  const options = tunerCandidates(current, slot);
  const slotName = slot === 1 ? "setup helper" : "third slot";
  teamTunerContent.innerHTML = `
    <div class="team-tuner-current">
      ${current.members.map((member, index) => `<button class="tuner-slot ${slot === index ? "is-active" : ""} ${index === 0 ? "is-locked" : ""}" type="button" ${index === 0 ? "disabled" : `data-tuner-slot="${index}"`}><img src="assets/wallpapers/${wallpapers.get(member.slug) || wallpapers.get("rover")}" alt=""><span><small>${index === 0 ? "Main damage" : index === 1 ? "Setup helper" : "Third slot"}</small><strong>${member.name}</strong></span></button>`).join("")}
    </div>
    <div class="team-tuner-layout">
      <section class="tuner-options">
        <header><span>Compatible owned alternatives</span><h3>Choose the ${slotName}</h3></header>
        <div>${options.length ? options.map((option) => tunerOption(option, current.members[slot])).join("") : `<p>No other selected Resonator preserves this team’s role and synergy requirements.</p>`}</div>
      </section>
      <aside class="tuner-impact">
        <span>Adjusted team</span>
        <h3>${current.members.map((member) => member.name).join(" / ")}</h3>
        <dl>
          <div><dt>Fit</dt><dd>${teamFitLabel(current)}</dd></div>
          <div><dt>Safety</dt><dd>${safetyLabel(current)}</dd></div>
          <div><dt>Difficulty</dt><dd>${difficultyLabel(current)}</dd></div>
        </dl>
        <p>${teamFitDetail(current)} ${safetyDetail(current)}</p>
        <details class="tuner-compare">
          <summary>Compare with original</summary>
          <div><span><small>Original</small><strong>${original.members.map((member) => member.name).join(" / ")}</strong><em>${teamFitLabel(original)} · ${safetyLabel(original)}</em></span><span><small>Adjusted</small><strong>${current.members.map((member) => member.name).join(" / ")}</strong><em>${teamFitLabel(current)} · ${safetyLabel(current)}</em></span></div>
        </details>
        <div class="team-actions">
          <button id="save-tuned-team" class="button primary" type="button">Save this version</button>
          <button id="plan-tuned-team" class="button ghost" type="button">Add to Build Plan</button>
        </div>
      </aside>
    </div>`;

  teamTunerContent.querySelectorAll("[data-tuner-slot]").forEach((button) => button.addEventListener("click", () => {
    teamTunerDraft.slot = Number(button.dataset.tunerSlot);
    renderTeamTuner();
  }));
  teamTunerContent.querySelectorAll("[data-tuner-character]").forEach((button) => button.addEventListener("click", () => {
    teamTunerDraft.members[teamTunerDraft.slot] = button.dataset.tunerCharacter;
    renderTeamTuner();
  }));
  teamTunerContent.querySelector("#save-tuned-team")?.addEventListener("click", () => {
    const tuned = teamObjectFromSlugs(teamTunerDraft.members);
    if (!tuned) return;
    saveTeamRecord(tuned);
    teamTuner.close();
    render();
    scrollToSection("#results");
  });
  teamTunerContent.querySelector("#plan-tuned-team")?.addEventListener("click", (event) => {
    state.buildPlan = [...new Set([...state.buildPlan, ...current.members.map((member) => member.slug)])];
    markUnsaved();
    persistImmediateProfileChange();
    event.currentTarget.textContent = "Added to Build Plan";
    renderAccountOverview();
  });
}

function tunerCandidates(team, slot) {
  const currentSlug = team.members[slot].slug;
  return activeCharacters().filter((character) => {
    if (!state.owned[character.slug]) return false;
    if (team.members.some((member, index) => index !== slot && member.slug === character.slug)) return false;
    if (slot === 1 && !(character.roles.includes("sub") || character.roles.includes("support") || character.roles.includes("defense"))) return false;
    if (slot === 2 && !(character.roles.includes("healer") || character.roles.includes("support") || character.roles.includes("defense"))) return false;
    const slugs = team.members.map((member) => member.slug);
    slugs[slot] = character.slug;
    const candidate = teamObjectFromSlugs(slugs);
    return Boolean(candidate && (character.slug === currentSlug || isSuggestibleTeam(candidate)));
  }).map((character) => {
    const slugs = team.members.map((member) => member.slug);
    slugs[slot] = character.slug;
    return { character, team: teamObjectFromSlugs(slugs) };
  }).sort((a, b) => b.team.score - a.team.score).slice(0, 8);
}

function tunerOption(option, selected) {
  const file = wallpapers.get(option.character.slug) || wallpapers.get("rover");
  const selectedClass = selected.slug === option.character.slug ? "is-selected" : "";
  return `<button class="tuner-option ${selectedClass}" type="button" data-tuner-character="${option.character.slug}"><img src="assets/wallpapers/${file}" alt=""><span><strong>${option.character.name}</strong><small>${teamFitLabel(option.team)} · ${safetyLabel(option.team)}</small></span><em>${selectedClass ? "Current" : "Use"}</em></button>`;
}

function selectTeam(key, jumpToBuilds) {
  state.selectedTeamKey = key;
  state.flowBuildsOpened = Boolean(jumpToBuilds);
  renderResults();
  if (jumpToBuilds) scrollToSection("#builds");
}

function reportTeam(key, teams = generateTeams()) {
  state.selectedTeamKey = key;
  renderResults();
  const team = teams.find((item) => teamKey(item) === key);
  const type = $("#feedback-type");
  const message = $("#feedback-message");
  if (type) type.value = "Team suggestion seems wrong";
  if (message && team) {
    message.placeholder = `What looks wrong with ${team.members.map((member) => member.name).join(" / ")}?`;
  }
  $("#save-status").textContent = "Team report ready";
  scrollToSection("#feedback");
  setTimeout(() => message?.focus(), 450);
}

function teamRevealButton(hiddenCount) {
  if (!hiddenCount && !state.showAllTeams) return "";
  return `
    <div class="team-reveal">
      <button id="show-more-teams" class="button ghost" type="button">
        ${state.showAllTeams ? "Hide situational picks" : `Show ${hiddenCount} situational picks`}
      </button>
    </div>
  `;
}

function matchFocus(team) {
  if (teamArchetypes[team.main.slug]) return teamArchetypes[team.main.slug].label;
  if (team.members[2].roles.includes("healer")) return "Low-stress sustain included";
  if (team.members[2].roles.includes("defense")) return "Safer defensive option";
  if (team.members[1].synergies.includes(firstElement(team.main.element).toLowerCase())) return "Element synergy helper";
  return "Role-complete team shell";
}

function safetyLabel(team) {
  const third = team.members[2];
  if (third.roles.includes("healer")) return "Real healer";
  if (third.roles.includes("defense")) return "Defensive safety";
  return "No full healer";
}

function teamConfidence(team) {
  if (team.members.some((member) => confidenceFor(member)[0] === "review")) {
    return { label: "Needs review", detail: `${team.members.filter((member) => confidenceFor(member)[0] === "review").map((member) => member.name).join(", ")} need current patch review, so treat this as provisional.` };
  }
  if (teamFitLabel(team) === "Archetype fit") {
    return { label: "Core archetype", detail: "This matches one of WaveKit's named team shells for the main DPS." };
  }
  if (team.members[2].roles.includes("healer") && teamPreferences[team.main.slug]?.core.includes(team.members[1].slug)) {
    return { label: "Strong fallback", detail: "The main helper is preferred, and the third slot keeps the team stable even if it is not the perfect version." };
  }
  if (team.members[2].roles.includes("healer") || team.members[2].roles.includes("defense")) {
    return { label: "Comfort pick", detail: "This leans toward safety and consistency over maximum damage." };
  }
  return { label: "Experimental", detail: "This can function as a role shell, but it has less protection and should be tested before relying on it." };
}

function teamFitLabel(team) {
  const archetype = teamArchetypes[team.main.slug];
  if (!archetype) return "Flexible fit";
  const pair = [team.members[1].slug, team.members[2].slug];
  return archetype.ideal.some((ideal) => ideal.every((slug) => pair.includes(slug))) ? "Archetype fit" : "Fallback fit";
}

function teamFitDetail(team) {
  const sub = team.members[1];
  const third = team.members[2];
  const main = team.main;
  if (teamFitLabel(team) === "Archetype fit") {
    return `${sub.name} and ${third.name} match ${main.name}'s preferred ${archetypeLabel(main)} plan.`;
  }
  if (teamPreferences[main.slug]?.core.includes(sub.slug)) {
    return `${sub.name} is a preferred helper, while ${third.name} fills the third slot from your available roster.`;
  }
  return `${sub.name} and ${third.name} create a usable role shell, but this may be less optimal than the named archetype partners.`;
}

function safetyDetail(team) {
  const third = team.members[2];
  if (third.roles.includes("healer")) return `${third.name} provides real sustain, so this team should be easier to learn and recover with.`;
  if (third.roles.includes("defense")) return `${third.name} adds shielding or defensive comfort, but this is still not the same as a full healer.`;
  return `${third.name} is a utility or damage support. Use this team carefully in harder fights because mistakes are less protected.`;
}

function confidenceFor(character) {
  return dataConfidence[character.slug] || ["verified", "Verified"];
}

function teamDataLabel(team) {
  return team.members.some((member) => confidenceFor(member)[0] === "review") ? "Needs review" : "Verified/checked";
}

function teamDataDetail(team) {
  const reviewNames = team.members.filter((member) => confidenceFor(member)[0] === "review").map((member) => member.name);
  if (reviewNames.length) return `${reviewNames.join(", ")} need current patch review, so treat this suggestion as provisional.`;
  return "This team uses characters whose role and build data are marked verified or guide-checked in WaveKit's current data pass.";
}

function difficultyLabel(team) {
  const riskyMain = ["danjin", "calcharo", "camellya"].includes(team.main.slug);
  if (!team.members[2].roles.includes("healer")) return "Advanced";
  if (riskyMain || !team.members[2].roles.includes("healer")) return "Moderate";
  if (teamFitLabel(team) === "Archetype fit") return "Easy to learn";
  return "Moderate";
}

function teamPurpose(team) {
  const archetype = archetypeLabel(team.main);
  if (team.main.roles.includes("main")) return `${team.main.name} carries the damage while the team supports ${archetype.toLowerCase()}.`;
  return `${team.main.name} anchors a flexible team shell with support and sustain around them.`;
}

function bestFor(team) {
  if (state.suggestionStyle === "Ready Now") return "Story, bosses, and lower-stress learning";
  if (state.suggestionStyle === "Build Priority") return "Characters worth investing into next";
  if (team.members[2].roles.includes("healer")) return "General play and clean boss practice";
  return "General play and focused DPS practice";
}

function rotationText(team) {
  const [main, sub, third] = team.members;
  if (third.roles.includes("healer")) {
    return `Start with ${third.name} for safety and buffs, use ${sub.name} to set up the team plan, then swap to ${main.name} for the main damage window.`;
  }
  if (third.roles.includes("defense")) {
    return `Use ${third.name} first if the fight feels risky, set up ${sub.name}, then let ${main.name} take the clean damage window.`;
  }
  return `Set up ${sub.name} and ${third.name} quickly, then move to ${main.name}. Play carefully because this version has no full healer.`;
}

function missingAlternativeNote(team) {
  const archetype = teamArchetypes[team.main.slug];
  if (!archetype) return "No fixed best shell is required; this team is using flexible role coverage from your roster.";
  const pair = [team.members[1].slug, team.members[2].slug];
  const ideal = archetype.ideal.find((combo) => combo.every((slug) => pair.includes(slug)));
  if (ideal) return "This is one of the intended shells, so no major replacement note is needed.";
  const bestIdeal = archetype.ideal[0] || [];
  const missing = bestIdeal.filter((slug) => !state.owned[slug]).map(characterName);
  const replacements = [team.members[1].name, team.members[2].name].filter((name) => !bestIdeal.map(characterName).includes(name));
  if (missing.length && replacements.length) return `Missing ${missing.join(" and ")}. WaveKit is using ${replacements.join(" and ")} as your available replacement path.`;
  if (missing.length) return `Missing ${missing.join(" and ")} for the cleanest version of this archetype.`;
  return "You own the core pieces, but this exact pair ranked lower than another available shell.";
}

function characterName(slug) {
  return activeCharacters().find((character) => character.slug === slug)?.name || slug;
}

function bestPartnerDetail(team) {
  const archetype = teamArchetypes[team.main.slug];
  const pref = teamPreferences[team.main.slug];
  const bestShell = archetype?.ideal?.[0]?.map(characterName).join(" + ");
  const core = pref?.core?.slice(0, 3).map(characterName).join(", ");
  const sustain = pref?.sustain?.slice(0, 3).map(characterName).join(", ");
  if (bestShell) return `Common best-shell target: ${team.main.name} + ${bestShell}. Other useful helpers: ${core || "flexible utility"}. Safer sustain picks: ${sustain || "a real healer when available"}.`;
  return `WaveKit treats ${team.main.name} as flexible here. Preferred helpers: ${core || "role coverage first"}. Safer sustain picks: ${sustain || "a real healer when available"}.`;
}

function bestShellSlugs(team) {
  const pair = teamArchetypes[team.main.slug]?.ideal?.[0] || [];
  return pair.length ? [team.main.slug, ...pair] : [];
}

function bestShellStatus(team) {
  const shell = bestShellSlugs(team);
  if (!shell.length) return "Flexible";
  const missing = shell.filter((slug) => !state.owned[slug]).map(characterName);
  if (!missing.length) return "Owned target";
  return `Missing ${missing.join(" / ")}`;
}

function missingBestShellNames(team) {
  return bestShellSlugs(team).filter((slug) => !state.owned[slug]).map(characterName);
}

function bestShellDetail(team) {
  const shell = bestShellSlugs(team);
  if (!shell.length) return bestPartnerDetail(team);
  const shellText = shell.map(characterName).join(" + ");
  const currentText = team.members.map((member) => member.name).join(" + ");
  const missing = shell.filter((slug) => !state.owned[slug]).map(characterName);
  if (!missing.length) {
    return `${shellText} is WaveKit's current target shell for this DPS. It can appear as a real suggestion because you own every listed character.`;
  }
  return `${shellText} is shown as reference only because you do not own ${missing.join(" and ")}. This card uses your closest owned version: ${currentText}.`;
}

function bestShellStrip(team) {
  const shell = bestShellSlugs(team);
  if (!shell.length) return "";
  const shellText = shell.map(characterName).join(" + ");
  const missing = shell.filter((slug) => !state.owned[slug]).map(characterName);
  const currentHelpers = team.members.slice(1).map((member) => member.name).join(" + ");
  const note = missing.length
    ? `Missing ${missing.join(" and ")}. Using ${currentHelpers} from your roster.`
    : "You own the current target shell for this DPS.";
  return `
    <div class="team-bis-strip">
      <span>Best target</span>
      <strong>${shellText}</strong>
      <p>${note}</p>
    </div>
  `;
}

function rosterLogicDetail(team) {
  const ownedIdeal = ownedIdealPartners(team);
  const note = missingAlternativeNote(team);
  if (ownedIdeal.length) return `You own ${ownedIdeal.join(", ")} from this character's preferred pool. ${note}`;
  return `WaveKit is choosing from your selected roster rather than assuming every premium teammate. ${note}`;
}

function ownedIdealPartners(team) {
  const archetype = teamArchetypes[team.main.slug];
  const preference = teamPreferences[team.main.slug];
  const slugs = new Set([
    ...(archetype?.ideal || []).flat(),
    ...(preference?.core || []),
    ...(preference?.sustain || [])
  ]);
  return [...slugs].filter((slug) => state.owned[slug]).map(characterName).slice(0, 5);
}

function teamInsight(label, value, detail) {
  return `
    <div>
      <span>${label}</span>
      <strong>${value}</strong>
      <p>${detail}</p>
    </div>
  `;
}

function slotThreePurpose(character) {
  if (character.roles.includes("healer")) return "Healing safety";
  if (character.roles.includes("defense")) return "Defensive safety";
  if (character.slug === "rover" && state.roverForm === "Aero") return "Aero Erosion utility";
  if (character.roles.includes("support")) return "Support utility";
  return "Utility damage";
}

function buildReadiness(team) {
  const ready = team.members.filter((member) => state.weapons.has(member.build.weapon)).length;
  if (ready === team.members.length) return "All listed weapons owned";
  if (ready > 0) return `${ready}/3 listed weapons owned`;
  return "Uses fallback weapon advice";
}

const sonataSymbols = {
  "Moonlit Clouds": "☁",
  "Rejuvenating Glow": "✦",
  "Windward Pilgrimage": "↗",
  "Sierra Gale": "≋",
  "Havoc Eclipse": "◐",
  "Celestial Light": "✧",
  "Void Thunder": "ϟ",
  "Molten Rift": "◆",
  "Freezing Frost": "❄",
  "Empyrean Anthem": "♪",
  "Midnight Veil": "◒",
  "Eternal Radiance": "☼",
  "Gusts of Welkin": "⌁",
  "Frosty Resolve": "✶",
  "Crown of Valor": "♕",
  "Dream of the Lost": "◌",
  "Pact of Neonlight": "◇",
  "Pact of Neonlight Leap": "◇",
  "Tidebreaking Courage": "≈",
  "Flaming Clawprint": "♨",
  "Flamewing's Shadow": "翼",
  "Law of Harmony": "⚖",
  "Thread of Severed Fate": "⌘",
  "Shadow of Shattered Dreams": "◈",
  "Rite of Gilded Revelation": "⬡",
  "Chromatic Foam": "✹",
  "Trailblazing Star": "★",
  "Halo of Starry Radiance": "✺",
  "Wishes of Quiet Snowfall": "✢",
  "Sound of True Name": "◍"
};

const sonataIcons = {
  "Moonlit Clouds": "assets/sonatas/moonlit-clouds.png",
  "Rejuvenating Glow": "assets/sonatas/rejuvenating-glow.png",
  "Windward Pilgrimage": "assets/sonatas/windward-pilgrimage.png",
  "Sierra Gale": "assets/sonatas/sierra-gale.png",
  "Havoc Eclipse": "assets/sonatas/havoc-eclipse.png",
  "Celestial Light": "assets/sonatas/celestial-light.png",
  "Void Thunder": "assets/sonatas/void-thunder.png",
  "Molten Rift": "assets/sonatas/molten-rift.png",
  "Freezing Frost": "assets/sonatas/freezing-frost.png",
  "Empyrean Anthem": "assets/sonatas/empyrean-anthem.png",
  "Midnight Veil": "assets/sonatas/midnight-veil.png",
  "Eternal Radiance": "assets/sonatas/eternal-radiance.png",
  "Gusts of Welkin": "assets/sonatas/gusts-of-welkin.png",
  "Frosty Resolve": "assets/sonatas/frosty-resolve.png",
  "Crown of Valor": "assets/sonatas/crown-of-valor.png",
  "Dream of the Lost": "assets/sonatas/dream-of-the-lost.png",
  "Pact of Neonlight": "assets/sonatas/pact-of-neonlight.png",
  "Pact of Neonlight Leap": "assets/sonatas/pact-of-neonlight-leap.png",
  "Tidebreaking Courage": "assets/sonatas/tidebreaking-courage.png",
  "Flaming Clawprint": "assets/sonatas/flaming-clawprint.png",
  "Flamewing's Shadow": "assets/sonatas/flamewing-s-shadow.png",
  "Law of Harmony": "assets/sonatas/law-of-harmony.png",
  "Thread of Severed Fate": "assets/sonatas/thread-of-severed-fate.png",
  "Shadow of Shattered Dreams": "assets/sonatas/shadow-of-shattered-dreams.png",
  "Rite of Gilded Revelation": "assets/sonatas/rite-of-gilded-revelation.png",
  "Chromatic Foam": "assets/sonatas/chromatic-foam.png",
  "Trailblazing Star": "assets/sonatas/trailblazing-star.png",
  "Halo of Starry Radiance": "assets/sonatas/halo-of-starry-radiance.png",
  "Wishes of Quiet Snowfall": "assets/sonatas/wishes-of-quiet-snowfall.png",
  "Sound of True Name": "assets/sonatas/sound-of-true-name.png"
};

function sonataDisplay(sonata) {
  const names = sonata.split(/\s*,\s*|\s+or\s+/i).map((name) => name.trim()).filter(Boolean);
  return `
    <span class="sonata-list">
      ${names.map((name) => `
        <span class="sonata-chip" title="${name}">
          <span class="sonata-symbol" aria-hidden="true">${sonataIcon(name)}</span>
          <span>${name}</span>
        </span>
      `).join("")}
    </span>
  `;
}

function sonataIcon(name) {
  const icon = sonataIcons[name];
  if (!icon) return sonataSymbols[name] || "✧";
  return `<img src="${icon}" alt="" loading="lazy">`;
}

function archetypeLabel(character) {
  return teamArchetypes[character.slug]?.label || "Flexible team shell";
}

function memberChip(character) {
  return `
    <span class="member-chip element-${firstElement(character.element).toLowerCase()}">
      ${memberIcon(character)}
      <span><strong>${character.name}</strong><small>${roleLabel(character)}</small></span>
    </span>
  `;
}

function memberIcon(character) {
  const file = wallpapers.get(character.slug) || wallpapers.get("rover");
  return `
    <span class="member-icon" style="--chip-focus: ${chipFocus(character)};" aria-hidden="true">
      <img src="assets/wallpapers/${file}" alt="" loading="lazy" decoding="async">
    </span>
  `;
}

function teamSlot(character, slot, purpose) {
  return `
    <span class="slot-pill">
      <small>${slot}</small>
      <b>${character.name}</b>
      <em>${purpose}</em>
    </span>
  `;
}

function chipFocus(character) {
  const focus = {
    shorekeeper: "center 28%",
    verina: "center 24%",
    jiyan: "center 28%",
    yangyang: "center 24%",
    mortefi: "center 24%",
    sanhua: "center 24%",
    camellya: "center 22%",
    cartethyia: "center 24%",
    phrolova: "center 24%",
    zani: "center 22%",
    carlotta: "center 24%",
    changli: "center 24%",
    encore: "center 22%",
    calcharo: "center 26%",
    rover: "center 24%"
  };
  return focus[character.slug] || "center 25%";
}

function renderBuilds(teams) {
  const selected = teams.find((team) => teamKey(team) === state.selectedTeamKey);
  if (!selected) {
    $("#build-count").textContent = "0";
    $("#build-count-label").textContent = "selected team";
    $("#build-subtitle").textContent = "Select a team card above to focus build advice on one team at a time.";
    buildResults.innerHTML = `<div class="empty-state">Pick a suggested team to open its focused build cards here.</div>`;
    return;
  }
  const entries = selected.members;
  $("#build-count").textContent = entries.length;
  $("#build-count-label").textContent = `${selected.main.name} team`;
  $("#build-subtitle").textContent = `Focused build notes for ${selected.members.map((member) => member.name).join(", ")}.`;
  buildResults.innerHTML = `
    ${selectedTeamSummary(selected)}
    ${entries.map((character) => {
    const build = buildForTeam(character, selected);
    const ownedWeapon = state.weapons.has(build.weapon);
    const alts = alternateWeapons(character);
    return `
      <article class="build-card element-${firstElement(character.element).toLowerCase()}">
        <a class="build-character-link build-portrait-link" href="${characterGuideHref(character)}" aria-label="Open ${character.name} guide">
          ${visual(character)}
        </a>
        <div>
          <span class="mini-kicker">${roleLabel(character)}</span>
          <h3><a href="${characterGuideHref(character)}">${character.name}</a></h3>
          <span class="data-badge ${confidenceFor(character)[0]}">${confidenceFor(character)[1]}</span>
          <p>${character.note}</p>
          <dl class="build-quick">
            <div><dt>Weapon</dt><dd>${build.weapon}${ownedWeapon ? " · owned" : ""}</dd></div>
            <div><dt>Sonata</dt><dd>${sonataDisplay(build.sonata)}</dd></div>
            <div><dt>Echo cost</dt><dd>${costPattern(character)}</dd></div>
            <div><dt>Main Echo</dt><dd>${build.echo}</dd></div>
          </dl>
          <div class="build-card-actions">
            <a class="button ghost compact-button" href="${characterGuideHref(character)}">Open character guide</a>
          </div>
          <details class="build-more">
            <summary>More build details</summary>
            <dl>
              <div><dt>Alternates</dt><dd>${alts.join(" · ")}</dd></div>
              <div><dt>Main stats</dt><dd>${build.stats}</dd></div>
            </dl>
          </details>
          <p class="build-note">${useNote(character, selected)}</p>
        </div>
      </article>
    `;
  }).join("")}
  `;
}

function characterGuideHref(character) {
  return `characters/${character.slug}/`;
}

function buildForTeam(character, team) {
  if (character.slug === "lucilla") {
    if (team.main.slug === "phrolova") {
      return {
        ...character.build,
        build: "Echo Skill Support Build for Phrolova",
        sonata: "Dream of the Lost + 2-piece Reel or Moonlit Clouds",
        echo: "Voidwing Moth",
        stats: "CRIT Rate or CRIT DMG / Glacio DMG or ATK% / ATK%"
      };
    }
    if (["sigrika", "galbrena"].includes(team.main.slug)) {
      return {
        ...character.build,
        build: "Moonlit Echo Skill Support Build",
        sonata: "Moonlit Clouds",
        echo: "Impermanence Heron",
        stats: "CRIT Rate or CRIT DMG / Glacio DMG or ATK% / ATK%"
      };
    }
  }
  if (character.slug === "qiuyuan" && team.main.slug === "sigrika") {
    return {
      ...character.build,
      build: "Moonlit Support Build for Sigrika",
      sonata: "Moonlit Clouds",
      echo: "Impermanence Heron",
      stats: "Energy Regen or CRIT / Aero DMG or Energy Regen / ATK% - funnel Moonlit buffs to Sigrika"
    };
  }
  return character.build;
}

function selectedTeamSummary(team) {
  const confidence = teamConfidence(team);
  return `
    <article class="team-summary element-${firstElement(team.main.element).toLowerCase()}">
      <div class="summary-heading">
        <span class="mini-kicker">Selected team guide</span>
        <h3>${team.main.name} / ${team.members[1].name} / ${team.members[2].name}</h3>
        <p>${teamPurpose(team)}</p>
      </div>
      <div class="summary-pill-grid">
        ${summaryPill("Fit", teamFitLabel(team))}
        ${summaryPill("Difficulty", difficultyLabel(team))}
        ${summaryPill("Safety", safetyLabel(team))}
        ${summaryPill("Best for", bestFor(team))}
        ${summaryPill("Confidence", confidence.label)}
      </div>
      <div class="summary-notes">
        <div>
          <span>Beginner rotation</span>
          <p>${rotationText(team)}</p>
        </div>
        <div>
          <span>Replacement note</span>
          <p>${missingAlternativeNote(team)}</p>
        </div>
        <div>
          <span>Confidence detail</span>
          <p>${confidence.detail}</p>
        </div>
      </div>
    </article>
  `;
}

function summaryPill(label, value) {
  return `
    <span class="summary-pill">
      <small>${label}</small>
      <strong>${value}</strong>
    </span>
  `;
}

function renderFeedbackContext(teams) {
  const selected = teams.find((team) => teamKey(team) === state.selectedTeamKey);
  const context = selected ? feedbackContext(selected) : feedbackContext();
  const input = $("#feedback-context");
  const preview = $("#feedback-context-preview");
  if (input) input.value = context;
  if (preview) preview.textContent = context;
}

function feedbackContext(team) {
  const ownedCount = Object.keys(state.owned).length;
  const weaponCount = state.weapons.size;
  const roverText = `${state.roverForm} active; owned ${([...state.roverForms].sort()).join(", ")}`;
  const ownedRoster = feedbackOwnedRoster();
  const ownedWeapons = feedbackOwnedWeapons();
  const focused = [...state.focus].map(characterName).sort((a, b) => a.localeCompare(b)).join(", ") || "None";
  if (!team) {
    return [
      "No team selected.",
      `Suggestion style: ${state.suggestionStyle}`,
      `Owned Resonators: ${ownedCount}`,
      `Owned roster: ${ownedRoster}`,
      `Focused DPS: ${focused}`,
      `Owned weapons: ${weaponCount}`,
      `Weapon list: ${ownedWeapons}`,
      `Rover: ${roverText}`
    ].join("\n");
  }
  return [
    `Selected team: ${team.members.map((member) => member.name).join(" / ")}`,
    `Fit: ${teamFitLabel(team)}`,
    `Safety: ${safetyLabel(team)}`,
    `Confidence: ${teamConfidence(team).label}`,
    `Roster logic: ${missingAlternativeNote(team)}`,
    `Best-shell reference: ${bestShellDetail(team)}`,
    `Suggestion style: ${state.suggestionStyle}`,
    `Owned Resonators: ${ownedCount}`,
    `Owned roster: ${ownedRoster}`,
    `Focused DPS: ${focused}`,
    `Owned weapons: ${weaponCount}`,
    `Weapon list: ${ownedWeapons}`,
    `Rover: ${roverText}`
  ].join("\n");
}

function feedbackOwnedRoster() {
  const owned = Object.entries(state.owned)
    .map(([slug, info]) => {
      const name = characterName(slug);
      const chain = Number.isFinite(info?.chain) ? info.chain : 0;
      const focus = state.focus.has(slug) ? " focus" : "";
      return `${name} R${chain}${focus}`;
    })
    .sort((a, b) => a.localeCompare(b));
  return owned.length ? owned.join(", ") : "None";
}

function feedbackOwnedWeapons() {
  const weapons = [...state.weapons].sort((a, b) => a.localeCompare(b));
  return weapons.length ? weapons.join(", ") : "None";
}

function copyFeedbackContext() {
  const type = $("#feedback-type")?.value || "Feedback";
  const message = $("#feedback-message")?.value.trim() || "(No message written yet)";
  const context = $("#feedback-context")?.value || feedbackContext();
  const report = `WaveKit report\nType: ${type}\n\nMessage:\n${message}\n\nContext:\n${context}`;
  if (!navigator.clipboard?.writeText) {
    fallbackCopy(report);
    return;
  }
  navigator.clipboard.writeText(report).then(() => {
    $("#save-status").textContent = "Report details copied";
  }).catch(() => {
    fallbackCopy(report);
  });
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.className = "visually-hidden";
  document.body.append(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
    $("#save-status").textContent = "Report details copied";
  } catch {
    $("#save-status").textContent = "Copy unavailable";
  }
  textarea.remove();
}

function handleFeedbackSubmit(event) {
  const localPreview = ["127.0.0.1", "localhost", ""].includes(location.hostname) || location.protocol === "file:";
  if (!localPreview) return;
  event.preventDefault();
  $("#save-status").textContent = "Local preview report tested";
  window.location.href = "thanks/";
}

function useNote(character, team) {
  const kitNotes = {
    "rover": `${character.name} is being treated as your selected ${state.roverForm} form here. Rover's job changes substantially between forms, so follow the displayed form build and keep a real sustain unit when fights get messy.`,
    "jiyan": "Jiyan likes clear burst windows: prepare support effects first, then let him stay on field during his heavy attack/Liberation flow.",
    "mortefi": "Mortefi is strongest when his coordinated attacks support a field DPS. Build enough Energy Regen that his Outro and burst support arrive without awkward waiting.",
    "verina": "Verina is a low-stress sustain pick. Swap in, refresh healing and team buffs, then leave the field quickly so the damage dealer keeps momentum.",
    "shorekeeper": "Shorekeeper is the premium safety net. Prioritise Energy Regen and uptime so her field, healing, and Crit support are ready before hard fights.",
    "sanhua": "Sanhua is a quick helper: use her fast setup, trigger her burst window, then hand field time back to the main damage dealer.",
    "yangyang": "Yangyang is comfort utility. Use her for grouping and Energy help when a team feels scattered or starved for rotations.",
    "yangyang-xuanling": "Yangyang: Xuanling is a Havoc Bane and Heavy Attack hypercarry. Set up Rebecca, Lynae, or Phrolova first, use Chisa as the premium third slot, Mornye with Lynae, or Verina as an accessible fallback, then give Xuanling the focused damage window.",
    "jianxin": "Jianxin is a defensive comfort pick. She can smooth out rough fights with grouping, shielding, and safer pacing.",
    "taoqi": "Taoqi is here for safety more than speed. Use her when the team needs shields or a calmer defensive rhythm.",
    "yinlin": "Yinlin adds off-field Electro pressure. Set up her mark/coordinated damage, then swap back to the main field character.",
    "zhezhi": "Zhezhi works best as a prepared helper. Build Energy Regen if her key support window feels late, then swap cleanly back to the carry.",
    "qiuyuan": team.main.slug === "sigrika"
      ? "Qiuyuan is supporting Sigrika here. Moonlit Clouds is preferred for this team so his setup can funnel more attack support into Sigrika's hypercarry window."
      : "Qiuyuan supports Aero-leaning teams well. Treat him as a setup piece: enable the Aero plan, then give field time back to the carry.",
    "ciaccona": "Ciaccona is useful when the team wants Aero/Erosion pressure. Keep her setup short and let the main DPS benefit from the groundwork.",
    "camellya": "Camellya wants committed field time. Keep sustain ready before her damage window so her higher-pressure playstyle feels less punishing.",
    "cartethyia": "Cartethyia rewards teams that support her Aero/Erosion plan. Set up helpers first, then let her carry the focused damage window.",
    "phrolova": "Phrolova wants her Havoc support pieces prepared before she takes over. Treat her build priority as high if she is your chosen carry.",
    "zani": "Zani is a Spectro Frazzle carry. Make sure the helper is actually helping apply or exploit Frazzle before treating the team as ideal.",
    "phoebe": "Phoebe is strongest when her Spectro/Frazzle setup has a clear purpose. Use her before Zani or other Spectro damage windows.",
    "galbrena": "Galbrena is an Echo Skill carry. If Qiuyuan is in the team, treat him as the key setup piece rather than a generic Aero helper.",
    "sigrika": "Sigrika wants Echo Skill support. Set up Qiuyuan or another Echo Skill helper first, then spend Sigrika's damage window cleanly.",
    "luuk-herssen": "Luuk Herssen wants a Tune Strain shell. Denia + Mornye is prioritised when owned, with Lynae treated as a strong alternate rather than the default best pair.",
    "lucy": "Lucy wants Hack-Shifting support when available. Rebecca is prioritised as her intended partner, then the healer keeps the damage window stable.",
    "rebecca": "Rebecca is not just generic heavy support here. In Lucy teams, use her Hack-Shifting setup first so Lucy benefits from the paired mechanics before taking field time.",
    "aemeath": "Aemeath is mode-based. Keep Tune Rupture and Fusion Burst advice separate so the build does not become muddled.",
    "suisui": "Suisui is unreleased until her expected July 31, 2026 banner. WaveKit keeps her visible as upcoming guide info, but she is not used for team suggestions yet."
  };
  if (kitNotes[character.slug]) return kitNotes[character.slug];
  if (character.roles.includes("main")) return `Use ${character.name} as the field-time damage dealer. Set up ${team.members[1].name} and ${team.members[2].name} first, then spend the cleanest window on damage.`;
  if (character.roles.includes("healer")) return `${character.name} is the stabiliser for this team. Build enough Energy Regen and sustain so healing or safety is ready before mistakes become stressful.`;
  if (character.roles.includes("sub")) return `${character.name} is the helper slot here. Use their setup, buff, or off-field effect, then swap back to ${team.main.name}.`;
  return "Use for buffs, grouping, shields, or comfort. Prioritise uptime and the utility the team actually needs.";
}

function roleSort(character) {
  if (character.roles.includes("main")) return 1;
  if (character.roles.includes("sub")) return 2;
  if (character.roles.includes("support")) return 3;
  return 4;
}

function saveProfile() {
  upsertWorkingProfile();
  state.editMode = false;
  try {
    persistProfiles();
    $("#save-status").textContent = cloud.user ? "Saved and synced" : "Profile ready";
    silentCloudSync();
  } catch {
    $("#save-status").textContent = "Save blocked";
  }
  render();
}

function upsertWorkingProfile() {
  const nameInput = $("#profile-name");
  if (nameInput) state.profileName = nameInput.value.trim();
  const id = state.activeProfileId || `profile-${Date.now()}`;
  const nextProfile = {
    id,
    updatedAt: new Date().toISOString(),
    ...profilePayload(),
    profileName: state.profileName || "WaveKit profile"
  };
  const existingIndex = state.profiles.findIndex((profile) => profile.id === id);
  if (existingIndex >= 0) {
    state.profiles[existingIndex] = nextProfile;
  } else {
    state.profiles.push(nextProfile);
  }
  state.activeProfileId = id;
  state.profileName = nextProfile.profileName;
  return nextProfile;
}

function profilePayload() {
  return {
    profileName: state.profileName,
    experience: state.experience,
    priority: state.priority,
    goal: state.goal,
    suggestionStyle: state.suggestionStyle,
    roverForm: state.roverForm,
    roverForms: [...state.roverForms],
    owned: state.owned,
    focus: [...state.focus],
    weapons: [...state.weapons],
    progress: state.progress,
    weaponProgress: state.weaponProgress,
    profileAvatar: state.profileAvatar,
    profileAccent: state.profileAccent,
    savedTeams: state.savedTeams,
    buildPlan: state.buildPlan
  };
}

function profileHasRosterData(profile) {
  const payload = normaliseProfile(profile || {});
  return Boolean(Object.keys(payload.owned).length || payload.focus.length || payload.weapons.length || payload.savedTeams.length || payload.buildPlan.length);
}

function workingProfileHasRosterData() {
  return Boolean(Object.keys(state.owned).length || state.focus.size || state.weapons.size || state.savedTeams.length || state.buildPlan.length);
}

function loadProfile() {
  try {
    const stored = loadStoredProfiles();
    state.profiles = stored.profiles;
    state.activeProfileId = stored.activeProfileId || "";
  } catch {
    $("#save-status").textContent = "Save unavailable";
    return;
  }
  if (state.profiles.length) {
    applyProfile(state.profiles.find((profile) => profile.id === state.activeProfileId) || state.profiles[0]);
    state.editMode = false;
    $("#save-status").textContent = "Loaded profile";
  }
}

function loadStoredProfiles() {
  const raw = localStorage.getItem(profileStorageKey);
  if (raw) {
    const parsed = JSON.parse(raw);
    return { profiles: parsed.profiles || [], activeProfileId: parsed.activeProfileId || "" };
  }
  const oldProfiles = localStorage.getItem(legacyProfilesKey);
  if (oldProfiles) {
    const parsed = JSON.parse(oldProfiles);
    const migratedProfiles = parsed.profiles || [];
    localStorage.setItem(profileStorageKey, JSON.stringify({ profiles: migratedProfiles, activeProfileId: parsed.activeProfileId || "" }));
    return { profiles: migratedProfiles, activeProfileId: parsed.activeProfileId || "" };
  }
  const legacy = localStorage.getItem(legacyProfileKey);
  if (!legacy) return { profiles: [], activeProfileId: "" };
  const migrated = [{ id: `profile-${Date.now()}`, updatedAt: new Date().toISOString(), ...normaliseProfile(JSON.parse(legacy)) }];
  localStorage.setItem(profileStorageKey, JSON.stringify({ profiles: migrated, activeProfileId: migrated[0].id }));
  return { profiles: migrated, activeProfileId: migrated[0].id };
}

function persistProfiles() {
  localStorage.setItem(profileStorageKey, JSON.stringify({ profiles: state.profiles, activeProfileId: state.activeProfileId }));
  try {
    localStorage.removeItem(legacyProfileKey);
    localStorage.removeItem(legacyProfilesKey);
  } catch {
    // Best-effort cleanup for older local saves.
  }
}

function normaliseProfile(payload) {
  const owned = Object.fromEntries(
    Object.entries(payload.owned || {}).filter(([slug]) => !upcomingCharacters.has(slug))
  );
  const progress = normaliseProgress(payload.progress || {});
  const plannedFromProgress = Object.entries(progress)
    .filter(([, value]) => value.materialPlan)
    .map(([slug]) => slug);
  return {
    profileName: payload.profileName || "",
    experience: payload.experience || "New",
    priority: payload.priority === "Power" ? "DPS" : payload.priority || "Balanced",
    goal: payload.goal || "General play",
    suggestionStyle: normaliseSuggestionStyle(payload),
    roverForm: roverForms[payload.roverForm] ? payload.roverForm : "Aero",
    roverForms: normaliseRoverForms(payload.roverForms, payload.roverForm),
    owned,
    focus: (payload.focus || payload.favorites || []).filter((slug) => !upcomingCharacters.has(slug)),
    weapons: (payload.weapons || []).filter((weapon) => weaponCatalog.has(weapon) && !upcomingWeapons.has(weapon)),
    progress,
    weaponProgress: normaliseWeaponProgress(payload.weaponProgress || {}),
    profileAvatar: normaliseProfileAvatar(payload.profileAvatar, owned),
    profileAccent: normaliseProfileAccent(payload.profileAccent),
    savedTeams: normaliseSavedTeams(payload.savedTeams),
    buildPlan: [...new Set([...(payload.buildPlan || []), ...plannedFromProgress])]
      .filter((slug) => characters.some((character) => character.slug === slug) && !upcomingCharacters.has(slug))
  };
}

function normaliseProfileAvatar(avatar, owned) {
  if (avatar && characters.some((character) => character.slug === avatar) && !upcomingCharacters.has(avatar)) return avatar;
  return Object.keys(owned)[0] || "rover";
}

function normaliseProfileAccent(accent) {
  return ["aero", "gold", "glacio", "havoc"].includes(accent) ? accent : "aero";
}

function normaliseSavedTeams(savedTeams) {
  if (!Array.isArray(savedTeams)) return [];
  const seen = new Set();
  return savedTeams.flatMap((record) => {
    const members = Array.isArray(record?.members) ? record.members.slice(0, 3) : [];
    if (members.length !== 3 || new Set(members).size !== 3 || members.some((slug) => !characters.some((character) => character.slug === slug) || upcomingCharacters.has(slug))) return [];
    const roverForm = roverForms[record.roverForm] ? record.roverForm : "Aero";
    const key = `${roverForm}:${members.join("|")}`;
    if (seen.has(key)) return [];
    seen.add(key);
    return [{ members, roverForm, savedAt: record.savedAt || new Date().toISOString() }];
  }).slice(0, 12);
}

function normaliseProgress(progress) {
  if (!progress || typeof progress !== "object") return {};
  return Object.fromEntries(Object.entries(progress)
    .filter(([slug]) => !upcomingCharacters.has(slug))
    .map(([slug, value]) => {
      const materialPlan = normaliseMaterialPlan(value?.materialPlan);
      return [slug, {
        characterLevel: cleanProgressNumber(value?.characterLevel, 1, 90),
        weaponLevel: cleanProgressNumber(value?.weaponLevel, 1, 90),
        forteLevel: cleanProgressNumber(value?.forteLevel, 1, 10),
        skillLevel: cleanProgressNumber(value?.skillLevel, 1, 10),
        liberationLevel: cleanProgressNumber(value?.liberationLevel, 1, 10),
        echoReady: Boolean(value?.echoReady),
        notes: String(value?.notes || "").slice(0, 400),
        ...(materialPlan ? { materialPlan } : {})
      }];
    }));
}

function normaliseMaterialPlan(plan) {
  if (!plan || typeof plan !== "object") return undefined;
  const skillKeys = ["normal", "skill", "forte", "liberation", "intro"];
  return {
    currentLevel: cleanProgressNumber(plan.currentLevel, 1, 90) || 1,
    targetLevel: cleanProgressNumber(plan.targetLevel, 1, 90) || 90,
    currentAscended: Boolean(plan.currentAscended),
    skills: Object.fromEntries(skillKeys.map((key) => [key, {
      current: cleanProgressNumber(plan.skills?.[key]?.current, 1, 10) || 1,
      target: cleanProgressNumber(plan.skills?.[key]?.target, 1, 10) || 8
    }])),
    includePassives: Boolean(plan.includePassives)
  };
}

function normaliseWeaponProgress(progress) {
  if (!progress || typeof progress !== "object") return {};
  return Object.fromEntries(Object.entries(progress).map(([name, value]) => [name, {
    currentLevel: cleanProgressNumber(value?.currentLevel, 1, 90) || 1,
    targetLevel: cleanProgressNumber(value?.targetLevel, 1, 90) || 90,
    currentAscended: Boolean(value?.currentAscended)
  }]));
}

function cleanProgressNumber(value, min, max) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) return "";
  return Math.max(min, Math.min(max, Math.round(number)));
}

function normaliseSuggestionStyle(payload) {
  if (suggestionStyleOptions.includes(payload.suggestionStyle)) return payload.suggestionStyle;
  if (payload.priority === "Comfort") return "Ready Now";
  if (payload.priority === "DPS" || payload.priority === "Power") return "Best Teams";
  return "Best Teams";
}

function normaliseRoverForms(forms, activeForm) {
  const selected = Array.isArray(forms) ? forms.filter((form) => roverForms[form]) : [];
  const active = roverForms[activeForm] ? activeForm : "Aero";
  if (!selected.includes(active)) selected.push(active);
  return selected.length ? selected : ["Aero"];
}

function applyProfile(profile) {
  const payload = normaliseProfile(profile);
  state.activeProfileId = profile.id || "";
  state.profileName = payload.profileName;
  state.experience = payload.experience;
  state.priority = payload.priority;
  state.goal = payload.goal;
  state.suggestionStyle = payload.suggestionStyle;
  state.roverForm = payload.roverForm;
  state.roverForms = new Set(payload.roverForms);
  state.owned = payload.owned;
  state.focus = new Set(payload.focus.filter((slug) => state.owned[slug]));
  state.weapons = new Set(payload.weapons);
  state.progress = payload.progress;
  state.weaponProgress = payload.weaponProgress;
  state.profileAvatar = payload.profileAvatar;
  state.profileAccent = payload.profileAccent;
  state.savedTeams = payload.savedTeams;
  state.buildPlan = payload.buildPlan;
  state.selectedTeamKey = "";
  state.showAllTeams = false;
  resetFlowGuide();
}

function clearWorkingProfile() {
  state.profileName = "";
  state.experience = "New";
  state.priority = "Balanced";
  state.goal = "General play";
  state.suggestionStyle = "Best Teams";
  state.roleFilter = "All";
  state.search = "";
  state.weaponSearch = "";
  state.roverForm = "Aero";
  state.roverForms = new Set(["Aero"]);
  state.selectedTeamKey = "";
  state.showAllTeams = false;
  resetFlowGuide();
  state.owned = {};
  state.focus = new Set();
  state.weapons = new Set();
  state.progress = {};
  state.weaponProgress = {};
  state.profileAvatar = "rover";
  state.profileAccent = "aero";
  state.savedTeams = [];
  state.buildPlan = [];
}

function resetProfile() {
  if (!state.activeProfileId && !workingProfileHasRosterData() && state.profiles.length) {
    applyProfile(state.profiles[0]);
  }
  state.editMode = false;
  $("#save-status").textContent = "Profile closed";
  render();
}

function newProfile() {
  clearWorkingProfile();
  state.activeProfileId = "";
  state.editMode = true;
  $("#save-status").textContent = "New profile";
  render();
}

function editProfile() {
  state.editMode = true;
  $("#save-status").textContent = "Editing profile";
  render();
}

function deleteProfile() {
  if (!state.activeProfileId) return;
  state.profiles = state.profiles.filter((profile) => profile.id !== state.activeProfileId);
  const nextProfile = state.profiles[0];
  if (nextProfile) {
    applyProfile(nextProfile);
    state.editMode = false;
  } else {
    clearWorkingProfile();
    state.activeProfileId = "";
    state.editMode = true;
  }
  try {
    persistProfiles();
    $("#save-status").textContent = "Profile deleted";
    silentCloudSync();
  } catch {
    $("#save-status").textContent = "Delete blocked";
  }
  render();
}

function renderProfileManager() {
  profileList.innerHTML = state.profiles.length ? state.profiles.map((profile) => {
    const payload = normaliseProfile(profile);
    return `
      <button class="profile-tab ${state.activeProfileId === profile.id ? "is-active" : ""}" type="button" data-profile-id="${profile.id}">
        <strong>${payload.profileName || "Unnamed profile"}</strong>
        <small>${Object.keys(payload.owned).length} resonators · ${payload.weapons.length} weapons · ${payload.focus.length} focus</small>
      </button>
    `;
  }).join("") : `<div class="profile-empty">Your first profile will be created automatically when you name it or select a Resonator.</div>`;
  profileList.querySelectorAll("[data-profile-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const profile = state.profiles.find((item) => item.id === button.dataset.profileId);
      if (!profile) return;
      applyProfile(profile);
      state.editMode = false;
      $("#save-status").textContent = "Profile selected";
      try {
        persistProfiles();
        silentCloudSync();
      } catch {
        $("#save-status").textContent = "Profile selected, save blocked";
      }
      render();
    });
  });
  renderProfileSummary();
  profileEditor.hidden = !state.editMode;
  $("#new-profile").hidden = !state.profiles.length && !state.activeProfileId;
  $("#edit-profile").hidden = !state.activeProfileId;
  $("#delete-profile").hidden = !state.activeProfileId;
  $("#save-profile").textContent = "Done";
}

function renderProfileSummary() {
  const ownedNames = activeCharacters()
    .filter((character) => state.owned[character.slug])
    .slice(0, 6)
    .map((character) => character.name);
  profileSummary.innerHTML = `
    <div>
      <strong>${state.profileName || (state.activeProfileId ? "WaveKit profile" : "New profile")}</strong>
      <span>${state.suggestionStyle} suggestions</span>
    </div>
    <div class="summary-stats">
      <span>${Object.keys(state.owned).length} resonators</span>
      <span>${state.weapons.size} weapons</span>
      <span>Rover: ${state.roverForm} active · ${state.roverForms.size} form${state.roverForms.size === 1 ? "" : "s"}</span>
      <span>${state.focus.size} focus</span>
    </div>
    <p>${ownedNames.length ? ownedNames.join(", ") : "No resonators selected yet."}</p>
  `;
}

function renderAccountOverview() {
  if (!accountOverview) return;
  const overviewSection = accountOverview.closest(".account-overview-section");
  if (overviewSection) overviewSection.dataset.profileAccent = state.profileAccent;
  const hasProfile = Boolean(state.activeProfileId || workingProfileHasRosterData());
  if (!hasProfile) {
    accountOverview.innerHTML = `
      <div class="account-overview-empty">
        <span class="profile-orbit" aria-hidden="true"><img src="assets/wavekit-mark.png" alt=""></span>
        <div><strong>Your account overview will appear here</strong><p>Select your Resonators in the helper and WaveKit will organise your teams, plans, and account gaps automatically.</p></div>
        <a class="button primary" href="#helper">Start profile</a>
      </div>`;
    return;
  }

  const teams = generateTeams();
  const best = teams[0];
  const avatar = characters.find((character) => character.slug === state.profileAvatar) || characters.find((character) => character.slug === "rover");
  const avatarFile = wallpapers.get(avatar.slug) || wallpapers.get("rover");
  const ownedCharacters = activeCharacters().filter((character) => state.owned[character.slug]);
  const mains = ownedCharacters.filter((character) => character.roles.includes("main"));
  const healers = ownedCharacters.filter((character) => character.roles.includes("healer"));
  const helpers = ownedCharacters.filter((character) => character.roles.includes("sub") || character.roles.includes("support"));
  const unsupported = mains.filter((main) => !ownedNamedPartner(main)).slice(0, 3);
  const ownedByRarity = raritySections(ownedCharacters.slice().sort(sortByRarityThenName), characterRarity);
  const avatarChoices = (ownedCharacters.length ? ownedCharacters : activeCharacters().filter((character) => character.slug === "rover"))
    .slice().sort((a, b) => a.name.localeCompare(b.name));

  accountOverview.innerHTML = `
    <article class="profile-identity profile-accent-${state.profileAccent}">
      <div class="profile-identity-art" style="--profile-focus:${chipFocus(avatar)}">
        <img src="assets/wallpapers/${avatarFile}" alt="${avatar.name}">
      </div>
      <div class="profile-identity-copy">
        <span>${cloud.user ? "Cloud profile synced" : "Private local profile"}</span>
        <h3>${state.profileName || "WaveKit profile"}</h3>
        <p>${cloud.user ? "Your roster, saved teams, and upgrade targets are synced to your WaveKit account." : "Your roster, saved teams, and upgrade targets are saved privately in this browser."}</p>
        <div class="profile-identity-stats">
          <span><strong>${ownedCharacters.length}</strong><small>Resonators</small></span>
          <span><strong>${state.weapons.size}</strong><small>Weapons</small></span>
          <span><strong>${state.savedTeams.length}</strong><small>Saved teams</small></span>
          <span><strong>${state.buildPlan.length}</strong><small>Build targets</small></span>
        </div>
      </div>
    </article>

    <div id="profile-customiser" class="profile-customiser" hidden>
      <div class="profile-avatar-picker"><span>Profile Resonator</span><small>Choose from your owned Resonators.</small><div class="profile-avatar-options">${avatarChoices.map((character) => {
        const file = wallpapers.get(character.slug) || wallpapers.get("rover");
        return `<button class="profile-avatar-option ${state.profileAvatar === character.slug ? "is-selected" : ""}" type="button" data-profile-avatar="${character.slug}" aria-label="Use ${character.name} as profile Resonator"><img src="assets/wallpapers/${file}" alt=""><small>${character.name}</small></button>`;
      }).join("")}</div></div>
      <div><span>Profile theme</span><div class="profile-accent-options" aria-label="Profile theme">${Object.entries({ aero: "Tidal", gold: "Solar", glacio: "Frost", havoc: "Midnight" }).map(([accent, label]) => `<button class="profile-theme-option accent-${accent} ${state.profileAccent === accent ? "is-selected" : ""}" type="button" data-profile-accent="${accent}" aria-label="Use ${label} profile theme"><i aria-hidden="true"></i><span>${label}</span></button>`).join("")}</div></div>
    </div>

    <div class="account-primary-grid">
      <section id="account-roster" class="account-roster-panel">
        <header>
          <div><span>Owned Resonators</span><h3>Your roster</h3></div>
          <a class="button ghost compact-button" href="#helper">Edit roster</a>
        </header>
        <div class="account-roster-groups">${ownedByRarity.map(({ rarity, items }) => `
          <section class="account-roster-group" aria-label="${rarity}-star Resonators">
            <h4>${rarityStars(rarity)} <span>${rarity}-star · ${items.length}</span></h4>
            <div>${items.map(accountRosterItem).join("")}</div>
          </section>`).join("")}</div>
      </section>
      <article class="account-best-team">
        <span>Best from your roster</span>
        ${best ? `<div class="account-best-team-cast">${best.members.map((member, index) => accountBestTeamMember(member, index)).join("")}</div><h3>${best.members.map((member) => member.name).join(" / ")}</h3><p>${teamFitLabel(best)} · ${safetyLabel(best)}</p><button class="button primary compact-button" type="button" data-open-team="${teamKey(best)}">Open team</button>` : `<h3>No complete team yet</h3><p>Add a main damage Resonator and compatible helpers to unlock a complete team path.</p><a class="button primary compact-button" href="#helper">Edit roster</a>`}
      </article>
    </div>

    <div class="account-detail-grid account-roadmap-grid">
      <section id="account-build-plan" class="account-plan-panel">
        <header><div><span>Upgrade roadmap</span><h3>What you are building next</h3></div><div class="account-plan-header-actions"><a class="button ghost compact-button" href="characters/">Add target</a>${state.buildPlan.length > 1 ? `<button id="calculate-materials" class="button ghost compact-button" type="button">View total materials</button><small>Totals every target below.</small>` : ""}</div></header>
        <div class="account-plan-list">${state.buildPlan.length ? state.buildPlan.map(buildPlanItem).join("") : `<div class="account-panel-empty"><p>Add a Resonator from their character guide or plan all three members of a selected team.</p><a class="button ghost compact-button" href="characters/">Browse character guides</a></div>`}</div>
        <div id="combined-materials" class="combined-materials" hidden></div>
      </section>
      <section id="account-saved-teams" class="account-saved-panel">
        <header><div><span>Saved teams</span><h3>Your chosen versions</h3></div></header>
        <div class="account-saved-list">${state.savedTeams.length ? state.savedTeams.map(savedTeamItem).join("") : `<div class="account-panel-empty"><p>Save a suggestion or an adjusted team and it will stay here.</p><a class="button ghost compact-button" href="#results">View suggestions</a></div>`}</div>
      </section>
    </div>

    <details class="account-insights">
      <summary><span><small>Account insights</small><strong>${accountOpportunityTitle(unsupported, healers)}</strong></span><b>View details</b></summary>
      <div>
        <article><span>Role coverage</span><strong>${mains.length} damage · ${helpers.length} helpers · ${healers.length} healers</strong><p>${healers.length ? "Your account has real sustain available for safer teams." : "No real healer is selected, so difficult fights may offer less mistake recovery."}</p></article>
        <article><span>Roster opportunity</span><strong>${accountOpportunityTitle(unsupported, healers)}</strong><p>${accountOpportunityDetail(unsupported, healers)}</p></article>
      </div>
    </details>`;

  accountOverview.querySelectorAll("[data-profile-avatar]").forEach((button) => button.addEventListener("click", () => {
    state.profileAvatar = button.dataset.profileAvatar;
    markUnsaved();
    renderAccountOverview();
    showProfileCustomiser();
  }));
  accountOverview.querySelectorAll("[data-profile-accent]").forEach((button) => button.addEventListener("click", () => {
    state.profileAccent = button.dataset.profileAccent;
    markUnsaved();
    renderAccountOverview();
    showProfileCustomiser();
  }));
  accountOverview.querySelectorAll("[data-open-team]").forEach((button) => button.addEventListener("click", () => openSavedOrSuggestedTeam(button.dataset.openTeam)));
  accountOverview.querySelectorAll("[data-remove-plan]").forEach((button) => button.addEventListener("click", () => {
    state.buildPlan = state.buildPlan.filter((slug) => slug !== button.dataset.removePlan);
    markUnsaved();
    persistImmediateProfileChange();
    renderAccountOverview();
  }));
  accountOverview.querySelectorAll("[data-add-plan]").forEach((button) => button.addEventListener("click", () => {
    const slug = button.dataset.addPlan;
    if (!state.buildPlan.includes(slug)) state.buildPlan.push(slug);
    markUnsaved();
    persistImmediateProfileChange();
    renderAccountOverview();
  }));
  accountOverview.querySelectorAll("[data-remove-saved-team]").forEach((button) => button.addEventListener("click", () => {
    state.savedTeams = state.savedTeams.filter((record) => savedTeamRecordKey(record) !== button.dataset.removeSavedTeam);
    markUnsaved();
    persistImmediateProfileChange();
    renderAccountOverview();
  }));
  accountOverview.querySelector("#calculate-materials")?.addEventListener("click", renderCombinedMaterials);
  void hydrateAccountPlanMaterials();
}

function accountRosterItem(character) {
  const file = wallpapers.get(character.slug) || wallpapers.get("rover");
  const chain = state.owned[character.slug]?.chain || 0;
  const plan = state.progress[character.slug]?.materialPlan;
  const level = plan?.currentLevel ? `L${plan.currentLevel}` : "Level unset";
  const planned = state.buildPlan.includes(character.slug);
  const element = character.element.split("/")[0].trim().toLowerCase();
  return `<article class="account-roster-item element-${element}">
    <a href="characters/${character.slug}/" aria-label="Open ${character.name} guide"><img src="assets/wallpapers/${file}" alt=""><span><strong>${character.name}</strong><small>R${chain} · ${level}</small></span></a>
    <button class="account-plan-toggle ${planned ? "is-planned" : ""}" type="button" ${planned ? "disabled" : `data-add-plan="${character.slug}"`} aria-label="${planned ? `${character.name} is in your Upgrade Roadmap` : `Add ${character.name} to Upgrade Roadmap`}">${planned ? "✓" : "+"}</button>
  </article>`;
}

function accountBestTeamMember(member, index) {
  const file = wallpapers.get(member.slug) || wallpapers.get("rover");
  const labels = ["Damage", "Helper", "Sustain"];
  return `<a href="characters/${member.slug}/"><img src="assets/wallpapers/${file}" alt=""><span>${labels[index] || "Team"}</span><strong>${member.name}</strong></a>`;
}

function ownedNamedPartner(main) {
  const preferred = new Set([...(teamPreferences[main.slug]?.core || []), ...(teamArchetypes[main.slug]?.ideal || []).flat()]);
  if (!preferred.size) return true;
  return [...preferred].some((slug) => state.owned[slug]);
}

function accountOpportunityTitle(unsupported, healers) {
  if (!healers.length) return "Add a sustain option";
  if (unsupported.length) return `${unsupported[0].name} needs a closer partner`;
  return "Core roles are covered";
}

function accountOpportunityDetail(unsupported, healers) {
  if (!healers.length) return "Selecting a healer such as Verina, Shorekeeper, Baizhi, Mornye, or another owned sustain unit will unlock safer recommendations.";
  if (unsupported.length) return `${unsupported.map((character) => character.name).join(", ")} do not currently have one of their named archetype partners selected.`;
  return "Your selected main damage characters have at least one relevant helper and a real healer available.";
}

function buildPlanItem(slug) {
  const character = characters.find((entry) => entry.slug === slug);
  if (!character) return "";
  const file = wallpapers.get(slug) || wallpapers.get("rover");
  const plan = state.progress[slug]?.materialPlan;
  const level = plan ? `Level ${plan.currentLevel} → ${plan.targetLevel}` : "Targets not set yet";
  const skillTargets = plan?.skills ? Object.values(plan.skills).filter((skill) => Number(skill.target) > Number(skill.current)) : [];
  const skillSummary = skillTargets.length ? `${skillTargets.length} skill target${skillTargets.length === 1 ? "" : "s"} · up to ${Math.max(...skillTargets.map((skill) => Number(skill.target) || 1))}` : "Open the planner to set skill targets";
  const progress = plan ? Math.max(4, Math.min(100, Math.round((Number(plan.currentLevel) / Math.max(1, Number(plan.targetLevel))) * 100))) : 4;
  return `<article class="account-plan-item">
    <div class="account-plan-character">
      <a href="characters/${slug}/"><img src="assets/wallpapers/${file}" alt=""><span><strong>${character.name}</strong><small>${level}</small><small>${skillSummary}</small></span></a>
      <div class="account-plan-progress" aria-hidden="true"><i style="width:${progress}%"></i></div>
    </div>
    <div class="account-plan-material-preview" data-plan-materials="${slug}"><small>Planned requirements</small><span>Loading material preview…</span></div>
    <div class="account-plan-item-actions"><a class="button ghost compact-button" href="characters/${slug}/#materials">Open planner</a><button class="icon-button" type="button" data-remove-plan="${slug}" aria-label="Remove ${character.name} from Upgrade Roadmap">×</button></div>
  </article>`;
}

async function hydrateAccountPlanMaterials() {
  const targets = accountOverview?.querySelectorAll("[data-plan-materials]");
  if (!targets?.length) return;
  try {
    const kit = await ensureMaterialKit();
    targets.forEach((target) => {
      const slug = target.dataset.planMaterials;
      const record = kit.data.characters[slug];
      if (!record) {
        target.innerHTML = `<small>Planned requirements</small><span>Material data is still being reviewed.</span>`;
        return;
      }
      const plan = state.progress[slug]?.materialPlan || defaultMaterialPlan();
      const costs = kit.characterPlan(record, plan).costs;
      const items = [...kit.groupedCosts(costs).values()].flat().filter((item) => Number(item.quantity) > 0).slice(0, 4);
      target.innerHTML = `<small>Planned requirements</small><div>${items.length ? items.map((item) => `<span title="${item.name}"><img src="${item.icon}" alt=""><b>${item.name}</b><strong>x${kit.formatNumber(item.quantity)}</strong></span>`).join("") : `<span>Targets complete</span>`}</div>`;
    });
  } catch (error) {
    console.error("WaveKit roadmap material previews could not load.", error);
    targets.forEach((target) => { target.innerHTML = `<small>Planned requirements</small><span>Open the character planner for material details.</span>`; });
  }
}

function savedTeamRecordKey(record) {
  return `${record.roverForm || "Aero"}:${record.members.join("|")}`;
}

function savedTeamItem(record) {
  const names = record.members.map(characterName);
  const members = record.members.map((slug) => characters.find((character) => character.slug === slug)).filter(Boolean);
  return `<article><button class="account-saved-team" type="button" data-open-team="${savedTeamRecordKey(record)}"><span class="mini-team" aria-hidden="true">${members.map((member) => { const file = wallpapers.get(member.slug) || wallpapers.get("rover"); return `<img src="assets/wallpapers/${file}" alt="">`; }).join("")}</span><span><strong>${names.join(" / ")}</strong><small>${record.roverForm || "Aero"} Rover profile</small></span></button><button class="icon-button" type="button" data-remove-saved-team="${savedTeamRecordKey(record)}" aria-label="Remove saved team">×</button></article>`;
}

function showProfileCustomiser() {
  const customiser = accountOverview?.querySelector("#profile-customiser");
  if (customiser) customiser.hidden = false;
}

async function renderCombinedMaterials() {
  const output = accountOverview?.querySelector("#combined-materials");
  if (!output) return;
  output.hidden = false;
  output.innerHTML = `<header><div><small>Combined farming list</small><h4>Everything needed for ${state.buildPlan.length} targets</h4></div><p>Quantities below combine every Resonator in your Upgrade Roadmap.</p></header><p>Preparing your material totals...</p>`;
  try {
    const kit = await ensureMaterialKit();
    const costs = {};
    state.buildPlan.forEach((slug) => {
      const record = kit.data.characters[slug];
      if (!record) return;
      const plan = state.progress[slug]?.materialPlan || defaultMaterialPlan();
      Object.entries(kit.characterPlan(record, plan).costs).forEach(([id, quantity]) => {
        costs[id] = (costs[id] || 0) + Number(quantity || 0);
      });
    });
    const groups = kit.groupedCosts(costs);
    output.innerHTML = groups.size ? `<header><div><small>Combined farming list</small><h4>Everything needed for ${state.buildPlan.length} targets</h4></div><p>Quantities below combine every Resonator in your Upgrade Roadmap.</p></header>${[...groups].map(([category, items]) => `<section><h4>${category}</h4><div>${items.map((item) => `<span><img src="${item.icon}" alt="" loading="lazy"><b>${item.name}</b><strong>x${kit.formatNumber(item.quantity)}</strong></span>`).join("")}</div></section>`).join("")}` : `<p>Your current Upgrade Roadmap targets are already complete.</p>`;
  } catch (error) {
    console.error("WaveKit combined material planner could not load.", error);
    output.innerHTML = `<p>The material list could not be loaded. Individual character planners still remain available.</p>`;
  }
}

function defaultMaterialPlan() {
  return { currentLevel: 1, targetLevel: 90, currentAscended: false, skills: Object.fromEntries(["normal", "skill", "forte", "liberation", "intro"].map((key) => [key, { current: 1, target: 8 }])), includePassives: false };
}

function ensureMaterialKit() {
  if (window.WaveKitMaterials) return Promise.resolve(window.WaveKitMaterials);
  if (materialKitPromise) return materialKitPromise;
  materialKitPromise = loadScript("assets/material-data.js?v=my-wavekit-1")
    .then(() => loadScript("assets/material-planner-core.js?v=my-wavekit-1"))
    .then(() => {
      if (!window.WaveKitMaterials) throw new Error("Material planner did not initialise.");
      return window.WaveKitMaterials;
    })
    .catch((error) => {
      materialKitPromise = null;
      throw error;
    });
  return materialKitPromise;
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.append(script);
  });
}

function renderSuggestionStyle() {
  renderSegmented("#suggestion-style-options", suggestionStyleOptions, state.suggestionStyle, (value) => {
    state.suggestionStyle = value;
    resetFlowGuide();
    markUnsaved();
    renderProfileSummary();
    renderSuggestionStyle();
    renderResults();
  });
}

function render() {
  document.body.classList.toggle("is-profile-view", !state.editMode);
  $("#profile-name").value = state.profileName;
  renderProfileManager();
  renderCloudSync();
  renderAccountOverview();
  renderSuggestionStyle();
  renderRoleFilters();
  renderCharacters();
  renderWeaponTypeFilters();
  renderWeapons();
  renderResults();
}

function markUnsaved() {
  $("#save-status").textContent = "Saving...";
  scheduleAutoSave();
}

function scheduleAutoSave(delay = 750) {
  clearTimeout(autoSaveTimer);
  autoSaveTimer = setTimeout(autoSaveProfile, delay);
}

function persistImmediateProfileChange() {
  clearTimeout(autoSaveTimer);
  autoSaveTimer = null;
  void autoSaveProfile();
}

function flushPendingLocalSave() {
  if (!autoSaveTimer || !hasProfileProgress()) return;
  clearTimeout(autoSaveTimer);
  autoSaveTimer = null;
  try {
    upsertWorkingProfile();
    persistProfiles();
  } catch {
    // The visible autosave status reports storage failures while the page is active.
  }
}

async function autoSaveProfile() {
  if (!hasProfileProgress()) return;
  try {
    upsertWorkingProfile();
    persistProfiles();
    $("#save-status").textContent = cloud.user ? "Autosaved locally. Syncing..." : "Autosaved locally";
    renderProfileManager();
    await silentCloudSync();
  } catch {
    $("#save-status").textContent = "Autosave blocked";
  }
}

async function silentCloudSync() {
  if (!cloud.configured || !cloud.user || !cloud.api) return;
  if (cloud.busy || autoSyncing) {
    clearTimeout(autoSyncRetryTimer);
    autoSyncRetryTimer = setTimeout(() => silentCloudSync(), 2200);
    return;
  }
  autoSyncing = true;
  try {
    await cloud.api.saveCloudProfiles(cloudPayload());
    setCloudStatus("Cloud profile synced.");
    $("#save-status").textContent = "Autosaved and synced";
  } catch (error) {
    setCloudStatus(cleanCloudError(error));
    $("#save-status").textContent = "Autosaved locally";
  } finally {
    autoSyncing = false;
  }
}

async function initCloudSync() {
  const timeout = setTimeout(() => {
    if (!cloud.initializing) return;
    cloud.initializing = false;
    cloud.authResolved = true;
    setCloudStatus("Cloud sync took too long to load. Refresh and try again.");
    renderCloudSync();
  }, 8000);
  try {
    const config = await import("./assets/firebase-config.js");
    if (!config.firebaseEnabled) {
      clearTimeout(timeout);
      cloud.initializing = false;
      cloud.authResolved = true;
      setCloudStatus("Cloud sync needs Firebase setup.");
      renderCloudSync();
      return;
    }
    cloud.api = await import("./assets/firebase-sync.js?v=undefined-values-1");
    cloud.configured = cloud.api.isCloudConfigured();
    if (!cloud.configured) {
      clearTimeout(timeout);
      cloud.initializing = false;
      cloud.authResolved = true;
      setCloudStatus("Cloud sync needs Firebase setup.");
      renderCloudSync();
      return;
    }
    clearTimeout(timeout);
    cloud.initializing = false;
    setCloudStatus("Cloud sync ready. Sign in to sync profiles.");
    renderCloudSync();
    cloud.api.initCloudSync((user) => {
      cloud.authResolved = true;
      cloud.user = user;
      if (!user) {
        cloud.loadedForUid = "";
        setCloudStatus("Signed out. Local profiles still work.");
        renderCloudSync();
        return;
      }
      setCloudStatus("Signed in. Loading cloud profile...");
      renderCloudSync();
      autoLoadCloudProfiles();
    }, (error) => {
      cloud.authResolved = true;
      cloud.user = null;
      setCloudStatus(cleanCloudError(error));
      renderCloudSync();
    });
  } catch {
    clearTimeout(timeout);
    cloud.initializing = false;
    cloud.authResolved = true;
    setCloudStatus("Cloud sync could not load.");
    renderCloudSync();
  }
}

function renderCloudSync() {
  const signedOut = $("#cloud-signed-out");
  const signedIn = $("#cloud-signed-in");
  const userLabel = $("#cloud-user-label");
  const userId = $("#cloud-user-id");
  const status = $("#cloud-sync-status");
  const menu = $(".account-menu");
  const menuLabel = $("#account-menu-label");
  if (!signedOut || !signedIn || !status) return;
  const accountPending = cloud.initializing || !cloud.authResolved;
  renderProfileSaveMode();
  signedOut.hidden = Boolean(cloud.user);
  signedIn.hidden = !cloud.user;
  menu?.classList.toggle("is-signed-in", Boolean(cloud.user));
  menu?.classList.toggle("is-auth-pending", accountPending);
  if (menuLabel) {
    menuLabel.textContent = accountPending || cloud.user ? "Account" : "Log in";
    menuLabel.setAttribute("aria-label", accountPending
      ? "Checking your WaveKit account"
      : cloud.user ? "Open your WaveKit account" : "Log in or create a WaveKit account");
  }
  if (userLabel && cloud.user) {
    userLabel.textContent = `Signed in as ${cloud.user.email || cloud.user.displayName || "WaveKit user"}`;
  }
  if (userId && cloud.user) {
    userId.textContent = `WaveKit ID: ${shortWaveKitId(cloud.user.uid)}`;
  }
  if (cloud.initializing) {
    status.textContent = "Cloud sync connecting...";
  } else if (!cloud.configured) {
    status.textContent = "Cloud sync needs Firebase setup.";
  }
  [
    "#cloud-sign-in",
    "#cloud-create-account",
    "#cloud-google",
    "#cloud-reset-password",
    "#cloud-copy-id",
    "#cloud-discord-code",
    "#cloud-sign-out"
  ].forEach((selector) => {
    const button = $(selector);
    if (button) button.disabled = cloud.busy || !cloud.configured;
  });
}

function renderProfileSaveMode() {
  const title = $("#profile-save-title");
  const detail = $("#profile-save-detail");
  const headerDetail = $("#save-status-detail");
  if (cloud.user) {
    if (title) title.textContent = "Automatic cloud sync";
    if (detail) detail.textContent = "Resonators, weapons, RC levels, and build progress sync as you change them.";
    if (headerDetail) headerDetail.textContent = "Changes save here and sync automatically to your account.";
  } else {
    if (title) title.textContent = "Saved automatically";
    if (detail) detail.textContent = "Resonators and weapons stay saved on this device as you select them.";
    if (headerDetail) headerDetail.textContent = "Your choices save automatically on this device.";
  }
}

function shortWaveKitId(uid = "") {
  return uid ? `${uid.slice(0, 6)}...${uid.slice(-4)}` : "pending";
}

function setCloudStatus(message) {
  const status = $("#cloud-sync-status");
  if (status) status.textContent = message;
}

function closeAccountMenu() {
  const menu = $(".account-menu");
  if (menu) menu.open = false;
}

function handleAccountMenuDismiss(event) {
  const menu = $(".account-menu");
  if (!menu?.open) return;
  if (event.type === "keydown" && event.key !== "Escape") return;
  if (event.type === "click" && menu.contains(event.target)) return;
  closeAccountMenu();
}

function cloudCredentials() {
  return {
    email: $("#cloud-email").value.trim(),
    password: $("#cloud-password").value
  };
}

async function signInCloud() {
  const { email, password } = cloudCredentials();
  if (!email || !password) {
    setCloudStatus("Enter an email and password first.");
    return;
  }
  await runCloudAction("Signing in...", () => cloud.api.signInWithEmail(email, password), "Signed in. Loading cloud profile...");
}

async function createCloudAccount() {
  const { email, password } = cloudCredentials();
  if (!email || password.length < 6) {
    setCloudStatus("Use an email and a password with at least 6 characters.");
    return;
  }
  await runCloudAction("Creating account...", async () => {
    cloud.user = await cloud.api.createAccountWithEmail(email, password);
    if (hasProfileProgress()) await cloud.api.saveCloudProfiles(cloudPayload());
  }, hasProfileProgress() ? "Account created. Profile synced." : "Account created. Automatic sync is ready.");
}

async function signInGoogleCloud() {
  await runCloudAction("Opening Google sign in...", async () => {
    const user = await cloud.api.signInWithGoogle();
    if (user) cloud.user = user;
  }, "Signed in. Loading cloud profile...");
}

async function resetCloudPassword() {
  const { email } = cloudCredentials();
  if (!email) {
    setCloudStatus("Enter your email first.");
    return;
  }
  await runCloudAction("Sending reset email...", () => cloud.api.resetCloudPassword(email), "Password reset email sent.");
}

async function signOutCloud() {
  await runCloudAction("Signing out...", () => cloud.api.signOutCloud(), "Signed out. Local profiles still work.");
}

async function copyWaveKitId() {
  if (!cloud.user?.uid) {
    setCloudStatus("Sign in before copying your WaveKit ID.");
    return;
  }
  await copyText(`WaveKit ID: ${cloud.user.uid}`, "WaveKit ID copied.");
}

async function createDiscordLinkCode() {
  if (!cloud.configured || !cloud.user || !cloud.api) {
    setCloudStatus("Sign in before creating a Discord link code.");
    return;
  }
  const code = generateDiscordLinkCode();
  await runCloudAction("Creating Discord link code...", async () => {
    await cloud.api.saveDiscordLinkCode(code);
  }, `Discord code copied: ${code}`);
  await copyText(code, `Discord code copied: ${code}`);
}

function generateDiscordLinkCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const values = new Uint32Array(10);
  crypto.getRandomValues(values);
  return [...values].map((value, index) => {
    const letter = alphabet[value % alphabet.length];
    return index === 4 ? `-${letter}` : letter;
  }).join("");
}

async function copyText(text, successMessage) {
  if (!navigator.clipboard?.writeText) {
    fallbackCopy(text);
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    setCloudStatus(successMessage);
  } catch {
    fallbackCopy(text);
  }
}

async function autoLoadCloudProfiles() {
  if (!cloud.configured || !cloud.user || !cloud.api) return;
  const userKey = cloud.user.uid || cloud.user.email || cloud.user.displayName || "user";
  if (cloud.loadedForUid === userKey) return;
  cloud.loadedForUid = userKey;
  cloud.busy = true;
  renderCloudSync();
  try {
    const cloudData = await cloud.api.loadCloudProfiles();
    if (cloudData?.profiles?.length) {
      if (applyCloudProfiles(cloudData)) {
        setCloudStatus("Cloud profile loaded.");
      } else {
        setCloudStatus("Signed in. No saved roster found yet.");
      }
    } else if (hasProfileProgress()) {
      await cloud.api.saveCloudProfiles(cloudPayload());
      setCloudStatus("Signed in. Local profile synced.");
    } else {
      setCloudStatus("Signed in. Automatic sync is ready.");
    }
  } catch (error) {
    if (error?.message === "no-cloud-profile" && hasProfileProgress()) {
      try {
        await cloud.api.saveCloudProfiles(cloudPayload());
        setCloudStatus("Signed in. Local profile synced.");
      } catch (saveError) {
        setCloudStatus(cleanCloudError(saveError));
      }
    } else {
      setCloudStatus(error?.message === "no-cloud-profile" ? "Signed in. Automatic sync is ready." : cleanCloudError(error));
    }
  } finally {
    cloud.busy = false;
    renderCloudSync();
  }
}

function applyCloudProfiles(cloudData) {
  const profiles = cloudData.profiles.map((profile) => ({ ...normaliseProfile(profile), id: profile.id || `profile-${Date.now()}`, updatedAt: profile.updatedAt || new Date().toISOString() }));
  const preferredProfile = profiles.find((profile) => profile.id === cloudData.activeProfileId && profileHasRosterData(profile))
    || profiles.find(profileHasRosterData);
  if (!preferredProfile) return false;
  state.profiles = profiles;
  state.activeProfileId = preferredProfile.id;
  applyProfile(preferredProfile);
  state.editMode = false;
  persistProfiles();
  $("#save-status").textContent = "Loaded cloud profile";
  render();
  return true;
}

function cloudPayload() {
  if (state.activeProfileId || workingProfileHasRosterData()) {
    upsertWorkingProfile();
  }
  persistProfiles();
  return {
    profiles: state.profiles,
    activeProfileId: state.activeProfileId,
    savedAt: new Date().toISOString()
  };
}

function hasProfileProgress() {
  return Boolean(state.profileName || workingProfileHasRosterData() || state.profiles.some(profileHasRosterData));
}

async function runCloudAction(workingMessage, action, successMessage) {
  if (!cloud.configured || !cloud.api) {
    setCloudStatus("Cloud sync needs Firebase setup.");
    return;
  }
  cloud.busy = true;
  setCloudStatus(workingMessage);
  renderCloudSync();
  try {
    await action();
    setCloudStatus(successMessage);
    closeAccountMenu();
  } catch (error) {
    setCloudStatus(cleanCloudError(error));
  } finally {
    cloud.busy = false;
    renderCloudSync();
  }
}

function cleanCloudError(error) {
  const code = error?.code || error?.message;
  const messages = {
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/invalid-credential": "Invalid email or password.",
    "auth/email-already-in-use": "An account already exists with that email.",
    "auth/popup-closed-by-user": "Google sign in was closed before finishing.",
    "auth/popup-blocked": "The browser blocked the Google sign-in popup. Allow popups for WaveKit and try again.",
    "auth/cancelled-popup-request": "Google sign in was interrupted. Try the Google button again.",
    "auth/operation-not-allowed": "Google sign in is not enabled in Firebase Authentication.",
    "auth/unauthorized-domain": "This domain is not authorised in Firebase Authentication.",
    "auth/configuration-not-found": "Firebase Authentication is not fully set up for this project.",
    "auth/network-request-failed": "Firebase could not be reached. Check your connection and try again.",
    "auth/api-key-not-valid": "Firebase rejected the API key in the site config.",
    "auth/app-not-authorized": "Firebase has not authorised this web app for the current domain.",
    "auth/too-many-requests": "Firebase is temporarily blocking sign-in attempts. Wait a little, then try again.",
    "auth/account-exists-with-different-credential": "That email already uses a different sign-in method.",
    "auth/weak-password": "Password should be at least 6 characters.",
    "permission-denied": "Firebase saved nothing because the Firestore rules rejected this account.",
    "failed-precondition": "Firestore is not ready yet. Check that the database exists and rules are published.",
    "unavailable": "Firestore is temporarily unavailable. Try syncing again in a moment.",
    "cloud-sync-not-configured": "Cloud sync needs Firebase setup.",
    "not-signed-in": "Sign in before syncing.",
    "no-cloud-profile": "No cloud profile found yet. Your next change will create one automatically."
  };
  return messages[code] || `Cloud sync failed${code ? ` (${code})` : ""}. Check Firebase setup and try again.`;
}

$("#profile-name").addEventListener("input", (event) => {
  state.profileName = event.target.value;
  markUnsaved();
});

$("#character-search").addEventListener("input", (event) => {
  state.search = event.target.value;
  renderCharacters();
});

$("#weapon-search").addEventListener("input", (event) => {
  state.weaponSearch = event.target.value;
  renderWeapons();
});

$("#select-four-star-resonators").addEventListener("click", () => setFourStarResonators(true));
$("#clear-four-star-resonators").addEventListener("click", () => setFourStarResonators(false));
$("#select-four-star-weapons").addEventListener("click", () => setFourStarWeapons(true));
$("#clear-four-star-weapons").addEventListener("click", () => setFourStarWeapons(false));

$("#save-profile").addEventListener("click", saveProfile);
$("#reset-profile").addEventListener("click", resetProfile);
$("#new-profile").addEventListener("click", newProfile);
$("#edit-profile").addEventListener("click", editProfile);
$("#delete-profile").addEventListener("click", deleteProfile);
$("#profile-customise").addEventListener("click", () => {
  const customiser = accountOverview?.querySelector("#profile-customiser");
  if (!customiser) return;
  customiser.hidden = !customiser.hidden;
  $("#profile-customise").textContent = customiser.hidden ? "Customise profile" : "Done customising";
});
$("#copy-feedback-context").addEventListener("click", copyFeedbackContext);
$("form[name='wavekit-feedback']").addEventListener("submit", handleFeedbackSubmit);
flowNextButton.addEventListener("click", handleFlowNext);
$("#cloud-sign-in").addEventListener("click", signInCloud);
$("#cloud-create-account").addEventListener("click", createCloudAccount);
$("#cloud-google").addEventListener("click", signInGoogleCloud);
$("#cloud-reset-password").addEventListener("click", resetCloudPassword);
$("#cloud-copy-id").addEventListener("click", copyWaveKitId);
$("#cloud-discord-code").addEventListener("click", createDiscordLinkCode);
$("#cloud-sign-out").addEventListener("click", signOutCloud);
document.querySelectorAll("[data-open-profile-manager]").forEach((button) => button.addEventListener("click", () => {
  closeAccountMenu();
  $("#profile-manager-dialog")?.showModal();
}));
$("#close-profile-manager").addEventListener("click", () => $("#profile-manager-dialog").close());
$("#profile-manager-dialog").addEventListener("click", (event) => {
  if (event.target === $("#profile-manager-dialog")) $("#profile-manager-dialog").close();
});
document.addEventListener("click", handleAccountMenuDismiss);
document.addEventListener("keydown", handleAccountMenuDismiss);
window.addEventListener("scroll", updateActiveNav, { passive: true });
window.addEventListener("hashchange", () => setActiveNav(location.hash || ""));
window.addEventListener("pagehide", flushPendingLocalSave);

loadProfile();
render();
updateActiveNav();
initCloudSync();
