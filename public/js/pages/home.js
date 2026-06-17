import { h, $, rupiah, durasiLabel, toast } from "../util.js";
import { DB } from "../data.js";
import { Auth } from "../auth.js";
import { appHeader } from "../parts.js";
import { go } from "../router.js";

const QUICK = [
  { e: "📷", t: "Scan QR", go: "#/checkin", accent: true },
  { e: "🅿️", t: "Cari Parkir", go: "#/cari" },
  { e: "🚗", t: "Kendaraan", go: "#/kendaraan" },
  { e: "🎫", t: "E-Ticket", go: "#/status" },
  { e: "🧾", t: "Riwayat", go: "#/riwayat" },
  { e: "💳", t: "Top Up", go: "#/akun" },
  { e: "🎁", t: "Promo", go: "#/home" },
  { e: "🆘", t: "Bantuan", go: "#/akun" },
];

export default async function homePage(view) {
  const u = Auth.current();
  const bal = await Promise.resolve(DB.wallet.get(u.uid));

  const activeSlot = h("div");           // banner sesi aktif
  const nearby = h(".cards");            // kartu terdekat
  const dots = h(".dots");

  view.append(
    appHeader({ title: `Hi, ${u.name} 👋`, sub: "Mau parkir di mana hari ini?", points: 0 }),
    h(".wallet", {}, [
      h(".wlogo", { text: "QuPay" }),
      h(".wname", {}, [document.createTextNode("QuPay"), h("small", { text: "Saldo parkir cashless" })]),
      h(".bal", { onclick: () => go("#/akun") }, [h("small", { text: "Saldo" }), document.createTextNode(" "), h("b", { text: rupiah(bal).replace("Rp ", "Rp ") })]),
    ]),
    activeSlot,
    h("nav.grid", {}, QUICK.map(q =>
      h("button.tile", { onclick: () => go(q.go) }, [h("span.ic" + (q.accent ? ".accent" : ""), { text: q.e }), h("span", { text: q.t })])
    )),
    promoSection(dots),
    h("section.section", {}, [
      h(".head", {}, [h("h2", { text: "Parkir Terdekat" }), h("a", { onclick: () => go("#/cari") }, "Peta")]),
      nearby,
    ]),
  );

  // sesi aktif
  const unsubS = DB.sessions.subscribeActive(u.uid, (s) => {
    activeSlot.innerHTML = "";
    if (!s) return;
    activeSlot.append(h("section.section", {}, [
      h(".li", { style: "background:linear-gradient(135deg,var(--blue-600),var(--cyan-500));color:#fff;cursor:pointer", onclick: () => go("#/status") }, [
        h(".ic", { style: "background:rgba(255,255,255,.25)", text: "⏱️" }),
        h("div", {}, [h(".t", { style: "color:#fff", text: "Parkir aktif · " + s.locationName }),
          h(".s", { style: "color:rgba(255,255,255,.85)", text: s.vehicle.plate + " · ketuk untuk lihat status" })]),
        h(".end", {}, [h("span", { style: "font-size:1.4rem", text: "›" })]),
      ]),
    ]));
  });

  // lokasi terdekat (live)
  const unsubL = DB.locations.subscribe((locs) => {
    nearby.innerHTML = "";
    locs.slice(0, 5).forEach((l, i) => {
      const avail = (l.capMotor - l.occMotor) + (l.capCar - l.occCar);
      nearby.append(h(".pcard", { onclick: () => go("#/cari") }, [
        h(".thumb", {}, [document.createTextNode(["🏬", "🛍️", "🏯", "🏛️", "🎓"][i % 5]),
          h("span.badge", { text: avail > 5 ? "TERSEDIA" : (avail > 0 ? "TERBATAS" : "PENUH") })]),
        h(".body", {}, [h("h4", { text: l.name }),
          h(".meta", {}, [h("span", { text: "🅿️ " + avail + " slot" }), h("span.price", { text: rupiah(l.tarif.motor) + "/jam" })])]),
      ]));
    });
  });

  return () => { unsubS && unsubS(); unsubL && unsubL(); };
}

function promoSection(dots) {
  const slides = [
    { kik: "BARU", h: 'Cashback <b>50%</b>', p: "Semua transaksi parkir pakai QuPay · 27 Feb – 31 Agu 2026" },
    { kik: "HEMAT", h: 'Gratis Biaya<br>Admin', p: "Top up QuPay pertama tanpa biaya tambahan", alt: true },
    { kik: "POIN", h: '2× Poin', p: "Check-in di kantong parkir favoritmu akhir pekan ini" },
  ];
  const car = h(".carousel", {}, slides.map(s =>
    h(".promo" + (s.alt ? ".alt" : ""), {}, [h("span.blob"), h("span.kik", { text: s.kik }), h("h3", { html: s.h }), h("p", { text: s.p })])
  ));
  dots.append(...slides.map((_, i) => h("i" + (i === 0 ? ".on" : ""))));
  car.addEventListener("scroll", () => {
    const i = Math.round(car.scrollLeft / (car.scrollWidth / slides.length));
    [...dots.children].forEach((d, n) => d.classList.toggle("on", n === Math.min(i, slides.length - 1)));
  });
  return h("section.section", {}, [h(".head", {}, [h("h2", { text: "Promo" }), h("a", {}, "Lihat semua")]), car, dots]);
}
