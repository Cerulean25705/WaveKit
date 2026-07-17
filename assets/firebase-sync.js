import { firebaseConfig, firebaseEnabled } from "./firebase-config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  createUserWithEmailAndPassword,
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import {
  doc,
  getDoc,
  getFirestore,
  serverTimestamp,
  setDoc
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const configured = firebaseEnabled && firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId;

let auth;
let db;

export function isCloudConfigured() {
  return Boolean(configured);
}

export function initCloudSync(onUserChanged, onAuthError) {
  if (!configured) return { configured: false };
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  onAuthStateChanged(auth, (user) => onUserChanged?.(serialiseUser(user)));
  getRedirectResult(auth)
    .then((credential) => {
      if (credential?.user) onUserChanged?.(serialiseUser(credential.user));
    })
    .catch((error) => onAuthError?.(error));
  return { configured: true };
}

export async function signInWithEmail(email, password) {
  ensureReady();
  const credential = await signInWithEmailAndPassword(auth, email, password);
  return serialiseUser(credential.user);
}

export async function createAccountWithEmail(email, password) {
  ensureReady();
  const credential = await createUserWithEmailAndPassword(auth, email, password);
  return serialiseUser(credential.user);
}

export async function signInWithGoogle() {
  ensureReady();
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  try {
    const credential = await signInWithPopup(auth, provider);
    return serialiseUser(credential.user);
  } catch (error) {
    if (error?.code === "auth/popup-closed-by-user" || error?.code === "auth/cancelled-popup-request") {
      throw error;
    }
    await signInWithRedirect(auth, provider);
    return null;
  }
}

export async function resetCloudPassword(email) {
  ensureReady();
  await sendPasswordResetEmail(auth, email);
}

export async function signOutCloud() {
  ensureReady();
  await signOut(auth);
}

export async function saveCloudProfiles(payload) {
  ensureReady();
  if (!auth.currentUser) throw new Error("not-signed-in");
  await setDoc(profileDoc(auth.currentUser.uid), {
    app: "WaveKit",
    version: 1,
    ...sanitiseForFirestore(payload),
    updatedAt: serverTimestamp()
  }, { merge: true });
}

export async function loadCloudProfiles() {
  ensureReady();
  if (!auth.currentUser) throw new Error("not-signed-in");
  const snapshot = await getDoc(profileDoc(auth.currentUser.uid));
  return snapshot.exists() ? snapshot.data() : null;
}

export async function saveDiscordLinkCode(code) {
  ensureReady();
  if (!auth.currentUser) throw new Error("not-signed-in");
  await setDoc(profileDoc(auth.currentUser.uid), {
    discordLink: {
      code,
      createdAt: serverTimestamp()
    },
    updatedAt: serverTimestamp()
  }, { merge: true });
}

function profileDoc(uid) {
  return doc(db, "users", uid, "profiles", "wavekit");
}

function serialiseUser(user) {
  if (!user) return null;
  return {
    uid: user.uid,
    email: user.email || "",
    displayName: user.displayName || "",
    emailVerified: Boolean(user.emailVerified)
  };
}

function sanitiseForFirestore(value) {
  if (Array.isArray(value)) {
    return value.filter((item) => item !== undefined).map(sanitiseForFirestore);
  }
  if (!value || typeof value !== "object") return value;
  return Object.fromEntries(Object.entries(value)
    .filter(([, item]) => item !== undefined)
    .map(([key, item]) => [key, sanitiseForFirestore(item)]));
}

function ensureReady() {
  if (!configured || !auth || !db) throw new Error("cloud-sync-not-configured");
}
