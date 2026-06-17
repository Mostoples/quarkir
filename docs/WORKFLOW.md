# 🔁 WORKFLOW & SOP — Dua Device Tanpa Konflik

Dokumen ini mengatur cara **Device A (Riset)** dan **Device B (Developer)** bekerja paralel di repo `Mostoples/quarkir` tanpa saling menimpa, dengan **auto push & auto deploy**, dan pencatatan progress yang aman.

---

## 1. Model Branch

```
main      ← produksi. PROTECTED. Auto-deploy ke Firebase Hosting.
 ├─ riset ← branch tetap Device A (Peneliti)
 └─ dev   ← branch tetap Device B (Developer)
      └─ dev/feat-<nama>  ← branch fitur pendek (opsional)
```

- **Device A** hidup di branch `riset`. **Device B** hidup di branch `dev`.
- `main` hanya diisi lewat **merge** dari `riset`/`dev` saat milestone selesai.

## 2. Pemisahan Kepemilikan File (aturan anti-konflik #1)

| Folder/File | Pemilik | Boleh diubah device lain? |
|-------------|---------|---------------------------|
| `docs/RESEARCH.md`, `research/`, naskah | 🔬 Device A | ❌ |
| `public/`, `design/`, `scripts/`, `.github/`, config Firebase | 💻 Device B | ❌ |
| `docs/ARCHITECTURE.md` | 💻 Device B (penulis) | A boleh baca, usul via issue |
| `docs/BATCHPLAN.md`, `docs/WORKFLOW.md` | Bersama | Ubah hanya saat sinkron terjadwal |
| `progress.md` | Bersama (per-section) | Hanya section masing-masing |

> Karena dua device menyentuh **file yang berbeda**, git nyaris tidak pernah konflik.

## 3. Ritual Harian (aturan anti-konflik #2)

**Awal sesi (WAJIB):**
```bash
git checkout <riset|dev>
git pull --rebase origin main      # ambil update terbaru dari produksi
git pull --rebase origin <branch>  # ambil milik sendiri
```

**Akhir sesi / setiap selesai 1 unit kerja (WAJIB):**
```bash
# cara cepat → pakai script:
./scripts/sync.sh "pesan commit"     # macOS/Linux
./scripts/sync.ps1 "pesan commit"    # Windows PowerShell
```
Script `sync` otomatis: `pull --rebase` → `add -A` → `commit` → `push`. Inilah **"auto push"**.

## 4. Naik ke Produksi & Auto-Deploy

Saat milestone siap rilis:
```bash
git checkout main
git pull --rebase
git merge --no-ff dev      # atau riset
git push origin main
```
Push ke `main` memicu **GitHub Actions** (`.github/workflows/deploy.yml`) → `firebase deploy` → live di `https://quparkir.web.app`. Tidak perlu deploy manual.

> Alternatif manual kapan saja: `firebase deploy --only hosting`.

## 5. Pencatatan Progress

- Tulis di `progress.md` **hanya di section milik device** (lihat aturan di file itu).
- Selalu `pull --rebase` sebelum menulis, push segera sesudahnya.
- Jika tetap terjadi konflik di `progress.md`: konflik append-only mudah — **simpan kedua baris**, hapus penanda `<<<<`, `====`, `>>>>`.

## 6. Resolusi Konflik (jika terjadi)

```bash
git pull --rebase origin <branch>
# jika konflik:
#   buka file, gabungkan manual, lalu:
git add <file>
git rebase --continue
git push
```
Aturan emas: **jangan `git push --force`** ke branch bersama.

## 7. Setup Auto-Deploy (sekali saja, oleh Device B)

1. **Rotate** service account lama (yang bocor) di Google Cloud Console → buat key baru.
2. GitHub repo → **Settings → Secrets and variables → Actions → New secret**
   - Nama: `FIREBASE_SERVICE_ACCOUNT_QUPARKIR`
   - Isi: seluruh JSON key **baru** (paste mentah).
3. Commit `.github/workflows/deploy.yml` (sudah disiapkan).
4. Push ke `main` → cek tab **Actions** di GitHub untuk status deploy.

## 8. Checklist sebelum push

- [ ] `git pull --rebase` sudah dijalankan
- [ ] Tidak ada file rahasia (`*-adminsdk-*.json`, `.env`) — cek `git status`
- [ ] Entri `progress.md` ditambahkan
- [ ] (Developer) app jalan di lokal: `firebase serve` / `firebase emulators:start`
