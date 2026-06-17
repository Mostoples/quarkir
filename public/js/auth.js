// ============================================================
// Auth — DEMO (localStorage) + Firebase Authentication
// Mendukung: Google, Email/Password, Anonymous (sesuai console quparkir)
// ============================================================
import { firebaseConfig, USE_FIREBASE } from "./config.js";
import { uid as randId } from "./util.js";

export let Auth;

function demoAuth() {
  const KEY = "quparkir_user_v1";
  let user = JSON.parse(localStorage.getItem(KEY) || "null");
  const subs = new Set();
  const set = (u) => { user = u; u ? localStorage.setItem(KEY, JSON.stringify(u)) : localStorage.removeItem(KEY); subs.forEach(f => f(u)); };
  const mk = (over) => ({ uid: over.uid || "demo-" + randId(), name: "Pengguna QuParkir", role: "pelanggan", ...over });
  return {
    mode: "demo",
    current: () => user,
    onChange: (cb) => { subs.add(cb); cb(user); return () => subs.delete(cb); },
    async loginGoogle() { set(mk({ uid: "g-awigna", name: "Awigna", email: "awigna@gmail.com", provider: "google" })); },
    async loginEmail(email) { set(mk({ uid: "e-" + btoa(email).slice(0, 6), name: email.split("@")[0], email, provider: "email" })); },
    async register(email, _p, name) { set(mk({ uid: "e-" + btoa(email).slice(0, 6), name: name || email.split("@")[0], email, provider: "email" })); },
    async loginAnon() { set(mk({ uid: "anon-" + randId(), name: "Tamu", provider: "anonymous", anon: true })); },
    async logout() { set(null); },
    setRole(role) { if (user) set({ ...user, role }); },
  };
}

async function firebaseAuth() {
  const [{ initializeApp, getApps }, a] = await Promise.all([
    import("https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js"),
    import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js"),
  ]);
  const app = getApps()[0] || initializeApp(firebaseConfig);
  const auth = a.getAuth(app);
  const { GoogleAuthProvider, signInWithPopup, signInAnonymously, onAuthStateChanged,
    signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } = a;
  let cur = null;
  const map = (u) => u ? { uid: u.uid, name: u.displayName || (u.isAnonymous ? "Tamu" : (u.email || "").split("@")[0]),
    email: u.email, anon: u.isAnonymous, role: localStorage.getItem("role_" + u.uid) || "pelanggan" } : null;
  return {
    mode: "firebase",
    current: () => cur,
    onChange: (cb) => onAuthStateChanged(auth, (u) => { cur = map(u); cb(cur); }),
    loginGoogle: () => signInWithPopup(auth, new GoogleAuthProvider()),
    loginEmail: (e, p) => signInWithEmailAndPassword(auth, e, p),
    async register(e, p, name) { const r = await createUserWithEmailAndPassword(auth, e, p); if (name) await updateProfile(r.user, { displayName: name }); },
    loginAnon: () => signInAnonymously(auth),
    logout: () => signOut(auth),
    setRole(role) { if (cur) { localStorage.setItem("role_" + cur.uid, role); cur.role = role; } },
  };
}

export async function initAuth() {
  if (USE_FIREBASE) { try { Auth = await firebaseAuth(); return; } catch (e) { console.warn("Firebase Auth gagal, DEMO:", e); } }
  Auth = demoAuth();
}
