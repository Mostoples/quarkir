import { h, rupiah } from "../util.js";
import { DB } from "../data.js";
import { pageHeader } from "../parts.js";
import { go } from "../router.js";
import { createMap, lotMarker } from "../map.js";

export default async function cariPage(view) {
  const mapEl = h("#map");
  const list = h("div.pad");
  view.append(
    pageHeader("Cari Parkir"),
    h("section.map-wrap", {}, [mapEl]),
    h("section.section", {}, [h(".head", {}, [h("h2", { text: "Live Slot Terdekat" })])]),
    list,
  );

  let map, markers = [];
  try { map = await createMap(mapEl); } catch { mapEl.innerHTML = '<div class="empty">Peta gagal dimuat (cek koneksi).</div>'; }

  const unsub = DB.locations.subscribe((locs) => {
    // markers
    if (map) { markers.forEach(m => map.removeLayer(m)); markers = locs.map(l => lotMarker(map, l, (lot) => map.flyTo([lot.lat, lot.lng], 16))); }
    // list
    list.innerHTML = "";
    locs.forEach(l => {
      const avail = (l.capMotor - l.occMotor) + (l.capCar - l.occCar);
      const cap = l.capMotor + l.capCar, pct = Math.round(((cap - avail) / cap) * 100);
      const full = avail <= 0;
      list.append(h(".li", {}, [
        h(".ic", { text: full ? "🚧" : "🅿️" }),
        h("div", { style: "flex:1" }, [
          h(".t", { text: l.name }),
          h(".s", { text: "Motor " + (l.capMotor - l.occMotor) + " · Mobil " + (l.capCar - l.occCar) + " · " + rupiah(l.tarif.motor) + "/jam" }),
          h(".bar", {}, [h("i" + (full ? ".full" : ""), { style: "width:" + pct + "%" })]),
        ]),
        h(".end", {}, [
          h("div", { style: "font-weight:800;color:" + (full ? "var(--danger)" : "var(--blue-700)"), text: String(avail) }),
          h(".s", { text: "slot" }),
          h("button.btn.sm", { style: "margin-top:6px", disabled: full, onclick: () => go("#/checkin?loc=" + l.id) }, full ? "Penuh" : "Check-in"),
        ]),
      ]));
    });
  });
  return () => unsub && unsub();
}
