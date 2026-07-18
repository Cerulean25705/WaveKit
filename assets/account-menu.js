import "./mobile-navigation.js?v=landing-guide-1";
import "./wavecat.js?v=wavecat-rest-4";

const header = document.querySelector(".seo-topbar");
const profileStorageKey = "wavekit-profiles-v1";

if (header && !header.querySelector("[data-shared-account]")) {
  const profileUrl = new URL("../#my-wavekit", import.meta.url).href;
  const account = document.createElement("div");
  account.className = "account-bar";
  account.dataset.sharedAccount = "";
  account.setAttribute("aria-live", "polite");
  account.innerHTML = `
    <span data-cloud-status>Checking account...</span>
    <details class="account-menu">
      <summary class="button primary compact-button" data-account-label aria-label="Checking your WaveKit account">Account</summary>
      <div class="account-menu-panel">
        <div class="account-actions" data-signed-out>
          <input data-email type="email" autocomplete="email" placeholder="Email" aria-label="Email address">
          <input data-password type="password" autocomplete="current-password" placeholder="Password" aria-label="Password">
          <button class="button primary compact-button" data-sign-in type="button">Log in</button>
          <button class="button ghost compact-button" data-create type="button">Create account</button>
          <button class="button ghost compact-button" data-google type="button">Continue with Google</button>
          <button class="button ghost compact-button" data-reset type="button">Reset password</button>
        </div>
        <div class="account-actions" data-signed-in hidden>
          <strong data-user-label>Signed in</strong>
          <span class="account-id" data-user-id>WaveKit ID pending</span>
          <span class="account-auto-sync"><strong>Automatic sync is on</strong><small>Your helper profile syncs whenever you make changes.</small></span>
          <a class="button primary compact-button" href="${profileUrl}">Open My WaveKit</a>
          <button class="button ghost compact-button" data-copy-id type="button">Copy ID</button>
          <button class="button ghost compact-button" data-sign-out type="button">Sign out</button>
        </div>
      </div>
    </details>
  `;
  header.append(account);

  const get = (selector) => account.querySelector(selector);
  const status = get("[data-cloud-status]");
  const menu = get(".account-menu");
  const label = get("[data-account-label]");
  const signedOut = get("[data-signed-out]");
  const signedIn = get("[data-signed-in]");
  const controls = [...account.querySelectorAll("button, input")];
  let api = null;
  let configured = false;
  let authResolved = false;
  let user = null;
  let busy = false;
  let cloudProfileReady = false;
  let profileSyncTimer = null;
  let preparedForUid = "";

  const setStatus = (message) => {
    status.textContent = message;
  };

  const render = () => {
    signedOut.hidden = Boolean(user);
    signedIn.hidden = !user;
    menu.classList.toggle("is-signed-in", Boolean(user));
    menu.classList.toggle("is-auth-pending", !authResolved);
    label.textContent = !authResolved || user ? "Account" : "Log in";
    label.setAttribute("aria-label", !authResolved
      ? "Checking your WaveKit account"
      : user ? "Open your WaveKit account" : "Log in or create a WaveKit account");
    controls.forEach((control) => {
      control.disabled = busy || !configured;
    });
    if (user) {
      get("[data-user-label]").textContent = `Signed in as ${user.email || user.displayName || "WaveKit user"}`;
      get("[data-user-id]").textContent = `WaveKit ID: ${user.uid.slice(0, 6)}...${user.uid.slice(-4)}`;
    }
    const plannerHint = document.querySelector("[data-progress-sync-note]");
    if (plannerHint) {
      plannerHint.textContent = user
        ? "Automatic cloud sync is active for this planner."
        : "Saved on this device. Log in above to sync this planner across devices.";
    }
  };

  render();

  const loadLocalStore = () => {
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

  const latestProfileUpdate = (profiles = []) => profiles.reduce((latest, profile) => {
    const updated = Date.parse(profile?.updatedAt || "") || 0;
    return Math.max(latest, updated);
  }, 0);

  const canonicalise = (value) => {
    if (Array.isArray(value)) return value.map(canonicalise);
    if (!value || typeof value !== "object") return value;
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, canonicalise(value[key])]));
  };

  const stableStringify = (value) => JSON.stringify(canonicalise(value));

  const cloudProfileVersion = (cloudData) => {
    const profiles = Array.isArray(cloudData?.profiles) ? cloudData.profiles : [];
    return [cloudData?.activeProfileId || "none", profiles.length, latestProfileUpdate(profiles)].join(":");
  };

  const cloudPayload = () => {
    const store = loadLocalStore();
    return {
      profiles: store.profiles,
      activeProfileId: store.activeProfileId,
      savedAt: new Date().toISOString()
    };
  };

  const applyCloudStore = (cloudData) => {
    const nextStore = {
      profiles: Array.isArray(cloudData?.profiles) ? cloudData.profiles : [],
      activeProfileId: cloudData?.activeProfileId || ""
    };
    const currentStore = loadLocalStore();
    const changed = stableStringify(currentStore) !== stableStringify(nextStore);
    if (changed) localStorage.setItem(profileStorageKey, JSON.stringify(nextStore));
    return changed;
  };

  const prepareCloudProfile = async () => {
    if (!user || !api) return;
    cloudProfileReady = false;
    setStatus("Loading your profile...");
    try {
      const localStore = loadLocalStore();
      const cloudData = await api.loadCloudProfiles();
      const cloudProfiles = Array.isArray(cloudData?.profiles) ? cloudData.profiles : [];
      const localHasData = localStore.profiles.length > 0;
      const cloudHasData = cloudProfiles.length > 0;
      let shouldReload = false;

      if (localHasData && (!cloudHasData || latestProfileUpdate(localStore.profiles) > latestProfileUpdate(cloudProfiles))) {
        await api.saveCloudProfiles(cloudPayload());
      } else if (cloudHasData) {
        shouldReload = applyCloudStore(cloudData);
      }

      cloudProfileReady = true;
      setStatus("Signed in. Profile sync is active.");
      render();
      if (shouldReload) {
        const reloadKey = `wavekit-profile-reload:${user.uid}:${window.location.pathname}`;
        const version = cloudProfileVersion(cloudData);
        let reloadOnce = false;
        try {
          if (sessionStorage.getItem(reloadKey) !== version) {
            sessionStorage.setItem(reloadKey, version);
            reloadOnce = true;
          }
        } catch {
          // Keep the current page stable when session storage is unavailable.
        }
        if (reloadOnce) window.location.reload();
      }
    } catch (error) {
      cloudProfileReady = true;
      preparedForUid = "";
      setStatus(errorMessage(error));
      render();
    }
  };

  const syncLocalProfile = async () => {
    if (!user || !api || !cloudProfileReady) return;
    const payload = cloudPayload();
    if (!payload.profiles.length) return;
    setStatus("Saving planner progress...");
    try {
      await api.saveCloudProfiles(payload);
      setStatus("Planner saved and synced.");
    } catch (error) {
      setStatus(errorMessage(error));
    }
  };

  window.addEventListener("wavekit:profile-changed", () => {
    clearTimeout(profileSyncTimer);
    profileSyncTimer = setTimeout(syncLocalProfile, 450);
  });

  const errorMessage = (error) => {
    const code = String(error?.code || error?.message || "").replace(/^auth\//, "");
    const messages = {
      "invalid-credential": "Email or password was not recognised.",
      "email-already-in-use": "That email already has an account. Try logging in.",
      "weak-password": "Use a password with at least 6 characters.",
      "popup-closed-by-user": "Google login was closed before it finished.",
      "network-request-failed": "Login could not reach Firebase. Check your connection.",
      "unauthorized-domain": "This domain needs to be authorised in Firebase Authentication."
    };
    return messages[code] || "Account action failed. Please try again.";
  };

  const run = async (working, action, complete) => {
    if (!configured || !api) return;
    busy = true;
    setStatus(working);
    render();
    try {
      await action();
      setStatus(complete);
      menu.open = false;
    } catch (error) {
      setStatus(errorMessage(error));
    } finally {
      busy = false;
      render();
    }
  };

  const credentials = () => ({
    email: get("[data-email]").value.trim(),
    password: get("[data-password]").value
  });

  get("[data-sign-in]").addEventListener("click", () => {
    const { email, password } = credentials();
    if (!email || !password) return setStatus("Enter your email and password first.");
    run("Logging in...", () => api.signInWithEmail(email, password), "Signed in. Automatic sync is ready.");
  });

  get("[data-create]").addEventListener("click", () => {
    const { email, password } = credentials();
    if (!email || password.length < 6) return setStatus("Use an email and a password with at least 6 characters.");
    run("Creating account...", () => api.createAccountWithEmail(email, password), "Account created. Automatic sync is ready.");
  });

  get("[data-google]").addEventListener("click", () => {
    run("Opening Google login...", () => api.signInWithGoogle(), "Signed in. Automatic sync is ready.");
  });

  get("[data-reset]").addEventListener("click", () => {
    const { email } = credentials();
    if (!email) return setStatus("Enter your email first.");
    run("Sending reset email...", () => api.resetCloudPassword(email), "Password reset email sent.");
  });

  get("[data-copy-id]").addEventListener("click", async () => {
    if (!user?.uid) return;
    try {
      await navigator.clipboard.writeText(`WaveKit ID: ${user.uid}`);
      setStatus("WaveKit ID copied.");
    } catch {
      setStatus("Could not copy the ID automatically.");
    }
  });

  get("[data-sign-out]").addEventListener("click", () => {
    run("Signing out...", () => api.signOutCloud(), "Signed out. Profiles still save locally.");
  });

  account.addEventListener("keydown", (event) => {
    if (event.key === "Escape") menu.open = false;
    if (event.key === "Enter" && signedOut.contains(event.target)) get("[data-sign-in]").click();
  });

  document.addEventListener("click", (event) => {
    if (menu.open && !menu.contains(event.target)) menu.open = false;
  });

  try {
    const config = await import("./firebase-config.js");
    api = await import("./firebase-sync.js?v=undefined-values-1");
    configured = Boolean(config.firebaseEnabled && api.isCloudConfigured());
    if (!configured) {
      authResolved = true;
      setStatus("Login is temporarily unavailable.");
      render();
    } else {
      setStatus("Profiles save locally until you log in.");
      render();
      api.initCloudSync((nextUser) => {
        authResolved = true;
        user = nextUser;
        const needsProfileLoad = Boolean(user && preparedForUid !== user.uid);
        if (!user) {
          preparedForUid = "";
          cloudProfileReady = false;
        }
        setStatus(user
          ? needsProfileLoad ? "Signed in. Loading your profile..." : "Signed in. Profile sync is active."
          : "Profiles save locally until you log in.");
        render();
        if (needsProfileLoad) {
          preparedForUid = user.uid;
          cloudProfileReady = false;
          prepareCloudProfile();
        }
      }, (error) => {
        authResolved = true;
        user = null;
        setStatus(errorMessage(error));
        render();
      });
    }
  } catch {
    authResolved = true;
    setStatus("Login is temporarily unavailable.");
    render();
  }
}
