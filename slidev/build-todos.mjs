// Compila y exporta todos los decks de Slidev del proyecto.
//   node build-todos.mjs           → build SPA (dist/<slug>/)
//   node build-todos.mjs build pdf → build + export de PDF
//   node build-todos.mjs pdf       → solo export de PDF
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const BASE = '/FormacionIA-Productividad/'
const mode = process.argv[2] || 'build'
const alsoPdf = process.argv[3] === 'pdf' || mode === 'pdf'

// slug exportPdf: nombre del PDF en la raíz del proyecto
const DECKS = [
  // Curso "Agentes de IA para productividad" (público no técnico, narrado)
  { entry: 'p01-empieza-aqui.md',          slug: 'p01-empieza-aqui',          pdf: 'p01-empieza-aqui.pdf' },
  { entry: 'p02-prompting-oficina.md',     slug: 'p02-prompting-oficina',     pdf: 'p02-prompting-oficina.pdf' },
  { entry: 'p03-productividad-personal.md', slug: 'p03-productividad-personal', pdf: 'p03-productividad-personal.pdf' },
  { entry: 'p04-notas-viajes-movil.md',    slug: 'p04-notas-viajes-movil',    pdf: 'p04-notas-viajes-movil.pdf' },
  { entry: 'p05-productividad-equipo.md',  slug: 'p05-productividad-equipo',  pdf: 'p05-productividad-equipo.pdf' },
  { entry: 'p06-agentes-interconectados.md', slug: 'p06-agentes-interconectados', pdf: 'p06-agentes-interconectados.pdf' },
  { entry: 'p07-ejercicios-guiados.md',   slug: 'p07-ejercicios-guiados',   pdf: 'p07-ejercicios-guiados.pdf' },
  { entry: 'p08-plantillas-proyecto-final.md', slug: 'p08-plantillas-proyecto-final', pdf: 'p08-plantillas-proyecto-final.pdf' },
]

function run(args) {
  const res = spawnSync('npx', ['slidev', ...args], {
    stdio: 'inherit',
    shell: process.platform === 'win32',
    cwd: import.meta.dirname,
  })
  if (res.status !== 0) {
    console.error(`\n❌ Falló: slidev ${args.join(' ')}\n`)
    process.exit(res.status ?? 1)
  }
}

function chromePath() {
  for (const p of [
    '/usr/bin/google-chrome', '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium', '/usr/bin/chromium-browser',
  ]) if (existsSync(p)) return p
  return undefined
}

mkdirSync('dist', { recursive: true })

for (const deck of DECKS) {
  if (mode !== 'pdf') {
    const out = join('dist', deck.slug)
    console.log(`\n🔨 ${deck.entry} → ${out}`)
    const args = ['build', deck.entry, '--out', out, '--base', BASE + deck.slug + '/']
    run(args)
  }
  if (alsoPdf) {
    console.log(`\n📄 Exportando PDF de ${deck.entry}`)
    const args = ['export', deck.entry, '--output', join('..', deck.pdf), '--wait', '2000']
    const chrome = chromePath()
    if (chrome) args.push('--executable-path', chrome)
    run(args)
  }
}

console.log('\n✅ Todos los decks procesados.')
