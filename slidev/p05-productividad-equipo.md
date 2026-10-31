---
theme: default
title: Productividad de equipo · Agentes de IA para productividad · Sergi Garcia Barea
author: Sergi Garcia Barea
aspectRatio: 16/9
canvasWidth: 1280
transition: slide-left
htmlAttrs:
  lang: es
exportFilename: p05-productividad-equipo
---

<audio class="deck-audio" src="../audio-p05-productividad-equipo/slide00.mp3"></audio>

<h2 style="font-size:2em;text-align:center;">🏢 Productividad de equipo</h2>
<h3 style="text-align:center;">Agentes de IA para productividad · Parte 5 de 8 · Octubre 2026</h3>
<p style="text-align:center;margin-top:1.2em;">👤 Sergi Garcia Barea</p>
<p style="text-align:center;font-size:.6em;color:#64748b;">Correo · Actas · Informes · Facturas · RRHH · Clientes</p>
<div style="text-align:center;margin-top:.4em;">
  <span style="display:inline-block;background:#f1f5f9;padding:4px 14px;border-radius:6px;font-size:.5em;">
    <img src="https://licensebuttons.net/l/by-sa/4.0/88x31.png" alt="CC BY-SA" style="height:24px;vertical-align:middle;"> CC BY-SA 4.0
  </span>
</div>

---

<audio class="deck-audio" src="../audio-p05-productividad-equipo/slide01.mp3"></audio>

<h2>📧 Caso 1 · La bandeja del equipo</h2>
<p class="sm"><strong>Situación:</strong> Ana y Carlos comparten la bandeja <code>soporte@</code>: llegan 14 correos y hay que ordenarlos y preparar respuestas sin contestar a ciegas.</p>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Prompt de ejemplo (5 partes)</div>
    <pre style="font-size:.5em;border-left-color:#3b82f6;"><code>[1] Soy la persona de la bandeja
&nbsp;    soporte@ de Empresa Ejemplo S.L.
[2] Clasifica estos 14 correos en 3
&nbsp;    grupos y prepara borradores.
[3] Datos: lista de 14 asuntos (ficticia):
&nbsp;    factura, reclamación, pedido, cita,
&nbsp;    presupuesto EJEMPLO-06, baja…
[4] Formato: tabla grupo/asunto/acción;
&nbsp;    después, borradores numerados.
[5] No envíes nada, no prometas plazos
&nbsp;    ni descuentos, y no inventes datos
&nbsp;    que no estén en el correo.</code></pre>
  </div>
  <div class="exp">
    <div class="pl">✅ Cómo verificarlo</div>
    <ul class="exp-list">
      <li>¿Los 14 correos siguen todos, ni uno de más?</li>
      <li>¿La reclamación y la factura están en "urgente hoy"?</li>
      <li>¿Los borradores no prometen plazos ni dinero que no diste?</li>
      <li>¿Ningún dato de cliente real se ha colado?</li>
      <li>Errores típicos: responde como si ya hubiera contestado</li>
      <li>Errores típicos: tono frío o "de robot" en reclamaciones</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-p05-productividad-equipo/slide02.mp3"></audio>

<h2>📝 Caso 2 · El acta de la reunión</h2>
<p class="sm"><strong>Situación:</strong> reunión del lunes con 8 notas sueltas. El acta debe decir quién hace qué y para cuándo — sin inventar acuerdos.</p>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Prompt de ejemplo</div>
    <pre style="font-size:.5em;border-left-color:#8b5cf6;"><code>[1] Soy coordinador de un equipo de 4.
[2] Convierte estas notas de la reunión
&nbsp;    del lunes en un acta.
[3] Datos: 8 notas sueltas (ficticias);
&nbsp;    asisten Ana, Carlos y Marta.
[4] Formato: asistentes / acuerdos con
&nbsp;    responsable y fecha / pendientes.
[5] No inventes acuerdos ni fechas: lo
&nbsp;    que quedó abierto, márcalo como
&nbsp;    "sin decidir".</code></pre>
  </div>
  <div class="exp">
    <div class="pl">✅ Cómo verificarlo</div>
    <ul class="exp-list">
      <li>¿Solo aparecen las 3 personas de mis notas?</li>
      <li>¿Cada acuerdo lleva responsable y fecha solo si los di?</li>
      <li>¿Lo "sin decidir" no sale como si estuviera cerrado?</li>
      <li>¿Las 8 notas siguen todas reflejadas, sin duplicar?</li>
      <li>Errores típicos: inventa acuerdos "lógicos" que nadie pactó</li>
      <li>Errores típicos: convierte "la semana que viene" en fecha exacta</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-p05-productividad-equipo/slide03.mp3"></audio>

<h2>📊 Caso 3 · El resumen del Excel</h2>
<p class="sm"><strong>Situación:</strong> Marta quiere "un resumen del mes" del cuadro de gastos. Las cifras salen del cuadro, no de la memoria del agente.</p>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Prompt de ejemplo</div>
    <pre style="font-size:.5em;border-left-color:#10b981;"><code>[1] Soy responsable de administración.
[2] Resume este cuadro de gastos de
&nbsp;    noviembre en 10 líneas.
[3] Datos: filas copiadas (fecha,
&nbsp;    concepto, importe) ficticias.
[4] Formato: 3 bloques — total, qué
&nbsp;    subió, qué propongo revisar.
[5] No hagas cálculos nuevos ni
&nbsp;    redondees: cada cifra debe salir
&nbsp;    del cuadro pegado.</code></pre>
  </div>
  <div class="exp">
    <div class="pl">✅ Cómo verificarlo</div>
    <ul class="exp-list">
      <li>¿Todas las cifras aparecen en mi cuadro?</li>
      <li>¿He sumado el total a mano y coincide?</li>
      <li>¿Ninguna recomendación se apoya en un número inventado?</li>
      <li>¿Cabe en las 10 líneas que pedí?</li>
      <li>Errores típicos: "redondea" y se pierden céntimos</li>
      <li>Errores típicos: propone recortar cosas que nadie pidió</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-p05-productividad-equipo/slide04.mp3"></audio>

<h2>🧾 Caso 4 · Facturas y proveedores</h2>
<p class="sm"><strong>Situación:</strong> llega la factura de Suministros Norte y hay que compararla con tu pedido antes de pagar nada.</p>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Prompt de ejemplo</div>
    <pre style="font-size:.5em;border-left-color:#f59e0b;"><code>[1] Soy administración.
[2] Compara la factura con mi pedido
&nbsp;    y di si cuadra.
[3] Datos: factura EJEMPLO-05 (120 u.
&nbsp;    a 3,50 €, envío 12 €, IVA 21%)
&nbsp;    y mi pedido (120 u., envío
&nbsp;    incluido). Todo ficticio.
[4] Formato: tabla concepto/factura/
&nbsp;    pedido/diferencia + veredicto:
&nbsp;    pagar, reclamar o preguntar.
[5] Solo diagnostica: no pagues ni
&nbsp;    reclames; si falta un dato, dilo.</code></pre>
  </div>
  <div class="exp">
    <div class="pl">✅ Cómo verificarlo</div>
    <ul class="exp-list">
      <li>¿La suma de la factura coincide con la mía a mano?</li>
      <li>¿Se ve el envío cobrado de más si en el pedido iba incluido?</li>
      <li>¿El veredicto es "reclamar" y no "pagar ya"?</li>
      <li>¿Lo que falta está dicho, no rellenado de gutarra?</li>
      <li>Errores típicos: da el OK aunque las líneas no cuadren</li>
      <li>Errores típicos: calcula el IVA de memoria y falla</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-p05-productividad-equipo/slide05.mp3"></audio>

<h2>💬 Caso 5 · Reclamación de un cliente</h2>
<p class="sm"><strong>Situación:</strong> el Cliente del Norte reclama 4 días de retraso. El agente prepara el borrador; el envío lo haces tú.</p>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Prompt de ejemplo</div>
    <pre style="font-size:.5em;border-left-color:#dc2626;"><code>[1] Soy atención al cliente.
[2] Prepara un borrador de respuesta a
&nbsp;    esta reclamación.
[3] Datos: pedido EJEMPLO-05 con 4 días
&nbsp;    de retraso; motivo: avería del
&nbsp;    proveedor; llega el jueves;
&nbsp;    compensación: 5% si la piden.
[4] Formato: correo de 8 líneas, tono
&nbsp;    cercano, sin fórmulas rígidas.
[5] No eches culpas ni ofrezcas nada
&nbsp;    de más; déjalo sin enviar.</code></pre>
  </div>
  <div class="exp">
    <div class="pl">✅ Cómo verificarlo</div>
    <ul class="exp-list">
      <li>¿Reconoce el retraso sin culpar al proveedor en cada línea?</li>
      <li>¿Ofrece solo lo autorizado (5% si lo piden)?</li>
      <li>¿Tono cercano, sin prometer "nunca más"?</li>
      <li>¿Está sin enviar, para que lo revises y envíes tú?</li>
      <li>Errores típicos: pide disculpas en exceso y suena a disculpa</li>
      <li>Errores típicos: promete compensaciones de más</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-p05-productividad-equipo/slide06.mp3"></audio>

<h2>👥 RRHH: la línea roja del curso</h2>
<p class="sm">Los agentes ayudan con <strong>hechos</strong> (redactar, resumir, ordenar); las <strong>personas</strong> las decides tú, siempre.</p>
<div class="g3">
  <div class="card" style="border-top:3px solid #10b981;">
    <p>✅ <strong>Para qué sirve</strong></p>
    <p class="sm">Redactar vacantes claras, resumir candidaturas en un formato igual para todos y preparar la misma lista de preguntas de entrevista.</p>
  </div>
  <div class="card" style="border-top:3px solid #dc2626;">
    <p>🚫 <strong>Lo que nunca pides</strong></p>
    <p class="sm">Elegir entre personas, puntuar el "encaje" o filtrar por edad, género o por quién "suena" mejor en el currículum.</p>
  </div>
  <div class="card" style="border-top:3px solid #3b82f6;">
    <p>🔍 <strong>Revisión humana</strong></p>
    <p class="sm">Cualquier borrador que afecte a una persona lo lee RRHH antes; las preguntas de entrevista son idénticas para todos.</p>
  </div>
</div>
<div class="tip" style="margin-top:.5em;">👥 La IA compara hechos; las personas deciden sobre personas. Si un prompt empieza por "elige al mejor candidato", bórralo.</div>

---

<audio class="deck-audio" src="../audio-p05-productividad-equipo/slide07.mp3"></audio>

<h2>💥 Errores típicos de este módulo</h2>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.3em;border-top:3px solid #dc2626;">
      <p>📊 <strong>Cifras "redondeadas"</strong></p>
      <p class="sm">El informe cuadra a ojo pero no a la centésima. Suma el total a mano y compáralo, siempre.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-top:3px solid #dc2626;">
      <p>📅 <strong>Fechas inventadas en el acta</strong></p>
      <p class="sm">Convierte "la semana que viene" en un día concreto que nadie dijo. Pide citas literales.</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.3em;border-top:3px solid #dc2626;">
      <p>✉️ <strong>Tono de más</strong></p>
      <p class="sm">Disculpas largas y promesas de "nunca más". Lee cada frase que vaya dirigida a un cliente.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-top:3px solid #dc2626;">
      <p>🧠 <strong>Decisiones sobre personas</strong></p>
      <p class="sm">Currículums "resumidos" que ya deciden por ti. RRHH decide; la IA solo ordena la pila.</p>
    </div>
  </div>
</div>
<div class="tip">💡 En equipo el error se multiplica: lo que un agente prepara, lo revisa una persona distinta de quien lo pidió.</div>

---

<audio class="deck-audio" src="../audio-p05-productividad-equipo/slide08.mp3"></audio>

<h2>🔟 Checklist de revisión (cifras, fechas y personas)</h2>
<div class="g2">
  <div class="card" style="border-top:3px solid #3b82f6;">
    <p><strong>📊 Cifras y fechas (1-5)</strong></p>
    <ul style="font-size:.6em;line-height:1.6;padding-left:1.1em;">
      <li><strong>1.</strong> ¿Todas las cifras salen de mis datos, sin redondeos?</li>
      <li><strong>2.</strong> ¿El total lo sumé a mano y coincide?</li>
      <li><strong>3.</strong> ¿Las fechas y personas del acta son las que dije?</li>
      <li><strong>4.</strong> ¿Se me coló alguna promesa de plazo o dinero?</li>
      <li><strong>5.</strong> ¿El número de correos o facturas es el que pedí?</li>
    </ul>
  </div>
  <div class="card" style="border-top:3px solid #10b981;">
    <p><strong>👥 Personas y tono (6-10)</strong></p>
    <ul style="font-size:.6em;line-height:1.6;padding-left:1.1em;">
      <li><strong>6.</strong> ¿El tono suena a mí y a mi empresa?</li>
      <li><strong>7.</strong> ¿Solo ofrecí lo que estaba autorizado?</li>
      <li><strong>8.</strong> ¿Ninguna decisión sobre personas la tomó la IA?</li>
      <li><strong>9.</strong> ¿Revisé los datos personales que aparecen?</li>
      <li><strong>10.</strong> ¿Lo aprobó una persona antes de salir?</li>
    </ul>
  </div>
</div>
<div class="tip" style="margin-top:.4em;">⏱ 3 minutos. Y si el mensaje afecta a alguien, el paso 10 lo hace otra persona.</div>

---

<audio class="deck-audio" src="../audio-p05-productividad-equipo/slide09.mp3"></audio>

<h2>🚪 Lo que NO se delega</h2>
<p class="sm">El agente prepara; estas tres cosas siguen siendo de personas, siempre:</p>
<div class="g3">
  <div class="card" style="border-top:3px solid #dc2626;">
    <p>📤 <strong>Enviar al cliente</strong></p>
    <p class="sm">Borrador sí; el envío —y la última frase— es de quien responde. Nada sale sin leerse.</p>
  </div>
  <div class="card" style="border-top:3px solid #dc2626;">
    <p>👤 <strong>RRHH</strong></p>
    <p class="sm">Ni evaluaciones ni filtrados automáticos de personas. Ese criterio es de RRHH, con la empresa delante.</p>
  </div>
  <div class="card" style="border-top:3px solid #dc2626;">
    <p>💶 <strong>Pagos y firmas</strong></p>
    <p class="sm">Aprobar una factura, pagar o firmar un contrato: nunca lo hace el agente, ni "para ayudar".</p>
  </div>
</div>
<div class="tip" style="margin-top:.5em;">⚖️ Regla de equipo: <strong>quien firma, revisa</strong>. La IA no firma nada.</div>

---

<audio class="deck-audio" src="../audio-p05-productividad-equipo/slide10.mp3"></audio>

<h2>✏️ Mini ejercicio</h2>
<div class="g2" style="gap:1.2em;">
  <div class="card amber">
    <p>🎯 <strong>Tu turno</strong></p>
    <p class="sm" style="margin-top:.2em;">Escribe un prompt de 5 partes para que el agente convierta las notas de una reunión ficticia en acta:</p>
    <ul style="font-size:.6em;line-height:1.6;padding-left:1.1em;margin-top:.3em;">
      <li>3 personas y 2 acuerdos con responsable y fecha</li>
      <li>Restricción: "no inventes acuerdos ni fechas"</li>
      <li>Formato: acuerdos con responsable; lo dudoso, "sin decidir"</li>
    </ul>
  </div>
  <div class="card green">
    <p>✅ <strong>Autocomprobación</strong></p>
    <ul style="font-size:.6em;line-height:1.7;padding-left:1.1em;">
      <li>¿Las 5 partes están presentes?</li>
      <li>¿Solo aparecen tus 3 personas y tus 2 acuerdos?</li>
      <li>¿Pasa la checklist de 10 puntos?</li>
      <li>¿Y el paso 10 lo firma otra persona?</li>
    </ul>
    <p class="sm" style="margin-top:.3em;">Solución guiada: <strong>Parte 7 · Ejercicios guiados</strong>.</p>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-p05-productividad-equipo/slide11.mp3"></audio>

<h2>✨ En esta parte 5</h2>
<div class="g3">
  <div class="card" style="text-align:center;border-top:4px solid #3b82f6;">
    <p style="font-size:1.4em;line-height:1.15;margin:.05em 0 .12em;">📧</p>
    <p><strong>Correo y actas</strong></p>
    <p class="sm">Clasifica y redacta; el envío siempre tuyo. Del acta, solo lo pactado</p>
  </div>
  <div class="card" style="text-align:center;border-top:4px solid #f59e0b;">
    <p style="font-size:1.4em;line-height:1.15;margin:.05em 0 .12em;">📊</p>
    <p><strong>Cifras y facturas</strong></p>
    <p class="sm">Literales, sumas a mano, diagnóstico sin pagar ni reclamar</p>
  </div>
  <div class="card" style="text-align:center;border-top:4px solid #10b981;">
    <p style="font-size:1.4em;line-height:1.15;margin:.05em 0 .12em;">👥</p>
    <p><strong>Personas y clientes</strong></p>
    <p class="sm">RRHH ordena, nunca decide; el tono lo apruebas tú</p>
  </div>
</div>
<div class="tip" style="margin-top:.5em;">💡 Misma receta de siempre: <strong>5 partes → checklist → aprueba</strong>. Lo nuevo aquí: en equipo, revisa otra persona.</div>
<p class="sm" style="text-align:center;margin-top:.5em;">Siguiente: <strong>Parte 6 · Agentes que trabajan en equipo</strong> — varios especialistas encadenados con tu supervisión. 🤝</p>
<p style="text-align:center;font-size:.45em;color:#94a3b8;margin-top:.4em;">CC BY-SA 4.0 · Sergi Garcia Barea · Octubre 2026</p>

---

<audio class="deck-audio" src="../audio-p05-productividad-equipo/slide12.mp3"></audio>

<h2>✅ Antes de pasar a la Parte 6</h2>
<div class="g2">
  <div class="card green">
    <p>✔️ <strong>Checklist de salida</strong></p>
    <ul style="font-size:.6em;line-height:1.7;padding-left:1.1em;">
      <li>He preparado correo, acta, resumen, factura y respuesta a reclamación</li>
      <li>Sé por qué "cifras literales" salva un informe</li>
      <li>Conozco las líneas rojas de RRHH: nunca decide sobre personas</li>
      <li>Paso la checklist de 10 puntos con segunda revisión</li>
      <li>Se qué cinco cosas nunca delego</li>
    </ul>
  </div>
  <div class="card" style="border-top:3px solid #8b5cf6;">
    <p>🔮 <strong>Lo que viene</strong></p>
    <p class="sm">La <strong>Parte 6</strong> es el corazón del curso: un coordinador reparte el trabajo entre especialistas (correo, agenda, facturas) y tú supervisas cada paso. Ya no es un agente solo: son varios, encadenados.</p>
    <p class="sm" style="margin-top:.4em;">Y en la <strong>Parte 7</strong>, ejercicios resueltos paso a paso para practicar sin riesgo.</p>
  </div>
</div>
<p style="text-align:center;font-size:.45em;color:#94a3b8;margin-top:.6em;">CC BY-SA 4.0 · Sergi Garcia Barea · Octubre 2026</p>
