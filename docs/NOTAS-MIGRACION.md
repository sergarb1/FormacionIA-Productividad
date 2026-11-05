# Notas de migración (Fase 0)

_Decisiones y riesgos de transformar este repositorio en el curso
"Agentes de IA para productividad personal y de equipo"._

## Decisiones tomadas (opción conservadora)

0. **Formato (decisión del 31/10/2026): el curso se entrega IGUAL que la serie
   técnica**: presentaciones Slidev (`p01`…`p08`), mismo estilo visual, mismo
   proceso de audio narrado por diapositiva (Edge TTS) y PDF exportado —
   **solo cambia el contenido**. El material de apoyo (glosario, plantillas,
   ejercicios, agentes) vive en `docs/`, `datos-ejemplo/` y `.opencode/`.
   - Nuevos prefijos `p01-…p08-` para no chocar con las carpetas `01-…08-` de la serie técnica.
   - `edge-tts` está en `C:\Users\serga\AppData\Roaming\Python\Python314\Scripts\edge-tts.exe`
     (los scripts nuevos lo resolverán con `Get-Command edge-tts`; los antiguos
     apuntaban a una ruta de Python 313 que ya no existe).

1. **Rama de trabajo**: todo el curso se construye en la rama `curso-productividad`.
   Nada se sube a `main` ni a internet sin confirmación explícita.
2. **La serie original no se borra**: los 8 decks técnicos, sus PDFs, audios y portada
   se conservan intactos. El curso nuevo convive en paralelo.
3. **El `AGENTS.md` técnico actual se mueve, no se borra**: sus reglas de compilación
   (estilos, audio, trampas de Slidev) son valiosas. Pasará a `slidev/AGENTS.md`,
   y la raíz tendrá un `AGENTS.md` nuevo en lenguaje llano para el curso.
4. **Formato del curso nuevo**: carpetas `docs/00-...` a `docs/07-...` en Markdown
   puro, como indica el plan. Markdown es legible en GitHub sin ninguna instalación.
5. **Los agentes y skills del curso** se crearán en `.opencode/agents/` y
   `.opencode/skills/` (Fase 5), con descripciones en lenguaje llano.
6. **Datos ficticios en todos los ejemplos**: Ana, Carlos, Empresa Ejemplo S.L.

## Riesgos identificados

| Riesgo | Impacto | Cómo se mitiga |
|---|---|---|
| El sitio de Pages actual muestra la serie técnica; el curso nuevo podría confundir | Medio | Mantener la portada actual y añadir al final un enlace claro al curso; decidir publicación en la Fase 8 |
| Generar un sitio de documentos ( MkDocs u otro) añade una pieza técnica nueva al repo | Medio | Decisión pendiente para la Fase 8: empezar solo con Markdown en GitHub (cero riesgo) y valorar MkDocs después |
| Mezclar curso nuevo con la serie vieja rompe enlaces existentes | Alto si se toca | No se mueve ni renombra ningún fichero de la serie original |
| El `handoff.md` tiene tareas pendientes de la serie original | Bajo | Se ignora en el curso; quedan anotadas aquí como no conflictivas |
| Pierde el estilo visual de los decks | Bajo | Se reutilizan `slidev/styles/index.css` y las clases existentes |
| La licencia CC BY-SA 4.0 exige atribución | Legal | Créditos y licencia en README, portada y documentos del curso |

## Respuestas a las preguntas abiertas (31/10/2026)

1. **Publicación del curso**: igual que la serie actual — GitHub Pages con los
   mismos pasos (build con `slidev/build-todos.mjs` + carpeta por deck en la raíz).
   Decidido: el curso NO usa MkDocs ni Markdown suelto como entrega principal.
2. **¿Los decks técnicos se quedan en la portada?** Sí: la portada `index.html`
   tendrá dos secciones, "Curso de productividad" (nuevo) y "Serie avanzada" (actual).
3. **¿Audio narrado para el curso nuevo?** Sí, igual que la serie actual:
   `narracion-pNN.json` + script `generar-audio-pNN.ps1` por presentación.
4. *(Nueva)* **Orden de las diapositivas nuevas**: `p01` a `p08` siguen las fases
   del plan (empieza aquí, pedir bien, personal, notas-viajes-móvil, equipo,
   interconectados, ejercicios, plantillas-proyecto final).

## Actualización (31/10/2026, tras la Fase 3): repositorio propio

- **Decisión**: el curso vive ahora en su **propio repositorio nuevo**
  `FormacionIA-Productividad`, sin tocar el repositorio original
  `FormacionIA-Agentes` (que sigue intacto en GitHub y en local).
- El clon con el trabajo previo (rama `curso-productividad`) se conserva como
  referencia en `C:\Users\serga\Desktop\FormacionIA-Agentes-referencia`.
- **La serie técnica NO se copia al repo nuevo**: solo el curso (decks `p01`…,
  audio, PDFs, `docs/`, portada propia). Las decisiones de convivencia de este
  documento quedan superadas: aquí no hay serie con la que convivir.
- Rama del repo nuevo: `main`, **sin remoto todavía** (el push llegará en la Fase 8).
- La base de Pages del build cambia a `/FormacionIA-Productividad/<slug>/`

## Cierre (05/11/2026): curso completo

- **Las 8 presentaciones están terminadas y publicadas** (102 diapositivas):
  p01 empieza-aqui (12), p02 prompting-oficina (12), p03 productividad-personal
  (13), p04 notas-viajes-movil (13), p05 productividad-equipo (13),
  p06 agentes-interconectados (15), p07 ejercicios-guiados (12),
  p08 plantillas-proyecto-final (12).
- Cada parte tiene: narración en audio MP3 (1:1 con las diapositivas),
  carpeta HTML publicada con base `/FormacionIA-Productividad/` y PDF en la raíz.
- **QA final de los 8 decks**: 0 desbordes en 102 diapositivas, ninguna
  diapositiva vacía, contraste WCAG AA (21:1) en todos los bloques.
- La portada `index.html` está al 8/8 y `README.md` con la tabla completa.
- Pendiente único: crear el repositorio en GitHub y hacer el push
  (Fase 8, requiere confirmación explícita).
