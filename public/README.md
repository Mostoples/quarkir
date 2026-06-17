# QuParkir — Aplikasi (public/)

Frontend native (HTML/CSS/JS modular), Firebase (Auth/Firestore/Hosting), Leaflet+OSM, multimode UI.

## Menjalankan lokal
```bash
firebase serve            # http://localhost:5000
# atau buka langsung public/index.html di browser (mode demo tetap jalan)
```

## Mode DEMO vs Firebase
- **DEMO (default):** semua data di `localStorage`. App langsung berfungsi penuh tanpa konfigurasi.
- **Firebase:** isi `js/config.js` dengan **Web SDK config** proyek `quparkir`
  (Console → Project settings → Your apps → SDK setup). App otomatis beralih ke
  Firestore + Firebase Auth (Google/Email/Anonymous). Service account TIDAK dipakai di sisi klien.

## Struktur
```
index.html            shell + bottom nav + mode switcher
assets/css/           tokens.css (palet biru + 3 mode) · app.css (komponen)
assets/icons/         CREDITS.md (atribusi Flaticon)
js/
  config.js  firebase web config (placeholder) + flag USE_FIREBASE
  data.js    data layer (DEMO localStorage + Firestore) — satu antarmuka
  auth.js    auth (DEMO + Firebase): Google/Email/Anonymous
  map.js     Leaflet + OpenStreetMap
  qr.js      generate (qrcodejs) + scan (html5-qrcode), dengan fallback
  router.js  hash router  · util.js helper  · parts.js header
  app.js     bootstrap, guard role, nav
  pages/     login, home, cari, kendaraan, checkin, status, riwayat, akun, petugas, admin
```

## Fitur yang sudah jalan
Pelanggan: login (3 metode) · home dinamis · cari parkir (peta + live slot) · kendaraan (CRUD) ·
check-in (anti double-parking) · status realtime + e-ticket QR + smart tarif · checkout + struk ·
riwayat · top up saldo (demo).
Petugas: monitoring kendaraan aktif + verifikasi.
Admin: pendapatan hari ini · keterisian · kelola kapasitas kantong parkir · rekap transaksi.

> Ganti peran cepat untuk demo: halaman **Akun → Ganti Peran**.
