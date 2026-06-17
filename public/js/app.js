// ============================================================
// Bootstrap QuParkir
// ============================================================
import { initData } from "./data.js";
import { initAuth } from "./auth.js";
import { route, setNotFound, startRouter, render, current, go } from "./router.js";
import { $, $$, toast } from "./util.js";

import loginPage from "./pages/login.js";
import homePage from "./pages/home.js";
import cariPage from "./pages/cari.js";
import kendaraanPage from "./pages/kendaraan.js";
import checkinPage from "./pages/checkin.js";
import statusPage from "./pages/status.js";
import riwayatPage from "./pages/riwayat.js";
import akunPage from "./pages/akun.js";
import petugasPage from "./pages/petugas.js";
import adminPage from "./pages/admin.js";

// ---- mode switcher (persist) ----
function initModeSwitcher() {
  const saved = localStorage.getItem("ui_mode") || "aurora";
  document.body.dataset.mode = saved;
  const btns = $$("#modefab button");
  btns.forEach(b => {
    b.classList.toggle("active", b.dataset.set === saved);
    b.addEventListener("click", () => {
      document.body.dataset.mode = b.dataset.set;
      localStorage.setItem("ui_mode", b.dataset.set);
      btns.forEach(x => x.classList.toggle("active", x === b));
      window.dispatchEvent(new Event("ui:mode"));
    });
  });
}

// ---- chrome (tabbar) ----
const TAB_ROUTES = ["#/home", "#/riwayat", "#/cari", "#/akun"];
function updateChrome() {
  const path = current();
  const u = window.__AUTH?.current();
  const tab = $("#tabbar");
  const onLogin = path === "#/login";
  tab.hidden = onLogin || !u;
  $("#modefab").classList.toggle("hide", onLogin && !u ? false : false); // selalu tampil
  $$("#tabbar > button[data-go]").forEach(b => b.classList.toggle("active", b.dataset.go === path));
  $("#view").classList.toggle("noTab", tab.hidden);
}

function wireNav() {
  $$("#tabbar > button[data-go]").forEach(b => b.addEventListener("click", () => go(b.dataset.go)));
  $("#fabScan").addEventListener("click", () => go("#/checkin"));
}

// ---- guard ----
function guard(fn, { roles } = {}) {
  return async (view) => {
    const u = window.__AUTH.current();
    if (!u) { go("#/login"); return; }
    if (roles && !roles.includes(u.role)) { toast("Akses khusus " + roles.join("/")); go("#/home"); return; }
    return fn(view);
  };
}

async function main() {
  initModeSwitcher();
  await Promise.all([initAuth(), initData()]);
  const { Auth } = await import("./auth.js");
  window.__AUTH = Auth;

  // routes
  route("#/login", loginPage);
  route("#/home", guard(homePage));
  route("#/cari", guard(cariPage));
  route("#/kendaraan", guard(kendaraanPage));
  route("#/checkin", guard(checkinPage));
  route("#/status", guard(statusPage));
  route("#/riwayat", guard(riwayatPage));
  route("#/akun", guard(akunPage));
  route("#/petugas", guard(petugasPage, { roles: ["petugas", "admin"] }));
  route("#/admin", guard(adminPage, { roles: ["admin"] }));
  setNotFound((v) => { v.innerHTML = '<div class="empty"><div class="ic">🤔</div><p>Halaman tidak ditemukan</p></div>'; });

  wireNav();
  window.addEventListener("hashchange", updateChrome);
  window.addEventListener("auth:changed", () => { updateChrome(); });

  // reaktif: kalau status auth berubah, arahkan
  Auth.onChange((u) => {
    const path = current();
    if (!u && path !== "#/login") go("#/login");
    if (u && path === "#/login") go("#/home");
    updateChrome();
  });

  if (!location.hash) location.hash = "#/home";
  startRouter();
  updateChrome();
}

main();
