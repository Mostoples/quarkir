# BAB I — PENDAHULUAN

> Draf kerja hasil SLR (lihat `bab2-tinjauan-pustaka.md` untuk landasan & sitasi lengkap). Penanda: kalimat dengan sitasi = klaim sumber; tanpa sitasi = sintesis peneliti. Sitasi **APA**; daftar pustaka pada BAB II.

## 1.1 Latar Belakang

Parkir tepi jalan umum merupakan salah satu sumber Pendapatan Asli Daerah (PAD) melalui retribusi parkir. Namun pada sistem konvensional berbasis karcis manual, pengelolaan retribusi rentan terhadap **kebocoran** akibat lemahnya pengawasan transaksi di lapangan. Berbagai studi di Indonesia menunjukkan bahwa retribusi parkir kerap tidak optimal terserap ke PAD, dan praktik **parkir ilegal** serta sengketa tarif antara petugas dan masyarakat masih terjadi (Sipayung, 2022; Lestari, Indrawati, & Subarno, 2023).

Sebagai respons, pemerintah daerah mulai menerapkan **parkir elektronik (e-parking)**. Di Surakarta, program e-parkir telah berjalan dan diarahkan untuk menekan kebocoran retribusi serta menerapkan tarif progresif (Billqis & Suryawati, 2022; Lestari et al., 2023). Meski demikian, transformasi ini masih menghadapi kendala. Studi di Bandung menemukan kegagalan adopsi akibat *digital divide*, keterbatasan SDM, regulasi, dan infrastruktur (Rachmawati & Fitriyanti, 2021), bahkan masyarakat tetap memilih membayar tunai ke petugas meski terminal elektronik tersedia (Mulyati & Surtiani, 2023). Di Surabaya, pembayaran nontunai untuk parkir tepi jalan baru diperkenalkan pada 2024 (Lukito et al., 2024), sedangkan di Jakarta sistem terminal elektronik justru rapuh karena bergantung pada vendor asing dan sempat lumpuh sehingga menurunkan pendapatan (Hariwibowo et al., 2025).

Pada saat yang sama, teknologi *smart parking* internasional telah matang pada sisi otomasi — pengenalan pelat kendaraan, manajemen pembayaran, dan pemanduan slot (Pradhan et al., 2025; Shao, 2025; Mufaqih, Kaburuan, & Wang, 2020) — namun umumnya berorientasi pada lingkungan lot/komersial dan **tidak menyasar konteks retribusi pemerintah maupun transparansi pendapatan publik**.

Tinjauan sistematis (SLR) terhadap 34 studi inti (lihat BAB II) memperlihatkan satu kesenjangan inti: **belum ada sistem e-parking *end-to-end* yang menyatukan transaksi petugas lapangan, mekanisme anti-fraud, dan transparansi pendapatan pemerintah secara *real-time*, khususnya untuk kota skala menengah seperti Surakarta.** Kesenjangan inilah yang melatarbelakangi pengembangan **QuParkir**.

## 1.2 Identifikasi Masalah

1. Kebocoran retribusi parkir pada sistem manual akibat lemahnya pengawasan transaksi lapangan.
2. Praktik parkir ilegal dan sengketa tarif petugas–masyarakat.
3. Adopsi e-parking yang rendah (perilaku tunai bertahan, *digital divide*).
4. Ketergantungan pada sistem vendor tertutup yang rapuh (risiko keberlanjutan).
5. Belum adanya integrasi *end-to-end* transaksi lapangan → dashboard pemerintah *real-time*.

## 1.3 Rumusan Masalah

1. Bagaimana merancang sistem parkir digital berbasis e-ticket dan QR code yang mengintegrasikan transaksi petugas lapangan hingga dashboard pemerintah secara *real-time*?
2. Bagaimana sistem QuParkir dapat meningkatkan transparansi retribusi dan menekan praktik parkir ilegal di Kota Surakarta?
3. Bagaimana mekanisme verifikasi petugas (QR/KTA) dan anti-fraud (anti *double-parking*, validasi *checkout*) diterapkan dalam satu ekosistem?

## 1.4 Tujuan Penelitian

1. Mengembangkan sistem QuParkir (Pelanggan–Petugas–Admin) berbasis e-ticket QR code dengan model pengembangan ADDIE.
2. Meningkatkan transparansi retribusi parkir dan akuntabilitas pendapatan daerah melalui dashboard monitoring *real-time*.
3. Mengurangi praktik parkir ilegal melalui verifikasi petugas dan mekanisme anti-fraud.

## 1.5 Manfaat Penelitian

- **Teoretis:** mengisi *research gap* integrasi *end-to-end* e-parking untuk kota menengah; memperkaya literatur sistem informasi pemerintahan.
- **Praktis:** menyediakan prototipe sistem yang dapat diadopsi pemerintah kota untuk meningkatkan PAD dan pelayanan publik.

## 1.6 Kebaruan (*Novelty*)

QuParkir menyatukan **e-ticket QR code unik per transaksi**, **verifikasi identitas petugas berbasis QR (KTA)**, **anti *double-parking* & validasi *checkout***, serta **dashboard monitoring pemerintah *real-time*** dalam **satu ekosistem *end-to-end* mandiri** untuk **kota skala menengah (Surakarta)** — kombinasi yang, berdasarkan SLR, belum ditemukan utuh pada studi terdahulu (lihat BAB II §2.6–§2.7).

## 1.7 Batasan Penelitian

- Studi kasus: Kota Surakarta.
- Prototipe: parkir tepi jalan umum; pembayaran disimulasikan (QRIS/e-wallet) pada tahap prototipe.
- Fokus pada perancangan & evaluasi sistem (R&D/ADDIE), bukan kajian kebijakan fiskal menyeluruh.
