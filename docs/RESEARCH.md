# 🔬 PERAN RISET — Systematic Literature Review (Device A)

**Tujuan:** menemukan **research gap** dan merumuskan **novelty** QuParkir secara metodologis, lalu memetakannya ke fitur sistem. Hasil mengisi BAB I–II proposal.

Metode: **SLR** mengikuti alur **PRISMA 2020** (Identification → Screening → Eligibility → Included).

---

## 1. Research Questions (RQ)

- **RQ1.** Pendekatan teknologi apa yang sudah dipakai pada sistem e-parking / smart parking (IoT, QR, e-ticket, dashboard)?
- **RQ2.** Apa keterbatasan/celah sistem e-parking yang ada, khususnya di kota skala menengah (mis. Surakarta)?
- **RQ3.** Sejauh mana integrasi **end-to-end** (transaksi lapangan → dashboard pemerintah realtime) sudah dibahas?
- **RQ4.** Aspek apa yang belum tergarap → menjadi **novelty** QuParkir?

## 2. Sumber & Search String

Basis data: **Scopus, IEEE Xplore, ScienceDirect, Google Scholar, Garuda (jurnal ID), DOAJ**.

Contoh string (sesuaikan tiap basis data):
```
("smart parking" OR "e-parking" OR "digital parking" OR "parkir elektronik")
AND ("QR code" OR "e-ticket" OR "cashless" OR "real-time monitoring" OR "dashboard")
AND ("retribusi" OR "revenue" OR "transparency" OR "local government")
```
Rentang tahun: **2019–2026**. Bahasa: Inggris & Indonesia.

## 3. Kriteria Inklusi / Eksklusi

| Inklusi | Eksklusi |
|---------|----------|
| Membahas sistem parkir digital/e-parking/smart parking | Hanya hardware sensor tanpa sistem informasi |
| Ada komponen pembayaran/monitoring/identifikasi | Bukan domain parkir |
| Peer-reviewed atau jurnal terindeks | Berita populer, blog, tanpa metode |
| 2019–2026 | Duplikat |

## 4. Alur PRISMA (isi angka saat eksekusi)

```
Identification : n = ___ rekaman ditemukan
   → hapus duplikat (n = ___)
Screening      : skrining judul+abstrak → eksklusi (n = ___)
Eligibility    : baca full-text (n = ___) → eksklusi + alasan (n = ___)
Included       : studi final dianalisis (n = ___)
```

## 5. Ekstraksi Data (template tabel)

Kolom: `ID · Penulis (Tahun) · Negara/Kota · Teknologi · Metode · Temuan utama · Keterbatasan · Relevansi ke QuParkir`.
(Lihat Tabel 1 proposal sebagai titik awal — Mufaqih 2020, Billqis & Suryawati 2022, Rachmawati & Fitriyanti 2021, Zhafirah 2023, Lestari 2023, Pradhan 2025, Shao 2025.)

## 6. Analisis Gap (hipotesis awal dari proposal — wajib divalidasi via SLR)

1. **Gap integrasi end-to-end:** kebanyakan studi berhenti di pembayaran non-tunai; **belum** menghubungkan transaksi petugas lapangan ke **dashboard pemerintah realtime**.
2. **Gap konteks kota menengah:** riset SPS/IoT fokus mall/metropolitan; Surakarta masih **karcis manual** meski QRIS sudah ada.
3. **Gap adaptasi sosial petugas:** sistem belum adaptif terhadap karakteristik petugas lapangan (KTA + QR identitas petugas).
4. **Gap anti-fraud:** mekanisme **anti double-parking** + verifikasi petugas + e-ticket unik jarang dibahas sebagai satu kesatuan.

## 7. Pernyataan Novelty (draf — finalisasi setelah SLR)

> QuParkir mengintegrasikan **e-ticket QR code per transaksi**, **verifikasi identitas petugas berbasis QR (KTA)**, **mekanisme anti double-parking**, dan **dashboard monitoring pemerintah realtime** dalam **satu ekosistem end-to-end** yang dirancang untuk **kota skala menengah (Surakarta)** — kombinasi yang belum ditemukan utuh pada studi terdahulu.

## 8. Pemetaan Gap → Fitur (jembatan ke Developer)

| Gap | Fitur QuParkir | Modul |
|-----|----------------|-------|
| Integrasi end-to-end | Dashboard Admin realtime + sinkron Firestore | Admin A/H |
| Kota menengah / karcis manual | E-ticket QR + check-in/out digital | Pelanggan C/F |
| Adaptasi petugas | QR identitas petugas (KTA), verifikasi | Petugas B/E |
| Anti-fraud | Anti double-parking, validasi checkout, smart tarif | Pelanggan E/H, Petugas F |

## 9. Deliverable Device A

- [ ] Protokol SLR final + tabel ekstraksi terisi
- [ ] Diagram PRISMA dengan angka nyata
- [ ] Analisis gap tervalidasi + pernyataan novelty final
- [ ] Naskah BAB II (Tinjauan Pustaka) rapi + sitasi
- [ ] Tabel pemetaan gap→fitur diserahkan ke Developer (via `progress.md` Shared)
