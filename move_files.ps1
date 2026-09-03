$sourceDir = "c:\Users\maksedul mandal\OneDrive\Desktop\NTSPL"
$destDir = "$sourceDir\frontend"

$itemsToMove = @("src", "public", ".gitignore", "AGENTS.md", "CLAUDE.md", "eslint.config.mjs", "next-env.d.ts", "next.config.ts", "package-lock.json", "package.json", "postcss.config.mjs", "README.md", "tsconfig.json", "node_modules", ".next")

foreach ($item in $itemsToMove) {
    $itemPath = Join-Path -Path $sourceDir -ChildPath $item
    if (Test-Path $itemPath) {
        try {
            Move-Item -Path $itemPath -Destination $destDir -Force -ErrorAction Stop
            Write-Host "Moved $item"
        } catch {
            Write-Host "Failed to move $item : $($_.Exception.Message)"
        }
    } else {
        Write-Host "Skipping $item (does not exist in root)"
    }
}
