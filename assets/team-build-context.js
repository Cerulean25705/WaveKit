// Reviewed team-specific build exceptions. The normal character guide remains
// the fallback when a team does not have a documented route-specific change.
window.WAVEKIT_TEAM_BUILD_CONTEXT = [
  {
    id: "aemeath-fusion-burst",
    members: ["aemeath", "denia", "chisa"],
    label: "Fusion Burst",
    note: "Keep Aemeath in Fusion Burst mode. Denia is the mode enabler; Chisa is the specialist third slot. Do not replace this route with the Tune Rupture Lynae/Mornye pair.",
    builds: {
      aemeath: { build: "Fusion Burst DPS Build", job: "Main field time; use Fusion Burst mode and let Denia establish the reaction first." },
      denia: { build: "Fusion Burst support build", sonata: "Chromatic Foam", echo: "Reminiscence: Denia", job: "Apply Fusion Burst, group enemies, then Outro into Aemeath." },
      chisa: { job: "Use Chisa as the specialist third slot for extra Bane utility and sustain." }
    }
  },
  {
    id: "aemeath-fusion-burst-lupa",
    members: ["aemeath", "denia", "lupa"],
    label: "Fusion Burst with Lupa",
    note: "This is the higher-damage Fusion Burst variant. Denia uses her Fusion Burst route while Lupa carries Moonlit Clouds for the hand-off to Aemeath.",
    builds: {
      aemeath: { build: "Fusion Burst DPS Build", job: "Main field time; use Fusion Burst mode and receive the Denia/Lupa hand-off." },
      denia: { build: "Fusion Burst damage-support build", sonata: "Flaming Clawprint", echo: "Lioness of Glory", job: "Rotate first, then hand the Fusion and Liberation buffs through Lupa." },
      lupa: { build: "Fusion hand-off support build", sonata: "Moonlit Clouds", echo: "Impermanence Heron", job: "Apply Moonlit Clouds and Outro into Aemeath after Denia." }
    }
  },
  {
    id: "aemeath-tune-rupture",
    members: ["aemeath", "lynae", "mornye"],
    label: "Tune Rupture",
    note: "Keep Aemeath and Lynae on the Tune Rupture plan. Mornye is valuable here because Lynae supplies the matching route instead of a Fusion Burst trigger.",
    builds: {
      aemeath: { build: "Tune Rupture DPS Build", job: "Main field time; use Tune Rupture mode and keep the Lynae/Mornye buffs active." },
      lynae: { job: "Apply the Tune Rupture setup, then Outro into Aemeath." },
      mornye: { job: "Provide sustain and the Tune-focused support buffs after Lynae." }
    }
  },
  {
    id: "aemeath-mono-fusion",
    members: ["aemeath", "lupa", "mornye"],
    label: "Mono Fusion",
    note: "Use this as a separate Fusion-focused plan. Lupa enables the route; it should not be mixed with Denia’s Fusion Burst or Lynae’s Tune Rupture requirements.",
    builds: {
      aemeath: { build: "Mono Fusion DPS Build", job: "Main field time; stay in the Fusion-focused plan and follow Lupa’s hand-off." },
      lupa: { build: "Mono Fusion support build", sonata: "Moonlit Clouds", echo: "Impermanence Heron", job: "Provide the Fusion resistance reduction and hand-off buffs before Aemeath." },
      mornye: { job: "Provide sustain and general support without replacing Lupa’s Fusion role." }
    }
  },
  {
    id: "cartethyia-ciaccona-rover",
    members: ["cartethyia", "ciaccona", "rover"],
    label: "Accessible Aero Erosion team",
    note: "Aero Rover is the free healing alternative to Chisa here. Ciaccona supplies the Erosion application; use Rover when you want reliable healing, free access, or a lower-stress rotation.",
    builds: {
      cartethyia: { job: "Carry the focused damage window after Ciaccona and Aero Rover establish Erosion." },
      ciaccona: { echo: "Nightmare: Kelpie", job: "Apply Aero Erosion off-field and hand the Aero buffs into Cartethyia." },
      rover: { weapon: "Bloodpact's Pledge", sonata: "Rejuvenating Glow", echo: "Bell-Borne Geochelone", stats: "CRIT Rate or CRIT DMG / Aero DMG / ATK%", job: "Heal the team and raise the Aero Erosion cap before Cartethyia’s field window." }
    }
  },
  {
    id: "cartethyia-ciaccona-chisa",
    members: ["cartethyia", "ciaccona", "chisa"],
    label: "Best Aero Erosion specialist team",
    note: "Cartethyia, Ciaccona, and Chisa are WaveKit's best specialist composition. Chisa offers the higher damage ceiling, especially with Kumokiri; Aero Rover is the accessible healing alternative and Shorekeeper is the safer multi-wave option.",
    builds: {
      cartethyia: { job: "Carry the damage window after Ciaccona and Chisa establish the Erosion plan." },
      ciaccona: { echo: "Nightmare: Kelpie", job: "Apply Aero Erosion off-field and amplify Cartethyia’s Aero damage." },
      chisa: { sonata: "Thread of Severed Fate + Havoc Eclipse", echo: "Reminiscence: Threnodian - Leviathan", job: "Use Chisa for the extra Aero Erosion stacks and specialist utility; her signature matters for the highest output." }
    }
  },
  {
    id: "cartethyia-ciaccona-shorekeeper",
    members: ["cartethyia", "ciaccona", "shorekeeper"],
    label: "Aero Erosion comfort route",
    note: "This keeps Ciaccona’s Erosion core but trades the specialist third slot for Shorekeeper’s healing, Crit support, and safer multi-wave rotations.",
    builds: {
      cartethyia: { job: "Carry the damage window once Ciaccona has set up Erosion." },
      ciaccona: { echo: "Nightmare: Kelpie", job: "Apply Erosion and hand the Aero buffs into Cartethyia." },
      shorekeeper: { job: "Provide healing and general Crit support; this route is especially useful when waves reset quickly." }
    }
  },
  {
    id: "iuno-lynae-mornye",
    members: ["iuno", "lynae", "mornye"],
    label: "Iuno hypercarry",
    note: "Iuno is the main DPS here, not only a support. Use her Main DPS setup; Mornye is most effective beside Lynae in this route.",
    builds: {
      iuno: { build: "Main DPS Iuno build", sonata: "Crown of Valor + 2-piece Aero or ATK set", echo: "Lady of the Sea", job: "Take the main field window and use the Crown of Valor route." },
      lynae: { job: "Provide the universal and Liberation support before Iuno’s damage window." },
      mornye: { job: "Provide sustain and the extra Tune-support value enabled by Lynae." }
    }
  },
  {
    id: "luuk-denia-mornye",
    members: ["luuk-herssen", "denia", "mornye"],
    label: "Tune Strain premium route",
    note: "Denia is Luuk’s strongest specialist helper here. Her Tune Strain setup is different from her Aemeath Fusion Burst setup.",
    builds: {
      "luuk-herssen": { job: "Take the long Basic Attack and Liberation damage window after Tune Strain is established." },
      denia: { build: "Tune Strain support build", sonata: "Reel of Spliced Memories", echo: "Voidwing Moth", job: "Apply and refresh Tune Strain, group enemies, then Outro to Luuk." },
      mornye: { job: "Provide sustain and amplify Luuk’s Tune Strain route." }
    }
  },
  {
    id: "luuk-lynae-mornye",
    members: ["luuk-herssen", "lynae", "mornye"],
    label: "Tune Strain alternate route",
    note: "Lynae is a strong Luuk alternative, but this remains a single-target-focused team and requires keeping the Tune Strain buffs active through Luuk’s long rotation.",
    builds: {
      "luuk-herssen": { job: "Take the main field window and keep the rotation inside Lynae’s buff duration." },
      lynae: { job: "Apply Tune Strain support and Outro into Luuk." },
      mornye: { job: "Provide sustain and complete the Tune Strain support core." }
    }
  },
  {
    id: "sigrika-qiuyuan-shorekeeper",
    members: ["sigrika", "qiuyuan", "shorekeeper"],
    label: "Echo Skill hypercarry",
    note: "Qiuyuan is the Echo Skill buffer for Sigrika here. His Moonlit Clouds setup funnels the hand-off buffs to Sigrika; Law of Harmony is the more personal-damage alternative in other Qiuyuan routes.",
    builds: {
      sigrika: { job: "Take the main field window and use the Echo Skill rotation after Qiuyuan’s buff setup." },
      qiuyuan: { build: "Moonlit Echo Skill support build", sonata: "Moonlit Clouds", echo: "Impermanence Heron", stats: "CRIT Rate or CRIT DMG / Aero DMG / ATK%", job: "Cast the Echo Skill and Outro so Sigrika receives the Moonlit hand-off." },
      shorekeeper: { job: "Provide healing, Crit support, and a safer third slot for the Echo Skill core." }
    }
  },
  {
    id: "sigrika-lucilla-shorekeeper",
    members: ["sigrika", "lucilla", "shorekeeper"],
    label: "Echo Skill alternative",
    note: "Lucilla is a direct Echo Skill alternative for Sigrika and should be built around Moonlit Clouds rather than her Glacio Chafe default.",
    builds: {
      sigrika: { job: "Take the main field window and follow Lucilla’s Echo Skill setup." },
      lucilla: { build: "Moonlit Echo Skill support build", sonata: "Moonlit Clouds", echo: "Impermanence Heron", job: "Provide repeated Echo Skill casts and hand-off buffs for Sigrika." },
      shorekeeper: { job: "Provide healing and universal Crit support for the Echo Skill core." }
    }
  },
  {
    id: "phrolova-lucilla-qiuyuan",
    members: ["phrolova", "lucilla", "qiuyuan"],
    label: "Havoc Echo Skill route",
    note: "Lucilla and Qiuyuan both contribute Echo Skill casts, but their builds are not interchangeable with their general support setups.",
    builds: {
      lucilla: { build: "Echo Skill support build for Phrolova", sonata: "Dream of the Lost + 2-piece Reel of Spliced Memories", echo: "Voidwing Moth", job: "Feed Echo Skill casts into Phrolova’s Hecate cycle, then hand off." },
      qiuyuan: { sonata: "Law of Harmony + 2-piece Moonlit Clouds", echo: "Bell-Borne Geochelone", job: "Use Echo Skill casts and the Outro buff to strengthen Phrolova’s Hecate window." }
    }
  }
];

(() => {
  const dataNode = document.getElementById("wavekit-character-guide-data");
  if (!dataNode) return;

  let data;
  try {
    data = JSON.parse(dataNode.textContent || "{}");
  } catch {
    return;
  }

  const requested = new URLSearchParams(location.search).get("team");
  const requestedMembers = requested ? requested.split("|").filter(Boolean) : [];
  const keyFor = (members) => [...new Set(members)].sort().join("|");
  const context = window.WAVEKIT_TEAM_BUILD_CONTEXT.find((entry) => keyFor(entry.members) === keyFor(requestedMembers));
  const routeDetailKeys = ["weapon", "alternates", "sonata", "echoCost", "echo", "stats"];
  const hasRouteDetailsFor = (entry) => routeDetailKeys.some((key) => entry.builds?.[data.slug]?.[key]);
  const relevantContexts = window.WAVEKIT_TEAM_BUILD_CONTEXT.filter((entry) => entry.members.includes(data.slug) && hasRouteDetailsFor(entry));
  const teamSection = document.querySelector("#teams");
  if (teamSection && relevantContexts.length && !teamSection.querySelector("[data-team-context-picker]")) {
    const names = data.names || {};
    const labelFor = (entry) => `${entry.label} · ${entry.members.map((slug) => names[slug] || (slug === "rover" ? "Rover" : slug)).join(" / ")}`;
    const picker = document.createElement("div");
    picker.className = "team-context-picker";
    picker.dataset.teamContextPicker = "true";
    picker.innerHTML = `<div><span class="kicker">Team build view</span><strong>Choose a reviewed team</strong><p>This character has reviewed weapon or Echo variations between these teams. Choose a route to show the exact build fields.</p></div><label><span>Show information for</span><select aria-label="Choose a reviewed team build route"><option value="">General character guide</option>${relevantContexts.map((entry) => `<option value="${entry.id}">${labelFor(entry)}</option>`).join("")}</select></label>`;
    const select = picker.querySelector("select");
    const activeContext = context && relevantContexts.find((entry) => entry.id === context.id);
    if (activeContext) select.value = activeContext.id;
    select.addEventListener("change", () => {
      const url = new URL(location.href);
      const selected = relevantContexts.find((entry) => entry.id === select.value);
      if (selected) url.searchParams.set("team", selected.members.join("|"));
      else url.searchParams.delete("team");
      url.hash = "teams";
      location.assign(url.toString());
    });
    const panels = teamSection.querySelector(".seo-team-panels");
    if (panels) teamSection.insertBefore(picker, panels);
  }
  if (!context) return;

  const build = context.builds?.[data.slug] || {};
  const teamJob = build.job || context.note;
  const hasRouteDetails = hasRouteDetailsFor(context);
  const fieldValues = {
    "Team route": context.label,
    "Team job": teamJob,
    "Best weapon": build.weapon,
    "Alternate weapons": build.alternates,
    Sonata: build.sonata,
    "Echo cost": build.echoCost,
    "Main Echo": build.echo,
    "Main stats": build.stats
  };

  const replaceField = (root, label, value) => {
    if (!value || !root) return;
    const rows = [...root.querySelectorAll("div")];
    const matchingRow = rows.find((row) => row.querySelector("dt")?.textContent.trim() === label);
    if (matchingRow?.querySelector("dd")) {
      matchingRow.querySelector("dd").textContent = value;
      return;
    }
    const row = document.createElement("div");
    const term = document.createElement("dt");
    const description = document.createElement("dd");
    term.textContent = label;
    description.textContent = value;
    row.append(term, description);
    root.append(row);
  };

  const quickBuild = document.querySelector(".seo-guide-main .character-guide-stats");
  Object.entries(fieldValues).forEach(([label, value]) => replaceField(quickBuild, label, value));

  const heroMeta = document.querySelector(".seo-hero-meta");
  Object.entries({
    "Best weapon": build.weapon,
    Sonata: build.sonata,
    "Echo cost": build.echoCost
  }).forEach(([label, value]) => {
    if (!value || !heroMeta) return;
    [...heroMeta.querySelectorAll("div")].forEach((row) => {
      if (row.querySelector("span")?.textContent.trim() === label) {
        const target = row.querySelector("strong");
        if (target) target.textContent = value;
      }
    });
  });

  const existing = document.querySelector("[data-team-context-panel]");
  const panel = existing || document.createElement("aside");
  panel.dataset.teamContextPanel = "true";
  panel.className = "team-context-panel";
  panel.innerHTML = `<span class="kicker">Team-specific build context</span><strong>${context.label}</strong><p>${context.note}</p><div class="team-context-panel-facts"><span><small>Character job</small><b>${teamJob}</b></span><span><small>Fields changed</small><b>${hasRouteDetails ? "Route-specific build details" : "Team role and rotation"}</b></span></div><small>Showing the reviewed changes for ${data.name} in this team. Other fields stay on the general character guide.</small>`;
  const anchor = document.querySelector(".seo-hero-meta") || document.querySelector(".seo-hero-copy");
  if (anchor && !existing) anchor.insertAdjacentElement("afterend", panel);
})();
