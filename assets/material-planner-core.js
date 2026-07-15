(() => {
  const data = window.WAVEKIT_MATERIAL_DATA;
  if (!data) return;

  const addCosts = (target, costs = []) => {
    for (const [id, quantity] of costs) {
      const key = String(id);
      target[key] = (target[key] || 0) + Number(quantity || 0);
    }
    return target;
  };

  const subtractCosts = (target, costs = {}) => {
    for (const [id, quantity] of Object.entries(costs)) {
      target[id] = Math.max(0, (target[id] || 0) - Number(quantity || 0));
      if (!target[id]) delete target[id];
    }
    return target;
  };

  const expDifference = (table, current, target) => {
    const from = Number(table?.[current] || 0);
    const to = Number(table?.[target] || 0);
    return Math.max(0, to - from);
  };

  const premiumExp = (costs, itemId, exp) => {
    if (exp > 0) addCosts(costs, [[itemId, Math.ceil(exp / 20000)]]);
  };

  const characterPlan = (record, plan) => {
    const costs = {};
    const currentLevel = Number(plan.currentLevel || 1);
    const targetLevel = Number(plan.targetLevel || 90);
    for (const stage of record.ascensions || []) {
      const needsStage = currentLevel < stage.unlock || currentLevel === stage.unlock && !plan.currentAscended;
      if (needsStage && targetLevel > stage.unlock) addCosts(costs, stage.costs);
    }
    const xp = expDifference(data.exp.character, currentLevel, targetLevel);
    premiumExp(costs, 43010004, xp);
    addCosts(costs, [[2, Math.ceil(xp * 0.35)]]);
    for (const [key, skill] of Object.entries(record.skills || {})) {
      const current = Number(plan.skills?.[key]?.current || 1);
      const target = Number(plan.skills?.[key]?.target || 1);
      for (const level of skill.levels || []) {
        if (level.level > current && level.level <= target) addCosts(costs, level.costs);
      }
    }
    if (plan.includePassives) {
      for (const passive of record.passives || []) addCosts(costs, passive);
    }
    return { costs, xp };
  };

  const weaponPlan = (record, plan) => {
    const costs = {};
    const currentLevel = Number(plan.currentLevel || 1);
    const targetLevel = Number(plan.targetLevel || 90);
    for (const stage of record.ascensions || []) {
      const needsStage = currentLevel < stage.unlock || currentLevel === stage.unlock && !plan.currentAscended;
      if (needsStage && targetLevel > stage.unlock) addCosts(costs, stage.costs);
    }
    const table = data.exp.weapon?.[record.rarity] || data.exp.weapon?.[3];
    const xp = expDifference(table, currentLevel, targetLevel);
    premiumExp(costs, 43020004, xp);
    addCosts(costs, [[2, Math.ceil(xp * 0.4)]]);
    return { costs, xp };
  };

  const materialCategory = (item) => {
    const type = String(item?.type || "").toLowerCase();
    const name = String(item?.name || "").toLowerCase();
    const id = Number(item?.id || 0);
    if (item?.id === 2) return "Currency";
    if (name.includes("potion") || name.includes("energy core")) return "EXP";
    if (type.includes("skill upgrade")) return "Weekly boss";
    if (type.includes("resonator ascension")) return "Boss drop";
    if (type === "ascension material" || id >= 42600000 && id < 42700000) return "Local specialty";
    if (id >= 43020000 && id < 43100000) return "Forgery and skill";
    if (id >= 41100000 && id < 41200000) return "Enemy drops";
    return "Materials";
  };

  const groupedCosts = (costs) => {
    const groups = new Map();
    for (const [id, quantity] of Object.entries(costs || {})) {
      if (!quantity) continue;
      const item = data.items[id] || { id: Number(id), name: `Item ${id}`, icon: "", rarity: 0, type: "Material" };
      const category = materialCategory(item);
      if (!groups.has(category)) groups.set(category, []);
      groups.get(category).push({ ...item, quantity });
    }
    return groups;
  };

  const quickMaterials = (record, includeSkills = true) => {
    const ids = new Set();
    for (const stage of record.ascensions || []) for (const [id] of stage.costs || []) if (id !== 2) ids.add(String(id));
    if (includeSkills) {
      for (const skill of Object.values(record.skills || {})) {
        for (const level of skill.levels || []) for (const [id] of level.costs || []) if (id !== 2) ids.add(String(id));
      }
    }
    return [...ids].map((id) => data.items[id]).filter(Boolean).sort((a, b) => {
      const category = materialCategory(a).localeCompare(materialCategory(b));
      return category || a.rarity - b.rarity || a.name.localeCompare(b.name);
    });
  };

  const formatNumber = (value) => new Intl.NumberFormat("en-US").format(Number(value || 0));
  const escape = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[character]));

  window.WaveKitMaterials = {
    data,
    addCosts,
    subtractCosts,
    characterPlan,
    weaponPlan,
    groupedCosts,
    quickMaterials,
    materialCategory,
    formatNumber,
    escape
  };
})();
