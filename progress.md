# 📋 Progress Log — QuParkir

> **Implementasi QuParkir: Pengembangan Sistem Parkir Digital Berbasis E-Ticket dan QR Code untuk Meningkatkan Transparansi Retribusi dan Mengurangi Praktik Parkir Ilegal di Kota Surakarta**

Aturan penulisan log (WAJIB dibaca — mencegah konflik git antar device):

1. **Setiap device hanya menulis di SECTION miliknya sendiri.** Device Riset → bagian `🔬 Riset`. Device Developer → bagian `💻 Developer`. Bagian bersama `🤝 Shared` hanya diubah saat sinkronisasi terjadwal.
2. **Selalu `git pull --rebase` sebelum menulis**, dan **commit + push segera setelah selesai**. Jangan menumpuk perubahan progress berhari-hari.
3. Format entri (paling baru di ATAS section masing-masing):
   `- [YYYY-MM-DD HH:MM] (Device <A|B>) <ringkasan singkat> — <branch> — status: ✅done / 🚧wip / ⛔blocked`
4. Jangan mengedit entri orang lain. Tambah saja entri baru.

---

## 🤝 Shared (milestone & keputusan besar)

- [2026-06-17] (Setup) Repo GitHub `Mostoples/quarkir` + Firebase project `quparkir` terhubung. Hosting, Firestore, Auth (Google/Email/Anonymous) aktif di console. — status: ✅done
- [2026-06-17] (Setup) Batch plan dua-device, SOP workflow, dan sample UI dibuat. — status: ✅done
- [2026-06-17] (Setup) **Sample UI DISETUJUI.** Home direvisi mengikuti layout acuan PARKEE (header sapaan+poin, kartu saldo QuPay, grid menu, carousel promo, kartu terdekat, bottom nav + FAB scan) dengan palet biru + multimode. **Gate terbuka → full-stack build boleh dimulai.** — status: ✅done

---

## 🔬 Riset (Device A — Peneliti / Systematic Literature Review)

<!-- Tulis entri terbaru tepat di bawah baris ini -->
- [2026-06-17] (Device A) Protokol SLR disiapkan di docs/RESEARCH.md (lihat). Belum mulai screening. — branch: `riset` — status: 🚧wip

---

## 💻 Developer (Device B — Full-stack)

<!-- Tulis entri terbaru tepat di bawah baris ini -->
- [2026-06-17] (Device B) **APP FULL-STACK SELESAI (batch 1) di public/.** Shell + design system (palet biru, 3 mode), router hash, data layer (DEMO localStorage + Firebase Firestore satu antarmuka), auth (Google/Email/Anonymous), peta OSM. Halaman: login, home, cari, kendaraan, check-in (anti double-parking), status realtime + e-ticket QR + smart tarif, checkout+struk, riwayat, akun (top up + ganti peran), petugas (verifikasi), admin (income/kapasitas/rekap). firestore.rules diperketat. App jalan tanpa config (mode DEMO). 19 modul lolos node --check. — branch: `dev` — status: ✅done
- [2026-06-17] (Device B) TODO berikutnya: isi js/config.js dgn Web SDK config quparkir untuk aktifkan Firebase asli; integrasi ikon Lottie Flaticon; pembayaran QRIS nyata. — branch: `dev` — status: 🚧wip

---

## 🐞 Issues / Blockers aktif

- [2026-06-17] Service account key `7942ffc758` terekspos di chat → **WAJIB di-rotate** di Google Cloud Console sebelum dipakai untuk CI. — status: ⛔blocked (action: user)
