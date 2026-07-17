const header = document.querySelector(".topbar");
const primaryNavigation = header?.querySelector(".topnav");

if (header && primaryNavigation && !primaryNavigation.querySelector("[data-mobile-nav-more]")) {
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
    ["How it works", rootLink("how")],
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
    updateActiveDestination();
  });

  accountMenu?.addEventListener("toggle", () => {
    if (accountMenu.open) closeMoreMenu();
  });

  menuLinks.forEach((link) => link.addEventListener("click", closeMoreMenu));

  document.addEventListener("click", (event) => {
    if (moreMenu.open && !moreMenu.contains(event.target)) closeMoreMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMoreMenu();
  });

  window.addEventListener("hashchange", updateActiveDestination);
  updateActiveDestination();
}
