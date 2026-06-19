# 🔎 Alur PRISMA 2020 — SLR QuParkir

> Diisi dengan **angka nyata** dari eksekusi pencarian 2026-06-17.
> **Sumber pencarian:** Crossref API (6 string pencarian, filter `type=journal-article`, rentang 2019–2026) + 7 *seed* dari daftar pustaka proposal (penelusuran terverifikasi, lihat `protokol-slr.md §6`).
> **Catatan metode (transparansi):** Korpus dibangun terprogram via Crossref sehingga jumlahnya **dapat direproduksi**. Screening tahap-1 dilakukan berbasis **judul** dengan aturan kata kunci yang terdokumentasi (lihat `korpus-crossref.md`). Penilaian *eligibility* berbasis teks lengkap merupakan tahap lanjutan yang sedang berjalan. Keterbatasan: pencarian dibatasi cap 20 rekaman/kueri Crossref; basis data berbayar (Scopus/IEEE/ScienceDirect) diverifikasi manual per-judul, bukan ekspor penuh.

---

## Diagram alur

```
IDENTIFICATION
  Rekaman dari basis data (Crossref, 6 kueri, cap 20/kueri) ............ n = 120
  Rekaman dari sumber lain (seed proposal / snowballing) .............. n = 7
        │
        ├─ Duplikat dihapus (dalam set basis data) .................... n = 6
        ▼
  Rekaman unik untuk disaring ........................................ n = 121
        │   (114 basis data + 7 seed)
        ▼
SCREENING (judul/abstrak)
  Rekaman disaring .................................................... n = 121
        ├─ Dieksklusi — di luar domain (bus, dining, healthcare,
        │   construction, water, gaming, airport, dll) ............... n = 56
        ├─ Dikeluarkan dari sintesis — studi retribusi/pajak parkir →
        │   PAD murni (akuntansi, tanpa komponen e-parking digital);
        │   DIPERTAHANKAN sebagai latar masalah BAB I ............... n = 31
        ▼
ELIGIBILITY
  Studi inti dinilai kelayakan (e-parking / smart parking) ........... n = 34
        │   (27 dari basis data + 7 seed)
        │   → penilaian teks-lengkap: SEDANG BERJALAN
        ▼
INCLUDED
  Studi masuk sintesis SLR ........................................... n = 34
        ├─ Diekstraksi penuh (7 seed, temuan terverifikasi) ......... n = 7
        └─ Metadata terverifikasi, ekstraksi teks-lengkap menyusul .. n = 27
```

---

## Ringkasan angka

| Tahap | n |
|-------|---|
| Identifikasi — basis data (Crossref) | 120 |
| Identifikasi — seed/snowballing | 7 |
| Duplikat dihapus | 6 |
| **Unik disaring** | **121** |
| Eksklusi — di luar domain | 56 |
| Dikeluarkan dari sintesis (retribusi/PAD = latar) | 31 |
| **Eligibility — studi inti** | **34** |
| **Included — sintesis** | **34** (7 ekstraksi penuh + 27 menyusul) |

---

## Distribusi studi inti (n=34)

| Kelompok | Jumlah | Keterangan |
|----------|--------|------------|
| Sistem teknis *smart parking* (QR/IoT/CV/real-time) | ~17 | RQ1 — state of the art teknologi |
| Implementasi/kebijakan **e-parking** (Indonesia) | ~10 | RQ2 — celah konteks & adopsi |
| Retribusi parkir berbasis digital/elektronik | ~4 | RQ2/RQ4 — transparansi pendapatan |
| Seed internasional (Pradhan 2025, Shao 2025) | 2 | RQ1 — pembanding global |
| Seed kebijakan e-parking (Rachmawati, Zhafirah, Billqis, Lestari) | 4 | RQ2/RQ3 — konteks Indonesia |

> Angka detail per kategori difinalisasi setelah ekstraksi teks-lengkap (lihat `ekstraksi.md`). Daftar lengkap CORE/CONTEXT/EXCLUDED + DOI ada di `korpus-crossref.md`.
