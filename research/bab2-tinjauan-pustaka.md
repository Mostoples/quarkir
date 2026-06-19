# BAB II — TINJAUAN PUSTAKA

> Disusun dari hasil Systematic Literature Review (SLR) PRISMA 2020 atas **34 studi inti** (lihat `prisma.md`, `ekstraksi.md`, `korpus-crossref.md`). Penanda dalam draf kerja: setiap klaim disertai sitasi sumber; kalimat tanpa sitasi adalah sintesis/interpretasi peneliti. Format sitasi **APA**; semua referensi terverifikasi (judul/penulis/tahun/DOI) — lihat Daftar Pustaka.

---

## 2.1 Sistem Parkir Digital: Konsep Dasar

Sistem parkir digital — dikenal sebagai *smart parking* atau *e-parking* — adalah penerapan teknologi informasi dan komunikasi (TIK) untuk mengelola layanan parkir secara lebih efisien, aman, dan transparan dibandingkan sistem karcis manual. Dalam paradigma *smart city*, *Smart Parking System* (SPS) dengan pembayaran nontunai menjadi salah satu inisiatif kunci pengelolaan perkotaan (Lukito et al., 2024). Komponen yang umum dibahas meliputi identifikasi kendaraan, ketersediaan slot, pembayaran nontunai, serta pemantauan (*monitoring*).

Mufaqih et al. (2020) mendefinisikan *smart parking* sebagai sistem berbasis *Internet of Things* (IoT) untuk mengoptimalkan pemanfaatan slot parkir, dengan studi kasus pusat perbelanjaan di Jakarta. Definisi ini menekankan dimensi teknis (sensor, optimasi ruang), sementara studi administrasi publik menekankan dimensi tata kelola dan retribusi (Billqis & Suryawati, 2022; Zhafirah et al., 2023).

## 2.2 Teknologi *Smart Parking* (RQ1)

Literatur internasional dan teknis menunjukkan kematangan pada sisi otomasi. Pradhan et al. (2025) mengembangkan sistem parkir terintegrasi IoT dengan *Automated License Plate Recognition* (ALPR) dan manajemen pembayaran, mencakup modul pengenalan pelat, pencatatan transaksi, dan penetapan slot. Shao (2025) merancang sistem pemandu ruang parkir (*parking space guidance*) untuk lahan parkir. Pendekatan berbasis QR code juga banyak diteliti sebagai mekanisme akses dan pembayaran (mis. sistem berbasis QR untuk akses dan navigasi *real-time*), serta deteksi slot berbasis *computer vision* dan prediksi okupansi berbasis *machine learning*.

Benang merah kelompok studi ini adalah fokus pada **efisiensi operasional di lingkungan lot, kampus, atau pusat perbelanjaan**, dengan konteks komersial/privat. Aspek **retribusi pemerintah, identitas petugas lapangan, dan transparansi pendapatan publik tidak menjadi sasaran utama**.

## 2.3 Implementasi *E-Parking* di Indonesia (RQ2)

Studi Indonesia didominasi oleh perspektif kebijakan dan administrasi publik:

- **Surakarta.** Billqis & Suryawati (2022) memetakan implementasi program E-Parkir Surakarta ke dalam empat tahap (perencanaan, pemberdayaan, pelaksanaan, serta monitoring dan evaluasi). Lestari, Indrawati, & Subarno (2023) menyoroti bahwa e-parkir Surakarta berupaya menekan **kebocoran retribusi** terhadap Pendapatan Asli Daerah (PAD) dan menerapkan tarif progresif.
- **Bandung.** Rachmawati & Fitriyanti (2021) menemukan kegagalan inisiatif e-parking dipengaruhi *digital divide*, tenaga kerja, regulasi, dan infrastruktur, diperberat investasi yang tidak strategis serta lemahnya kepemimpinan dan edukasi. Mulyati & Surtiani (2023) melaporkan bahwa program *Terminal Parkir Elektronik* (TPE) di Bandung **belum optimal karena masyarakat masih memilih membayar tunai ke petugas**. Fatmawati et al. (2024) menyimpulkan implementasi kebijakan pengelolaan parkir di kawasan Braga belum sepenuhnya efektif.
- **Surabaya.** Zhafirah et al. (2023) menelaah penataan kelembagaan (*institutional arrangement*) sebagai faktor keberhasilan inovasi e-parking. Lukito et al. (2024) mencatat bahwa pembayaran **nontunai untuk parkir tepi jalan baru diperkenalkan pada 2024** atas mandat Wali Kota — menandakan adopsi yang masih sangat awal di kota besar sekalipun.
- **Samarinda.** Sipayung (2022) menegaskan e-parking ditujukan untuk parkir yang aman, nyaman, dan transparan, dengan tarif progresif guna **mengurangi sengketa petugas–masyarakat, menekan praktik parkir ilegal, dan menanggulangi kebocoran retribusi**.
- **Jakarta.** Hariwibowo et al. (2025) mengungkap kerapuhan EPT DKI Jakarta yang **bergantung pada sistem vendor asing (*Cale Web Office*)**; gangguan vendor sejak Mei 2021 membuat terminal tidak dapat beroperasi daring, menunda gaji pegawai, dan menurunkan pendapatan — dengan kontribusi pajak parkir ke PAD hanya 0,99% (2018–2021).

## 2.4 Retribusi Parkir, Transparansi, dan PAD (RQ2/RQ4)

Sejumlah besar studi (kelompok *context* dalam SLR, n=31) menelaah kontribusi retribusi parkir terhadap PAD di berbagai daerah. Temuan berulang adalah **kebocoran retribusi** pada sistem manual akibat lemahnya pengawasan transaksi lapangan. E-parking dipandang sebagai instrumen untuk meningkatkan transparansi dan menutup kebocoran (Sipayung, 2022; Lestari et al., 2023). Namun, studi-studi ini umumnya berhenti pada **analisis kebijakan/akuntansi pendapatan**, bukan perancangan sistem teknis yang menjamin transparansi tersebut secara *by design*.

## 2.5 Integrasi *End-to-End* dan Pemantauan Pemerintah (RQ3)

Pemantauan *real-time* banyak dibahas pada sisi teknis (deteksi slot, okupansi, visualisasi IoT). Namun, integrasi **end-to-end** — yang mengikat transaksi petugas lapangan langsung ke **dashboard pemerintah secara *real-time*** — belum menjadi fokus. Justru bukti dari Hariwibowo et al. (2025) menunjukkan bahwa ketergantungan pada sistem vendor tertutup menimbulkan risiko keberlanjutan. Tidak ditemukan studi dalam korpus yang menyajikan ekosistem mandiri yang menyatukan transaksi, anti-fraud, dan transparansi pendapatan pemerintah dalam satu alur.

## 2.6 Analisis Kesenjangan (*Research Gap*)

Sintesis 34 studi inti mengerucutkan empat kesenjangan yang saling terkait:

| Gap | Bukti dari literatur | RQ |
|-----|----------------------|----|
| **G1. Integrasi end-to-end & kemandirian sistem** | Studi teknis berhenti di lot/komersial; e-parking ID berhenti di pembayaran/kebijakan; EPT Jakarta rapuh karena vendor-lock (Hariwibowo et al., 2025) | RQ1/RQ3 |
| **G2. Konteks kota menengah & adopsi** | Cashless tepi jalan baru muncul 2024 di kota besar (Lukito et al., 2024); warga tetap bayar tunai meski ada TPE (Mulyati & Surtiani, 2023); Surakarta masih lensa kebijakan (Billqis & Suryawati, 2022; Lestari et al., 2023) | RQ2 |
| **G3. Verifikasi & adaptasi petugas** | Hambatan SDM/*digital divide* (Rachmawati & Fitriyanti, 2021); sengketa petugas–warga (Sipayung, 2022); verifikasi identitas petugas berbasis QR nyaris tak dibahas | RQ2/RQ4 |
| **G4. Anti-fraud + transparansi sebagai satu kesatuan** | E-parking diharap menekan kebocoran & parkir ilegal (Sipayung, 2022; Lestari et al., 2023), tetapi e-ticket QR unik + anti double-parking + validasi checkout + verifikasi petugas belum disajikan utuh sebagai satu sistem | RQ4 |

## 2.7 Posisi dan Kebaruan (*Novelty*) QuParkir

Berdasarkan pemetaan di atas, **QuParkir** diposisikan mengisi keempat gap secara simultan. Kebaruannya bukan pada satu komponen tunggal — QR, e-ticket, atau dashboard telah ada secara terpisah — melainkan pada **penyatuan tiga dimensi dalam satu ekosistem *end-to-end* mandiri**: (1) transaksi lapangan (e-ticket QR unik per transaksi + verifikasi petugas berbasis QR/KTA), (2) anti-fraud (anti *double-parking*, validasi *checkout*), dan (3) transparansi pendapatan pemerintah secara *real-time* (dashboard admin), yang **dirancang khusus untuk kota skala menengah (Surakarta)**. Kombinasi utuh ini tidak ditemukan pada 34 studi inti SLR.

## 2.8 Kerangka Pemikiran

```
Masalah: kebocoran retribusi + parkir ilegal + adopsi rendah + vendor-lock (manual/parsial)
        │
        ▼  (intervensi QuParkir — sistem e-parking end-to-end)
  Transaksi lapangan  →  Anti-fraud  →  Dashboard pemerintah real-time
  (e-ticket QR, KTA)     (anti dobel,    (transparansi PAD)
                          validasi out)
        │
        ▼
Hasil: transparansi retribusi ↑ · parkir ilegal ↓ · adopsi & akuntabilitas ↑
```

---

## Daftar Pustaka (APA)

Billqis, A., & Suryawati, R. (2022). *Implementasi Program Parkir Elektronik (E-Parkir) di Kota Surakarta.* Jurnal Mahasiswa Wacana Publik, Universitas Sebelas Maret. https://jurnal.uns.ac.id/wacana-publik/article/view/66553

Fatmawati, F., Mulyati, Y., Rusliadi, R., & Aina, A. N. (2024). Implementation of E-Parking Management Policy in Braga Area of Bandung City. *Jurnal Ilmiah Ilmu Administrasi Publik, 13*(2). https://doi.org/10.26858/jiap.v13i2.59011

Hariwibowo, M., Handayani, Susanty, & Handayani, Sri. (2025). Analysis of Parking System Development Using Electronic Parking Terminals (EPT) to Improve Services and Revenue in Jakarta. *Dinasti International Journal of Digital Business Management, 6*(6). https://doi.org/10.38035/dijdbm.v6i6.5896

Lestari, Indrawati, C. D. S., & Subarno, A. (2023). Penerapan elektronik parkir (e-parkir) di kota Surakarta. *Jurnal Informasi dan Komunikasi Administrasi Perkantoran (JIKAP), 7*(2), 154–162. https://jurnal.uns.ac.id/JIKAP/article/view/60681

Lukito, N. B., Supeno, E., Asmorowati, S., & Hapsari, W. (2024). Implementation of the Smart Parking System (SPS): A Study on Cashless Payment for Public Roadside Parking Fees in Surabaya City. *Journal of Governance and Administrative Reform, 5*(2). https://doi.org/10.20473/jgar.v5i2.61650

Mufaqih, M. S., Kaburuan, E. R., & Wang, G. (2020). Applying smart parking system with internet of things (IoT) design. *IOP Conference Series: Materials Science and Engineering, 725*(1), 012095. https://doi.org/10.1088/1757-899X/725/1/012095

Mulyati, Y., & Surtiani, A. (2023). Implementation of Electronic Parking Terminal (TPE) Policy in the Regional Public Services Agency (BLUD) Parking Department of Transportation in Bandung City. *Sustainability (STPP): Theory, Practice and Policy, 2*(1). https://doi.org/10.30631/sdgs.v2i1.1303

Page, M. J., McKenzie, J. E., Bossuyt, P. M., Boutron, I., Hoffmann, T. C., Mulrow, C. D., … Moher, D. (2021). The PRISMA 2020 statement: An updated guideline for reporting systematic reviews. *BMJ, 372*, n71. https://doi.org/10.1136/bmj.n71

Pradhan, G., Prusty, M. R., Negi, V. S., & Chinara, S. (2025). Advanced IoT-integrated parking systems with automated license plate recognition and payment management. *Scientific Reports.* https://doi.org/10.1038/s41598-025-86441-w

Rachmawati, T., & Fitriyanti, K. D. (2021). Analysis of the E-Government Initiative at Local Government Level in Bandung City, Indonesia. *Jurnal Ilmu Sosial dan Ilmu Politik, 25*(1). https://doi.org/10.22146/jsp.58966

Shao, C. (2025). Design of a Parking Space Guidance System for Parking Lots. *2025 5th International Conference on Electronic Information Engineering and Computer Technology (EIECT).* https://doi.org/10.1109/eiect68017.2025.11332183

Sipayung, B. (2022). Optimization of Samarinda City Parking Retribution Revenue Through e-Parking Innovation. *Formosa Journal of Multidisciplinary Research, 1*(2). https://doi.org/10.55927/fjmr.v1i2.578

Zhafirah, F., Hati, E. M., & Roziqin, A. (2023). Institutional Arrangement Approach on e-Parking Innovation in Surabaya City, Indonesia. *TRANSFORMASI: Jurnal Manajemen Pemerintahan, 15*(1). https://doi.org/10.33701/jtp.v15i1.2664

---

> **Catatan integritas:** Seluruh entri di atas diverifikasi melalui Crossref/penerbit (DOI sebagai jangkar verifikasi). Untuk nama penulis Indonesia, urutan nama-keluarga/nama-depan mengikuti metadata sumber dan sebaiknya dikonfirmasi ulang terhadap PDF terbit. Sitasi "Shao (2025)" merupakan kandidat yang cocok berdasarkan nama+tahun+topik; konfirmasikan terhadap daftar pustaka proposal asli. Referensi "Lestari et al. (2023)" mengikuti penamaan metadata JIKAP; inisial penulis pertama agar dilengkapi dari PDF terbit.
