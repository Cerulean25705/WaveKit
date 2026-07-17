(() => {
  const directory = document.querySelector(".seo-character-index");
  if (!directory) return;

  const fourStarResonators = new Set([
    "aalto", "baizhi", "buling", "chixia", "danjin", "lumi", "mortefi", "sanhua", "taoqi", "yangyang", "youhu", "yuanwu"
  ]);
  const profileStorageKey = "wavekit-profiles-v1";

  const activeOwned = () => {
    try {
      const store = JSON.parse(localStorage.getItem(profileStorageKey) || "{}");
      const profiles = Array.isArray(store.profiles) ? store.profiles : [];
      const profile = profiles.find((entry) => entry.id === store.activeProfileId) || profiles[0];
      return new Set(Object.keys(profile?.owned || {}));
    } catch {
      return new Set();
    }
  };

  const owned = activeOwned();
  const cards = [...directory.querySelectorAll("a")].map((card) => {
    const url = new URL(card.href);
    const slug = url.pathname.split("/").filter(Boolean).pop() || "";
    const name = card.querySelector("strong")?.textContent.trim() || slug;
    const metadata = (card.querySelector("small")?.textContent || "").split("·").map((part) => part.trim());
    const element = metadata[0] || "Unknown";
    const role = metadata.slice(1).join(" · ") || "Flexible";
    const rarity = fourStarResonators.has(slug) ? 4 : 5;
    const isOwned = owned.has(slug);
    const isUpcoming = slug === "suisui";

    card.classList.add("character-directory-card");
    card.dataset.characterName = name;
    card.dataset.element = element;
    card.dataset.role = role;
    card.dataset.rarity = String(rarity);
    card.dataset.owned = String(isOwned);
    card.classList.toggle("is-owned", isOwned);
    card.classList.toggle("is-upcoming", isUpcoming);
    card.querySelector("img")?.setAttribute("alt", `${name} portrait`);

    const state = document.createElement("b");
    state.className = "character-card-state";
    state.textContent = isUpcoming ? "Upcoming" : isOwned ? "Owned" : "Open guide";
    card.append(state);

    return { card, name, element, role, rarity, isOwned };
  });

  const search = document.querySelector("[data-character-search]");
  const elementFilter = document.querySelector("[data-character-element]");
  const roleFilter = document.querySelector("[data-character-role]");
  const rarityFilter = document.querySelector("[data-character-rarity]");
  const ownedFilter = document.querySelector("[data-character-owned]");
  const count = document.querySelector("[data-character-count]");
  const empty = document.querySelector("[data-character-empty]");

  const render = () => {
    const query = search.value.trim().toLowerCase();
    const wantedElement = elementFilter.value;
    const wantedRole = roleFilter.value;
    const wantedRarity = rarityFilter.value;
    let visible = 0;

    cards.forEach((entry) => {
      const elements = entry.element.split("/").map((part) => part.trim());
      const haystack = `${entry.name} ${entry.element} ${entry.role}`.toLowerCase();
      const show = (!query || haystack.includes(query))
        && (wantedElement === "All" || elements.includes(wantedElement))
        && (wantedRole === "All" || entry.role.includes(wantedRole))
        && (wantedRarity === "All" || String(entry.rarity) === wantedRarity)
        && (!ownedFilter.checked || entry.isOwned);
      entry.card.hidden = !show;
      if (show) visible += 1;
    });

    count.textContent = String(visible);
    empty.hidden = visible > 0;
  };

  [search, elementFilter, roleFilter, rarityFilter, ownedFilter].forEach((control) => {
    control.addEventListener(control.type === "search" ? "input" : "change", render);
  });

  render();
})();
