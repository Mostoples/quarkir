// ============================================================
// Map — Leaflet + OpenStreetMap
// (Leaflet di-load via <link>/<script> di index? Tidak — kita pakai global L
//  dari CSS + script CDN. Script JS di-load on-demand di sini.)
// ============================================================
let leafletReady;
function loadLeaflet() {
  if (window.L) return Promise.resolve();
  leafletReady ||= new Promise((res, rej) => {
    const s = document.createElement("script");
    s.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    s.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
    s.crossOrigin = "";
    s.onload = res; s.onerror = rej;
    document.head.append(s);
  });
  return leafletReady;
}

const SURAKARTA = [-7.5755, 110.8243];

export async function createMap(el, center = SURAKARTA, zoom = 13) {
  await loadLeaflet();
  const map = L.map(el, { zoomControl: true, attributionControl: true }).setView(center, zoom);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19, attribution: "&copy; OpenStreetMap",
  }).addTo(map);
  setTimeout(() => map.invalidateSize(), 200);
  return map;
}

export function lotMarker(map, lot, onClick) {
  const avail = (lot.capMotor - lot.occMotor) + (lot.capCar - lot.occCar);
  const full = avail <= 0;
  const icon = L.divIcon({
    className: "", iconSize: [34, 40], iconAnchor: [17, 40], popupAnchor: [0, -38],
    html: `<div class="pin ${full ? "full" : ""}"><div class="body"><span>P</span></div></div>`,
  });
  const m = L.marker([lot.lat, lot.lng], { icon }).addTo(map);
  m.bindPopup(`<b>${lot.name}</b><br>Sisa slot: <b>${avail}</b><br>Motor ${lot.capMotor - lot.occMotor} · Mobil ${lot.capCar - lot.occCar}`);
  if (onClick) m.on("click", () => onClick(lot));
  return m;
}
