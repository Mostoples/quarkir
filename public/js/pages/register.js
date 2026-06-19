import { h, $, toast } from "../util.js";
import { Auth } from "../auth.js";
import { go } from "../router.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function registerPage(view) {
  const name = h("input.input", { placeholder: "Nama lengkap", autocomplete: "name" });
  const email = h("input.input", { type: "email", placeholder: "email@contoh.com", autocomplete: "email" });
  const pass = h("input.input", { type: "password", placeholder: "min. 6 karakter", autocomplete: "new-password" });
  const conf = h("input.input", { type: "password", placeholder: "ulangi kata sandi", autocomplete: "new-password" });
  const btn = h("button.btn", { onclick: daftar }, "Daftar");

  async function daftar() {
    const n = name.value.trim(), e = email.value.trim(), p = pass.value, c = conf.value;
    if (!n) return toast("Isi nama Anda", "err");
    if (!EMAIL_RE.test(e)) return toast("Format email tidak valid", "err");
    if (p.length < 6) return toast("Kata sandi minimal 6 karakter", "err");
    if (p !== c) return toast("Konfirmasi kata sandi tidak cocok", "err");
    btn.disabled = true;
    try { await Auth.register(e, p, n); toast("Akun berhasil dibuat 🎉", "ok"); }
    catch (err) { toast(err.message || "Gagal mendaftar", "err"); btn.disabled = false; }
  }
  [name, email, pass, conf].forEach(i => i.addEventListener("keydown", e => { if (e.key === "Enter") daftar(); }));

  view.append(h(".auth", {}, [
    h(".logo", { text: "🅿️" }),
    h("h1", { text: "Daftar" }),
    h("p.lead", { text: "Buat akun QuParkir untuk mulai parkir digital." }),

    h(".card.pad", { style: "margin-bottom:16px" }, [
      h("label.field", {}, [h("span", { text: "Nama" }), name]),
      h("label.field", {}, [h("span", { text: "Email" }), email]),
      h("label.field", {}, [h("span", { text: "Kata sandi" }), pass]),
      h("label.field", { style: "margin-bottom:14px" }, [h("span", { text: "Konfirmasi kata sandi" }), conf]),
      btn,
    ]),

    h("p.center", { html: "Sudah punya akun?" }),
    h("button.btn.ghost", { onclick: () => go("#/login") }, "Masuk ke Akun"),
    h("p.center", { style: "opacity:.7;margin-top:16px;font-size:.78rem", html: "<small>Mode demo: data akun tersimpan di perangkat ini (localStorage).</small>" }),
  ]));
  $("#view").classList.add("noTab");
}
