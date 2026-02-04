# Script para criar branch gh-pages inicial no GitHub
# Execute este script uma vez para criar o branch gh-pages vazio no repositório remoto

Write-Host "🔧 Configurando branch gh-pages para GitHub Pages..." -ForegroundColor Cyan

# Garante que estamos na branch de trabalho
$currentBranch = git rev-parse --abbrev-ref HEAD
Write-Host "📌 Branch atual: $currentBranch" -ForegroundColor Yellow

# Remove branch gh-pages local se existir
git branch -D gh-pages 2>$null
Write-Host "✅ Branch gh-pages local removido (se existia)" -ForegroundColor Green

# Cria branch órfão gh-pages
git checkout --orphan gh-pages
Write-Host "✅ Branch órfão gh-pages criado" -ForegroundColor Green

# Remove todos os arquivos do staging (ignora erros se não houver nada)
git rm -rf . 2>$null | Out-Null

# Garante que estamos no diretório correto
$workDir = Get-Location
Write-Host "📁 Diretório de trabalho: $workDir" -ForegroundColor Gray

# Cria arquivo .nojekyll (importante para GitHub Pages)
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
$nojekyllPath = Join-Path $workDir ".nojekyll"
try {
    [IO.File]::WriteAllText($nojekyllPath, "", $utf8NoBom)
    Write-Host "✅ Arquivo .nojekyll criado" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Erro ao criar .nojekyll: $_" -ForegroundColor Yellow
}

# Cria README mínimo
$readmePath = Join-Path $workDir "README.md"
try {
    [IO.File]::WriteAllText($readmePath, "# GitHub Pages Branch`n`nEste branch contém os arquivos estáticos gerados pelo Docusaurus.", $utf8NoBom)
    Write-Host "✅ README.md criado" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Erro ao criar README.md: $_" -ForegroundColor Yellow
}

# Adiciona e commita
Write-Host "📝 Adicionando arquivos ao git..." -ForegroundColor Cyan
git add .nojekyll README.md 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Nenhum arquivo para adicionar (normal em branch órfão)" -ForegroundColor Yellow
    # Tenta adicionar tudo que existe
    git add . 2>$null
}

git commit -m "chore: bootstrap gh-pages branch" 2>&1 | Out-Null
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Commit inicial criado" -ForegroundColor Green
} else {
    Write-Host "⚠️  Nenhuma mudança para commitar (branch pode já estar inicializado)" -ForegroundColor Yellow
}
Write-Host "✅ Commit inicial criado" -ForegroundColor Green

# Faz push do branch gh-pages
Write-Host "🚀 Fazendo push do branch gh-pages para origin..." -ForegroundColor Cyan
git push -u origin gh-pages

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Branch gh-pages criado com sucesso no GitHub!" -ForegroundColor Green
    Write-Host "📝 Agora você pode voltar para sua branch de trabalho e executar 'npm run deploy'" -ForegroundColor Yellow
}
else {
    Write-Host "❌ Erro ao fazer push. Verifique suas credenciais Git." -ForegroundColor Red
    exit 1
}

# Volta para a branch de trabalho original
Write-Host "🔄 Voltando para branch: $currentBranch" -ForegroundColor Cyan
git checkout $currentBranch

Write-Host "`n✨ Setup completo! Agora execute: npm run deploy" -ForegroundColor Green
