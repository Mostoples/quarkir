// Komponen header yang dipakai ulang
import { h } from "./util.js";
import { go } from "./router.js";

export function appHeader({ title, sub, points, icons = true }) {
  return h(".header", {}, [
    h(".topline", {}, [
      h(".brand", {}, [h("span.pin", { text: "📍" }), "QuParkir"]),
      icons ? h(".h-icons", {}, [
        h("button", { title: "Voucher", onclick: () => go("#/home") }, "🎟️"),
        h("button", { title: "Notifikasi" }, [document.createTextNode("🔔"), h("span.dot")]),
      ]) : null,
    ]),
    h(".greet", {}, [
      h("div", {}, [h("h1", { text: title }), sub ? h("p", { text: sub }) : null]),
      points != null ? h("span.points", { html: "⭐ Poin : " + points }) : null,
    ]),
  ]);
}

export function pageHeader(title, { back = "#/home" } = {}) {
  return h(".header.simple", {}, [
    h(".topline", {}, [
      h("button.back", { onclick: () => go(back) }, "‹"),
      h("h1.title", { text: title }),
    ]),
  ]);
}
