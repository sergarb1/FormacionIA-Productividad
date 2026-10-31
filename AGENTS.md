# AGENTS.md — Reglas del curso "Agentes de IA para productividad"

Este archivo es el **manual de instrucciones** para quien trabaje en este
repositorio (persona o herramienta de IA). Habla en lenguaje llano a propósito:
el curso es para gente que no programa.

## Sobre el curso

- Público: personal de administración, RRHH, finanzas, atención al cliente y
  oficina en general. **No programan.**
- Regla de oro: **la IA propone, la persona decide.** Nada de autonomía total
  sin confirmación.
- Todo ejemplo usa **datos ficticios** (Ana, Carlos, Empresa Ejemplo S.L.).

## Reglas de trabajo

1. **Trabaja solo dentro de las carpetas del curso**: `docs/`, `datos-ejemplo/`,
   `.opencode/`, y los decks nuevos `slidev/p01-*.md` a `slidev/p08-*.md`.
2. **Este repositorio es solo del curso de productividad.** La serie técnica
   original vive en su propio repositorio (FormacionIA-Agentes) y aquí no está.
   `index.html` y `README.md` se actualizan al añadir presentaciones nuevas.
3. **Antes de borrar o mover un archivo, pide confirmación.**
4. **Si no entiendes una instrucción, pregunta en lugar de inventar.**
5. **Usa siempre datos ficticios** en ejemplos, nombres y empresas.
6. **Escribe en lenguaje llano**: si aparece una palabra técnica (API, JSON, MCP,
   subagente, commit…), explícala en el mismo sitio con una analogía de oficina.
7. **Nada de push al repositorio remoto sin confirmación.**
8. **Conserva la licencia y los créditos**: CC BY-SA 4.0 — Sergi Garcia Barea.

## Estructura del curso

- Presentaciones del curso: `slidev/p01-empieza-aqui.md` … `slidev/p08-plantillas-proyecto-final.md`.
- Material de apoyo: `docs/00-empieza-aqui/` … `docs/07-evaluacion/`.
- Ejercicios con archivos de prueba: `datos-ejemplo/`.
- Agentes especialistas: `.opencode/agents/` (coordinador, agenda, correo, facturas).
- Habilidades reutilizables: `.opencode/skills/`.

## Compilación, audio y PDF (lo técnico)

Las instrucciones de build, estilos de diapositiva, narración de audio y
exportación a PDF están en **`slidev/AGENTS.md`** — ahí está el detalle para
quien tenga que recompilar o regenerar audios.
