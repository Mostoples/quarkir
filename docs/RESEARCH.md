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

## 6. Analisis Gap — TERVALIDASI via SLR (n=34 studi inti)

> Divalidasi melalui SLR PRISMA 2020 (lihat `research/prisma.md`, `research/ekstraksi.md`, `research/korpus-crossref.md`). Kode E## merujuk tabel ekstraksi. [S]=klaim sumber, [P]=interpretasi peneliti.

**Gap 1 — Integrasi end-to-end & kemandirian sistem.** [S] Studi teknis *smart parking* (E08–E29) berhenti pada deteksi slot/QR akses/monitoring di lot/mall/kampus; studi e-parking Indonesia (E02–E05, E18, E33, E34) berhenti pada pembayaran non-tunai & kebijakan. [S] EPT Jakarta (E30) bahkan **bergantung vendor asing (CWO)** dan lumpuh saat vendor terganggu (Mei 2021) → pendapatan turun. [P] **Belum ada** studi yang menyatukan transaksi petugas lapangan → **dashboard pemerintah realtime** dalam satu ekosistem mandiri.

**Gap 2 — Konteks kota skala menengah & adopsi.** [S] Riset teknis dominan lot/metropolitan; e-parking tepi jalan non-tunai di kota besar pun **baru** (Surabaya 2024, E18). [S] Di Bandung, masyarakat **masih membayar tunai ke petugas** meski TPE tersedia (E33). [P] Surakarta sebagai kota menengah belum tergarap sebagai sistem end-to-end; bukti S2/S5 (Billqis 2022; Lestari 2023) menunjukkan e-parkir masih lensa kebijakan, bukan sistem.

**Gap 3 — Adaptasi & verifikasi identitas petugas.** [S] Hambatan adopsi mencakup *digital divide*, tenaga kerja, regulasi, infrastruktur (S3 Rachmawati 2021); sengketa petugas–masyarakat (E19). [P] **Verifikasi identitas petugas berbasis QR (KTA)** sebagai komponen sistem hampir tak dibahas.

**Gap 4 — Anti-fraud & transparansi retribusi sebagai satu kesatuan.** [S] E-parking diharap menekan **kebocoran retribusi** & **parkir ilegal** (E19 Samarinda; S5 Lestari Surakarta), namun [P] mekanisme **e-ticket QR unik per transaksi + anti double-parking + validasi checkout + verifikasi petugas** belum pernah disajikan **utuh sebagai satu sistem** anti-fraud.

> **Konvergensi:** keempat gap saling terkait pada satu akar — **ketiadaan sistem e-parking end-to-end yang mengikat transaksi lapangan, anti-fraud, dan transparansi pendapatan pemerintah secara realtime untuk kota menengah.**

## 7. Pernyataan Novelty — FINAL (pasca-SLR)

> **QuParkir** merupakan sistem parkir digital **end-to-end pertama** (sejauh korpus SLR ini) yang mengintegrasikan **e-ticket QR code unik per transaksi**, **verifikasi identitas petugas berbasis QR (KTA)**, **mekanisme anti double-parking & validasi checkout**, serta **dashboard monitoring pemerintah realtime** dalam **satu ekosistem mandiri** yang dirancang khusus untuk **kota skala menengah (Surakarta)**. [P] Kombinasi utuh ini tidak ditemukan pada 34 studi inti: literatur internasional kuat pada otomasi/ALPR/CV (E06 Pradhan 2025; E07 Shao 2025; E21–E29) tetapi lepas dari konteks retribusi pemerintah; literatur e-parking Indonesia kuat pada kebijakan/PAD (S2–S5, E18–E34) tetapi berhenti sebelum integrasi sistem end-to-end dan anti-fraud. **Novelty QuParkir = penyatuan ketiga dimensi (transaksi lapangan ⇄ anti-fraud ⇄ transparansi pemerintah realtime) untuk kota menengah.**

## 8. Pemetaan Gap → Fitur (jembatan ke Developer)

| Gap | Fitur QuParkir | Modul |
|-----|----------------|-------|
| Integrasi end-to-end | Dashboard Admin realtime + sinkron Firestore | Admin A/H |
| Kota menengah / karcis manual | E-ticket QR + check-in/out digital | Pelanggan C/F |
| Adaptasi petugas | QR identitas petugas (KTA), verifikasi | Petugas B/E |
| Anti-fraud | Anti double-parking, validasi checkout, smart tarif | Pelanggan E/H, Petugas F |

## 9. Deliverable Device A

- [x] Protokol SLR final (`research/protokol-slr.md`) + tabel ekstraksi terisi (`research/ekstraksi.md`, n=34; 7 seed + 5 prioritas diekstraksi penuh)
- [x] Diagram PRISMA dengan angka nyata (`research/prisma.md`: 121 disaring → 34 inti)
- [x] Analisis gap tervalidasi + pernyataan novelty final (§6–§7 di atas)
- [x] Naskah BAB I & BAB II (Tinjauan Pustaka) rapi + sitasi (`research/bab1-pendahuluan.md`, `research/bab2-tinjauan-pustaka.md`)
- [x] Tabel pemetaan gap→fitur diserahkan ke Developer (via `progress.md` Shared)
