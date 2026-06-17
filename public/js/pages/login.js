import { h, $, toast, modal } from "../util.js";
import { Auth } from "../auth.js";

export default function loginPage(view) {
  const doLogin = async (fn, label) => {
    try { await fn(); toast("Berhasil masuk", "ok"); }
    catch (e) { toast(e.message || "Gagal masuk: " + label, "err"); }
  };

  const emailForm = () => {
    const email = h("input.input", { type: "email", placeholder: "email@contoh.com" });
    const pass = h("input.input", { type: "password", placeholder: "kata sandi" });
    const name = h("input.input", { placeholder: "nama (untuk daftar)" });
    let mode = "login";
    const body = h("div", {}, [
      h("label.field", {}, [h("span", { text: "Email" }), email]),
      h("label.field", {}, [h("span", { text: "Kata sandi" }), pass]),
      h("label.field", {}, [h("span", { text: "Nama (opsional, saat daftar)" }), name]),
      h("button.btn", { onclick: async () => {
        if (!email.value || !pass.value) return toast("Lengkapi email & sandi", "err");
        try {
          if (mode === "login") await Auth.loginEmail(email.value, pass.value);
          else await Auth.register(email.value, pass.value, name.value);
          $("#modalHost").innerHTML = "";
        } catch (e) { toast(e.message, "err"); }
      } }, "Masuk / Daftar"),
      h("p.center.muted", { html: "<small>Mode demo: email & sandi apa pun diterima.</small>" }),
    ]);
    modal("Email & Password", body);
  };

  view.append(
    h(".auth", {}, [
      h(".logo", { text: "🅿️" }),
      h("h1", { html: 'Selamat datang di<br>QuParkir' }),
      h("p.lead", { text: "Parkir digital, transparan & realtime untuk Kota Surakarta." }),
      h("button.login", { onclick: () => doLogin(() => Auth.loginGoogle(), "Google") }, [
        h("span.e", { text: "🟦" }), h("span", {}, [h("b", { text: "Lanjut dengan Google" }), h("small", { text: "Sekali klik, aman" })]),
      ]),
      h("button.login", { onclick: emailForm }, [
        h("span.e", { text: "✉️" }), h("span", {}, [h("b", { text: "Email & Password" }), h("small", { text: "Punya akun terdaftar" })]),
      ]),
      h(".sep", {}, "atau"),
      h("button.login", { onclick: () => doLogin(() => Auth.loginAnon(), "Tamu") }, [
        h("span.e", { text: "👤" }), h("span", {}, [h("b", { text: "Masuk sebagai Tamu" }), h("small", { text: "Coba tanpa daftar" })]),
      ]),
      h("p.center", { style: "opacity:.7;margin-top:18px;font-size:.78rem", text: "© 2026 QuParkir · Surakarta" }),
    ])
  );
  $("#view").classList.add("noTab");
}
