(() => {
  const profileStorageKey = "wavekit-profiles-v1";
  const dataNode = document.getElementById("wavekit-character-guide-data");
  const panel = document.querySelector("[data-guide-account]");
  const content = document.querySelector("[data-account-content]");
  if (!dataNode || !panel || !content) return;

  let guide;
  try {
    guide = JSON.parse(dataNode.textContent || "{}");
  } catch {
    return;
  }

  const clamp = (value, min, max) => {
    const number = Number(value);
    if (!Number.isFinite(number) || number <= 0) return "";
    return Math.max(min, Math.min(max, Math.round(number)));
  };

  const levelOptions = (current, values) => {
    const saved = clamp(current, Math.min(...values), Math.max(...values));
    const options = saved && !values.includes(saved) ? [...values, saved].sort((a, b) => a - b) : values;
    return [
      '<option value="">Not set</option>',
      ...options.map((value) => `<option value="${value}" ${saved === value ? "selected" : ""}>${value}${saved === value && !values.includes(value) ? " (saved)" : ""}</option>`)
    ].join("");
  };

  const loadStore = () => {
    try {
      const stored = JSON.parse(localStorage.getItem(profileStorageKey) || "{}");
      return {
        profiles: Array.isArray(stored.profiles) ? stored.profiles : [],
        activeProfileId: stored.activeProfileId || ""
      };
    } catch {
      return { profiles: [], activeProfileId: "" };
    }
  };

  const store = loadStore();
  const profile = store.profiles.find((item) => item.id && item.id === store.activeProfileId)
    || store.profiles.find((item) => Object.keys(item?.owned || {}).length || (item?.weapons || []).length);
  if (!profile) return;

  const progress = profile.progress?.[guide.slug] || {};
  const owned = Boolean(profile.owned?.[guide.slug]);
  const bestWeapon = (guide.weaponOptions || []).find((weapon) => (profile.weapons || []).includes(weapon));
  const equipmentLevels = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90];
  const skillLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const planner = document.createElement("section");
  planner.className = "seo-progress-panel";
  planner.innerHTML = `
    <header>
      <div>
        <span>Build planner</span>
        <h2>Your ${guide.name} progress</h2>
        <p>Optional tracking for levels and build readiness. Exact material totals can be added once WaveKit's material database is ready.</p>
      </div>
      <strong data-progress-status>${owned ? "Saved profile" : "Reference only"}</strong>
    </header>
    <div class="seo-progress-grid">
      <label><span>Resonator level</span><select data-progress-field="characterLevel" aria-label="Resonator level">${levelOptions(progress.characterLevel, equipmentLevels)}</select></label>
      <label><span>Weapon level</span><select data-progress-field="weaponLevel" aria-label="Weapon level">${levelOptions(progress.weaponLevel, equipmentLevels)}</select></label>
      <label><span>Forte level</span><select data-progress-field="forteLevel" aria-label="Forte level">${levelOptions(progress.forteLevel, skillLevels)}</select></label>
      <label><span>Skill level</span><select data-progress-field="skillLevel" aria-label="Skill level">${levelOptions(progress.skillLevel, skillLevels)}</select></label>
      <label><span>Liberation level</span><select data-progress-field="liberationLevel" aria-label="Liberation level">${levelOptions(progress.liberationLevel, skillLevels)}</select></label>
      <label class="seo-progress-check"><input data-progress-field="echoReady" type="checkbox" ${progress.echoReady ? "checked" : ""}><span>Echo set feels usable</span></label>
    </div>
    <label class="seo-progress-notes">
      <span>Notes</span>
      <textarea data-progress-field="notes" rows="3" placeholder="Example: needs better 3-cost Echoes, weapon still level 70...">${progress.notes || ""}</textarea>
    </label>
    <div class="seo-progress-next">
      <strong>What to work on next</strong>
      <ul data-progress-next-list></ul>
      <p data-progress-weapon-note></p>
    </div>
  `;
  content.appendChild(planner);

  const fields = [...planner.querySelectorAll("[data-progress-field]")];
  const status = planner.querySelector("[data-progress-status]");
  const nextList = planner.querySelector("[data-progress-next-list]");
  const weaponNote = planner.querySelector("[data-progress-weapon-note]");

  const readProgress = () => {
    const next = {};
    fields.forEach((field) => {
      const key = field.dataset.progressField;
      if (field.type === "checkbox") {
        next[key] = field.checked;
      } else if (field.tagName === "TEXTAREA") {
        next[key] = field.value.trim().slice(0, 400);
      } else {
        const max = key.includes("Level") && key !== "characterLevel" && key !== "weaponLevel" ? 10 : 90;
        next[key] = clamp(field.value, 1, max);
      }
    });
    return next;
  };

  const renderNextSteps = () => {
    const current = readProgress();
    const steps = [];
    if (!owned) steps.push(`Mark ${guide.name} as owned in the team helper if you want account-aware recommendations.`);
    if (!current.characterLevel || current.characterLevel < 90) steps.push("Resonator levels and ascension materials are still a good first farm target.");
    if (!current.weaponLevel || current.weaponLevel < 90) steps.push("Weapon levels matter a lot for damage dealers and are usually worth finishing early.");
    if ((current.forteLevel || 0) < 8 || (current.skillLevel || 0) < 8 || (current.liberationLevel || 0) < 8) steps.push("Raise the priority skills listed in this guide before chasing perfect Echo substats.");
    if (!current.echoReady) steps.push("Get the correct Sonata and main Echo online, then improve substats slowly.");
    if (!steps.length) steps.push("This build looks comfortably progressed. Next upgrades are likely substats, refinements, or stronger teammates.");
    nextList.innerHTML = steps.map((step) => `<li>${step}</li>`).join("");
    weaponNote.textContent = bestWeapon
      ? `Your profile includes ${bestWeapon}, so this page can treat the listed weapon plan as ready.`
      : "No listed weapon from this guide is saved in your profile yet.";
  };

  const saveProgress = () => {
    const nextStore = loadStore();
    const index = nextStore.profiles.findIndex((item) => item.id === profile.id);
    if (index < 0) return;
    const nextProfile = {
      ...nextStore.profiles[index],
      progress: {
        ...(nextStore.profiles[index].progress || {}),
        [guide.slug]: readProgress()
      },
      updatedAt: new Date().toISOString()
    };
    nextStore.profiles[index] = nextProfile;
    localStorage.setItem(profileStorageKey, JSON.stringify(nextStore));
    if (status) status.textContent = "Saved locally";
    renderNextSteps();
  };

  let saveTimer = null;
  fields.forEach((field) => {
    field.addEventListener("input", () => {
      if (status) status.textContent = "Saving...";
      clearTimeout(saveTimer);
      saveTimer = setTimeout(saveProgress, 280);
    });
    field.addEventListener("change", saveProgress);
  });
  renderNextSteps();
})();
