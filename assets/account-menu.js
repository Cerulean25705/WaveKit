const header = document.querySelector(".seo-topbar");

if (header && !header.querySelector("[data-shared-account]")) {
  const helperUrl = new URL("../#helper", import.meta.url).href;
  const account = document.createElement("div");
  account.className = "account-bar";
  account.dataset.sharedAccount = "";
  account.setAttribute("aria-live", "polite");
  account.innerHTML = `
    <span data-cloud-status>Checking account...</span>
    <details class="account-menu">
      <summary class="button primary compact-button" data-account-label aria-label="Log in or create a WaveKit account">Log in</summary>
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
          <a class="button primary compact-button" href="${helperUrl}">Open profile</a>
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
  let user = null;
  let busy = false;

  const setStatus = (message) => {
    status.textContent = message;
  };

  const render = () => {
    signedOut.hidden = Boolean(user);
    signedIn.hidden = !user;
    menu.classList.toggle("is-signed-in", Boolean(user));
    label.textContent = user ? "Account" : "Log in";
    label.setAttribute("aria-label", user ? "Open your WaveKit account" : "Log in or create a WaveKit account");
    controls.forEach((control) => {
      control.disabled = busy || !configured;
    });
    if (user) {
      get("[data-user-label]").textContent = `Signed in as ${user.email || user.displayName || "WaveKit user"}`;
      get("[data-user-id]").textContent = `WaveKit ID: ${user.uid.slice(0, 6)}...${user.uid.slice(-4)}`;
    }
  };

  render();

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
    api = await import("./firebase-sync.js");
    configured = Boolean(config.firebaseEnabled && api.isCloudConfigured());
    if (!configured) {
      setStatus("Login is temporarily unavailable.");
      render();
    } else {
      setStatus("Profiles save locally until you log in.");
      render();
      api.initCloudSync((nextUser) => {
        user = nextUser;
        setStatus(user ? "Signed in. Profile sync is active." : "Profiles save locally until you log in.");
        render();
      }, (error) => {
        user = null;
        setStatus(errorMessage(error));
        render();
      });
    }
  } catch {
    setStatus("Login is temporarily unavailable.");
    render();
  }
}
