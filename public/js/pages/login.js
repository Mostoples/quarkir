import { h, $, toast } from "../util.js";
import { Auth } from "../auth.js";
import { go } from "../router.js";

export default function loginPage(view) {
  const email = h("input.input", { type: "email", placeholder: "email@contoh.com", autocomplete: "email" });
  const pass = h("input.input", { type: "password", placeholder: "kata sandi", autocomplete: "current-password" });
  const btn = h("button.btn", { onclick: masuk }, "Masuk");

  async function masuk() {
    const e = email.value.trim(), p = pass.value;
    if (!e || !p) return toast("Lengkapi email & kata sandi", "err");
    btn.disabled = true;
    try { await Auth.loginEmail(e, p); toast("Berhasil masuk", "ok"); }
    catch (err) { toast(err.message || "Gagal masuk", "err"); btn.disabled = false; }
  }
  async function quick(fn, label) {
    try { await fn(); toast("Berhasil masuk", "ok"); }
    catch (err) { toast(err.message || "Gagal: " + label, "err"); }
  }
  // Enter untuk submit
  [email, pass].forEach(i => i.addEventListener("keydown", e => { if (e.key === "Enter") masuk(); }));

  view.append(h(".auth", {}, [
    h(".logo", { text: "🅿️" }),
    h("h1", { text: "Masuk" }),
    h("p.lead", { text: "Selamat datang kembali di QuParkir." }),

    h(".card.pad", { style: "margin-bottom:16px" }, [
      h("label.field", {}, [h("span", { text: "Email" }), email]),
      h("label.field", { style: "margin-bottom:14px" }, [h("span", { text: "Kata sandi" }), pass]),
      btn,
    ]),

    h(".sep", {}, "atau"),
    h("button.login", { onclick: () => quick(() => Auth.loginGoogle(), "Google") }, [
      h("span.e", { text: "🟦" }), h("span", {}, [h("b", { text: "Lanjut dengan Google" }), h("small", { text: "Sekali klik" })]),
    ]),
    h("button.login", { onclick: () => quick(() => Auth.loginAnon(), "Tamu") }, [
      h("span.e", { text: "👤" }), h("span", {}, [h("b", { text: "Masuk sebagai Tamu" }), h("small", { text: "Coba tanpa daftar" })]),
    ]),

    h("p.center", { style: "margin-top:18px", html: 'Belum punya akun? ' }),
    h("button.btn.ghost", { onclick: () => go("#/register") }, "Daftar Akun Baru"),
    h("p.center", { style: "opacity:.7;margin-top:16px;font-size:.78rem", text: "© 2026 QuParkir · Surakarta" }),
  ]));
  $("#view").classList.add("noTab");
}
