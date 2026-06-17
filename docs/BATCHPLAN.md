# 🅿️ BATCH PLAN — QuParkir

**Judul Proyek:** Implementasi QuParkir: Pengembangan Sistem Parkir Digital Berbasis E-Ticket dan QR Code untuk Meningkatkan Transparansi Retribusi dan Mengurangi Praktik Parkir Ilegal di Kota Surakarta

**Metode pengembangan:** R&D model **ADDIE** (Analysis → Design → Development → Implementation → Evaluation).
**Periode:** Februari – Agustus 2026 (sesuai jadwal proposal).

---

## 1. Ringkasan & Tujuan

QuParkir adalah sistem digital monitoring parkir jalan berbasis **realtime** dengan tiga dashboard: **Pelanggan**, **Petugas**, dan **Admin**. Inti nilai: transparansi tarif, e-ticket QR code, pembayaran cashless, dan dashboard monitoring pemerintah.

Rencana ini dibagi ke **dua peran/2 device** yang berjalan paralel tanpa konflik:

| Peran | Device | Fokus | Output utama |
|-------|--------|-------|--------------|
| 🔬 **Peneliti** | Device A | Systematic Literature Review (SLR) → temukan **research gap** & **novelty** | `docs/RESEARCH.md`, naskah BAB II final, peta gap→fitur |
| 💻 **Full-stack Developer** | Device B | Bangun aplikasi native (JS/HTML/CSS) + Firebase + OSM | App jalan, deploy ke Firebase Hosting |

> ⚠️ **Gate:** Pekerjaan full-stack (Sprint D2+) **baru boleh lanjut setelah sample UI disetujui pemilik proyek.**

---

## 2. Tech Stack (final)

| Layer | Teknologi | Catatan |
|-------|-----------|---------|
| Frontend | **HTML5 + CSS3 + JavaScript (ES Modules) native** | Tanpa framework (React/Vue) |
| Map | **Leaflet.js + OpenStreetMap** | Tiles OSM, marker kantong parkir |
| Auth | **Firebase Authentication** | Google, Email/Password, Anonymous (sudah aktif di console) |
| Database | **Cloud Firestore** | Realtime listeners untuk live slot & monitoring |
| Hosting | **Firebase Hosting** | Auto-deploy via GitHub Actions |
| Animasi ikon | **Flaticon Animated Icons (Lottie/GIF)** | `assets/icons/` — wajib atribusi (lisensi free) |
| Gaya UI | **Multimode: Glassmorphism · Aurora · Neumorphism** | Theme switcher runtime |
| QR | **html5-qrcode** (scan) + **qrcode** (generate) | Via CDN/lib lokal |
| Pembayaran | **QRIS / e-wallet** (simulasi pada prototipe) | Integrasi nyata = fase lanjut |

**Palet warna:** mengacu lampiran *Blue Color Palette* → lihat `docs/ARCHITECTURE.md §UI Tokens`.

---

## 3. Struktur Folder Target

```
QuParkir/
├─ .github/workflows/deploy.yml      # auto-deploy ke Firebase Hosting
├─ docs/                              # 🔬 milik Device A (Riset) + arsitektur
│  ├─ BATCHPLAN.md  (file ini)
│  ├─ WORKFLOW.md   (SOP 2 device)
│  ├─ RESEARCH.md   (protokol SLR, gap, novelty)
│  └─ ARCHITECTURE.md (data model, security rules, UI system)
├─ design/sample-ui/                  # sample UI (gate approval)
├─ public/                            # 💻 milik Device B — yang di-deploy
│  ├─ index.html
│  ├─ assets/ (icons, img, css, js)
│  ├─ js/ (modules: auth, db, map, ui, qr ...)
│  └─ pages/ (pelanggan/, petugas/, admin/)
├─ scripts/                           # sync.ps1 / sync.sh (one-command save+push)
├─ firestore.rules · firestore.indexes.json · firebase.json · .firebaserc
└─ progress.md                        # log progress (lihat aturan di file)
```

**Pemisahan kepemilikan file = kunci anti-konflik:** Riset hanya menyentuh `docs/` & `research/`; Developer hanya `public/`, `design/`, `scripts/`, config. (Detail di `WORKFLOW.md`.)

---

## 4. Peta Fitur → Modul (acuan: lampiran "Fitur Lengkap QuParkir")

### Dashboard Pelanggan
A. Register & Login · B. Manajemen Kendaraan · C. Check-in (scan QR) · D. Status Parkir Aktif · E. Anti Double-Parking · F. Check-out · G. Live Slot Availability · H. Smart Tarif · I. Riwayat · J. Pembayaran Cashless · K. Notifikasi Durasi · L. Hubungi Petugas

### Dashboard Petugas
A. Registrasi Petugas · B. QR Identitas (KTA) · C. Monitoring Kendaraan Aktif · D. Status Verifikasi · E. Verifikasi Kendaraan · F. Validasi Checkout · G. Monitoring Slot · H. Total Kendaraan Aktif

### Dashboard Admin
A. Monitoring Income · B. Monitoring Kantong Parkir · C. Pengaturan Kapasitas · D. Statistik Kendaraan · E. Rekap Transaksi · F. Monitoring Petugas · G. Generate QR Petugas · H. Total Kendaraan Realtime

---

## 5. Roadmap & Sprint (selaras Jadwal Proposal)

| Sprint | Tanggal (proposal) | 🔬 Riset (Device A) | 💻 Developer (Device B) |
|--------|--------------------|---------------------|--------------------------|
| **S0 Setup** | s/d 17 Jun 2026 | Susun protokol SLR | Setup repo, CI/CD, **sample UI** ✅gate |
| **S1 Analysis** | 1–21 Feb | Jalankan SLR (PRISMA), identifikasi gap | Finalisasi arsitektur, data model, design system |
| **S2 Design** | 22 Feb–24 Mar | Rumuskan **novelty** + map gap→fitur | Bangun UI shell, theme multimode, auth, routing |
| **S3 Development** | 25 Mar–7 Mei | Tulis BAB II & metodologi | Fitur Pelanggan → Petugas → Admin + Firestore + OSM + QR |
| **S4 Testing** | 8 Mei–14 Jul | Validasi sistem vs indikator riset | Uji fungsional, perbaikan, optimasi realtime |
| **S5 Evaluation** | 15 Jul–31 Agu | Evaluasi formatif & sumatif, laporan | Hardening, deploy final, dokumentasi |

Rincian tugas per peran: `docs/RESEARCH.md` dan `docs/ARCHITECTURE.md`.

---

## 6. Definition of Done (DoD)

- Setiap fitur: berfungsi di **desktop & mobile**, ter-deploy, dicatat di `progress.md`.
- Tidak ada secret ter-commit (cek `.gitignore`).
- Security rules Firestore diperketat sebelum production (bukan mode `allow if false` permanen — lihat ARCHITECTURE).
- Setiap merge ke `main` lolos CI dan otomatis ter-deploy.

---

## 7. Risiko & Mitigasi

| Risiko | Mitigasi |
|--------|----------|
| Konflik git antar device | Pemisahan kepemilikan file + branch per peran + `pull --rebase` (WORKFLOW.md) |
| Service account bocor | Sudah di-`.gitignore`; rotate key; pakai GitHub Secret untuk CI |
| Biaya Firebase membengkak | Tetap di paket Spark; hindari Cloud Functions berbayar di prototipe |
| Lisensi Flaticon | Simpan atribusi di `public/assets/icons/CREDITS.md` |
| Akurasi data realtime | Pakai Firestore `onSnapshot`, transaksi atomik untuk check-in/out |
