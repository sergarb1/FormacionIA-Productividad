# Inventario del repositorio (Fase 0)

_Revisión hecha el 31/10/2026 sobre la rama `main` (commit `fdffb7e`). Sin modificar ningún contenido todavía._

## Qué es este repositorio hoy

Es una **serie de 8 presentaciones interactivas** titulada _"IA como Copiloto — Codificar con agentes"_,
dirigida a **desarrolladores** (profesión técnica). Contiene 97 diapositivas con audio narrado y PDF.

- **Generador del sitio**: **Slidev** (herramienta de presentaciones que se instala con npm), no MkDocs ni Jekyll.
- **Publicación**: GitHub Pages desde la rama `main`, con una portada hecha a mano (`index.html`).
- **Compilación**: script propio `slidev/build-todos.mjs` que compila los 8 decks y exporta los PDFs.
- **Licencia**: CC BY-SA 4.0, autoría de Sergi Garcia Barea (declarada en `slidev/package.json`, en el README y en cada diapositiva). No hay archivo LICENSE suelto.
- **Pendientes abiertos**: `handoff.md` lista tareas sin terminar (regenerar el PDF del deck 3, verificar el despliegue, acabar una herramienta de medición).

## Tabla de contenidos: ruta, nivel y decisión

| Ruta | Qué es | Nivel técnico actual | ¿Reutilizable en el curso nuevo? |
|---|---|---|---|
| `README.md` | Portada del repo (tabla de decks, cómo usarlos) | Técnico-medio | **Reescribir** (mantener créditos y licencia) |
| `AGENTS.md` | Reglas para que OpenCode genere los decks (build, estilos, trampas de Slidev) | Muy técnico | **Mover** su contenido técnico a `slidev/AGENTS.md` y crear un `AGENTS.md` nuevo en lenguaje llano |
| `index.html` | Portada web con tarjetas de cada presentación | Técnico (HTML) | **Conservar** como portada de la serie original; crear después navegación para el curso nuevo |
| `01-agentes-codigo/` + PDF | Deck 1: qué es un agente de código | Básico pero orientado a programar | **Ideas reutilizables** (definición de agente, analogía "IA con manos"); texto a reescribir |
| `02-plan-hacer/` + PDF | Deck 2: flujo profesional PLAN → HACER | Intermedio | **Ideas muy reutilizables** (planificar antes de actuar, frenos de emergencia); texto a reescribir |
| `03-agents-md-skills/` + PDF | Deck 3: manual del proyecto, habilidades, subagentes | Intermedio-técnico | **Parcial**: el concepto de "pasar trabajo a un especialista" alimenta la Fase 5; el resto es jerga |
| `04-ejemplos-desarrollo/` + PDF | Deck 4: 8 ejemplos de programación | Avanzado | **No reutilizable** para no técnicos (contenido de código) |
| `05-plugins-mcp/` + PDF | Deck 5: MCP, plugins, seguridad | Avanzado | **No reutilizable** (jerga prohibida en el público objetivo) |
| `06-devops-agentes/` + PDF | Deck 8: Docker, CI/CD, despliegues | Avanzado | **No reutilizable** |
| `07-infra-as-code/` + PDF | Deck 7: infraestructura como código | Avanzado | **No reutilizable** |
| `08-documentacion-as-code/` + PDF | Deck 6: docs vivas, Mermaid, ADRs | Avanzado | **No reutilizable** |
| `slidev/` | Fuentes editables de los 8 decks + estilos + scripts de compilación y QA | Técnico | **Infraestructura reutilizable al 100 %** (estilos, audio, build, herramientas de control de calidad) |
| `audio-*/`, `narracion-*.json`, `generar-audio-*.ps1` | Audio narrado por diapositiva y cómo regenerarlo | Técnico | **Proceso reutilizable** para narrar los decks del curso nuevo |
| `handoff.md` | Notas internas de trabajo pendiente | Técnico | **Conservar** como nota interna; no forma parte del curso |
| `.nojekyll`, `.gitignore` | Ajustes de publicación | Técnico | **Conservar tal cual** |
| `.opencode/` | — | **No existe** | Habrá que crear agentes y skills (Fase 5) |

## Conclusión principal

- **Lo que hay que crear casi entero es el contenido**: el 100 % del material actual está escrito para
  gente que programa. Solo los decks 1, 2 y el concepto de "delegar en especialistas" del deck 3
  aportan ideas adaptables al lenguaje de oficina.
- **La infraestructura es un tesoro**: estilos de presentación, narración de audio automática,
  exportación a PDF y herramientas de control de calidad ya funcionan y se pueden copiar para el curso nuevo.
- **La licencia y los créditos se conservan** (CC BY-SA 4.0 — Sergi Garcia Barea).
