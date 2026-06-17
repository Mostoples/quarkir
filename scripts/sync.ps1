# sync.ps1 — one-command save & push (Windows PowerShell)
# Pemakaian:  ./scripts/sync.ps1 "pesan commit"
param(
  [Parameter(Mandatory = $true)][string]$Message
)

$ErrorActionPreference = "Stop"
$branch = (git rev-parse --abbrev-ref HEAD).Trim()
Write-Host "Branch aktif: $branch" -ForegroundColor Cyan

Write-Host "1/4 Pull --rebase ..." -ForegroundColor Yellow
git pull --rebase origin $branch

# Pengaman: tolak commit jika ada file rahasia ter-stage
$secret = git status --porcelain | Select-String -Pattern "adminsdk|serviceAccount|\.env"
if ($secret) {
  Write-Host "⛔ DIBATALKAN: terdeteksi kemungkinan file rahasia:" -ForegroundColor Red
  $secret
  exit 1
}

Write-Host "2/4 Add ..." -ForegroundColor Yellow
git add -A

Write-Host "3/4 Commit ..." -ForegroundColor Yellow
git commit -m $Message
if ($LASTEXITCODE -ne 0) { Write-Host "Tidak ada perubahan untuk di-commit." -ForegroundColor DarkGray }

Write-Host "4/4 Push ..." -ForegroundColor Yellow
git push origin $branch

Write-Host "✅ Selesai. ($branch)" -ForegroundColor Green
