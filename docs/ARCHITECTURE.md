# 💻 PERAN FULL-STACK — Arsitektur & Rencana Teknis (Device B)

Acuan: lampiran "Fitur Lengkap QuParkir", "Blue Color Palette", "UI Reference (Parking Finder App UI Kit)".

---

## 1. Arsitektur Sistem

```
[ Browser (HTML/CSS/JS native) ]
   │  Firebase Web SDK (modular, via CDN)
   ├─ Auth  (Google / Email / Anonymous)
   ├─ Firestore (onSnapshot realtime)
   └─ Leaflet + OpenStreetMap (peta kantong parkir)
        │
        ▼
[ Firebase ]  Auth · Firestore · Hosting
        │  push main → GitHub Actions
        ▼
[ Firebase Hosting ]  https://quparkir.web.app
```

Tanpa backend server sendiri — logika di client + **Firestore Security Rules** sebagai penjaga data. (Cloud Functions opsional di fase lanjut; butuh Blaze.)

## 2. Model Data Firestore

```
users/{uid}
  role: "pelanggan" | "petugas" | "admin"
  name, phone, email, createdAt

users/{uid}/vehicles/{vehicleId}
  plate, type: "motor"|"mobil", name?, createdAt

locations/{locationId}          # kantong parkir
  name, lat, lng, capacityMotor, capacityCar,
  occupiedMotor, occupiedCar,   # diperbarui realtime → Live Slot
  tariff: { motor:{firstHour, nextHour}, car:{...} }, active

sessions/{sessionId}            # sesi parkir (e-ticket)
  uid, vehicleId, plate, type, locationId,
  checkinAt, checkoutAt?, status: "active"|"done",
  qrToken,                      # token unik e-ticket
  amount?, paid: bool, verifiedBy?  # petugas yang verifikasi

officers/{officerId}
  uid, name, officerCode, locationId, qrToken, active

transactions/{txId}
  sessionId, uid, locationId, amount, method:"qris"|"ewallet",
  paidAt
```

**Aturan kunci (logika):**
- *Anti double-parking:* sebelum check-in, query `sessions where uid==me && status=="active"` → jika ada, tolak.
- *Live slot:* `available = capacity - occupied`, update via **transaksi atomik** saat check-in/out.
- *Smart tarif:* `amount = tarif(type, durasi)` dihitung saat checkout.

## 3. Firestore Security Rules (target — ganti `allow if false`)

Garis besar (akan ditulis lengkap di `firestore.rules`):
- `users/{uid}`: hanya pemilik boleh r/w dokumen & subkoleksi miliknya.
- `locations`: read publik (untuk live slot & peta); write hanya admin.
- `sessions`: pelanggan create/baca miliknya; petugas update verifikasi pada lokasinya; admin baca semua.
- `transactions`: create oleh pemilik sesi; baca pemilik + admin.
- Helper: `isSignedIn()`, `isOwner(uid)`, `hasRole('admin')` (role dibaca dari `users/{uid}`).

## 4. Struktur Frontend (`public/`)

```
public/
  index.html                 # shell + router hash (#/login, #/pelanggan, ...)
  assets/
    css/  tokens.css  base.css  glass.css  aurora.css  neumorph.css  components.css
    icons/  (Lottie/GIF Flaticon)  CREDITS.md
    img/
  js/
    firebase.js   # init app + export auth, db
    auth.js       # login Google/Email/Anon, guard role
    db.js         # helper Firestore + onSnapshot
    map.js        # Leaflet + OSM + marker lokasi
    qr.js         # generate & scan QR
    ui.js         # theme switcher (glass/aurora/neumorph), toasts
    router.js     # routing hash sederhana
  pages/
    pelanggan/ (home, kendaraan, checkin, status, riwayat, bayar)
    petugas/   (monitoring, verifikasi, slot)
    admin/     (income, kantong, kapasitas, statistik, rekap, petugas)
```

## 5. Design System — UI Tokens (palet Blue dari lampiran)

```css
:root{
  /* Blue palette (lampiran) */
  --blue-950:#0b1b4d; --blue-900:#13257a; --blue-800:#1e3a8a;
  --blue-700:#1d4ed8; --blue-600:#2563eb; --blue-500:#3b82f6;
  --blue-400:#60a5fa; --blue-300:#93c5fd; --blue-200:#bfdbfe;
  --cyan-500:#06b6d4; --cyan-400:#22d3ee; --sky-200:#e0f2fe;
  /* aksen & status */
  --accent:#06b6d4; --success:#22c55e; --warn:#f59e0b; --danger:#ef4444;
  --ink:#0b1220; --muted:#5b6b8c; --bg:#eaf2ff;
  /* radius & shadow */
  --r-lg:22px; --r-md:16px; --r-sm:12px;
}
```

**Tiga mode UI (multimode, switch runtime):**
| Mode | Ciri |
|------|------|
| **Glassmorphism** | panel `backdrop-filter: blur()`, border tipis, transparansi, highlight |
| **Aurora** | background gradien biru-cyan beranimasi (blob bergerak) |
| **Neumorphism** | tombol/kartu dengan dual shadow (light+dark) di permukaan solid |

Default tampilan menggabungkan **Aurora (background) + Glass (panel) + Neumorph (kontrol)**; switcher mengubah penekanan gaya.

## 6. Aksesibilitas & Responsif

- Mobile-first; breakpoint `≥768px` (tablet), `≥1024px` (desktop) → layout sidebar.
- Target sentuh ≥44px, kontras teks AA, `prefers-reduced-motion` mematikan animasi berat.
- Semua ikon animasi punya teks alternatif.

## 7. Urutan Build (setelah sample UI di-ACC)

1. Shell + tokens + theme switcher + router  (S2)
2. Auth (Google/Email/Anon) + guard role     (S2)
3. Peta OSM + daftar lokasi + live slot        (S3)
4. Manajemen kendaraan + check-in (QR) + anti double-parking (S3)
5. Status aktif + checkout + smart tarif + riwayat (S3)
6. Dashboard Petugas (verifikasi, KTA QR, monitoring) (S3)
7. Dashboard Admin (income, kapasitas, rekap, statistik) (S3)
8. Pembayaran (simulasi QRIS) + notifikasi durasi (S3)
9. Pengetatan security rules + uji + deploy final (S4–S5)

## 8. Catatan Lisensi Flaticon

Ikon animasi dari flaticon.com (paket free) **wajib atribusi**. Simpan daftar sumber + link di `public/assets/icons/CREDITS.md`.
