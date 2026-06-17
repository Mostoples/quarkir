#!/usr/bin/env bash
# sync.sh — one-command save & push (macOS/Linux)
# Pemakaian:  ./scripts/sync.sh "pesan commit"
set -euo pipefail

MSG="${1:?Pesan commit wajib diisi: ./scripts/sync.sh \"pesan\"}"
BRANCH="$(git rev-parse --abbrev-ref HEAD)"
echo "Branch aktif: $BRANCH"

echo "1/4 Pull --rebase ..."
git pull --rebase origin "$BRANCH"

# Pengaman: tolak commit jika ada file rahasia
if git status --porcelain | grep -Eq 'adminsdk|serviceAccount|\.env'; then
  echo "⛔ DIBATALKAN: terdeteksi kemungkinan file rahasia."
  git status --porcelain | grep -E 'adminsdk|serviceAccount|\.env'
  exit 1
fi

echo "2/4 Add ..."
git add -A

echo "3/4 Commit ..."
git commit -m "$MSG" || echo "Tidak ada perubahan untuk di-commit."

echo "4/4 Push ..."
git push origin "$BRANCH"

echo "✅ Selesai. ($BRANCH)"
