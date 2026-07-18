const header = document.querySelector(".topbar");
const primaryNavigation = header?.querySelector(".topnav");

if (header && primaryNavigation && !primaryNavigation.querySelector("[data-mobile-nav-more]")) {
  const originalLinks = [...primaryNavigation.querySelectorAll(":scope > a")];
  const helperLink = originalLinks.find((link) => ["Helper", "Team Finder"].includes(link.textContent.trim()));
  const buildsLink = originalLinks.find((link) => link.textContent.trim() === "Builds");
  const characterLink = originalLinks.find((link) => link.textContent.trim() === "Characters");
  const weaponLink = originalLinks.find((link) => link.textContent.trim() === "Weapons");
  const discordLink = originalLinks.find((link) => link.href.startsWith("https://discord.gg"));

  if (helperLink) {
    helperLink.textContent = "Team Finder";
    helperLink.classList.add("nav-workspace-link");
  }

  originalLinks.forEach((link) => {
    if (["My WaveKit", "Teams", "Builds"].includes(link.textContent.trim())) {
      link.classList.add("nav-workspace-link");
    }
  });

  discordLink?.remove();

  let libraryMenu = null;
  if (characterLink && weaponLink) {
    const currentPath = window.location.pathname.replace(/index\.html$/, "");
    const characterPath = new URL(characterLink.href, window.location.href).pathname.replace(/index\.html$/, "");
    const weaponPath = new URL(weaponLink.href, window.location.href).pathname.replace(/index\.html$/, "");
    const characterPageActive = currentPath.startsWith(characterPath) && characterPath !== "/";
    const weaponPageActive = currentPath.startsWith(weaponPath) && weaponPath !== "/";
    if (characterPageActive) characterLink.setAttribute("aria-current", "page");
    if (weaponPageActive) weaponLink.setAttribute("aria-current", "page");

    const libraryGroup = document.createElement("span");
    libraryGroup.className = "nav-library-group";
    libraryGroup.setAttribute("aria-label", "WaveKit reference libraries");
    characterLink.before(libraryGroup);
    characterLink.classList.add("nav-library-link");
    weaponLink.classList.add("nav-library-link");
    libraryGroup.append(characterLink, weaponLink);
    (buildsLink || helperLink)?.after(libraryGroup);

    libraryMenu = document.createElement("details");
    libraryMenu.className = "nav-library-menu";
    libraryMenu.innerHTML = `
      <summary aria-label="Browse character and weapon guides">Browse</summary>
      <nav class="nav-library-panel" aria-label="WaveKit guides">
        <a href="${characterLink.href}"${characterLink.hasAttribute("aria-current") ? ' aria-current="page"' : ""}>
          <span><strong>Characters</strong><small>Builds, Echoes, teams, and materials</small></span><b aria-hidden="true">›</b>
        </a>
        <a href="${weaponLink.href}"${weaponLink.hasAttribute("aria-current") ? ' aria-current="page"' : ""}>
          <span><strong>Weapons</strong><small>Users, refinements, and materials</small></span><b aria-hidden="true">›</b>
        </a>
      </nav>
    `;
    libraryMenu.classList.toggle("has-active-destination", Boolean(libraryMenu.querySelector('[aria-current="page"]')));
    (helperLink || libraryGroup).after(libraryMenu);
  }

  const syncHeaderOffset = () => {
    document.documentElement.style.setProperty("--topbar-offset", `${Math.ceil(header.getBoundingClientRect().height)}px`);
  };

  syncHeaderOffset();
  if ("ResizeObserver" in window) new ResizeObserver(syncHeaderOffset).observe(header);
  else window.addEventListener("resize", syncHeaderOffset, { passive: true });

  const brandUrl = new URL(header.querySelector(".brand")?.getAttribute("href") || "./", window.location.href);
  brandUrl.hash = "";

  const rootLink = (hash) => {
    const url = new URL(brandUrl.href);
    url.hash = hash;
    return url.href;
  };

  const destinations = [
    ["Teams", rootLink("results")],
    ["Builds", rootLink("builds")],
    ["Feedback", rootLink("feedback")],
    ["Install app", rootLink("install")],
    ["Trust & sources", rootLink("trust")],
    ["Discord", "https://discord.gg/wgGaqt6pvD"]
  ];

  const moreMenu = document.createElement("details");
  moreMenu.className = "mobile-nav-more";
  moreMenu.dataset.mobileNavMore = "";
  moreMenu.innerHTML = `
    <summary aria-label="Open more WaveKit pages">More</summary>
    <nav class="mobile-nav-panel" aria-label="More WaveKit pages">
      ${destinations.map(([label, href]) => {
        const external = href.startsWith("https://discord.gg");
        return `<a href="${href}"${external ? ' target="_blank" rel="noopener"' : ""}><span>${label}</span><b aria-hidden="true">›</b></a>`;
      }).join("")}
    </nav>
  `;
  primaryNavigation.append(moreMenu);

  const accountMenu = header.querySelector(".account-menu");
  const menuLinks = [...moreMenu.querySelectorAll("a")];

  const closeMoreMenu = () => {
    moreMenu.open = false;
  };

  const closeLibraryMenu = () => {
    if (libraryMenu) libraryMenu.open = false;
  };

  const updateActiveDestination = () => {
    const currentHash = window.location.hash.replace(/^#/, "");
    let hasActiveDestination = false;
    menuLinks.forEach((link) => {
      const destination = new URL(link.href, window.location.href);
      const isCurrent = destination.origin === window.location.origin
        && destination.pathname === window.location.pathname
        && destination.hash.replace(/^#/, "") === currentHash;
      link.classList.toggle("is-active", isCurrent);
      hasActiveDestination ||= isCurrent;
      if (isCurrent) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    moreMenu.classList.toggle("has-active-destination", hasActiveDestination);
  };

  moreMenu.addEventListener("toggle", () => {
    if (!moreMenu.open) return;
    if (accountMenu) accountMenu.open = false;
    closeLibraryMenu();
    updateActiveDestination();
  });

  libraryMenu?.addEventListener("toggle", () => {
    if (!libraryMenu.open) return;
    if (accountMenu) accountMenu.open = false;
    closeMoreMenu();
  });

  accountMenu?.addEventListener("toggle", () => {
    if (!accountMenu.open) return;
    closeMoreMenu();
    closeLibraryMenu();
  });

  menuLinks.forEach((link) => link.addEventListener("click", closeMoreMenu));
  libraryMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeLibraryMenu));

  document.addEventListener("click", (event) => {
    if (moreMenu.open && !moreMenu.contains(event.target)) closeMoreMenu();
    if (libraryMenu?.open && !libraryMenu.contains(event.target)) closeLibraryMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeMoreMenu();
    closeLibraryMenu();
  });

  window.addEventListener("hashchange", updateActiveDestination);
  updateActiveDestination();

  const footer = document.querySelector(".footer");
  if (footer && !footer.querySelector(".footer-support-group")) {
    const footerSupportGroup = document.createElement("span");
    footerSupportGroup.className = "footer-support-group";
    const footerSupportCopy = document.createElement("span");
    footerSupportCopy.className = "footer-support-copy";
    footerSupportCopy.textContent = "Support WaveKit";
    const footerSupport = document.createElement("a");
    footerSupport.className = "footer-support-link";
    footerSupport.href = "https://ko-fi.com/wavekit";
    footerSupport.target = "_blank";
    footerSupport.rel = "noopener";
    footerSupport.setAttribute("aria-label", "Support WaveKit on Ko-fi");
    footerSupport.innerHTML = '<span class="footer-support-icon" aria-hidden="true">&#9829;</span>';
    footerSupportGroup.append(footerSupportCopy, footerSupport);
    footer.append(footerSupportGroup);
  }
  if (footer && !footer.querySelector(".footer-discord-link")) {
    const footerDiscord = document.createElement("a");
    footerDiscord.className = "footer-discord-link";
    footerDiscord.href = "https://discord.gg/wgGaqt6pvD";
    footerDiscord.target = "_blank";
    footerDiscord.rel = "noopener";
    footerDiscord.setAttribute("aria-label", "Join the WaveKit Discord");
    footerDiscord.innerHTML = '<span class="footer-discord-icon" aria-hidden="true"></span><span>Join Discord</span>';
    footer.append(footerDiscord);
  }
}
