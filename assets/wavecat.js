const footer = document.querySelector(".footer");

if (footer && !footer.querySelector("[data-wavecat-footer]")) {
  const idleSprite = new URL("./mascot/wavecat-idle-pixel.png", import.meta.url).href;
  const settleSprite = new URL("./mascot/wavecat-settle-pixel.png", import.meta.url).href;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const footerStage = document.createElement("div");
  let poseTimer = 0;
  let transitionTimer = 0;
  let isResting = false;

  footer.classList.add("footer-with-wavecat");
  footerStage.className = "wavecat-footer-stage";
  footerStage.dataset.wavecatFooter = "";
  footerStage.setAttribute("aria-hidden", "true");
  footerStage.style.setProperty("--wavecat-idle-sprite", `url("${idleSprite}")`);
  footerStage.style.setProperty("--wavecat-settle-sprite", `url("${settleSprite}")`);
  footerStage.innerHTML = `
    <span class="wavecat-floor-line"></span>
    <span class="wavecat-sprite wavecat-footer-idle"></span>
    <span class="wavecat-sprite wavecat-footer-transition"></span>
  `;
  footer.append(footerStage);
  const transitionSprite = footerStage.querySelector(".wavecat-footer-transition");

  const randomDelay = (minimum, maximum) => minimum + Math.random() * (maximum - minimum);

  const finishPoseChange = (resting) => {
    window.clearTimeout(transitionTimer);
    footerStage.classList.toggle("is-lying-down", resting);
    footerStage.classList.remove("is-rising", "is-settling");
  };

  const changePose = (resting) => {
    window.clearTimeout(transitionTimer);
    isResting = resting;

    if (reducedMotion.matches) {
      finishPoseChange(false);
      return;
    }

    if (resting) {
      footerStage.classList.remove("is-rising");
      footerStage.classList.add("is-settling");
      transitionTimer = window.setTimeout(() => finishPoseChange(true), 1200);
      return;
    }

    footerStage.classList.remove("is-settling");
    footerStage.classList.add("is-rising");
    transitionTimer = window.setTimeout(() => finishPoseChange(false), 1200);
  };

  const schedulePoseChange = (first = false) => {
    window.clearTimeout(poseTimer);
    if (document.hidden || reducedMotion.matches) return;

    const delay = isResting
      ? randomDelay(10000, 22000)
      : randomDelay(first ? 12000 : 18000, first ? 28000 : 38000);

    poseTimer = window.setTimeout(() => {
      changePose(!isResting);
      schedulePoseChange();
    }, delay);
  };

  const resetForMotionPreference = () => {
    window.clearTimeout(poseTimer);
    window.clearTimeout(transitionTimer);
    isResting = false;
    footerStage.classList.remove("is-lying-down", "is-rising", "is-settling");
    if (!reducedMotion.matches) schedulePoseChange(true);
  };

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      window.clearTimeout(poseTimer);
      window.clearTimeout(transitionTimer);
      return;
    }

    footerStage.classList.remove("is-rising", "is-settling");
    footerStage.classList.toggle("is-lying-down", isResting);
    schedulePoseChange(true);
  });
  transitionSprite.addEventListener("animationend", (event) => {
    if (event.animationName === "wavecat-settle-down") finishPoseChange(true);
    if (event.animationName === "wavecat-settle-up") finishPoseChange(false);
  });
  reducedMotion.addEventListener?.("change", resetForMotionPreference);
  schedulePoseChange(true);
}
