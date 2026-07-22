(() => {
  const article = document.querySelector("[data-rover-guide]");
  const selector = document.querySelector("[data-rover-selector]");
  if (!article || !selector) return;

  const characterImage = (slug) => `../../assets/characters/${slug}.webp`;
  const echoImage = (slug) => `../../assets/echoes/${slug}.webp`;
  const sonataImage = (slug) => `../../assets/sonatas/${slug}.png`;
  const weaponImages = {
    "Blazing Brilliance": "https://cdn.prydwen.gg/images/wuthering-waves/weapons/21020016.webp",
    "Bloodpact's Pledge": "https://cdn.prydwen.gg/images/wuthering-waves/weapons/21020046.webp",
    "Commando of Conviction": "https://cdn.prydwen.gg/images/wuthering-waves/weapons/21020044.webp",
    "Emerald of Genesis": "../../assets/weapons/official/emerald-of-genesis.webp",
    "Endless Collapse": "https://cdn.prydwen.gg/images/wuthering-waves/weapons/21020084.webp",
    "Lunar Cutter": "https://cdn.prydwen.gg/images/wuthering-waves/weapons/21020064.webp",
    "Red Spring": "https://cdn.prydwen.gg/images/wuthering-waves/weapons/21020026.webp",
    "Somnoire Anchor": "https://cdn.prydwen.gg/images/wuthering-waves/weapons/21020017.webp"
  };

  const forms = {
    Spectro: {
      element: "Spectro",
      role: "Frazzle support",
      difficulty: "Moderate",
      description: "Spectro Frazzle applier, quick-swap support, and light sustain for Phoebe and Zani teams.",
      weapon: "Blazing Brilliance",
      weapons: [
        ["Blazing Brilliance", "Highest damage option for the current Frazzle rotation"],
        ["Emerald of Genesis", "Excellent standard 5-star with CRIT Rate and Energy Regen"],
        ["Lunar Cutter", "Strong quick-swap 4-star at higher ranks"],
        ["Endless Collapse", "Easy-to-build Energy Regen option"]
      ],
      sonata: "Moonlit Clouds",
      sonataSlug: "moonlit-clouds",
      alternateSonata: "Rejuvenating Glow",
      mainEcho: "Impermanence Heron",
      mainEchoSlug: "impermanence-heron",
      alternateEcho: "Fallacy of No Return",
      alternateEchoSlug: "fallacy-of-no-return",
      echoNote: "Moonlit Clouds is the usual hand-off set. Rejuvenating Glow is valid once R4 healing can trigger its team buff; Eternal Radiance is the personal-damage option.",
      mainStats: ["CRIT Rate / CRIT DMG", "Spectro DMG", "Spectro DMG > ATK%", "ATK%"],
      substats: ["Energy Regen until the rotation is comfortable (roughly 120-123%)", "CRIT Rate = CRIT DMG", "ATK%", "Resonance Skill DMG", "Resonance Liberation DMG"],
      skills: ["Resonance Liberation", "Forte Circuit", "Basic Attack", "Resonance Skill", "Intro Skill"],
      overview: "Spectro Rover is a flexible Frazzle specialist. Their Liberation and enhanced Skill apply Spectro Frazzle, R4 adds team healing, and R6 reduces Spectro RES. They are most relevant when Phoebe or Zani can exploit that package.",
      pattern: ["Build Forte with Heavy Attack and Aftertune.", "Use enhanced Skills and Liberation to establish Spectro Frazzle.", "Use the main Echo immediately before handing the field to the damage dealer."],
      teams: [
        { title: "Zani Frazzle core", label: "Best established core", members: [["zani", "Main DPS"], ["phoebe", "Frazzle amplifier"], ["rover", "Frazzle support"]], note: "Phoebe supplies the amplification while Spectro Rover adds Frazzle, healing access, and R6 Spectro RES reduction." },
        { title: "Phoebe healer team", label: "Safer alternative", members: [["phoebe", "Main DPS"], ["rover", "Frazzle support"], ["shorekeeper", "Healer support"]], note: "Use Moonlit Clouds on Rover when Shorekeeper holds Rejuvenating Glow. Verina can fill the same sustain slot." },
        { title: "Phoebe quick-swap", label: "Advanced", members: [["phoebe", "Main DPS"], ["changli", "Quick-swap DPS"], ["rover", "Frazzle support"]], note: "A higher-input option that trades a traditional healer for faster quick-swap pressure." }
      ],
      shells: [["zani", "phoebe", "rover"], ["phoebe", "rover", "shorekeeper"], ["phoebe", "rover", "verina"], ["phoebe", "changli", "rover"]],
      teammates: [["phoebe", "Phoebe"], ["zani", "Zani"], ["shorekeeper", "Shorekeeper"], ["verina", "Verina"], ["ciaccona", "Ciaccona"]],
      dataNote: "Build and teams reviewed against current July 2026 Spectro Rover guidance."
    },
    Havoc: {
      element: "Havoc",
      role: "Main / quick-swap DPS",
      difficulty: "Moderate",
      description: "A free Havoc carry with a powerful Liberation, Dark Surge window, and flexible main-DPS or quick-swap routes.",
      weapon: "Red Spring",
      weapons: [
        ["Red Spring", "Top Basic Attack-focused option"],
        ["Blazing Brilliance", "Excellent Skill damage and CRIT DMG option"],
        ["Emerald of Genesis", "Reliable standard 5-star option"],
        ["Somnoire Anchor", "Strong free option for longer field time"]
      ],
      sonata: "Havoc Eclipse",
      sonataSlug: "havoc-eclipse",
      alternateSonata: "Havoc Eclipse",
      mainEcho: "Dreamless",
      mainEchoSlug: "dreamless",
      alternateEcho: "Nightmare: Crownless",
      alternateEchoSlug: "nightmare-crownless",
      echoNote: "Havoc Eclipse is the stable five-piece set. Use Dreamless as a swap-cancelled burst immediately after the Liberation window.",
      mainStats: ["CRIT Rate / CRIT DMG", "Havoc DMG", "Havoc DMG > ATK%", "ATK%"],
      substats: ["Energy Regen until Liberation is consistent (around 140%)", "CRIT Rate = CRIT DMG", "ATK%", "Basic Attack DMG", "Resonance Liberation DMG"],
      skills: ["Forte Circuit", "Resonance Liberation", "Resonance Skill", "Basic Attack", "Intro Skill"],
      overview: "Havoc Rover is the damage-oriented form. Enter Dark Surge with Devastation, spend the empowered window, then finish with Liberation and a swap-cancelled Dreamless. Forte takes priority for hypercarry play; Liberation can lead for short quick-swap rotations.",
      pattern: ["Use Resonance Skill during downtime to prepare the burst window.", "Enter Dark Surge with Heavy Attack: Devastation and spend the empowered sequence.", "Finish with Liberation, cast Dreamless, and swap-cancel the Echo."],
      teams: [
        { title: "Havoc hypercarry", label: "Best team", members: [["rover", "Main DPS"], ["roccia", "Havoc amplifier"], ["shorekeeper", "Healer support"]], note: "Roccia supplies Havoc and Basic Attack amplification plus grouping. Verina is the more widely available healer replacement." },
        { title: "Easy-to-build Havoc team", label: "Easy-to-build team", members: [["rover", "Main DPS"], ["danjin", "Havoc amplifier"], ["verina", "Healer support"]], note: "Danjin is a strong free amplifier. Sanhua is the simpler alternative if Danjin is not built." },
        { title: "Phrolova dual DPS", label: "Quick-swap", members: [["phrolova", "Main DPS"], ["rover", "Burst DPS"], ["cantarella", "Havoc support"]], note: "Havoc Rover fills field time and brings front-loaded burst while Phrolova's actions cycle." }
      ],
      shells: [["rover", "roccia", "shorekeeper"], ["rover", "roccia", "verina"], ["rover", "danjin", "shorekeeper"], ["rover", "danjin", "verina"], ["phrolova", "rover", "cantarella"]],
      teammates: [["roccia", "Roccia"], ["danjin", "Danjin"], ["sanhua", "Sanhua"], ["cantarella", "Cantarella"], ["shorekeeper", "Shorekeeper"]],
      dataNote: "Hypercarry skill order is shown; quick-swap players can prioritise Liberation before Forte."
    },
    Aero: {
      element: "Aero",
      role: "Erosion support / healer",
      difficulty: "Advanced",
      description: "Aero Erosion support with team healing and a free signature Sword, built mainly for Cartethyia and Ciaccona.",
      weapon: "Bloodpact's Pledge",
      weapons: [
        ["Bloodpact's Pledge", "Required support choice; amplifies team Aero DMG"],
        ["Emerald of Genesis", "Personal-damage alternative, but loses the team amplification"]
      ],
      sonata: "Rejuvenating Glow",
      sonataSlug: "rejuvenating-glow",
      alternateSonata: "Windward Pilgrimage",
      mainEcho: "Bell-Borne Geochelone",
      mainEchoSlug: "bell-borne-geochelone",
      alternateEcho: "Reminiscence: Fleurdelys",
      alternateEchoSlug: "reminiscence-fleurdelys",
      echoNote: "Rejuvenating Glow with Bell-Borne is the practical support build. Windward Pilgrimage with Fleurdelys is a small high-investment damage optimisation only for Cartethyia + Ciaccona.",
      mainStats: ["CRIT Rate / CRIT DMG", "Aero DMG", "Aero DMG > ATK%", "ATK%"],
      substats: ["CRIT Rate = CRIT DMG", "ATK%", "Resonance Skill DMG", "Flat ATK", "Energy Regen only if Bloodpact does not cover the rotation"],
      skills: ["Forte Circuit", "Resonance Liberation", "Resonance Skill", "Intro Skill", "Basic Attack"],
      overview: "Aero Rover is a real healing support, not a generic DPS substitute. Their Forte route builds Concerto, their Liberation supplies a team heal, and Bloodpact's Pledge amplifies Aero DMG. The specialist value is highest beside Ciaccona in Aero Erosion teams.",
      pattern: ["Use mid-air Forte attacks to build Windstring and Concerto.", "Cast Liberation after the aerial sequence for the team heal and a fast landing.", "Use Unbound Flow, trigger Outro, and hand the field to the Aero carry."],
      teams: [
        { title: "Cartethyia Erosion", label: "Best team", members: [["cartethyia", "Main DPS"], ["ciaccona", "Erosion applier"], ["rover", "Healer support"]], note: "This is the form's defining team. Without Ciaccona, general healers can be stronger because Erosion stacks are harder to maintain." },
        { title: "Iuno Aero carry", label: "Strong alternative", members: [["iuno", "Main DPS"], ["ciaccona", "Aero amplifier"], ["rover", "Healer support"]], note: "Bloodpact's Pledge buffs Iuno while Rover's healing lets Ciaccona stay in the damage-support slot." },
        { title: "Jiyan Aero team", label: "Other strong team", members: [["jiyan", "Main DPS"], ["ciaccona", "Aero amplifier"], ["rover", "Healer support"]], note: "A functional mono-Aero route; Jiyan does not exploit Erosion directly, so this is not as specialised as the Cartethyia team." }
      ],
      shells: [["cartethyia", "ciaccona", "rover"], ["iuno", "ciaccona", "rover"], ["jiyan", "ciaccona", "rover"]],
      teammates: [["cartethyia", "Cartethyia"], ["ciaccona", "Ciaccona"], ["iuno", "Iuno"], ["jiyan", "Jiyan"]],
      dataNote: "Aero Rover is currently a specialist support; WaveKit does not label non-Erosion fillers as equivalent to the Cartethyia core."
    },
    Electro: {
      element: "Electro",
      role: "Effect sub DPS",
      difficulty: "Advanced",
      description: "A newly released effect-team sub DPS with Electro Flare access and a conditional damage-amplifying Outro.",
      weapon: "Emerald of Genesis",
      weapons: [
        ["Emerald of Genesis", "Best verified all-round option"],
        ["Blazing Brilliance", "High personal-damage alternative"],
        ["Endless Collapse", "Energy-focused easy-to-build option"],
        ["Commando of Conviction", "General 4-star damage option"]
      ],
      sonata: "Void Thunder",
      sonataSlug: "void-thunder",
      alternateSonata: "Moonlit Clouds",
      mainEcho: "Nightmare: Tempest Mephis",
      mainEchoSlug: "nightmare-tempest-mephis",
      alternateEcho: "Impermanence Heron",
      alternateEchoSlug: "impermanence-heron",
      echoNote: "Void Thunder is the current personal-damage setup; Moonlit Clouds is the support hand-off option. Electro Rover is new, so avoid over-investing in a perfect set before later-patch testing settles.",
      mainStats: ["CRIT Rate / CRIT DMG", "Electro DMG", "Electro DMG > ATK%", "ATK%"],
      substats: ["Energy Regen until comfortable (roughly 125-130%)", "CRIT Rate = CRIT DMG", "ATK%", "Resonance Skill DMG", "Flat ATK"],
      skills: ["Resonance Liberation", "Forte Circuit", "Resonance Skill", "Basic Attack", "Intro Skill"],
      overview: "Electro Rover can play as an effect-team sub DPS or a more field-heavy damage dealer. Their Outro rewards the incoming Resonator for inflicting a Negative Status, while the R2 Liberation applies Electro Flare. Because this form is newly released, WaveKit keeps speculative teams visibly labelled.",
      pattern: ["Use Intro, Skill, and the Basic chain to reach Overshock.", "Cast Liberation to apply Electro Flare once R2 is available.", "Use the Echo and Outro before handing the conditional amplification to the effect DPS."],
      teams: [
        { title: "Xuanling effect team", label: "Current tested direction", members: [["yangyang-xuanling", "Main DPS"], ["rover", "Effect sub DPS"], ["chisa", "Support"]], note: "Electro Rover supplies Electro Flare and a conditional Outro for an effect-focused carry. This form is still being tested across the current patch." },
        { title: "Electro Rover carry", label: "Developing team", members: [["rover", "Main DPS"], ["lynae", "Amplifier"], ["mornye", "Healer support"]], note: "A field-heavy personal-damage route. Treat it as a developing build rather than an established best-in-slot team." },
        { title: "Easy-to-build Electro", label: "Budget direction", members: [["rover", "Main DPS"], ["sanhua", "Quick helper"], ["buling", "Support"]], note: "A practical low-cost route while dedicated partners and later-patch Echo options are still settling." }
      ],
      shells: [["yangyang-xuanling", "rover", "chisa"], ["rover", "lynae", "mornye"], ["rover", "sanhua", "buling"]],
      teammates: [["yangyang-xuanling", "Yangyang: Xuanling"], ["chisa", "Chisa"], ["lynae", "Lynae"], ["mornye", "Mornye"], ["buling", "Buling"]],
      dataNote: "Electro Rover released recently. Build fundamentals are verified; team rankings remain patch-sensitive and are labelled cautiously."
    }
  };

  const names = {
    rover: "Rover", zani: "Zani", phoebe: "Phoebe", shorekeeper: "Shorekeeper", verina: "Verina",
    changli: "Changli", roccia: "Roccia", danjin: "Danjin", phrolova: "Phrolova", cantarella: "Cantarella",
    cartethyia: "Cartethyia", ciaccona: "Ciaccona", iuno: "Iuno", jiyan: "Jiyan",
    "yangyang-xuanling": "Yangyang: Xuanling", chisa: "Chisa", lynae: "Lynae", mornye: "Mornye",
    sanhua: "Sanhua", buling: "Buling"
  };

  const q = (selectorName) => article.querySelector(`[data-rover-${selectorName}]`);
  const setText = (selectorName, value) => { const node = q(selectorName); if (node) node.textContent = value; };
  const loadProfile = () => {
    try {
      const stored = JSON.parse(localStorage.getItem("wavekit-profiles-v1") || "{}");
      const profiles = Array.isArray(stored.profiles) ? stored.profiles : [];
      return profiles.find((profile) => profile.id === stored.activeProfileId) || profiles[0] || null;
    } catch { return null; }
  };
  const readAppearance = () => String(loadProfile()?.roverAppearance || "Female").toLowerCase() === "male" ? "Male" : "Female";
  const readInitialForm = () => {
    const requested = new URLSearchParams(location.search).get("form");
    const normalized = Object.keys(forms).find((form) => form.toLowerCase() === String(requested || "").toLowerCase());
    const saved = loadProfile()?.roverForm;
    return normalized || (forms[saved] ? saved : "Spectro");
  };

  const renderWeapons = (form) => {
    const list = q("weapon-list");
    if (!list) return;
    list.innerHTML = form.weapons.map(([name, note], index) => `<div class="seo-weapon-row"><img src="${weaponImages[name] || "../../assets/weapons/unknown.svg"}" onerror="this.onerror=null;this.src='../../assets/weapons/unknown.svg'" alt="" loading="lazy" decoding="async"><span><strong>${name}</strong><small>${note}</small></span><b>${index === 0 ? "BiS" : `Alt ${index}`}</b></div>`).join("");
  };

  const renderEchoes = (form) => {
    const showcase = q("echo-showcase");
    if (showcase) showcase.innerHTML = `<div class="seo-main-echo"><img src="${echoImage(form.mainEchoSlug)}" alt="${form.mainEcho} Echo icon" loading="lazy" decoding="async"><span><small>Recommended main Echo</small><strong>${form.mainEcho}</strong><em>${form.echoNote}</em></span></div><div class="seo-main-echo is-alternate"><img src="${echoImage(form.alternateEchoSlug)}" alt="${form.alternateEcho} Echo icon" loading="lazy" decoding="async"><span><small>Alternate main Echo</small><strong>${form.alternateEcho}</strong><em>Use with ${form.alternateSonata} when that route fits the team.</em></span></div><div class="seo-sonata-focus"><img src="${sonataImage(form.sonataSlug)}" alt="${form.sonata} Sonata icon" loading="lazy" decoding="async"><span><small>Recommended Sonata</small><strong>${form.sonata}</strong><em>Alternate: ${form.alternateSonata}</em></span></div>`;
    const lanes = q("stat-lanes");
    if (lanes) lanes.innerHTML = `<div class="seo-stat-lane"><header><span>4</span><div><strong>4-cost main stat</strong><small>Balance the two CRIT stats.</small></div></header><ol><li><b>1</b><span>${form.mainStats[0]}</span></li></ol></div><div class="seo-stat-lane"><header><span>3</span><div><strong>3-cost main stats</strong><small>The second slot may use the listed alternative.</small></div></header><ol><li><b>1</b><span>${form.mainStats[1]}</span></li><li><b>2</b><span>${form.mainStats[2]}</span></li></ol></div><div class="seo-stat-lane"><header><span>1</span><div><strong>1-cost main stats</strong><small>Use on both common Echoes.</small></div></header><ol><li><b>1</b><span>${form.mainStats[3]}</span></li></ol></div>`;
    const help = q("echo-help");
    if (help) help.innerHTML = `<strong>Why this setup?</strong> ${form.echoNote}`;
  };

  const renderTeams = (form) => {
    const panels = q("team-panels");
    if (!panels) return;
    panels.innerHTML = form.teams.map((team) => `<div class="seo-team-panel"><header><strong>${team.title}</strong><span>${team.label}</span></header><div class="seo-team-strip">${team.members.map(([slug, role]) => `<span><img src="${characterImage(slug)}" alt="" loading="lazy" decoding="async"><small>${role}</small><strong>${names[slug] || slug}</strong><em>${slug === "rover" ? `${form.element} form` : "Team member"}</em></span>`).join("")}</div><p class="seo-team-note">${team.note}</p></div>`).join("");
  };

  const renderChains = (formName) => {
    article.querySelectorAll(".seo-rover-chain-form").forEach((heading) => {
      const active = heading.textContent.trim().endsWith(formName);
      heading.hidden = !active;
      if (heading.nextElementSibling?.classList.contains("seo-chain-list")) heading.nextElementSibling.hidden = !active;
    });
    const count = article.querySelector(".seo-depth-count");
    if (count) count.innerHTML = `6<small>${formName} chain levels</small>`;
  };

  const renderMechanics = (formName, form) => {
    const mechanicMap = {
      Spectro: [["Spectro Frazzle", "Applies the status with enhanced Skill and Liberation"], ["R4 healing", "Can trigger Rejuvenating Glow"], ["R6 RES shred", "Reduces enemy Spectro RES"]],
      Havoc: [["Dark Surge", "Empowered Forte damage window"], ["Flexible DPS", "Hypercarry or short quick-swap route"], ["Burst finish", "Liberation into a swap-cancelled Dreamless"]],
      Aero: [["Aero Erosion", "Raises the specialist Erosion ceiling"], ["Real sustain", "Liberation and R2 provide healing"], ["Aero amplify", "Bloodpact's Pledge buffs the team"]],
      Electro: [["Electro Flare", "R2 Liberation applies five stacks"], ["Effect Outro", "Rewards the incoming Negative Status applier"], ["Patch-sensitive", "Dedicated partners and Echoes are still settling"]]
    };
    const tags = q("kit-tags");
    if (tags) tags.innerHTML = mechanicMap[formName].map(([name, detail]) => `<span><strong>${name}</strong><small>${detail}</small></span>`).join("");
    const modes = q("mode-grid");
    if (modes) modes.innerHTML = `<article class="seo-mode-item"><h4>${formName} Rover</h4><p>${form.overview}</p></article><article class="seo-mode-item"><h4>Guide scope</h4><p>Only ${formName} Rover's build, teams, and six Resonance Chains are shown while this form is selected.</p></article>`;
  };

  const renderAccountGuideData = (form) => {
    const node = document.getElementById("wavekit-character-guide-data");
    if (!node) return;
    try {
      const data = JSON.parse(node.textContent || "{}");
      data.roverForm = form.element;
      data.weaponOptions = form.weapons.map(([name]) => name);
      data.shells = form.shells;
      node.textContent = JSON.stringify(data);
    } catch { /* Keep the static fallback if embedded data is malformed. */ }
  };

  const renderProfilePanel = (form) => {
    const panel = document.querySelector("[data-guide-account]");
    const profile = loadProfile();
    if (!panel || !profile || panel.querySelector("[data-account-content]")?.hidden) return;
    const weapons = Array.isArray(profile.weapons) ? profile.weapons : [];
    const bestOwned = form.weapons.map(([name]) => name).find((name) => weapons.includes(name));
    const weaponNode = panel.querySelector("[data-account-weapon]");
    if (weaponNode) weaponNode.textContent = bestOwned || "No listed weapon selected";
    const status = panel.querySelector("[data-account-status]");
    if (status) status.textContent = `${form.element} guide active`;
  };

  const updateArtwork = (formName) => {
    const appearance = readAppearance();
    const imagePath = appearance === "Male" ? "../../assets/wallpapers/rover-male.png" : "../../assets/wallpapers/rover.jpg";
    const image = q("art");
    if (image) {
      image.src = imagePath;
      image.alt = `${appearance} ${formName} Rover Wuthering Waves artwork`;
    }
    article.style.setProperty("--guide-art", `url('${imagePath}')`);
    setText("appearance-note", `${appearance} artwork from your active WaveKit profile`);
  };

  let activeForm = readInitialForm();
  const render = (formName, updateUrl = false) => {
    const form = forms[formName] || forms.Spectro;
    activeForm = formName;
    article.classList.remove("element-spectro", "element-havoc", "element-aero", "element-electro");
    article.classList.add(`element-${form.element.toLowerCase()}`);
    selector.querySelectorAll("button[data-rover-form]").forEach((button) => {
      const active = button.dataset.roverForm === formName;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    updateArtwork(formName);
    setText("caption-element", form.element);
    setText("caption-role", form.role);
    setText("description", form.description);
    setText("heading", `Rover (${formName}) build, teams, weapons, and Echoes`);
    setText("weapon", form.weapon);
    setText("sonata", `${form.sonata}${form.alternateSonata !== form.sonata ? ` / ${form.alternateSonata}` : ""}`);
    setText("role", form.role);
    setText("overview", form.overview);
    setText("data-note", form.dataNote);
    const tags = q("tags");
    if (tags) tags.innerHTML = `<span>${form.element}</span><span>Sword</span><span>${form.role}</span><span>5★ Rover</span><span>Form-specific guide</span>`;
    renderWeapons(form);
    renderEchoes(form);
    article.querySelectorAll("[data-rover-substats]").forEach((substats) => {
      substats.innerHTML = form.substats.map((stat, index) => `<li><strong>Priority ${index + 1}:</strong> ${stat}</li>`).join("");
    });
    const skills = q("skills");
    if (skills) skills.innerHTML = form.skills.map((skill, index) => `<div class="seo-talent-step"><span>${index + 1}</span><strong>${skill}</strong></div>`).join("");
    renderTeams(form);
    renderMechanics(formName, form);
    const quick = q("quick-build");
    if (quick) quick.innerHTML = `<div><dt>Role</dt><dd>${form.role}</dd></div><div><dt>Best weapon</dt><dd>${form.weapon}</dd></div><div><dt>Alternate weapons</dt><dd>${form.weapons.slice(1).map(([name]) => name).join(" / ")}</dd></div><div><dt>Sonata</dt><dd>${form.sonata} / ${form.alternateSonata}</dd></div><div><dt>Echo cost</dt><dd>4-3-3-1-1</dd></div><div><dt>Main Echo</dt><dd>${form.mainEcho} / ${form.alternateEcho}</dd></div><div><dt>Main stats</dt><dd>${form.mainStats.join(" / ")}</dd></div>`;
    const mode = q("form-summary");
    if (mode) mode.innerHTML = `<div><dt>Selected form</dt><dd>${form.element} Rover</dd></div><div><dt>Combat role</dt><dd>${form.role}</dd></div><div><dt>What changes</dt><dd>Build, teams, skills, play notes, and the six Resonance Chains below.</dd></div>`;
    const pattern = q("pattern");
    if (pattern) pattern.innerHTML = form.pattern.map((step) => `<li>${step}</li>`).join("");
    const teammates = q("teammates");
    if (teammates) teammates.innerHTML = form.teammates.map(([slug, label]) => `<a class="seo-teammate-chip" href="../${slug}/"><img src="${characterImage(slug)}" alt="" loading="lazy" decoding="async"><span>${label}</span></a>`).join("");
    const buildPriority = q("build-priority");
    if (buildPriority) buildPriority.innerHTML = `<div><dt>Difficulty</dt><dd>${form.difficulty}</dd></div><div><dt>Primary job</dt><dd>${form.role}</dd></div><div><dt>Data note</dt><dd>${form.dataNote}</dd></div>`;
    renderChains(formName);
    const faq = q("faq");
    if (faq) faq.innerHTML = `<details><summary>What is the best ${formName} Rover build?</summary><p>Use ${form.weapon} with ${form.sonata} and ${form.mainEcho}. ${form.echoNote}</p></details><details><summary>What stats should ${formName} Rover use?</summary><p>${form.mainStats.join(" / ")}. Substats begin with ${form.substats.slice(0, 3).join(", ")}.</p></details><details><summary>What teams work with ${formName} Rover?</summary><p>${form.teams.map((team) => team.members.map(([slug]) => names[slug] || slug).join(" / ")).join("; ")}.</p></details><details><summary>Does changing this guide alter my profile?</summary><p>No. It changes only the form being viewed on this page. Owned forms and their separate Resonance Chain levels stay unchanged in the team helper.</p></details>`;
    renderAccountGuideData(form);
    renderProfilePanel(form);
    window.renderCharacterGuideAccount?.();
    if (updateUrl) {
      const url = new URL(location.href);
      url.searchParams.set("form", formName.toLowerCase());
      history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
    }
    document.title = `Rover (${formName}) Build, Teams, Weapons, and Echoes | WaveKit`;
    window.dispatchEvent(new CustomEvent("wavekit:rover-guide-changed", { detail: { form: formName } }));
  };

  selector.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-rover-form]");
    if (!button) return;
    render(button.dataset.roverForm, true);
  });
  window.addEventListener("wavekit:profile-changed", () => updateArtwork(activeForm));
  window.addEventListener("storage", (event) => {
    if (event.key === "wavekit-profiles-v1") updateArtwork(activeForm);
  });
  render(activeForm, false);
})();
