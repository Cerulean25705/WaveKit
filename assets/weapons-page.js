(() => {
  const kit = window.WaveKitMaterials;
  if (!kit) return;
  const profileStorageKey = "wavekit-profiles-v1";
  const localProgressKey = "wavekit-weapon-progress-v1";
  const directory = document.querySelector("[data-weapon-directory]");
  if (!directory) return;

  const weapons = Object.values(kit.data.weapons).sort((a, b) => b.rarity - a.rarity || a.name.localeCompare(b.name));
  const get = (selector) => document.querySelector(selector);
  const levelValues = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90];
  const queryWeapon = new URLSearchParams(location.search).get("weapon") || "";

  const loadStore = () => {
    try {
      const store = JSON.parse(localStorage.getItem(profileStorageKey) || "{}");
      return { profiles: Array.isArray(store.profiles) ? store.profiles : [], activeProfileId: store.activeProfileId || "" };
    } catch {
      return { profiles: [], activeProfileId: "" };
    }
  };
  const activeProfile = (store) => store.profiles.find((profile) => profile.id === store.activeProfileId) || store.profiles[0] || null;
  const loadLocalProgress = () => {
    try { return JSON.parse(localStorage.getItem(localProgressKey) || "{}"); } catch { return {}; }
  };
  const profile = activeProfile(loadStore());
  const owned = new Set(profile?.weapons || []);
  const savedProgress = profile?.weaponProgress || loadLocalProgress();

  const optionHtml = (selected) => levelValues.map((value) =>
    `<option value="${value}" ${Number(selected) === value ? "selected" : ""}>Level ${value}</option>`
  ).join("");
  const itemHtml = (item) => `
    <div class="material-item rarity-${item.rarity || 0}">
      <img src="${kit.escape(item.icon)}" alt="" loading="lazy" decoding="async">
      <span><strong>${kit.escape(item.name)}</strong><small>${kit.escape(kit.materialCategory(item))}</small></span>
      <b>x${kit.formatNumber(item.quantity)}</b>
    </div>`;

  const saveProgress = (name, progress, status) => {
    const store = loadStore();
    const currentProfile = activeProfile(store);
    if (currentProfile) {
      const index = store.profiles.findIndex((entry) => entry.id === currentProfile.id);
      store.profiles[index] = {
        ...store.profiles[index],
        weaponProgress: { ...(store.profiles[index].weaponProgress || {}), [name]: progress },
        updatedAt: new Date().toISOString()
      };
      localStorage.setItem(profileStorageKey, JSON.stringify(store));
      window.dispatchEvent(new CustomEvent("wavekit:profile-changed", { detail: { source: "weapon-planner" } }));
      status.textContent = "Saved to profile";
    } else {
      const local = loadLocalProgress();
      local[name] = progress;
      localStorage.setItem(localProgressKey, JSON.stringify(local));
      status.textContent = "Saved on device";
    }
  };

  const renderPlan = (card, weapon) => {
    const currentLevel = Number(card.querySelector("[data-weapon-current]").value);
    const targetLevel = Number(card.querySelector("[data-weapon-target]").value);
    const currentAscended = card.querySelector("[data-weapon-ascended]").checked;
    const result = kit.weaponPlan(weapon, { currentLevel, targetLevel, currentAscended });
    const groups = kit.groupedCosts(result.costs);
    card.querySelector("[data-weapon-xp]").textContent = `${kit.formatNumber(result.xp)} Weapon EXP`;
    card.querySelector("[data-weapon-material-results]").innerHTML = groups.size
      ? [...groups].map(([category, items]) => `<section class="material-result-group"><h4>${kit.escape(category)}</h4><div>${items.map(itemHtml).join("")}</div></section>`).join("")
      : '<p class="material-empty">Those targets are already met.</p>';
  };

  const cardHtml = (weapon) => {
    const progress = savedProgress[weapon.name] || { currentLevel: 1, targetLevel: 90, currentAscended: false };
    const goodFor = weapon.goodFor || [];
    const image = window.weaponImageMap?.[weapon.name] || weapon.icon;
    return `
      <details class="weapon-card ${owned.has(weapon.name) ? "is-owned" : ""}" data-weapon-name="${kit.escape(weapon.name)}" data-rarity="${weapon.rarity}" id="weapon-${kit.escape(weapon.slug)}" style="--weapon-image: url('${kit.escape(image)}')">
        <summary>
          <div class="weapon-card-art rarity-${weapon.rarity}"><img src="${kit.escape(image)}" alt="" loading="lazy" decoding="async"></div>
          <div class="weapon-card-copy">
            <span>${weapon.rarity}-star ${kit.escape(weapon.type)}</span>
            <h2>${kit.escape(weapon.name)}</h2>
            <p>${goodFor.length ? `Good for ${goodFor.slice(0, 3).map((entry) => kit.escape(entry.name)).join(", ")}` : `Flexible ${kit.escape(weapon.type)} option - no specific guide assignment`}</p>
          </div>
          <div class="weapon-card-state"><strong>${owned.has(weapon.name) ? "Owned" : "View plan"}</strong><span aria-hidden="true">+</span></div>
        </summary>
        <div class="weapon-card-details">
          <div class="weapon-detail-heading">
            <span>Investment planner</span>
            <p>Set where the weapon is now and WaveKit will calculate what remains.</p>
          </div>
          <div class="weapon-user-links">
            <strong>Good for</strong>
            <div>${goodFor.length ? goodFor.map((entry) => `<a href="../characters/${entry.slug}/">${kit.escape(entry.name)}</a>`).join("") : `<span>Usable by ${kit.escape(weapon.type)} Resonators; check the passive before investing.</span>`}</div>
          </div>
          <div class="weapon-plan-controls">
            <label><span>Weapon now</span><select data-weapon-current>${optionHtml(progress.currentLevel)}</select></label>
            <label><span>Target level</span><select data-weapon-target>${optionHtml(progress.targetLevel)}</select></label>
            <strong data-weapon-save-status>${profile ? "Profile connected" : "Local planner"}</strong>
          </div>
          <label class="material-ascended-toggle">
            <input type="checkbox" data-weapon-ascended ${progress.currentAscended ? "checked" : ""}>
            <span><strong>Current level cap is already ascended</strong><small>Use this for states such as 60/70 rather than 60/60.</small></span>
          </label>
          <div class="weapon-plan-results">
            <header><strong>Remaining resources</strong><span data-weapon-xp></span></header>
            <div data-weapon-material-results></div>
          </div>
          <p class="material-data-note">Premium Energy Cores are rounded up. Lower-tier cores and fodder weapons can substitute.</p>
        </div>
      </details>`;
  };

  const render = () => {
    const search = get("[data-weapon-search]").value.trim().toLowerCase();
    const type = get("[data-weapon-type]").value;
    const rarity = get("[data-weapon-rarity]").value;
    const ownedOnly = get("[data-weapon-owned]").checked;
    const filtered = weapons.filter((weapon) => {
      const haystack = [weapon.name, weapon.type, ...(weapon.goodFor || []).map((entry) => entry.name)].join(" ").toLowerCase();
      return (!search || haystack.includes(search))
        && (type === "All" || weapon.type === type)
        && (rarity === "All" || String(weapon.rarity) === rarity)
        && (!ownedOnly || owned.has(weapon.name));
    });
    directory.innerHTML = filtered.map(cardHtml).join("");
    get("[data-weapon-count]").textContent = filtered.length;
    get("[data-weapon-empty]").hidden = filtered.length > 0;
  };

  document.querySelectorAll("[data-weapon-search], [data-weapon-type], [data-weapon-rarity], [data-weapon-owned]").forEach((control) => {
    control.addEventListener(control.type === "search" ? "input" : "change", render);
  });
  directory.addEventListener("toggle", (event) => {
    const card = event.target.closest(".weapon-card");
    if (!card?.open) return;
    const weapon = kit.data.weapons[card.dataset.weaponName];
    if (weapon) renderPlan(card, weapon);
  }, true);
  directory.addEventListener("change", (event) => {
    if (!event.target.matches("[data-weapon-current], [data-weapon-target], [data-weapon-ascended]")) return;
    const card = event.target.closest(".weapon-card");
    const current = card.querySelector("[data-weapon-current]");
    const target = card.querySelector("[data-weapon-target]");
    if (Number(target.value) < Number(current.value)) target.value = current.value;
    const progress = { currentLevel: Number(current.value), targetLevel: Number(target.value), currentAscended: card.querySelector("[data-weapon-ascended]").checked };
    saveProgress(card.dataset.weaponName, progress, card.querySelector("[data-weapon-save-status]"));
    renderPlan(card, kit.data.weapons[card.dataset.weaponName]);
  });

  get("[data-data-date]").textContent = kit.data.checkedAt;
  render();
  if (queryWeapon && kit.data.weapons[queryWeapon]) {
    requestAnimationFrame(() => {
      const card = document.getElementById(`weapon-${kit.data.weapons[queryWeapon].slug}`);
      if (!card) return;
      card.open = true;
      renderPlan(card, kit.data.weapons[queryWeapon]);
      card.scrollIntoView({ block: "center" });
    });
  }
})();
