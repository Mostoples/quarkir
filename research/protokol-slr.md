# 📑 Protokol Systematic Literature Review (SLR) — QuParkir

> **Proyek:** Implementasi QuParkir — Pengembangan Sistem Parkir Digital Berbasis E-Ticket dan QR Code untuk Meningkatkan Transparansi Retribusi dan Mengurangi Praktik Parkir Ilegal di Kota Surakarta
> **Peran:** Device A (Riset) — branch `riset`
> **Metode:** SLR mengikuti pedoman **PRISMA 2020** (Page et al., 2021) dengan tahap *Identification → Screening → Eligibility → Included*.
> **Disusun:** 2026-06-17 · **Status:** draf protokol — menunggu persetujuan pemilik proyek sebelum eksekusi.

---

## 1. Latar & Tujuan Review

SLR ini bertujuan memetakan keadaan terkini (*state of the art*) sistem *e-parking* / *smart parking* dan mengidentifikasi **research gap** yang dapat diisi oleh QuParkir, khususnya untuk konteks **kota skala menengah (Surakarta)**, lalu menerjemahkan gap tersebut menjadi **novelty metodologis** dan **fitur sistem**.

Output review ini akan mengisi **BAB I (latar belakang & rumusan masalah)** dan **BAB II (tinjauan pustaka)** proposal, serta menjadi jembatan ke tim Developer (Device B) melalui tabel **Gap → Fitur**.

---

## 2. Research Questions (RQ)

| Kode | Pertanyaan Penelitian | Tujuan |
|------|------------------------|--------|
| **RQ1** | Pendekatan/teknologi apa yang telah digunakan pada sistem *e-parking / smart parking* (IoT, sensor, QR code, e-ticket, *cashless*, dashboard)? | Memetakan *state of the art* teknologi |
| **RQ2** | Apa keterbatasan/celah sistem *e-parking* yang ada, khususnya pada konteks **kota skala menengah** seperti Surakarta? | Menemukan gap kontekstual |
| **RQ3** | Sejauh mana **integrasi end-to-end** (transaksi petugas lapangan → dashboard pemerintah realtime) telah dibahas dalam literatur? | Menemukan gap integrasi |
| **RQ4** | Aspek apa yang **belum tergarap** sehingga dapat menjadi **novelty** QuParkir (anti-fraud, identitas petugas, transparansi retribusi)? | Merumuskan novelty |

---

## 3. Basis Data & Strategi Pencarian

### 3.1 Basis data
| Basis data | Cakupan | Bahasa | Akses pencarian |
|------------|---------|--------|-----------------|
| **Scopus** | Internasional, terindeks Q1–Q4 | EN | via web (judul/abstrak terbuka) |
| **IEEE Xplore** | Teknik & komputer | EN | via web |
| **ScienceDirect (Elsevier)** | Multidisiplin | EN | via web |
| **Google Scholar** | Agregator luas (termasuk *grey literature* terbatas) | EN/ID | via web |
| **Garuda (Garba Rujukan Digital)** | Jurnal nasional Indonesia | ID | via web |
| **DOAJ** | Jurnal *open access* | EN/ID | via web |

### 3.2 String pencarian (disesuaikan tiap basis data)

**String dasar (konsep gabungan):**
```
("smart parking" OR "e-parking" OR "digital parking" OR "parkir elektronik" OR "parkir digital")
AND ("QR code" OR "e-ticket" OR "cashless" OR "non-tunai" OR "real-time monitoring" OR "dashboard")
AND ("retribusi" OR "revenue" OR "transparency" OR "transparansi" OR "local government" OR "pemerintah daerah")
```

**Scopus (TITLE-ABS-KEY):**
```
TITLE-ABS-KEY(("smart parking" OR "e-parking" OR "digital parking")
AND ("QR code" OR "e-ticket" OR "cashless" OR "real-time" OR "dashboard")
AND ("revenue" OR "transparency" OR "retribution" OR "local government"))
AND PUBYEAR > 2018 AND PUBYEAR < 2027
```

**IEEE Xplore:**
```
("All Metadata":"smart parking" OR "e-parking") AND ("All Metadata":"QR code" OR "e-ticket" OR "cashless")
AND ("All Metadata":"real-time" OR "dashboard" OR "monitoring")
```

**ScienceDirect:**
```
("smart parking" OR "e-parking") AND ("QR code" OR "e-ticket" OR "cashless") AND ("revenue" OR "transparency")
```

**Google Scholar (untuk penelusuran luas & sitasi maju/mundur):**
```
"smart parking" OR "e-parking" "QR code" "e-ticket" (revenue OR transparency OR retribusi)
```

**Garuda & DOAJ (Indonesia):**
```
parkir elektronik | parkir digital | e-parking | retribusi parkir | QR code parkir | parkir cerdas
```

### 3.3 Penelusuran tambahan
- **Backward/forward snowballing** dari 7 referensi awal proposal (lihat §6).
- Penelusuran manual jurnal nasional bidang sistem informasi / pemerintahan daerah.

---

## 4. Kriteria Inklusi & Eksklusi

| # | Inklusi (IC) | Eksklusi (EC) |
|---|--------------|---------------|
| 1 | Membahas sistem parkir digital / e-parking / smart parking | Hanya membahas *hardware* sensor tanpa sistem informasi/aplikasi |
| 2 | Memuat komponen pembayaran, *monitoring*, atau identifikasi (QR/e-ticket) | Bukan domain parkir |
| 3 | *Peer-reviewed* / jurnal terindeks / prosiding ilmiah | Berita populer, blog, tanpa metode ilmiah |
| 4 | Terbit **2019–2026**, bahasa Inggris atau Indonesia | Di luar rentang tahun atau bahasa |
| 5 | Teks lengkap dapat diperoleh/diverifikasi | Duplikat; teks lengkap tidak tersedia |

> **Rentang tahun:** 2019–2026 (memberi ruang state of the art mutakhir, dengan pengecualian referensi seminal bila relevan).

---

## 5. Prosedur Seleksi (alur PRISMA 2020)

```
IDENTIFICATION
  Records dari basis data (n = TBD)
  + Records dari snowballing/manual (n = TBD)
  → Hapus duplikat (n = TBD dihapus)

SCREENING
  Skrining judul + abstrak (n = TBD)
  → Eksklusi tahap skrining (n = TBD, dengan alasan)

ELIGIBILITY
  Penilaian teks lengkap (n = TBD)
  → Eksklusi teks lengkap (n = TBD, dengan alasan terkategori)

INCLUDED
  Studi final masuk sintesis (n = TBD)
```
> Angka diisi nyata pada `research/prisma.md` saat eksekusi. **Tidak boleh dikarang.**

**Proses:** skrining dua tahap (judul-abstrak → teks lengkap). Setiap eksklusi pada tahap *eligibility* dicatat **beserta alasannya** (mis. "tidak ada komponen monitoring", "bukan konteks pemerintahan", "teks lengkap tidak tersedia").

---

## 6. Titik Awal — Referensi Proposal (akan diverifikasi)

Studi inti dari proposal yang menjadi *seed*. **Status verifikasi (diperiksa 2026-06-17 via WebSearch + Crossref):**

| Seed | Sitasi terverifikasi (judul · penulis · sumber · tahun) | DOI / URL | Status |
|------|---------------------------------------------------------|-----------|--------|
| S1 | *Applying smart parking system with internet of things (IoT) design* · Mufaqih, M. S., Kaburuan, E. R., & Wang, G. · IOP Conf. Series: Materials Science and Engineering, 725(1):012095 · 2020 | `10.1088/1757-899X/725/1/012095` | ✅ terverifikasi |
| S2 | *Implementasi Program Parkir Elektronik (E-Parkir) di Kota Surakarta* · Billqis, A., & Suryawati, R. · Jurnal Mahasiswa Wacana Publik (UNS) · 2022 | [view/66553](https://jurnal.uns.ac.id/wacana-publik/article/view/66553) | ✅ terverifikasi |
| S3 | *Analysis of the E-Government Initiative at Local Government Level in Bandung City, Indonesia* · Rachmawati, T., & Fitriyanti, K. D. · Jurnal Ilmu Sosial dan Ilmu Politik (UGM), 25(1) · 2021 | `10.22146/jsp.58966` | ✅ terverifikasi |
| S4 | *Institutional Arrangement Approach on e-Parking Innovation in Surabaya City, Indonesia* · Zhafirah, A. A., Hati, R. P., & Roziqin, A. · Jurnal Transformative Policy, 15(1) · 2023 | `10.33701/jtp.v15i1.2664` | ✅ terverifikasi |
| S5 | *Penerapan elektronik parkir (e-parkir) di kota Surakarta* · Lestari, Indrawati, & Subarno · JIKAP, 7(2):154–162 · 2023 | [view/60681](https://jurnal.uns.ac.id/JIKAP/article/view/60681) | ✅ terverifikasi |
| S6 | *Advanced IoT-integrated parking systems with automated license plate recognition and payment management* · Pradhan, G., Prusty, M. R., Negi, V. S., & Chinara, S. · Scientific Reports · 2025 | `10.1038/s41598-025-86441-w` | ✅ terverifikasi |
| S7 | *Design of a Parking Space Guidance System for Parking Lots* · Shao, C. · 2025 5th Int. Conf. on Electronic Information Engineering and Computer Technology (EIECT) · 2025 | `10.1109/eiect68017.2025.11332183` | ⚠️ kandidat (cocok nama+tahun+topik; perlu konfirmasi sitasi asli proposal) |

> **Integritas akademik:** S1–S6 terverifikasi keberadaannya (judul/penulis/tahun/DOI nyata). **S7 (Shao 2025)** baru kecocokan kandidat — perlu konfirmasi pemilik proyek terhadap daftar pustaka proposal sebelum dikutip sebagai klaim.

---

## 7. Template Ekstraksi Data

Disimpan di `research/ekstraksi.md`. Kolom per studi:

| Kolom | Keterangan |
|-------|------------|
| ID | Kode internal (E01, E02, …) |
| Penulis (Tahun) | Sitasi singkat |
| Negara/Kota | Konteks geografis studi |
| Teknologi | IoT/sensor/QR/e-ticket/cashless/dashboard/dll |
| Metode | Jenis penelitian & pendekatan |
| Temuan utama | Klaim/hasil kunci (dengan sitasi) |
| Keterbatasan | *Limitation* yang disebut penulis / teramati |
| Relevansi ke QuParkir | Gap/fitur yang relevan (RQ terkait) |
| DOI/URL | Tautan verifikasi |

---

## 8. Penilaian Kualitas (Quality Appraisal) ringkas

Tiap studi *included* dinilai dengan 4 pertanyaan ya/sebagian/tidak (skor 1/0.5/0):
1. Tujuan & konteks penelitian jelas?
2. Metode dijelaskan dan dapat ditelusuri?
3. Hasil didukung data/eviden?
4. Relevan dengan RQ (e-parking/transparansi/monitoring)?

> Skor dipakai untuk pembobotan, bukan eksklusi keras (kecuali skor sangat rendah & tidak relevan).

---

## 9. Sintesis & Output

- **Sintesis naratif tematik** berdasarkan RQ1–RQ4.
- **Analisis gap** tervalidasi (memperbarui §6 `docs/RESEARCH.md`).
- **Pernyataan novelty final** (memperbarui §7 `docs/RESEARCH.md`).
- **Tabel Gap → Fitur QuParkir** (disalin ke `progress.md` bagian `🤝 Shared`).
- **Naskah BAB II** `research/bab2-tinjauan-pustaka.md` + daftar pustaka **APA** (semua tersitasi & terverifikasi).

---

## 10. Rencana Eksekusi (urutan kerja)

1. **Verifikasi 7 seed** proposal (judul/penulis/tahun/DOI nyata). → isi §6
2. **Pencarian basis data** dengan string §3 → kumpulkan rekaman → `research/prisma.md` (Identification).
3. **Screening** judul-abstrak → Eligibility (teks lengkap) → Included (angka nyata).
4. **Ekstraksi data** studi included → `research/ekstraksi.md`.
5. **Analisis gap & novelty** → perbarui `docs/RESEARCH.md` (konfirmasi ke pemilik sebelum BAB II final).
6. **Tulis BAB II** + daftar pustaka APA → `research/bab2-tinjauan-pustaka.md`.
7. **Tabel Gap → Fitur** → `progress.md` Shared (serah terima ke Developer).

---

## 11. Catatan Integritas Akademik

- Dilarang mengarang sitasi, DOI, atau temuan. Semua referensi **nyata & dapat diverifikasi**.
- Pemisahan tegas antara **klaim dari sumber** (dengan sitasi) vs **interpretasi peneliti**.
- Semua angka PRISMA berasal dari pencarian aktual, bukan estimasi.
