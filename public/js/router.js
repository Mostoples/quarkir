// ============================================================
// Router — hash sederhana (#/home, #/cari, ...)
// ============================================================
const routes = {};
let notFound, currentCleanup;

export function route(path, handler) { routes[path] = handler; }
export function setNotFound(fn) { notFound = fn; }
export function go(hash) { if (location.hash === hash) render(); else location.hash = hash; }

export function current() { return (location.hash || "#/home").split("?")[0]; }
export function queryParam(k) {
  const q = (location.hash.split("?")[1] || ""); return new URLSearchParams(q).get(k);
}

export async function render() {
  const path = current();
  const handler = routes[path] || notFound;
  if (currentCleanup) { try { currentCleanup(); } catch {} currentCleanup = null; }
  const view = document.getElementById("view");
  view.innerHTML = "";
  view.scrollTop = 0;
  const cleanup = await handler(view);
  if (typeof cleanup === "function") currentCleanup = cleanup;
}

export function startRouter() {
  window.addEventListener("hashchange", render);
  render();
}
