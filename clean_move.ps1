$root = "c:\Users\maksedul mandal\OneDrive\Desktop\NTSPL"
$frontend = "$root\frontend"

# Backup CommandMenu.tsx
$commandMenu = "$frontend\src\components\ui\CommandMenu.tsx"
if (Test-Path $commandMenu) {
    Copy-Item $commandMenu "$root\CommandMenu_backup.tsx" -Force
}

# Delete frontend folder completely so we have a clean slate for moving
if (Test-Path $frontend) {
    Remove-Item $frontend -Recurse -Force
}

New-Item -ItemType Directory -Path $frontend | Out-Null

$itemsToMove = @("src", "public", ".gitignore", "AGENTS.md", "CLAUDE.md", "eslint.config.mjs", "next-env.d.ts", "next.config.ts", "package-lock.json", "package.json", "postcss.config.mjs", "README.md", "tsconfig.json")

foreach ($item in $itemsToMove) {
    $itemPath = Join-Path $root $item
    if (Test-Path $itemPath) {
        Move-Item -Path $itemPath -Destination $frontend -Force
        Write-Host "Moved $item to frontend"
    }
}

# Restore CommandMenu.tsx
if (Test-Path "$root\CommandMenu_backup.tsx") {
    $dest = "$frontend\src\components\ui\CommandMenu.tsx"
    $destDir = Split-Path $dest
    if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir -Force | Out-Null }
    Move-Item "$root\CommandMenu_backup.tsx" $dest -Force
    Write-Host "Restored CommandMenu.tsx"
}
