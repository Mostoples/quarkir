import { h, $, toast, modal } from "../util.js";
import { DB } from "../data.js";
import { Auth } from "../auth.js";
import { pageHeader } from "../parts.js";

export default async function kendaraanPage(view) {
  const u = Auth.current();
  const listEl = h("div.pad");

  const addForm = () => {
    let type = "motor";
    const plate = h("input.input", { placeholder: "AD 1234 XY", style: "text-transform:uppercase" });
    const name = h("input.input", { placeholder: "mis. Vario merah (opsional)" });
    const seg = h(".seg", {}, ["motor", "mobil"].map(t =>
      h("button" + (t === "motor" ? ".active" : ""), { onclick: (e) => { type = t; [...seg.children].forEach(c => c.classList.remove("active")); e.currentTarget.classList.add("active"); } },
        [h("span.e", { text: t === "motor" ? "🏍️" : "🚙" }), h("span", {}, [t[0].toUpperCase() + t.slice(1)])])
    ));
    const body = h("div", {}, [
      h("label.field", {}, [h("span", { text: "Jenis kendaraan" }), seg]),
      h("label.field", {}, [h("span", { text: "Nomor polisi" }), plate]),
      h("label.field", {}, [h("span", { text: "Nama kendaraan" }), name]),
      h("button.btn", { onclick: async () => {
        if (!plate.value.trim()) return toast("Isi nomor polisi", "err");
        await DB.vehicles.add(u.uid, { type, plate: plate.value.toUpperCase().trim(), name: name.value.trim() });
        $("#modalHost").innerHTML = ""; toast("Kendaraan ditambahkan", "ok");
      } }, "Simpan Kendaraan"),
    ]);
    modal("Tambah Kendaraan", body);
  };

  view.append(
    pageHeader("Kendaraan Saya"),
    h("div.pad", {}, [h("button.btn", { onclick: addForm }, "＋ Tambah Kendaraan")]),
    listEl,
  );

  const unsub = DB.vehicles.subscribe(u.uid, (vs) => {
    listEl.innerHTML = "";
    if (!vs.length) { listEl.append(h(".empty", {}, [h(".ic", { text: "🚗" }), h("p", { text: "Belum ada kendaraan. Tambahkan untuk mempermudah check-in." })])); return; }
    vs.forEach(v => listEl.append(h(".li", {}, [
      h(".ic", { text: v.type === "mobil" ? "🚙" : "🏍️" }),
      h("div", { style: "flex:1" }, [h(".t", { text: v.plate }), h(".s", { text: (v.name || "—") + " · " + v.type })]),
      h("button.btn.sm.danger", { onclick: async () => { await DB.vehicles.remove(u.uid, v.id); toast("Dihapus"); } }, "Hapus"),
    ])));
  });
  return () => unsub && unsub();
}
