param(
  [string]$BaseUrl = "http://localhost:5173"
)

Write-Host "Starting screenshot capture..." -ForegroundColor Cyan

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Error "Node.js is required. Install Node.js and try again."
  exit 1
}

if (-not (Test-Path "node_modules\playwright")) {
  Write-Host "Playwright is not installed. Run: npm install -D playwright" -ForegroundColor Yellow
  exit 1
}

node scripts\capture.mjs --base $BaseUrl
