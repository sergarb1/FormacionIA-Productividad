$Voice = "es-ES-AlvaroNeural"
$Json  = Get-Content "$PSScriptRoot\narracion-p02-prompting-oficina.json" -Raw | ConvertFrom-Json
$OutDir = "$PSScriptRoot\audio-p02-prompting-oficina"
if (-not (Test-Path $OutDir)) { New-Item -ItemType Directory -Path $OutDir -Force | Out-Null }

# edge-tts: resuelve la ruta actual (fallback: instalaciones conocidas)
$edge = (Get-Command edge-tts -ErrorAction SilentlyContinue).Source
if (-not $edge) {
  $candidatos = @(
    "$env:APPDATA\Python\Python314\Scripts\edge-tts.exe",
    "$env:APPDATA\Python\Python313\Scripts\edge-tts.exe",
    "$env:LOCALAPPDATA\Programs\Python\Python313\Scripts\edge-tts.exe"
  )
  $edge = $candidatos | Where-Object { Test-Path $_ } | Select-Object -First 1
}
if (-not $edge) { Write-Host "No se encontro edge-tts. Instala con: pip install edge-tts"; exit 1 }
Write-Host "Usando: $edge"

foreach ($slide in $Json.slides) {
  $id   = $slide.id
  $text = $slide.text
  $name = "slide" + ("{0:D2}" -f $id) + ".mp3"
  $out  = "$OutDir\$name"
  Write-Host "[$id] $($slide.title) -> $name"
  & $edge --voice $Voice --text "$text" --write-media "$out"
  if ($LASTEXITCODE -eq 0) {
    $len = (Get-Item $out).Length
    Write-Host "   OK $([math]::Round($len/1kb)) KB"
  } else { Write-Host "   ERROR en slide $id" }
}
Write-Host "Listo: $OutDir"
