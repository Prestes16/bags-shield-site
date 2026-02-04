# Script rápido para criar branch gh-pages
# Execute este arquivo na pasta site/

Write-Host "`n🚀 Criando branch gh-pages para GitHub Pages...`n" -ForegroundColor Cyan

# Salva branch atual
$currentBranch = git rev-parse --abbrev-ref HEAD
Write-Host "📌 Branch atual: $currentBranch" -ForegroundColor Yellow

# Remove branch local se existir
git branch -D gh-pages 2>$null | Out-Null

# Cria branch órfão
Write-Host "`n🔧 Criando branch órfão gh-pages..." -ForegroundColor Cyan
git checkout --orphan gh-pages 2>&1 | Out-Null

# Limpa staging
git rm -rf . 2>$null | Out-Null

# Cria arquivos mínimos
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
$workDir = Get-Location

Write-Host "📝 Criando arquivos iniciais..." -ForegroundColor Cyan
[IO.File]::WriteAllText((Join-Path $workDir ".nojekyll"), "", $utf8NoBom)
[IO.File]::WriteAllText((Join-Path $workDir "README.md"), "# GitHub Pages`n`nBranch para deploy do Docusaurus.", $utf8NoBom)

# Commit inicial
git add .nojekyll README.md
git commit -m "chore: bootstrap gh-pages" 2>&1 | Out-Null

Write-Host "`n🚀 Fazendo push para origin/gh-pages..." -ForegroundColor Cyan
git push -u origin gh-pages

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ SUCESSO! Branch gh-pages criado no GitHub." -ForegroundColor Green
    Write-Host "`n🔄 Voltando para branch: $currentBranch" -ForegroundColor Cyan
    git checkout $currentBranch 2>&1 | Out-Null
    Write-Host "`n✨ Pronto! Agora execute: npm run deploy`n" -ForegroundColor Green
}
else {
    Write-Host "`n❌ ERRO ao fazer push. Verifique:" -ForegroundColor Red
    Write-Host "   1. Credenciais Git configuradas" -ForegroundColor Yellow
    Write-Host "   2. Permissões no repositório GitHub" -ForegroundColor Yellow
    Write-Host "   3. Conexão com internet`n" -ForegroundColor Yellow
    git checkout $currentBranch 2>&1 | Out-Null
    exit 1
}
