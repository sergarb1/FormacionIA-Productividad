---
theme: default
title: Pedir bien, revisar mejor · Agentes de IA para productividad · Sergi Garcia Barea
author: Sergi Garcia Barea
aspectRatio: 16/9
canvasWidth: 1280
transition: slide-left
htmlAttrs:
  lang: es
exportFilename: p02-prompting-oficina
---

<audio class="deck-audio" src="../audio-p02-prompting-oficina/slide00.mp3"></audio>

<h2 style="font-size:2em;text-align:center;">🗣 Pedir bien, revisar mejor</h2>
<h3 style="text-align:center;">Agentes de IA para productividad · Parte 2 de 8 · Octubre 2026</h3>
<p style="text-align:center;margin-top:1.2em;">👤 Sergi Garcia Barea</p>
<p style="text-align:center;font-size:.6em;color:#64748b;">5 partes · 5 ejemplos de oficina · checklist de 10 puntos</p>
<div style="text-align:center;margin-top:.4em;">
  <span style="display:inline-block;background:#f1f5f9;padding:4px 14px;border-radius:6px;font-size:.5em;">
    <img src="https://licensebuttons.net/l/by-sa/4.0/88x31.png" alt="CC BY-SA" style="height:24px;vertical-align:middle;"> CC BY-SA 4.0
  </span>
</div>

---

<audio class="deck-audio" src="../audio-p02-prompting-oficina/slide01.mp3"></audio>

<h2>🤔 Por qué fallan los pedidos</h2>
<div class="g2" style="gap:1.2em;">
  <div class="card" style="border-top:3px solid #dc2626;">
    <p>❌ <strong>"Hazme el informe de gastos"</strong></p>
    <ul style="font-size:.6em;line-height:1.5;padding-left:1.1em;">
      <li>¿De qué mes? ¿De qué departamento?</li>
      <li>¿Para quién? ¿Para dirección o para contabilidad?</li>
      <li>¿Qué formato: tabla, resumen, PDF?</li>
      <li>Resultado: tres versiones que no sirven</li>
      <li>Tú pierdes tiempo explicándote dos veces</li>
    </ul>
  </div>
  <div class="card green">
    <p>✅ <strong>El mismo encargo en 5 partes</strong></p>
    <ul style="font-size:.6em;line-height:1.5;padding-left:1.1em;">
      <li>Quién soy y para qué lo necesito</li>
      <li>Qué quiero exactamente</li>
      <li>Contexto: datos ficticios del caso</li>
      <li>Formato esperado: tabla de 10 filas</li>
      <li>Límites: sin conclusiones, solo cifras</li>
    </ul>
  </div>
</div>
<div class="tip">🎯 La IA no falla por ser IA: falla porque <strong>le has dejado adivinar</strong>.</div>

---

<audio class="deck-audio" src="../audio-p02-prompting-oficina/slide02.mp3"></audio>

<h2>🧩 La estructura de 5 partes</h2>
<div class="g2" style="gap:1.2em;">
  <div>
    <div class="card" style="margin-bottom:.25em;border-left:3px solid #3b82f6;">
      <p class="sm"><strong>1. Quién eres</strong> — tu puesto y el tono: "Soy responsable de administración en Empresa Ejemplo S.L."</p>
    </div>
    <div class="card" style="margin-bottom:.25em;border-left:3px solid #3b82f6;">
      <p class="sm"><strong>2. Qué necesitas</strong> — el encargo en una frase: "Resume estas 3 actas en 5 puntos de acuerdos"</p>
    </div>
    <div class="card" style="margin-bottom:.25em;border-left:3px solid #3b82f6;">
      <p class="sm"><strong>3. Contexto</strong> — lo que debe saber: quiénes participan, plazos, datos ficticios</p>
    </div>
    <div class="card" style="margin-bottom:.25em;border-left:3px solid #3b82f6;">
      <p class="sm"><strong>4. Formato</strong> — cómo lo quieres: número de líneas, tabla, lista, tono</p>
    </div>
    <div class="card" style="border-left:3px solid #3b82f6;">
      <p class="sm"><strong>5. Restricciones</strong> — lo que NO debe hacer: no inventar cifras, no dar consejos legales</p>
    </div>
  </div>
  <div class="exp">
    <div class="pl">💡 Trucos de uso</div>
    <ul class="exp-list">
      <li>No hace falta un texto largo: 4 líneas bien puestas bastan</li>
      <li>Si un pedido no funciona, mira cuál de las 5 partes faltaba</li>
      <li>Reutiliza: guarda los pedidos que te salieron bien</li>
      <li>El contexto ficticio vale tanto como los datos reales (sin riesgo)</li>
      <li>Repite las restricciones si el agente se desvía</li>
      <li>Orden variable: a veces pones el formato primero y funciona igual</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-p02-prompting-oficina/slide03.mp3"></audio>

<h2>✉️ Ejemplo 1 · Correo a proveedor</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Las 5 partes en un mensaje</div>
    <pre style="font-size:.5em;border-left-color:#3b82f6;"><code>[1] Soy compras de Empresa Ejemplo S.L.
[2] Borrador de correo para pedir una
&nbsp;    rebaja del 5 % por volumen.
[3] Contexto: proveedor Suministros Norte,
&nbsp;    pedimos 200 cajas/mes, contrato EJEMPLO-01.
[4] Formato: 8 líneas, tono cordial pero firme.
[5] No aceptes ningún porcentaje ni prometas
&nbsp;    comprar más; solo pide la reunión."</code></pre>
  </div>
  <div class="exp">
    <div class="pl">✅ Qué verificar después</div>
    <ul class="exp-list">
      <li>¿Pide la reunión y no la rebaja ya cerrada?</li>
      <li>¿Aparecen Suministros Norte y 200 cajas/mes?</li>
      <li>¿8 líneas y tono cordial-firme?</li>
      <li>¿Se ha comido las cifras inventadas? (revisa)</li>
      <li>Errores típicos: se pasa de largo o cede en el precio</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-p02-prompting-oficina/slide04.mp3"></audio>

<h2>📋 Ejemplo 2 · Resumen de reunión</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Las 5 partes en un mensaje</div>
    <pre style="font-size:.5em;border-left-color:#8b5cf6;"><code>[1] Soy asistente de dirección.
[2] Resume esta nota de reunión en un
&nbsp;    acta con acuerdos y tareas.
[3] Contexto: reunión semanal de equipo,
&nbsp;    4 personas (Ana, Carlos, Marta, Luis),
&nbsp;    duración 45 minutos.
[4] Formato: acuerdos en viñetas; tareas en
&nbsp;    tabla con responsable y fecha.
[5] No inventes acuerdos que no estén en
&nbsp;    la nota; si falta fecha, pon "sin fecha".</code></pre>
  </div>
  <div class="exp">
    <div class="pl">✅ Qué verificar después</div>
    <ul class="exp-list">
      <li>¿Cada tarea tiene responsable y fecha (o "sin fecha")?</li>
      <li>¿Aparecen solo los 4 nombres de la reunión?</li>
      <li>¿Hay algún "acuerdo" que no estaba en la nota?</li>
      <li>¿El acta cabe en una pantalla?</li>
      <li>Errores típicos: inventa fechas para completar la tabla</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-p02-prompting-oficina/slide05.mp3"></audio>

<h2>📅 Ejemplo 3 · Priorizar la semana</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Las 5 partes en un mensaje</div>
    <pre style="font-size:.5em;border-left-color:#10b981;"><code>[1] Soy administración y gestiono la
&nbsp;    agenda de dos direcciones.
[2] Ordéname estas 9 tareas por prioridad
&nbsp;    para la semana del 3 al 7 de noviembre.
[3] Contexto: factura mensual vence el 5,
&nbsp;    auditoría el jueves, viaje el viernes.
[4] Formato: lista de 9 con motivo de un
&nbsp;    línea cada una.
[5] No cambies fechas ni mezcles tareas
&nbsp;    personales con del equipo."</code></pre>
  </div>
  <div class="exp">
    <div class="pl">✅ Qué verificar después</div>
    <ul class="exp-list">
      <li>¿El 5 (factura) y el jueves (auditoría) están arriba?</li>
      <li>¿Siguen siendo 9 tareas? (nada perdido ni duplicado)</li>
      <li>¿El motivo de cada una es real y no adivinado?</li>
      <li>¿Fechas exactamente como las diste?</li>
      <li>Errores típicos: reordena bien pero justifica con datos inventados</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-p02-prompting-oficina/slide06.mp3"></audio>

<h2>💶 Ejemplo 4 · Informe de gastos</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Las 5 partes en un mensaje</div>
    <pre style="font-size:.5em;border-left-color:#f59e0b;"><code>[1] Soy contabilidad auxiliar.
[2] Convierte esta lista de tickets en un
&nbsp;    resumen de gastos por categoría.
[3] Contexto: 12 tickets de octubre
&nbsp;    (datos ficticios), moneda euros.
[4] Formato: tabla categoría / importe /
&nbsp;    nº tickets, y total al pie.
[5] No calcules ni redondees sin avisar:
&nbsp;    si una cifra no cuadra, dilo."</code></pre>
  </div>
  <div class="exp">
    <div class="pl">✅ Qué verificar después</div>
    <ul class="exp-list">
      <li>¿El total es exactamente la suma de los 12 tickets?</li>
      <li>¿Categorías y nombres de tickets intactos?</li>
      <li>¿Avisa si algo no cuadra en vez de taparlo?</li>
      <li>¿Ha añadido categorías que no le diste?</li>
      <li>Errores típicos: sumas "casi" correctas — comprueba a mano</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-p02-prompting-oficina/slide07.mp3"></audio>

<h2>😤 Ejemplo 5 · Cliente enfadado</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Las 5 partes en un mensaje</div>
    <pre style="font-size:.5em;border-left-color:#ec4899;"><code>[1] Soy atención al cliente de una tienda
&nbsp;    online.
[2] Borrador de respuesta a un cliente que
&nbsp;    reclama un pedido retrasado.
[3] Contexto: pedido EJEMPLO-77 llega con
&nbsp;    4 días de retraso; solución: envío
&nbsp;    urgente sin coste.
[4] Formato: 10 líneas, tono empático,
&nbsp;    sin fórmulas legales.
[5] No prometas plazos que no conozcas ni
&nbsp;    ofrezcas compensaciones de dinero."</code></pre>
  </div>
  <div class="exp">
    <div class="pl">✅ Qué verificar después</div>
    <ul class="exp-list">
      <li>¿Empieza reconociendo el problema (no disculpándose 3 veces)?</li>
      <li>¿Ofrece el envío urgente sin coste, sin dinero?</li>
      <li>¿Evita "en un plazo de 24-48 horas" y similar?</li>
      <li>¿Podrías firmarlo con tu nombre tal cual?</li>
      <li>Errores típicos: tono robótico o promesas imposibles</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-p02-prompting-oficina/slide08.mp3"></audio>

<h2>🔟 La checklist de 10 puntos</h2>
<p class="sm">Pásala <strong>siempre</strong> antes de enviar, publicar o dar por bueno un resultado. Detecta errores e inventos.</p>
<div class="g2">
  <div class="card" style="border-top:3px solid #3b82f6;">
    <p><strong>📎 Sobre los datos (1-5)</strong></p>
    <ul style="font-size:.6em;line-height:1.6;padding-left:1.1em;">
      <li><strong>1.</strong> ¿Nombres y cifras coinciden con lo que le di?</li>
      <li><strong>2.</strong> ¿Hay algún dato que NO estaba en mi información?</li>
      <li><strong>3.</strong> ¿Las fechas y horas son exactas?</li>
      <li><strong>4.</strong> ¿Se ha respetado el límite de líneas o tabla?</li>
      <li><strong>5.</strong> ¿Hay datos personales que debían quitarse?</li>
    </ul>
  </div>
  <div class="card" style="border-top:3px solid #10b981;">
    <p><strong>🎯 Sobre el trabajo (6-10)</strong></p>
    <ul style="font-size:.6em;line-height:1.6;padding-left:1.1em;">
      <li><strong>6.</strong> ¿He hecho lo pedido y nada más?</li>
      <li><strong>7.</strong> ¿El tono encaja con quien lo recibe?</li>
      <li><strong>8.</strong> ¿Se entiende sin que yo explique nada?</li>
      <li><strong>9.</strong> ¿Cada acción tiene responsable y fecha?</li>
      <li><strong>10.</strong> ¿Lo enviaría o firmaría tal cual?</li>
    </ul>
  </div>
</div>
<div class="tip" style="margin-top:.4em;">⏱ Cuesta 60 segundos. Un solo punto sin tachar = no se envía.</div>

---

<audio class="deck-audio" src="../audio-p02-prompting-oficina/slide09.mp3"></audio>

<h2>🔍 Errores típicos al revisar</h2>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.3em;border-top:3px solid #dc2626;">
      <p>🎲 <strong>Cifras inventadas "casi bien"</strong></p>
      <p class="sm">"Un 12 % más que el mes pasado" — cuando no había mes pasado en tu texto. Compara siempre contra tu fuente.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-top:3px solid #dc2626;">
      <p>🎭 <strong>Nombres cambiados</strong></p>
      <p class="sm">Marta ↔ Martínez, "dirigente" ↔ "director". Lee los nombres en voz alta uno a uno.</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.3em;border-top:3px solid #dc2626;">
      <p>🎀 <strong>Bonito pero vacío</strong></p>
      <p class="sm">Párrafos elegantes sin una sola idea concreta. Pide siempre: "cada punto, una acción".</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-top:3px solid #dc2626;">
      <p>🎭 <strong>Datos reales que se colaron</strong></p>
      <p class="sm">Si pegaste algo sin anonimizar, el resultado lo llevará. Busca teléfonos, DNI y contratos.</p>
    </div>
  </div>
</div>
<div class="tip">💡 Trato de igualdad: <strong>si no lo verificarías con un compañero, tampoco lo des por bueno con la IA</strong>.</div>

---

<audio class="deck-audio" src="../audio-p02-prompting-oficina/slide10.mp3"></audio>

<h2>✏️ Ahora tú: mini ejercicio</h2>
<div class="g2" style="gap:1.2em;">
  <div class="card amber">
    <p>🎯 <strong>Encargo</strong></p>
    <p class="sm" style="margin-top:.2em;">Escribe un pedido en 5 partes para que un agente prepare <strong>la lista de la compra de la oficina</strong> del próximo mes.</p>
    <p class="sm" style="margin-top:.3em;">Contexto ficticio: 8 personas, presupuesto EJEMPLO-150 €/mes, tienda habitual "Suministros Norte".</p>
    <p class="sm" style="margin-top:.3em;">Formato: lista de 12 artículos con cantidad.</p>
    <p class="sm" style="margin-top:.3em;">Restricción: nada de marcas premium ni cantidades adivinadas.</p>
  </div>
  <div class="card green">
    <p>✅ <strong>Autocomprobación</strong></p>
    <ul style="font-size:.6em;line-height:1.7;padding-left:1.1em;">
      <li>¿Están las 5 partes etiquetadas o al menos presentes?</li>
      <li>¿El número 150 € aparece tal cual?</li>
      <li>¿Pide 12 artículos y respeta la restricción?</li>
      <li>¿Si el agente inventa un precio, lo detectas con la checklist?</li>
    </ul>
    <p class="sm" style="margin-top:.3em;">La solución y más ejercicios: <strong>Parte 7 · Ejercicios guiados</strong>.</p>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-p02-prompting-oficina/slide11.mp3"></audio>

<h2>✨ En esta parte 2</h2>
<div class="g3">
  <div class="card" style="text-align:center;border-top:4px solid #3b82f6;">
    <p style="font-size:1.4em;line-height:1.15;margin:.05em 0 .12em;">🧩</p>
    <p><strong>5 partes</strong></p>
    <p class="sm">Quién · Qué · Contexto · Formato · Límites</p>
  </div>
  <div class="card" style="text-align:center;border-top:4px solid #10b981;">
    <p style="font-size:1.4em;line-height:1.15;margin:.05em 0 .12em;">🔟</p>
    <p><strong>Checklist</strong></p>
    <p class="sm">10 puntos: 5 de datos, 5 de trabajo</p>
  </div>
  <div class="card" style="text-align:center;border-top:4px solid #f59e0b;">
    <p style="font-size:1.4em;line-height:1.15;margin:.05em 0 .12em;">🔄</p>
    <p><strong>Corrige y repite</strong></p>
    <p class="sm">Si falla, ajusta una parte y vuelve a pedir</p>
  </div>
</div>
<div class="tip" style="margin-top:.5em;">💡 Guarda los pedidos que te funcionaron: serán tu plantilla personal de la Parte 8.</div>
<p class="sm" style="text-align:center;margin-top:.5em;">Siguiente: <strong>Parte 3 · Productividad personal</strong> — agenda, prioridades y planificación semanal. 📅</p>
<p style="text-align:center;font-size:.45em;color:#94a3b8;margin-top:.4em;">CC BY-SA 4.0 · Sergi Garcia Barea · Octubre 2026</p>
