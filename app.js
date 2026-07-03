const wallpaper = (slug, file) => [slug, file];

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
  wallpaper("yangyang", "yangyang.webp"), wallpaper("yinlin", "yinlin.jpg"), wallpaper("youhu", "youhu.webp"),
  wallpaper("yuanwu", "yuanwu.webp"), wallpaper("zani", "zani.webp"), wallpaper("zhezhi", "zhezhi.jpg")
]);

const builds = Object.fromEntries([
  ["shorekeeper", "Healer-Support Build", "Stellar Symphony", "Rejuvenating Glow", "Fallacy of No Return", "Healing Bonus or CRIT DMG / Energy Regen or HP% / HP%"],
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
  ["lucilla", "Glacio Sub-DPS", "Stringmaster", "Freezing Frost or Moonlit Clouds", "Nightmare: Lampylumen Myriad", "CRIT Rate or CRIT DMG / Glacio DMG or Energy Regen / ATK%"],
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
  ["buling", "Full Healer Support Build", "Stellar Symphony", "Rejuvenating Glow", "Fallacy of No Return", "Healing Bonus or ATK% / Energy Regen / ATK%"],
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
  buling: "4-3-3-1-1"
};

const weaponFallbacks = {
  Sword: ["Emerald of Genesis", "Blazing Brilliance", "Commando of Conviction", "Lunar Cutter"],
  Rectifier: ["Stringmaster", "Cosmic Ripples", "Augment", "Jinzhou Keeper"],
  Broadblade: ["Verdant Summit", "Lustrous Razor", "Autumntrace", "Helios Cleaver"],
  Gauntlets: ["Abyss Surges", "Verity's Handle", "Stonard", "Marcato"],
  Pistols: ["Static Mist", "The Last Dance", "Thunderbolt", "Cadenza"],
  Unknown: ["Use the listed signature first", "Match the kit's scaling stat", "Use Crit or Energy Regen options", "Hold rare upgrades until verified"]
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
  buling: ["Variation", "Rectifier#25", "Comet Flare"],
  mornye: ["Variation", "Rectifier#25", "Comet Flare"],
  youhu: ["Marcato", "Originite: Type IV", "Gauntlets#21D"],
  taoqi: ["Discord", "Dauntless Evernight", "Broadblade#41"],
  mortefi: ["Static Mist", "Cadenza", "Thunderbolt"],
  sanhua: ["Emerald of Genesis", "Commando of Conviction", "Lunar Cutter"],
  yangyang: ["Emerald of Genesis", "Commando of Conviction", "Lunar Cutter"],
  danjin: ["Emerald of Genesis", "Lumingloss", "Commando of Conviction"],
  chixia: ["Static Mist", "Thunderbolt", "Novaburst"],
  aalto: ["Static Mist", "Cadenza", "Novaburst"],
  carlotta: ["Static Mist", "Thunderbolt", "Novaburst"],
  camellya: ["Emerald of Genesis", "Blazing Brilliance", "Lumingloss"]
};

const weaponCatalog = new Map([
  ["Abyss Surges", "Gauntlets"],
  ["Amity Accord", "Gauntlets"],
  ["Augment", "Rectifier"],
  ["Autumntrace", "Broadblade"],
  ["Broadblade of Night", "Broadblade"],
  ["Broadblade of Voyager", "Broadblade"],
  ["Broadblade#41", "Broadblade"],
  ["Cadenza", "Pistols"],
  ["Comet Flare", "Rectifier"],
  ["Commando of Conviction", "Sword"],
  ["Cosmic Ripples", "Rectifier"],
  ["Dauntless Evernight", "Broadblade"],
  ["Discord", "Broadblade"],
  ["Emerald of Genesis", "Sword"],
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
  ["Lumingloss", "Sword"],
  ["Lunar Cutter", "Sword"],
  ["Lustrous Razor", "Broadblade"],
  ["Marcato", "Gauntlets"],
  ["Novaburst", "Pistols"],
  ["Originite: Type I", "Broadblade"],
  ["Originite: Type II", "Sword"],
  ["Originite: Type III", "Pistols"],
  ["Originite: Type IV", "Gauntlets"],
  ["Originite: Type V", "Rectifier"],
  ["Pistols of Night", "Pistols"],
  ["Pistols of Voyager", "Pistols"],
  ["Pistols#26", "Pistols"],
  ["Rectifier of Night", "Rectifier"],
  ["Rectifier of Voyager", "Rectifier"],
  ["Rectifier#25", "Rectifier"],
  ["Scale: Slasher", "Sword"],
  ["Static Mist", "Pistols"],
  ["Stonard", "Gauntlets"],
  ["Stringmaster", "Rectifier"],
  ["Sword of Night", "Sword"],
  ["Sword of Voyager", "Sword"],
  ["Sword#18", "Sword"],
  ["Thunderbolt", "Pistols"],
  ["Training Broadblade", "Broadblade"],
  ["Training Gauntlets", "Gauntlets"],
  ["Training Pistols", "Pistols"],
  ["Training Rectifier", "Rectifier"],
  ["Training Sword", "Sword"],
  ["Tyro Broadblade", "Broadblade"],
  ["Tyro Gauntlets", "Gauntlets"],
  ["Tyro Pistols", "Pistols"],
  ["Tyro Rectifier", "Rectifier"],
  ["Tyro Sword", "Sword"],
  ["Undying Flame", "Pistols"],
  ["Variation", "Rectifier"],
  ["Verdant Summit", "Broadblade"]
]);

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
  }
};

const knownWeaponTypes = {
  "Stellar Symphony": "Rectifier",
  "Lethean Elegy": "Rectifier",
  "Thunderflare Dominion": "Broadblade",
  "Moongazer's Sigil": "Gauntlets",
  "Spectrum Blaster": "Pistols",
  "Starfield Calibrator": "Rectifier",
  "Everbright Polestar": "Unknown",
  "Daybreaker's Spine": "Unknown",
  "Solsworn Ciphers": "Unknown",
  "Frostburn": "Unknown",
  "Forged Dwarf Star": "Unknown",
  "Defier's Thorn": "Sword",
  "Red Spring": "Sword",
  "Ages of Harvest": "Broadblade",
  "Blazing Justice": "Gauntlets",
  "Whispers of Sirens": "Rectifier",
  "Woodland Aria": "Pistols",
  "Rime-Draped Sprouts": "Rectifier",
  "Emerald Sentence": "Sword",
  "Skull Thrasher": "Unknown",
  "Spectral Trigger": "Unknown",
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
  "Pistols#26": "Pistols"
};

const characters = [
  c("shorekeeper", "Shorekeeper", "Spectro", "Rectifier", ["healer", "support"], 99, ["any"], ["crit", "sustain"], "Premium sustain. Healing, Crit support, and low-stress team flow."),
  c("verina", "Verina", "Spectro", "Rectifier", ["healer", "support"], 96, ["any"], ["atk", "sustain"], "Very forgiving healer and universal support."),
  c("phrolova", "Phrolova", "Havoc", "Rectifier", ["main"], 98, ["havoc"], ["havoc", "coordinated"], "High-value Havoc carry. Likes Havoc helpers and stable sustain."),
  c("cartethyia", "Cartethyia", "Aero", "Sword", ["main"], 96, ["aero"], ["aero", "erosion"], "Aero carry with strong payoff when the team supports her mechanic."),
  c("jinhsi", "Jinhsi", "Spectro", "Broadblade", ["main"], 92, ["spectro"], ["coordinated", "burst"], "Burst carry that wants helpers who enable her damage window."),
  c("zani", "Zani", "Spectro", "Gauntlets", ["main"], 92, ["spectro"], ["frazzle"], "Spectro damage dealer that appreciates Frazzle or Spectro support."),
  c("camellya", "Camellya", "Havoc", "Sword", ["main"], 90, ["havoc"], ["havoc"], "Strong Havoc carry, but asks for more comfort and timing."),
  c("augusta", "Augusta", "Electro", "Broadblade", ["main"], 95, ["electro"], ["electro"], "Newer Electro carry. Strong, but mark as source-check before over-optimising."),
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
  c("aemeath", "Aemeath", "Fusion", "Unknown", ["main"], 94, ["fusion"], ["rupture"], "Newer Fusion damage entry with sourced build basics."),
  c("hiyuki", "Hiyuki", "Glacio", "Unknown", ["main"], 94, ["glacio"], ["chafe"], "Newer Glacio damage entry. Keep recommendations conservative."),
  c("sigrika", "Sigrika", "Aero", "Unknown", ["main"], 94, ["aero"], ["echo-skill"], "Newer Aero damage entry with sourced build basics."),
  c("galbrena", "Galbrena", "Fusion", "Pistols", ["main"], 88, ["fusion"], ["echo-skill"], "Fusion Echo Skill damage entry."),
  c("lucy", "Lucy", "Spectro", "Unknown", ["main"], 86, ["spectro"], ["heavy"], "New collab damage character. Keep long-term assumptions cautious."),
  c("luuk-herssen", "Luuk Herssen", "Spectro", "Unknown", ["main"], 85, ["spectro"], ["basic"], "Spectro basic-attack damage entry."),
  c("cantarella", "Cantarella", "Havoc", "Rectifier", ["sub", "support"], 94, ["havoc"], ["havoc", "utility"], "Havoc helper for damage and utility."),
  c("qiuyuan", "Qiuyuan", "Aero", "Sword", ["sub"], 91, ["aero"], ["echo"], "Aero sub-DPS with full Echo support direction."),
  c("ciaccona", "Ciaccona", "Aero", "Pistols", ["sub"], 90, ["aero"], ["erosion"], "Aero Erosion sub-DPS."),
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
  c("iuno", "Iuno", "Aero", "Gauntlets", ["sub", "support"], 93, ["aero"], ["utility"], "Newer Aero support/sub-DPS."),
  c("lynae", "Lynae", "Spectro", "Unknown", ["sub"], 92, ["spectro"], ["spectro"], "Newer Spectro sub-DPS."),
  c("denia", "Denia", "Fusion", "Unknown", ["sub"], 90, ["fusion"], ["burst"], "Fusion Burst sub-DPS."),
  c("rebecca", "Rebecca", "Electro", "Unknown", ["sub", "support"], 86, ["electro"], ["heavy"], "Heavy Attack buffer/sub-DPS."),
  c("lucilla", "Lucilla", "Glacio", "Rectifier", ["sub"], 82, ["glacio"], ["glacio"], "Glacio helper with source-check needed."),
  c("phoebe", "Phoebe", "Spectro", "Rectifier", ["main", "sub", "support"], 88, ["spectro"], ["frazzle"], "Flexible Spectro/Frazzle damage or support direction."),
  c("brant", "Brant", "Fusion", "Sword", ["support", "main"], 86, ["fusion"], ["fusion", "comfort"], "Fusion support/hybrid with comfort value."),
  c("chisa", "Chisa", "Havoc", "Unknown", ["support", "healer"], 86, ["havoc"], ["bane"], "Havoc support with sustain utility."),
  c("mornye", "Mornye", "Spectro", "Rectifier", ["healer", "support"], 92, ["any"], ["sustain", "def", "tune"], "DEF-based healer support for Tune shells and safer rotations."),
  c("baizhi", "Baizhi", "Glacio", "Rectifier", ["healer", "support"], 74, ["any"], ["sustain"], "Accessible healer for early accounts."),
  c("youhu", "Youhu", "Glacio", "Gauntlets", ["healer", "support"], 70, ["any"], ["sustain"], "Support healer with more specific kit management."),
  c("buling", "Buling", "Electro", "Rectifier", ["healer", "support"], 80, ["any"], ["sustain"], "Electro healer/support entry. Good as a sustain option while team-specific testing matures."),
  c("taoqi", "Taoqi", "Havoc", "Broadblade", ["defense", "support"], 62, ["havoc"], ["shield"], "Defensive support for safer teams."),
  c("rover", "Rover", "Spectro / Havoc / Aero", "Sword", ["main", "sub"], 75, ["any"], ["flexible"], "Flexible account anchor with multiple forms.")
];

const state = {
  activeProfileId: "",
  editMode: true,
  profiles: [],
  profileName: "",
  experience: "New",
  priority: "Balanced",
  goal: "General play",
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
  weapons: new Set()
};

let autoSaveTimer = null;
let autoSyncRetryTimer = null;
let autoSyncing = false;

const experienceOptions = ["New", "Comfortable", "Endgame"];
const priorityOptions = ["Balanced", "Comfort", "DPS"];
const goalOptions = ["General play", "Story & bosses", "Tower"];
const roleFilters = ["All", "Main DPS", "Sub DPS", "Support", "Healer", "Defense"];
const weaponTypeFilters = ["All", "Sword", "Broadblade", "Gauntlets", "Pistols", "Rectifier"];

const teamPreferences = {
  phrolova: pref(["cantarella", "qiuyuan", "roccia"], ["chisa", "taoqi", "danjin"], ["shorekeeper", "verina", "chisa", "baizhi"]),
  cartethyia: pref(["ciaccona", "qiuyuan", "chisa", "iuno"], ["sanhua", "yangyang", "jianxin"], ["shorekeeper", "verina", "mornye", "baizhi", "rover"]),
  jinhsi: pref(["zhezhi", "yinlin", "mortefi", "yuanwu"], ["taoqi", "sanhua"], ["shorekeeper", "verina", "baizhi"]),
  zani: pref(["phoebe", "rover", "lynae"], ["shorekeeper", "verina", "mornye", "sanhua"], ["shorekeeper", "verina", "baizhi"]),
  camellya: pref(["cantarella", "roccia", "sanhua"], ["taoqi", "danjin", "chisa"], ["shorekeeper", "verina", "chisa", "baizhi"]),
  augusta: pref(["iuno", "rebecca", "yinlin"], ["yuanwu", "lumi", "jianxin"], ["shorekeeper", "verina", "mornye", "baizhi"]),
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
  aemeath: pref(["lynae", "mornye", "denia"], ["brant", "lupa", "changli"], ["mornye", "shorekeeper", "verina", "baizhi"]),
  hiyuki: pref(["zhezhi", "sanhua", "lucilla"], ["youhu", "baizhi", "jianxin"], ["shorekeeper", "verina", "baizhi", "youhu"]),
  sigrika: pref(["qiuyuan", "ciaccona", "iuno"], ["yangyang", "jianxin", "aalto"], ["shorekeeper", "verina", "baizhi"]),
  galbrena: pref(["qiuyuan", "lupa", "changli"], ["brant", "denia", "mortefi"], ["shorekeeper", "verina", "baizhi"]),
  lucy: pref(["rebecca", "lynae", "phoebe"], ["zhezhi", "sanhua", "mornye"], ["shorekeeper", "verina", "mornye", "baizhi"]),
  "luuk-herssen": pref(["denia", "lynae", "mornye"], ["sanhua", "phoebe", "zhezhi"], ["mornye", "shorekeeper", "verina", "baizhi"]),
  brant: pref(["lupa", "changli", "denia"], ["mortefi", "encore", "sanhua"], ["shorekeeper", "verina", "baizhi"]),
  phoebe: pref(["zani", "lynae", "rover"], ["shorekeeper", "verina", "mornye", "sanhua"], ["shorekeeper", "verina", "mornye", "baizhi"]),
  rover: pref(["ciaccona", "shorekeeper", "verina", "sanhua"], ["yangyang", "mortefi", "baizhi"], ["shorekeeper", "verina", "baizhi"])
};

const teamArchetypes = {
  phrolova: archetype("Havoc Echo Skill", [["cantarella", "qiuyuan"], ["cantarella", "shorekeeper"], ["roccia", "cantarella"]], "Phrolova wants Havoc/Echo Skill setup before she takes over."),
  cartethyia: archetype("Aero Erosion", [["ciaccona", "shorekeeper"], ["ciaccona", "verina"], ["sanhua", "shorekeeper"], ["sanhua", "verina"], ["ciaccona", "rover"]], "Cartethyia is strongest when the team supports Aero Erosion, with Sanhua acting as a practical fallback helper when Ciaccona is missing."),
  jinhsi: archetype("Spectro Burst", [["zhezhi", "shorekeeper"], ["yinlin", "shorekeeper"], ["mortefi", "verina"]], "Jinhsi wants coordinated or skill-friendly helpers to feed her burst window."),
  zani: archetype("Spectro Frazzle", [["phoebe", "shorekeeper"], ["phoebe", "verina"], ["rover", "shorekeeper"]], "Zani needs Spectro Frazzle support before generic damage buffs."),
  camellya: archetype("Havoc Basic", [["roccia", "shorekeeper"], ["sanhua", "shorekeeper"], ["danjin", "verina"]], "Camellya values Basic Attack/Havoc setup and enough safety for her field time."),
  augusta: archetype("Heavy Attack Carry", [["iuno", "shorekeeper"], ["iuno", "verina"], ["rebecca", "shorekeeper"]], "Augusta wants Heavy Attack/all-attribute support before generic Electro pairing."),
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
  aemeath: archetype("Tune Rupture", [["lynae", "mornye"], ["denia", "mornye"], ["brant", "shorekeeper"]], "Aemeath is mode-based, so Tune Rupture teams should be labeled clearly."),
  hiyuki: archetype("Glacio Chafe", [["zhezhi", "shorekeeper"], ["sanhua", "verina"], ["lucilla", "baizhi"]], "Hiyuki's current-patch details need review, so keep recommendations conservative."),
  sigrika: archetype("Aero Echo Skill", [["qiuyuan", "shorekeeper"], ["qiuyuan", "verina"], ["ciaccona", "shorekeeper"]], "Sigrika is an Echo Skill carry; Qiuyuan is a priority helper if owned."),
  galbrena: archetype("Fusion Echo Skill", [["qiuyuan", "shorekeeper"], ["qiuyuan", "lupa"], ["changli", "verina"]], "Galbrena is an Echo Skill carry, so Qiuyuan matters more than generic Fusion matching."),
  lucy: archetype("Hack-Shifting Heavy", [["rebecca", "shorekeeper"], ["rebecca", "verina"], ["rebecca", "mornye"], ["lynae", "shorekeeper"]], "Lucy and Rebecca are prioritised together because their Hack-Shifting mechanics are intended to work in tandem."),
  "luuk-herssen": archetype("Tune Strain", [["denia", "mornye"], ["lynae", "mornye"], ["denia", "shorekeeper"]], "Luuk Herssen wants a Tune Strain shell, with Denia + Mornye treated as the current best target when both are owned."),
  brant: archetype("Fusion Hybrid", [["changli", "lupa"], ["changli", "shorekeeper"], ["lupa", "verina"]], "Brant can play damage or comfort utility inside Fusion teams."),
  phoebe: archetype("Spectro Frazzle", [["zani", "shorekeeper"], ["zani", "verina"], ["rover", "shorekeeper"]], "Phoebe is a premium Spectro Frazzle piece, especially for Zani.")
};

const dataConfidence = {
  aemeath: ["review", "Needs current patch review"],
  hiyuki: ["review", "Needs current patch review"],
  denia: ["checked", "Guide checked"],
  lucilla: ["review", "Needs current patch review"],
  lucy: ["checked", "Guide checked"],
  rebecca: ["checked", "Guide checked"],
  buling: ["review", "Needs current patch review"],
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
const flowNext = $("#flow-next");
const flowNextStep = $("#flow-next-step");
const flowNextTitle = $("#flow-next-title");
const flowNextDetail = $("#flow-next-detail");
const flowNextButton = $("#flow-next-button");
const navLinks = [...document.querySelectorAll(".topnav a[href^='#']")];
const navSections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
const profileStorageKey = "wavekit-profiles-v1";
const legacyProfileKey = "tacet-team-helper-profile";
const legacyProfilesKey = "tacet-team-helper-profiles-v2";
const cloud = {
  api: null,
  configured: false,
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
  return characters.map((character) => character.slug === "rover" ? activeRover() : character);
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
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
  characterGrid.innerHTML = visible.map((character) => {
    const owned = state.owned[character.slug];
    const focused = state.focus.has(character.slug);
    return `
      <article class="character-card ${owned ? "is-owned" : ""} ${focused ? "is-focused" : ""} ${character.slug === "rover" ? "is-rover" : ""} element-${firstElement(character.element).toLowerCase()}" data-character-card="${character.slug}">
        <button class="character-toggle" type="button" data-character="${character.slug}" aria-pressed="${Boolean(owned)}">
          ${visual(character)}
          <span class="character-info">
            <strong>${character.name}</strong>
            <small>${roleLabel(character)} · ${character.element}</small>
          </span>
        </button>
        <button class="focus-toggle" type="button" data-focus-character="${character.slug}" aria-pressed="${focused}" aria-label="Prioritise ${character.name}">
          ${focused ? "★" : "☆"}
        </button>
        ${character.slug === "rover" ? roverFormPicker() : ""}
        <div class="chain-row" aria-label="${character.name} Resonance Chain">
          <span>RC</span>
          <button type="button" data-chain-minus="${character.slug}" data-chain-action="decrease">-</button>
          <strong>${owned?.chain ?? 0}</strong>
          <button type="button" data-chain-plus="${character.slug}" data-chain-action="increase">+</button>
        </div>
      </article>
    `;
  }).join("");
  characterGrid.querySelectorAll("[data-character-card]").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest(".chain-row")) return;
      if (event.target.closest(".rover-form-row")) return;
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
  const weapons = [...new Set([
    ...weaponCatalog.keys(),
    ...activeCharacters().flatMap((character) => [character.build.weapon, ...alternateWeapons(character)]).filter(Boolean)
  ])].sort()
    .filter((weapon) => {
      const type = weaponTypeFor(weapon);
      const typeMatch = state.weaponTypeFilter === "All" || type === state.weaponTypeFilter;
      const text = `${weapon} ${weaponHint(weapon)} ${type}`.toLowerCase();
      return typeMatch && (!query || text.includes(query));
    });
  const input = $("#weapon-search");
  if (input && input.value !== state.weaponSearch) input.value = state.weaponSearch;
  weaponGrid.innerHTML = weapons.map((weapon) => `
    <button class="weapon-card ${state.weapons.has(weapon) ? "is-owned" : ""}" type="button" data-weapon="${weapon}">
      ${weaponVisual(weapon)}
      <span class="weapon-copy">
        <strong>${weapon}</strong>
        <small>${weaponTypeFor(weapon)} · ${weaponHint(weapon)}</small>
      </span>
      <span class="owned-badge">${state.weapons.has(weapon) ? "Owned" : "Tap to add"}</span>
    </button>
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
  const matches = activeCharacters().filter((character) => character.build.weapon === weapon).slice(0, 2).map((character) => character.name);
  return matches.length ? matches.join(", ") : "Flexible option";
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
    || weaponFallbacks.Unknown;
  return options.filter((weapon) => weapon !== character.build.weapon).slice(0, 3);
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

function changeChain(slug, delta) {
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
    candidates.sort((a, b) => b.score - a.score);
    teams.push(...dedupeTeams(candidates).slice(0, 3).map((team, index) => ({ ...team, mainRank: index + 1 })));
  });
  return keepRoverVisible(teams.sort((a, b) => b.score - a.score));
}

function keepRoverVisible(teams) {
  const top = teams.slice(0, 18);
  if (!state.owned.rover || top.some((team) => team.main.slug === "rover")) return top;
  const roverTeam = teams.find((team) => team.main.slug === "rover");
  return roverTeam ? [...top.slice(0, 17), roverTeam].sort((a, b) => b.score - a.score) : top;
}

function scoreCharacter(character) {
  const chain = state.owned[character.slug]?.chain || 0;
  const weaponBonus = state.weapons.has(character.build.weapon) ? 14 : 0;
  const focusBonus = state.focus.has(character.slug) ? 24 : 0;
  return character.score + chain * 1.8 + weaponBonus + focusBonus;
}

function scoreTeam(main, sub, sustain) {
  let score = scoreCharacter(main) * 1.12 + sub.score * 0.55 + sustain.score * 0.62;
  score += synergyScore(main, sub) + synergyScore(main, sustain);
  score += preferredTeamScore(main, sub, sustain);
  score += archetypeTeamScore(main, sub, sustain);
  if (main.score >= 90) score += 12;
  if (main.score < 75) score -= 8;
  if (sustain.roles.includes("healer")) score += state.priority === "Comfort" || state.experience === "New" ? 16 : 9;
  if (sub.roles.includes("support")) score += 4;
  if (state.priority === "DPS" && sub.roles.includes("sub")) score += 7;
  if (state.priority === "Balanced" && sustain.roles.includes("healer") && sub.roles.includes("sub")) score += 5;
  if (state.priority === "Comfort" && (sustain.roles.includes("healer") || sustain.roles.includes("defense"))) score += 8;
  if (state.goal === "Tower" && !sustain.roles.includes("healer")) score -= 8;
  if (state.priority !== "DPS" && !sustain.roles.includes("healer") && !sustain.roles.includes("defense")) score -= 10;
  if (main.roles.includes("main") && sustain.roles.includes("defense") && state.experience === "New") score += 4;
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
  if (teamPreferences[main.slug]?.core.includes(sub.slug) && teamPreferences[main.slug]?.sustain.includes(sustain.slug)) score += 8;
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
  const idealIndex = archetype.ideal.findIndex((ideal) => ideal.every((slug) => pair.includes(slug)));
  if (idealIndex >= 0) return 34 - idealIndex * 6;
  if (archetype.ideal.some((ideal) => ideal.includes(sub.slug))) return 12;
  if (archetype.ideal.some((ideal) => ideal.includes(sustain.slug))) return 8;
  return 0;
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
  const grouped = tierTeams(teams);
  const visibleGroups = state.showAllTeams ? grouped : grouped.filter((group) => group.tier !== "t3");
  const visibleCount = visibleGroups.reduce((count, group) => count + group.teams.length, 0);
  const hiddenCount = teams.length - visibleCount;
  $("#team-count").textContent = visibleCount;
  $("#team-count-label").textContent = hiddenCount > 0 ? `shown now, ${hiddenCount} more saved` : "team ideas ready";
  $("#empty-results").hidden = teams.length > 0;
  if (teams.length && !teams.some((team) => teamKey(team) === state.selectedTeamKey)) {
    state.selectedTeamKey = teamKey(teams[0]);
  }
  if (!teams.length) state.selectedTeamKey = "";
  teamResults.innerHTML = visibleGroups.map((group) => `
    <section class="team-tier ${group.tier}">
      <div class="tier-heading">
        <span>${group.label}</span>
        <strong>${group.teams.length}</strong>
      </div>
      <div class="team-tier-grid">
        ${group.teams.map((team, index) => teamCard(team, group, index)).join("")}
      </div>
    </section>
  `).join("") + teamRevealButton(hiddenCount);
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
      selectTeam(card.dataset.teamKey, false);
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
  renderBuilds(teams);
  renderFeedbackContext(teams);
  renderFlowNext(teams);
}

function renderFlowNext(teams = generateTeams()) {
  const ownedCount = Object.keys(state.owned).length;
  const selectedTeam = teams.find((team) => teamKey(team) === state.selectedTeamKey);
  const next = nextFlowAction({ ownedCount, selectedTeam, teams });
  if (next.target === "builds" && state.flowBuildsOpened) {
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

function nextFlowAction({ ownedCount, selectedTeam, teams }) {
  if (state.editMode && !state.activeProfileId) {
    return {
      step: "Step 1 of 4",
      title: "Start setup",
      detail: "Begin with the player profile section, then choose your roster.",
      button: "Start",
      target: "profile"
    };
  }
  if (state.editMode) {
    return {
      step: "Step 1 of 4",
      title: "Save profile changes",
      detail: "This keeps your choices on this device, then you can choose your roster.",
      button: "Save changes",
      target: "save"
    };
  }
  if (ownedCount < 3) {
    return {
      step: "Step 2 of 4",
      title: `${ownedCount}/3 Resonators selected`,
      detail: "Tap the characters you own. Three is enough to start seeing team ideas.",
      button: "Choose Resonators",
      target: "roster"
    };
  }
  if (!state.weapons.size) {
    return {
      step: "Step 3 of 4",
      title: "Add weapons when ready",
      detail: "This is optional, but owned weapons make build advice more accurate.",
      button: "Add weapons",
      target: "weapons"
    };
  }
  if (!teams.length) {
    return {
      step: "Step 4 of 4",
      title: "Choose a main damage dealer",
      detail: "You have enough picks, but WaveKit needs a usable team shell to score.",
      button: "Check Resonators",
      target: "roster"
    };
  }
  if (!state.flowVisitedResults || !selectedTeam) {
    return {
      step: "Step 4 of 4",
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
  if (target === "save") {
    saveProfile();
    requestAnimationFrame(() => scrollToSection("#helper"));
    return;
  }
  if (target === "profile") {
    scrollToSection("#helper", ".profile-panel");
    return;
  }
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
  setActiveNav(currentHash);
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
          ${teamInsight("Best partners", "Meta context", bestPartnerDetail(team))}
          ${teamInsight("Owned roster logic", "Why this version", rosterLogicDetail(team))}
          ${teamInsight("Rotation", "Beginner flow", rotationText(team))}
          ${teamInsight("Confidence", teamConfidence(team).label, teamConfidence(team).detail)}
        </div>
      </details>
    </article>
  `;
}

function teamKey(team) {
  return `${state.roverForm}:${team.members.map((member) => member.slug).join("|")}`;
}

function selectTeam(key, jumpToBuilds) {
  state.selectedTeamKey = key;
  state.flowBuildsOpened = Boolean(jumpToBuilds);
  renderResults();
  if (jumpToBuilds) scrollToSection("#builds");
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
  if (team.members[2].roles.includes("healer") && state.priority !== "DPS") return "Story, bosses, and learning rotations";
  if (state.goal === "Tower") return "Tower attempts when you can play the rotation cleanly";
  if (state.priority === "Comfort") return "Safer fights and lower-stress play";
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
        ${visual(character)}
        <div>
          <span class="mini-kicker">${roleLabel(character)}</span>
          <h3>${character.name}</h3>
          <span class="data-badge ${confidenceFor(character)[0]}">${confidenceFor(character)[1]}</span>
          <p>${character.note}</p>
          <dl class="build-quick">
            <div><dt>Weapon</dt><dd>${build.weapon}${ownedWeapon ? " · owned" : ""}</dd></div>
            <div><dt>Sonata</dt><dd>${sonataDisplay(build.sonata)}</dd></div>
            <div><dt>Echo cost</dt><dd>${costPattern(character)}</dd></div>
            <div><dt>Main Echo</dt><dd>${build.echo}</dd></div>
          </dl>
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

function buildForTeam(character, team) {
  if (character.slug === "qiuyuan" && team.main.slug === "sigrika") {
    return {
      ...character.build,
      build: "Moonlit Support Build",
      sonata: "Moonlit Clouds",
      echo: "Impermanence Heron",
      stats: "Energy Regen or CRIT / Aero DMG or Energy Regen / ATK%"
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
  if (!team) {
    return `No team selected. Profile: ${state.experience}, ${state.priority}, ${state.goal}. Owned Resonators: ${ownedCount}. Owned weapons: ${weaponCount}. Rover: ${roverText}.`;
  }
  return [
    `Selected team: ${team.members.map((member) => member.name).join(" / ")}`,
    `Fit: ${teamFitLabel(team)}`,
    `Safety: ${safetyLabel(team)}`,
    `Confidence: ${teamConfidence(team).label}`,
    `Roster logic: ${missingAlternativeNote(team)}`,
    `Profile: ${state.experience}, ${state.priority}, ${state.goal}`,
    `Owned Resonators: ${ownedCount}`,
    `Owned weapons: ${weaponCount}`,
    `Rover: ${roverText}`
  ].join("\n");
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
    "rover": `${character.name} is being treated as your selected ${state.roverForm} form here. In Aero teams, they can be practical Erosion utility, but they are not a full healer. Keep the rotation simple and lean on a real sustain unit when fights get messy.`,
    "jiyan": "Jiyan likes clear burst windows: prepare support effects first, then let him stay on field during his heavy attack/Liberation flow.",
    "mortefi": "Mortefi is strongest when his coordinated attacks support a field DPS. Build enough Energy Regen that his Outro and burst support arrive without awkward waiting.",
    "verina": "Verina is a low-stress sustain pick. Swap in, refresh healing and team buffs, then leave the field quickly so the damage dealer keeps momentum.",
    "shorekeeper": "Shorekeeper is the premium safety net. Prioritise Energy Regen and uptime so her field, healing, and Crit support are ready before hard fights.",
    "sanhua": "Sanhua is a quick helper: use her fast setup, trigger her burst window, then hand field time back to the main damage dealer.",
    "yangyang": "Yangyang is comfort utility. Use her for grouping and Energy help when a team feels scattered or starved for rotations.",
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
    "aemeath": "Aemeath is mode-based. Keep Tune Rupture and Fusion Burst advice separate so the build does not become muddled."
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
    $("#save-status").textContent = "Profile saved";
    saveCloudProfiles("Cloud profile synced");
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
    roverForm: state.roverForm,
    roverForms: [...state.roverForms],
    owned: state.owned,
    focus: [...state.focus],
    weapons: [...state.weapons]
  };
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
  return {
    profileName: payload.profileName || "",
    experience: payload.experience || "New",
    priority: payload.priority === "Power" ? "DPS" : payload.priority || "Balanced",
    goal: payload.goal || "General play",
    roverForm: roverForms[payload.roverForm] ? payload.roverForm : "Aero",
    roverForms: normaliseRoverForms(payload.roverForms, payload.roverForm),
    owned: payload.owned || {},
    focus: payload.focus || payload.favorites || [],
    weapons: payload.weapons || []
  };
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
  state.roverForm = payload.roverForm;
  state.roverForms = new Set(payload.roverForms);
  state.owned = payload.owned;
  state.focus = new Set(payload.focus.filter((slug) => state.owned[slug]));
  state.weapons = new Set(payload.weapons);
  state.selectedTeamKey = "";
  state.showAllTeams = false;
  resetFlowGuide();
}

function clearWorkingProfile() {
  state.profileName = "";
  state.experience = "New";
  state.priority = "Balanced";
  state.goal = "General play";
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
}

function resetProfile() {
  clearWorkingProfile();
  state.activeProfileId = "";
  state.editMode = true;
  $("#save-status").textContent = "Edits cleared";
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
  } catch {
    $("#save-status").textContent = "Delete blocked";
  }
  render();
}

function exportActiveProfile() {
  const payload = profilePayload();
  const exportData = {
    app: "WaveKit",
    version: 1,
    exportedAt: new Date().toISOString(),
    profile: payload
  };
  const name = (payload.profileName || "wavekit-profile").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "wavekit-profile";
  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${name}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  $("#save-status").textContent = "Profile exported";
}

function importProfileFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const parsed = JSON.parse(reader.result);
      const imported = normaliseProfile(parsed.profile || parsed);
      const id = `profile-${Date.now()}`;
      const profile = { id, updatedAt: new Date().toISOString(), ...imported };
      state.profiles.push(profile);
      applyProfile(profile);
      state.editMode = false;
      persistProfiles();
      saveCloudProfiles("Imported profile synced");
      $("#save-status").textContent = "Profile imported";
      render();
    } catch {
      $("#save-status").textContent = "Import failed";
    }
  });
  reader.readAsText(file);
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
  }).join("") : `<div class="profile-empty">No saved profiles yet.</div>`;
  profileList.querySelectorAll("[data-profile-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const profile = state.profiles.find((item) => item.id === button.dataset.profileId);
      if (!profile) return;
      applyProfile(profile);
      state.editMode = false;
      $("#save-status").textContent = "Profile selected";
      try {
        persistProfiles();
      } catch {
        $("#save-status").textContent = "Profile selected, save blocked";
      }
      render();
    });
  });
  renderProfileSummary();
  profileEditor.hidden = !state.editMode;
  $("#edit-profile").disabled = !state.activeProfileId && !state.profiles.length;
  $("#delete-profile").disabled = !state.activeProfileId;
  $("#save-profile").textContent = state.activeProfileId ? "Save changes" : "Create profile";
}

function renderProfileSummary() {
  const ownedNames = activeCharacters()
    .filter((character) => state.owned[character.slug])
    .slice(0, 6)
    .map((character) => character.name);
  profileSummary.innerHTML = `
    <div>
      <strong>${state.profileName || "Unsaved profile"}</strong>
      <span>${state.experience} · ${state.priority} · ${state.goal}</span>
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

function render() {
  document.body.classList.toggle("is-profile-view", !state.editMode);
  $("#profile-name").value = state.profileName;
  renderProfileManager();
  renderCloudSync();
  renderSegmented("#experience-options", experienceOptions, state.experience, (value) => { state.experience = value; resetFlowGuide(); markUnsaved(); render(); });
  renderSegmented("#priority-options", priorityOptions, state.priority, (value) => { state.priority = value; resetFlowGuide(); markUnsaved(); render(); });
  renderSegmented("#goal-options", goalOptions, state.goal, (value) => { state.goal = value; resetFlowGuide(); markUnsaved(); render(); });
  renderRoleFilters();
  renderCharacters();
  renderWeaponTypeFilters();
  renderWeapons();
  renderResults();
}

function markUnsaved() {
  if (state.activeProfileId) $("#save-status").textContent = "Unsaved changes";
  scheduleAutoSave();
}

function scheduleAutoSave(delay = 750) {
  clearTimeout(autoSaveTimer);
  autoSaveTimer = setTimeout(autoSaveProfile, delay);
}

async function autoSaveProfile() {
  if (!hasProfileProgress()) return;
  try {
    upsertWorkingProfile();
    persistProfiles();
    $("#save-status").textContent = cloud.user ? "Autosaved locally. Syncing..." : "Autosaved locally";
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
  try {
    const config = await import("./assets/firebase-config.js");
    if (!config.firebaseEnabled) {
      setCloudStatus("Cloud sync needs Firebase setup.");
      renderCloudSync();
      return;
    }
    cloud.api = await import("./assets/firebase-sync.js");
    cloud.configured = cloud.api.isCloudConfigured();
    if (!cloud.configured) {
      setCloudStatus("Cloud sync needs Firebase setup.");
      renderCloudSync();
      return;
    }
    cloud.api.initCloudSync((user) => {
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
    });
  } catch {
    setCloudStatus("Cloud sync could not load.");
  }
}

function renderCloudSync() {
  const signedOut = $("#cloud-signed-out");
  const signedIn = $("#cloud-signed-in");
  const userLabel = $("#cloud-user-label");
  const status = $("#cloud-sync-status");
  if (!signedOut || !signedIn || !status) return;
  signedOut.hidden = Boolean(cloud.user);
  signedIn.hidden = !cloud.user;
  if (userLabel && cloud.user) {
    userLabel.textContent = `Signed in as ${cloud.user.email || cloud.user.displayName || "WaveKit user"}`;
  }
  if (!cloud.configured) {
    status.textContent = "Cloud sync needs Firebase setup.";
  }
  [
    "#cloud-sign-in",
    "#cloud-create-account",
    "#cloud-google",
    "#cloud-reset-password",
    "#cloud-save",
    "#cloud-load",
    "#cloud-sign-out"
  ].forEach((selector) => {
    const button = $(selector);
    if (button) button.disabled = cloud.busy || !cloud.configured;
  });
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
  }, hasProfileProgress() ? "Account created. Profile synced." : "Account created. Add resonators or weapons, then sync.");
}

async function signInGoogleCloud() {
  await runCloudAction("Opening Google sign in...", () => cloud.api.signInWithGoogle(), "Signed in. Loading cloud profile...");
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

async function saveCloudProfiles(successMessage = "Cloud profile synced") {
  if (!cloud.configured || !cloud.user || !cloud.api) return;
  await runCloudAction("Syncing profile...", () => cloud.api.saveCloudProfiles(cloudPayload()), successMessage);
}

async function loadCloudProfiles() {
  if (!cloud.configured || !cloud.user || !cloud.api) return;
  await runCloudAction("Loading cloud profile...", async () => {
    const cloudData = await cloud.api.loadCloudProfiles();
    if (!cloudData?.profiles?.length) {
      throw new Error("no-cloud-profile");
    }
    applyCloudProfiles(cloudData);
  }, "Cloud profile loaded.");
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
      applyCloudProfiles(cloudData);
      setCloudStatus("Cloud profile loaded.");
    } else {
      setCloudStatus("Signed in. Sync when ready.");
    }
  } catch (error) {
    setCloudStatus(error?.message === "no-cloud-profile" ? "Signed in. Sync when ready." : cleanCloudError(error));
  } finally {
    cloud.busy = false;
    renderCloudSync();
  }
}

function applyCloudProfiles(cloudData) {
  state.profiles = cloudData.profiles.map((profile) => ({ ...normaliseProfile(profile), id: profile.id || `profile-${Date.now()}`, updatedAt: profile.updatedAt || new Date().toISOString() }));
  state.activeProfileId = cloudData.activeProfileId || state.profiles[0]?.id || "";
  applyProfile(state.profiles.find((profile) => profile.id === state.activeProfileId) || state.profiles[0]);
  state.editMode = false;
  persistProfiles();
  $("#save-status").textContent = "Loaded cloud profile";
  render();
}

function cloudPayload() {
  upsertWorkingProfile();
  persistProfiles();
  return {
    profiles: state.profiles,
    activeProfileId: state.activeProfileId,
    savedAt: new Date().toISOString()
  };
}

function hasProfileProgress() {
  return Boolean(state.profileName || Object.keys(state.owned).length || state.focus.size || state.weapons.size || state.profiles.length);
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
    "auth/account-exists-with-different-credential": "That email already uses a different sign-in method.",
    "auth/weak-password": "Password should be at least 6 characters.",
    "cloud-sync-not-configured": "Cloud sync needs Firebase setup.",
    "not-signed-in": "Sign in before syncing.",
    "no-cloud-profile": "No cloud profile found yet. Use Sync now first."
  };
  return messages[code] || "Cloud sync failed. Check Firebase setup and try again.";
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

$("#save-profile").addEventListener("click", saveProfile);
$("#reset-profile").addEventListener("click", resetProfile);
$("#new-profile").addEventListener("click", newProfile);
$("#edit-profile").addEventListener("click", editProfile);
$("#delete-profile").addEventListener("click", deleteProfile);
$("#export-profile").addEventListener("click", exportActiveProfile);
$("#import-profile").addEventListener("click", () => $("#profile-import-file").click());
$("#profile-import-file").addEventListener("change", (event) => {
  importProfileFile(event.target.files?.[0]);
  event.target.value = "";
});
$("#copy-feedback-context").addEventListener("click", copyFeedbackContext);
$("form[name='wavekit-feedback']").addEventListener("submit", handleFeedbackSubmit);
flowNextButton.addEventListener("click", handleFlowNext);
$("#cloud-sign-in").addEventListener("click", signInCloud);
$("#cloud-create-account").addEventListener("click", createCloudAccount);
$("#cloud-google").addEventListener("click", signInGoogleCloud);
$("#cloud-reset-password").addEventListener("click", resetCloudPassword);
$("#cloud-save").addEventListener("click", () => saveCloudProfiles("Cloud profile synced"));
$("#cloud-load").addEventListener("click", loadCloudProfiles);
$("#cloud-sign-out").addEventListener("click", signOutCloud);
document.addEventListener("click", handleAccountMenuDismiss);
document.addEventListener("keydown", handleAccountMenuDismiss);
window.addEventListener("scroll", updateActiveNav, { passive: true });
window.addEventListener("hashchange", () => setActiveNav(location.hash || ""));

loadProfile();
render();
updateActiveNav();
initCloudSync();
