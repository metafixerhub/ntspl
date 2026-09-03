$root = "c:\Users\maksedul mandal\OneDrive\Desktop\NTSPL"
$frontend = "$root\frontend"

# Ensure frontend exists
if (-not (Test-Path $frontend)) { New-Item -ItemType Directory -Path $frontend | Out-Null }

# Move files from root to frontend
$filesToMove = @(".gitignore", "AGENTS.md", "CLAUDE.md", "eslint.config.mjs", "next-env.d.ts", "next.config.ts", "package-lock.json", "package.json", "postcss.config.mjs", "tsconfig.json")

foreach ($file in $filesToMove) {
    $srcFile = Join-Path $root $file
    if (Test-Path $srcFile) {
        Move-Item -Path $srcFile -Destination $frontend -Force
        Write-Host "Moved $file to frontend"
    }
}

# Move src folder contents
$rootSrc = "$root\src"
$frontendSrc = "$frontend\src"

if (Test-Path $rootSrc) {
    if (-not (Test-Path $frontendSrc)) { New-Item -ItemType Directory -Path $frontendSrc | Out-Null }
    
    # Move all items inside root/src to frontend/src
    Get-ChildItem -Path $rootSrc | ForEach-Object {
        Move-Item -Path $_.FullName -Destination $frontendSrc -Force
    }
    Remove-Item -Path $rootSrc -Recurse -Force
    Write-Host "Moved src to frontend/src"
}

# Move public folder
$rootPublic = "$root\public"
$frontendPublic = "$frontend\public"

if (Test-Path $rootPublic) {
    if (Test-Path $frontendPublic) {
        Get-ChildItem -Path $rootPublic | ForEach-Object {
            Move-Item -Path $_.FullName -Destination $frontendPublic -Force
        }
        Remove-Item -Path $rootPublic -Recurse -Force
    } else {
        Move-Item -Path $rootPublic -Destination $frontend -Force
    }
    Write-Host "Moved public to frontend/public"
}
