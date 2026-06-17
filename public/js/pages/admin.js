import { h, $, rupiah, toast, modal } from "../util.js";
import { DB } from "../data.js";
import { pageHeader } from "../parts.js";

export default async function adminPage(view) {
  const statEl = h(".stats");
  const locEl = h("div.pad");
  const txEl = h("div.pad");
  view.append(
    pageHeader("Dashboard Admin", { back: "#/akun" }),
    h("div.pad", {}, [statEl]),
    h("section.section", {}, [h(".head", {}, [h("h2", { text: "Kantong Parkir" })])]), locEl,
    h("section.section", {}, [h(".head", {}, [h("h2", { text: "Rekap Transaksi" })])]), txEl,
  );

  let locs = [], txs = [];
  const startToday = new Date(); startToday.setHours(0, 0, 0, 0);

  const paintStats = () => {
    const incomeToday = txs.filter(t => t.paidAt >= startToday.getTime()).reduce((a, b) => a + (b.amount || 0), 0);
    const totalCap = locs.reduce((a, l) => a + l.capMotor + l.capCar, 0);
    const totalOcc = locs.reduce((a, l) => a + l.occMotor + l.occCar, 0);
    const occPct = totalCap ? Math.round((totalOcc / totalCap) * 100) : 0;
    statEl.innerHTML = "";
    [["Pendapatan hari ini", rupiah(incomeToday)], ["Kendaraan aktif", String(totalOcc)], ["Keterisian", occPct + "%"]]
      .forEach(([l, n]) => statEl.append(h(".stat", {}, [h(".num", { style: "font-size:1.15rem", text: n }), h(".lbl", { text: l })])));
  };

  const paintLocs = () => {
    locEl.innerHTML = "";
    locs.forEach(l => {
      const cap = l.capMotor + l.capCar, occ = l.occMotor + l.occCar, pct = Math.round((occ / cap) * 100);
      locEl.append(h(".li", {}, [
        h(".ic", { text: "🅿️" }),
        h("div", { style: "flex:1" }, [
          h(".t", { text: l.name }),
          h(".s", { text: "Terisi " + occ + " / " + cap + " (" + pct + "%)" }),
          h(".bar", {}, [h("i" + (pct >= 95 ? ".full" : ""), { style: "width:" + pct + "%" })]),
        ]),
        h("button.btn.sm", { onclick: () => editCap(l) }, "Kapasitas"),
      ]));
    });
  };

  const editCap = (l) => {
    const m = h("input.input", { type: "number", value: l.capMotor });
    const c = h("input.input", { type: "number", value: l.capCar });
    modal("Kapasitas — " + l.name, h("div", {}, [
      h("label.field", {}, [h("span", { text: "Slot Motor" }), m]),
      h("label.field", {}, [h("span", { text: "Slot Mobil" }), c]),
      h("button.btn", { onclick: async () => { await DB.locations.update(l.id, { capMotor: +m.value, capCar: +c.value }); $("#modalHost").innerHTML = ""; toast("Kapasitas diperbarui", "ok"); } }, "Simpan"),
    ]));
  };

  const paintTx = () => {
    txEl.innerHTML = "";
    if (!txs.length) { txEl.append(h(".empty", {}, [h(".ic", { text: "🧾" }), h("p", { text: "Belum ada transaksi." })])); return; }
    txs.slice(0, 20).forEach(t => {
      const loc = locs.find(l => l.id === t.locationId);
      txEl.append(h(".li", {}, [
        h(".ic", { text: "💳" }),
        h("div", { style: "flex:1" }, [h(".t", { text: rupiah(t.amount) }), h(".s", { text: (loc?.name || t.locationId) + " · " + t.method.toUpperCase() })]),
        h(".end", {}, [h(".s", { text: new Date(t.paidAt).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }) })]),
      ]));
    });
  };

  const unsubL = DB.locations.subscribe((x) => { locs = x; paintStats(); paintLocs(); paintTx(); });
  const unsubT = DB.transactions.subscribe((x) => { txs = x; paintStats(); paintTx(); });
  return () => { unsubL && unsubL(); unsubT && unsubT(); };
}
