# 🌉 Pemetaan Gap → Fitur QuParkir (jembatan Riset → Developer)

> Hasil SLR (n=34). Menerjemahkan 4 research gap tervalidasi menjadi fitur & modul konkret untuk Device B. Modul mengacu peta fitur di `docs/BATCHPLAN.md §4`.

| Gap (tervalidasi SLR) | Bukti kunci | Fitur QuParkir | Modul (BATCHPLAN) | Prioritas |
|------------------------|-------------|----------------|--------------------|-----------|
| **G1. Integrasi end-to-end & kemandirian** | Studi berhenti di lot/pembayaran; EPT Jakarta rapuh vendor-lock (Hariwibowo et al., 2025) | Dashboard Admin **real-time** + sinkron **Firestore `onSnapshot`** (sistem mandiri, tanpa vendor tertutup) | Admin A/H, sinkron DB | 🔴 Tinggi |
| **G2. Kota menengah & adopsi** | Cashless tepi jalan baru 2024 (Lukito et al., 2024); warga tetap tunai meski ada TPE (Mulyati & Surtiani, 2023) | **E-ticket QR** + check-in/out digital + live slot + smart tarif (UX rendah-friksi) | Pelanggan C/D/F/G/H | 🔴 Tinggi |
| **G3. Verifikasi & adaptasi petugas** | Hambatan SDM/digital divide (Rachmawati & Fitriyanti, 2021); sengketa petugas–warga (Sipayung, 2022) | **QR identitas petugas (KTA)** + registrasi & status verifikasi petugas | Petugas A/B/D/E | 🟠 Sedang |
| **G4. Anti-fraud + transparansi** | E-parking diharap tekan kebocoran & parkir ilegal (Sipayung, 2022; Lestari et al., 2023) | **Anti double-parking** + **validasi checkout** + e-ticket unik + monitoring income transparan | Pelanggan E/F, Petugas F, Admin A/E | 🔴 Tinggi |

## Implikasi desain untuk Developer (Device B)
1. **Realtime by design:** gunakan Firestore `onSnapshot` + transaksi atomik untuk check-in/out (cegah double-parking) — langsung menjawab G1 & G4.
2. **E-ticket = entitas unik per transaksi:** ID transaksi unik (QR) menjadi sumber kebenaran tunggal untuk audit retribusi (G2/G4).
3. **Identitas petugas terverifikasi:** QR/KTA petugas tervalidasi sebelum dapat memvalidasi transaksi (G3).
4. **Dashboard pemerintah:** agregasi income & kendaraan aktif real-time = bukti transparansi PAD (G1).

> Novelty yang dijaga: **kesatuan end-to-end** (transaksi lapangan ⇄ anti-fraud ⇄ transparansi pemerintah realtime) untuk kota menengah — jangan diceraikan jadi fitur terpisah saat implementasi.
