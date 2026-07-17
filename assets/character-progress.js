(() => {
  const profileStorageKey = "wavekit-profiles-v1";
  const localPlanKey = "wavekit-material-plans-v1";
  const dataNode = document.getElementById("wavekit-character-guide-data");
  const accountPanel = document.querySelector("[data-guide-account]");
  const kit = window.WaveKitMaterials;
  if (!dataNode || !accountPanel || !kit) return;

  let guide;
  try {
    guide = JSON.parse(dataNode.textContent || "{}");
  } catch {
    return;
  }
  const record = kit.data.characters[guide.slug];
  if (!record) return;

  const levelValues = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90];
  const skillValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const skillLabels = {
    normal: "Normal Attack",
    skill: "Resonance Skill",
    forte: "Forte Circuit",
    liberation: "Liberation",
    intro: "Intro Skill"
  };

  const loadProfiles = () => {
    try {
      const stored = JSON.parse(localStorage.getItem(profileStorageKey) || "{}");
      return { profiles: Array.isArray(stored.profiles) ? stored.profiles : [], activeProfileId: stored.activeProfileId || "" };
    } catch {
      return { profiles: [], activeProfileId: "" };
    }
  };
  const activeProfile = (store) => store.profiles.find((profile) => profile.id === store.activeProfileId) || store.profiles[0] || null;
  const loadLocalPlans = () => {
    try {
      return JSON.parse(localStorage.getItem(localPlanKey) || "{}");
    } catch {
      return {};
    }
  };

  const profileStore = loadProfiles();
  const profile = activeProfile(profileStore);
  const oldProgress = profile?.progress?.[guide.slug] || {};
  const localPlan = loadLocalPlans()[guide.slug] || {};
  const savedPlan = oldProgress.materialPlan || localPlan;
  const legacySkills = {
    normal: 1,
    skill: oldProgress.skillLevel || 1,
    forte: oldProgress.forteLevel || 1,
    liberation: oldProgress.liberationLevel || 1,
    intro: 1
  };
  const plan = {
    currentLevel: Number(savedPlan.currentLevel || oldProgress.characterLevel || 1),
    targetLevel: Number(savedPlan.targetLevel || 90),
    currentAscended: Boolean(savedPlan.currentAscended),
    skills: Object.fromEntries(Object.keys(skillLabels).map((key) => [key, {
      current: Number(savedPlan.skills?.[key]?.current || legacySkills[key] || 1),
      target: Number(savedPlan.skills?.[key]?.target || 8)
    }])),
    includePassives: Boolean(savedPlan.includePassives)
  };

  const optionHtml = (values, selected) => values.map((value) =>
    `<option value="${value}" ${Number(selected) === value ? "selected" : ""}>Level ${value}</option>`
  ).join("");
  const itemHtml = (item, quantity = "") => `
    <div class="material-item rarity-${item.rarity || 0}">
      <img src="${kit.escape(item.icon)}" alt="" loading="lazy" decoding="async">
      <span><strong>${kit.escape(item.name)}</strong><small>${kit.escape(kit.materialCategory(item))}</small></span>
      ${quantity !== "" ? `<b>x${kit.formatNumber(quantity)}</b>` : ""}
    </div>`;

  const planner = document.createElement("section");
  planner.id = "materials";
  planner.className = "seo-material-planner";
  planner.innerHTML = `
    <header class="material-planner-heading">
      <div>
        <span>Materials and progress</span>
        <h2>Plan your ${kit.escape(guide.name)} upgrades</h2>
        <p>See the materials at a glance, or set your current levels for an exact remaining list.</p>
      </div>
      <div class="material-planner-actions">
        <strong data-material-save-status>${profile ? "Profile connected" : "Local planner"}</strong>
        <button class="button primary compact-button" type="button" data-build-plan-toggle>${profile?.buildPlan?.includes(guide.slug) ? "In Build Plan" : "Add to Build Plan"}</button>
      </div>
    </header>

    <details class="material-section" open>
      <summary><span>Quick materials</span><small>What to farm</small></summary>
      <div class="material-quick-grid">
        ${kit.quickMaterials(record).map((item) => itemHtml(item)).join("")}
      </div>
    </details>

    <details class="material-section material-personal" open>
      <summary><span>Personal planner</span><small>Current to target</small></summary>
      <div class="material-preset-row" aria-label="Planner presets">
        <button type="button" class="button ghost" data-material-preset="practical">Practical build</button>
        <button type="button" class="button ghost" data-material-preset="max">Max everything</button>
      </div>
      <div class="material-level-grid">
        <label><span>Resonator now</span><select data-material-level="currentLevel">${optionHtml(levelValues, plan.currentLevel)}</select></label>
        <label><span>Target level</span><select data-material-level="targetLevel">${optionHtml(levelValues, plan.targetLevel)}</select></label>
      </div>
      <label class="material-ascended-toggle">
        <input type="checkbox" data-material-ascended ${plan.currentAscended ? "checked" : ""}>
        <span><strong>Current level cap is already ascended</strong><small>Turn this on for states such as 60/70. Leave it off for 60/60.</small></span>
      </label>
      <div class="material-skill-grid">
        ${Object.entries(skillLabels).map(([key, label]) => `
          <div class="material-skill-row" data-material-skill="${key}">
            <span><strong>${label}</strong><small>${kit.escape(record.skills[key]?.name || "")}</small></span>
            <label>Now<select data-skill-current="${key}">${optionHtml(skillValues, plan.skills[key].current)}</select></label>
            <label>Target<select data-skill-target="${key}">${optionHtml(skillValues, plan.skills[key].target)}</select></label>
          </div>`).join("")}
      </div>
      <label class="material-passive-toggle">
        <input type="checkbox" data-material-passives ${plan.includePassives ? "checked" : ""}>
        <span><strong>Include all passive and stat nodes</strong><small>Adds every optional node and assumes none are unlocked yet. Leave off for core skill planning.</small></span>
      </label>
      <p class="seo-progress-sync-note" data-progress-sync-note>
        ${profile ? "Changes save to this WaveKit profile and sync while signed in." : "Changes save on this device. Log in to include them in cloud sync."}
      </p>
      <div class="material-results">
        <header><div><span>Remaining resources</span><h3 data-material-result-title></h3></div><strong data-material-xp></strong></header>
        <div data-material-results></div>
      </div>
      <div class="material-weapon-bridge">
        <div><strong>Planning a weapon too?</strong><p>Open WaveKit's weapon directory with ${kit.escape((guide.weaponOptions || [])[0] || "this character's weapon")} ready to view.</p></div>
        <a class="button primary" href="../../weapons/?weapon=${encodeURIComponent((guide.weaponOptions || [])[0] || "")}">Plan weapon</a>
      </div>
      <p class="material-data-note">Game records checked ${kit.escape(kit.data.checkedAt)}. EXP items are shown as the rounded-up number of premium potions; lower tiers can substitute.</p>
    </details>`;
  const faq = document.getElementById("faq");
  if (faq) {
    faq.insertAdjacentElement("beforebegin", planner);
  } else {
    document.querySelector(".seo-article")?.append(planner);
  }

  const saveStatus = planner.querySelector("[data-material-save-status]");
  const buildPlanButton = planner.querySelector("[data-build-plan-toggle]");
  const heroActions = document.querySelector(".character-guide-actions");
  const heroBuildPlanButton = document.createElement("button");
  heroBuildPlanButton.className = "button ghost";
  heroBuildPlanButton.type = "button";
  heroBuildPlanButton.dataset.guideBuildPlan = "";
  heroBuildPlanButton.textContent = profile?.buildPlan?.includes(guide.slug) ? "In Build Plan" : "Add to Build Plan";
  heroActions?.append(heroBuildPlanButton);

  const updateBuildPlanButtons = (isPlanned) => {
    const label = isPlanned ? "In Build Plan" : "Add to Build Plan";
    buildPlanButton.textContent = label;
    heroBuildPlanButton.textContent = label;
    heroBuildPlanButton.classList.toggle("is-planned", isPlanned);
  };

  const toggleBuildPlan = () => {
    const store = loadProfiles();
    let currentProfile = activeProfile(store);
    if (!currentProfile) {
      currentProfile = { id: `profile-${Date.now()}`, profileName: "WaveKit profile", updatedAt: new Date().toISOString(), owned: {}, weapons: [], progress: {}, buildPlan: [] };
      store.profiles.push(currentProfile);
      store.activeProfileId = currentProfile.id;
    }
    const index = store.profiles.findIndex((entry) => entry.id === currentProfile.id);
    const buildPlan = new Set(store.profiles[index].buildPlan || []);
    buildPlan.has(guide.slug) ? buildPlan.delete(guide.slug) : buildPlan.add(guide.slug);
    const isPlanned = buildPlan.has(guide.slug);
    store.profiles[index] = { ...store.profiles[index], buildPlan: [...buildPlan], updatedAt: new Date().toISOString() };
    localStorage.setItem(profileStorageKey, JSON.stringify(store));
    updateBuildPlanButtons(isPlanned);
    saveStatus.textContent = isPlanned ? "Added to Build Plan" : "Removed from Build Plan";
    window.dispatchEvent(new CustomEvent("wavekit:profile-changed", { detail: { source: "build-plan" } }));
  };

  heroBuildPlanButton.addEventListener("click", toggleBuildPlan);
  const readPlan = () => ({
    currentLevel: Number(planner.querySelector('[data-material-level="currentLevel"]').value),
    targetLevel: Number(planner.querySelector('[data-material-level="targetLevel"]').value),
    currentAscended: planner.querySelector("[data-material-ascended]").checked,
    skills: Object.fromEntries(Object.keys(skillLabels).map((key) => [key, {
      current: Number(planner.querySelector(`[data-skill-current="${key}"]`).value),
      target: Number(planner.querySelector(`[data-skill-target="${key}"]`).value)
    }])),
    includePassives: planner.querySelector("[data-material-passives]").checked
  });

  const renderResults = () => {
    const current = readPlan();
    const calculation = kit.characterPlan(record, current);
    const groups = kit.groupedCosts(calculation.costs);
    const resultNode = planner.querySelector("[data-material-results]");
    planner.querySelector("[data-material-result-title]").textContent = `Level ${current.currentLevel} to ${current.targetLevel}`;
    planner.querySelector("[data-material-xp]").textContent = `${kit.formatNumber(calculation.xp)} Resonator EXP`;
    if (!groups.size) {
      resultNode.innerHTML = '<p class="material-empty">Those targets are already met. Raise a target to see what remains.</p>';
      return;
    }
    resultNode.innerHTML = [...groups].map(([category, items]) => `
      <section class="material-result-group">
        <h4>${kit.escape(category)}</h4>
        <div>${items.map((item) => itemHtml(item, item.quantity)).join("")}</div>
      </section>`).join("");
  };

  const savePlan = () => {
    const nextPlan = readPlan();
    const store = loadProfiles();
    const currentProfile = activeProfile(store);
    if (currentProfile) {
      const index = store.profiles.findIndex((entry) => entry.id === currentProfile.id);
      const progress = store.profiles[index].progress || {};
      store.profiles[index] = {
        ...store.profiles[index],
        progress: {
          ...progress,
          [guide.slug]: { ...(progress[guide.slug] || {}), materialPlan: nextPlan }
        },
        updatedAt: new Date().toISOString()
      };
      localStorage.setItem(profileStorageKey, JSON.stringify(store));
      window.dispatchEvent(new CustomEvent("wavekit:profile-changed", { detail: { source: "material-planner" } }));
      saveStatus.textContent = "Saved to profile";
    } else {
      const plans = loadLocalPlans();
      plans[guide.slug] = nextPlan;
      localStorage.setItem(localPlanKey, JSON.stringify(plans));
      saveStatus.textContent = "Saved on device";
    }
    renderResults();
  };

  let saveTimer;
  planner.addEventListener("change", (event) => {
    if (!event.target.matches("select, input")) return;
    const currentLevel = planner.querySelector('[data-material-level="currentLevel"]');
    const targetLevel = planner.querySelector('[data-material-level="targetLevel"]');
    if (Number(targetLevel.value) < Number(currentLevel.value)) targetLevel.value = currentLevel.value;
    for (const key of Object.keys(skillLabels)) {
      const current = planner.querySelector(`[data-skill-current="${key}"]`);
      const target = planner.querySelector(`[data-skill-target="${key}"]`);
      if (Number(target.value) < Number(current.value)) target.value = current.value;
    }
    saveStatus.textContent = "Saving...";
    clearTimeout(saveTimer);
    saveTimer = setTimeout(savePlan, 180);
  });

  planner.addEventListener("click", (event) => {
    if (event.target.closest("[data-build-plan-toggle]")) {
      toggleBuildPlan();
      return;
    }
    const button = event.target.closest("[data-material-preset]");
    if (!button) return;
    planner.querySelector('[data-material-level="targetLevel"]').value = "90";
    const max = button.dataset.materialPreset === "max";
    for (const key of Object.keys(skillLabels)) planner.querySelector(`[data-skill-target="${key}"]`).value = max ? "10" : "8";
    planner.querySelector("[data-material-passives]").checked = max;
    savePlan();
  });

  renderResults();
})();
