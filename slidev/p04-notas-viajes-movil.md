---
theme: default
title: Notas, viajes y móvil · Agentes de IA para productividad · Sergi Garcia Barea
author: Sergi Garcia Barea
aspectRatio: 16/9
canvasWidth: 1280
transition: slide-left
htmlAttrs:
  lang: es
exportFilename: p04-notas-viajes-movil
---

<audio class="deck-audio" src="../audio-p04-notas-viajes-movil/slide00.mp3"></audio>

<h2 style="font-size:2em;text-align:center;">🧠 Notas, viajes y móvil</h2>
<h3 style="text-align:center;">Agentes de IA para productividad · Parte 4 de 8 · Octubre 2026</h3>
<p style="text-align:center;margin-top:1.2em;">👤 Sergi Garcia Barea</p>
<p style="text-align:center;font-size:.6em;color:#64748b;">Segundo cerebro · Logística · Hábitos · Asistentes del móvil</p>
<div style="text-align:center;margin-top:.4em;">
  <span style="display:inline-block;background:#f1f5f9;padding:4px 14px;border-radius:6px;font-size:.5em;">
    <img src="https://licensebuttons.net/l/by-sa/4.0/88x31.png" alt="CC BY-SA" style="height:24px;vertical-align:middle;"> CC BY-SA 4.0
  </span>
</div>

---

<audio class="deck-audio" src="../audio-p04-notas-viajes-movil/slide01.mp3"></audio>

<h2>🗂 Caso 1 · Capturar notas sin orden</h2>
<p class="sm"><strong>Situación:</strong> Marta acumula notas sueltas de llamadas y quiere ordenarlas sin tardar la tarde.</p>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Prompt de ejemplo</div>
    <pre style="font-size:.5em;border-left-color:#3b82f6;"><code>[1] Soy coordinadora de compras.
[2] Ordena estas 6 notas sueltas en temas
&nbsp;    y resúmelas.
[3] Contexto: notas de llamadas de octubre
&nbsp;    (todo ficticio): Suministros Norte,
&nbsp;    Cliente del Norte, auditoría interna…
[4] Formato: 4 grupos como máximo, cada
&nbsp;    nota en 1 línea con su acción.
[5] No borres ninguna nota ni crees temas
&nbsp;    nuevos fuera de los que aparezcan.</code></pre>
  </div>
  <div class="exp">
    <div class="pl">✅ Cómo verificarlo</div>
    <ul class="exp-list">
      <li>¿Las 6 notas siguen todas presentes?</li>
      <li>¿Los grupos salen de lo que escribiste, no de su imaginación?</li>
      <li>¿Cada línea termina en una acción concreta?</li>
      <li>Errores típicos: fusiona dos notas distintas en una</li>
      <li>Errores típicos: inventa acciones "lógicas" que no mencionaste</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-p04-notas-viajes-movil/slide02.mp3"></audio>

<h2>🔍 Caso 2 · "¿Qué quedó con este proveedor?"</h2>
<p class="sm"><strong>Situación:</strong> dentro de 3 meses necesitas recuperar lo acordado. Tu segundo cerebro responde en segundos.</p>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Prompt de ejemplo</div>
    <pre style="font-size:.5em;border-left-color:#8b5cf6;"><code>[1] Soy compras.
[2] Busca en mis notas todo lo de
&nbsp;    Suministros Norte y resúmelo.
[3] Contexto: carpeta "notas-octubre"
&nbsp;    con 14 notas (ficticias).
[4] Formato: línea de tiempo con fechas
&nbsp;    y, al final, lo que queda pendiente.
[5] Si una fecha no está escrita, dilo;
&nbsp;    no la deduzcas.</code></pre>
  </div>
  <div class="exp">
    <div class="pl">✅ Cómo verificarlo</div>
    <ul class="exp-list">
      <li>¿Solo aparecen notas que tratan de ese proveedor?</li>
      <li>¿Las fechas son las escritas, sin deducir?</li>
      <li>¿El bloque "pendiente" apunta a algo real y no a una invención?</li>
      <li>Errores típicos: responde de memoria en vez de en tus notas</li>
      <li>Errores típicos: se salta notas por parecidas</li>
    </ul>
  </div>
</div>
<div class="tip" style="margin-top:.4em;">💡 Regla: si el agente no cita la nota original, no lo des por cierto. Pídele "cita de qué nota sale".</div>

---

<audio class="deck-audio" src="../audio-p04-notas-viajes-movil/slide03.mp3"></audio>

<h2>✈️ Caso 3 · Organizar un viaje de trabajo</h2>
<p class="sm"><strong>Situación:</strong> viaje de Empresa Ejemplo S.L. de Barcelona a Valencia, del 18 al 19 de noviembre.</p>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Prompt de ejemplo</div>
    <pre style="font-size:.5em;border-left-color:#10b981;"><code>[1] Soy asistente de dirección.
[2] Monta el esqueleto del viaje de Ana
&nbsp;    a Valencia (18-19 nov).
[3] Datos: reunión día 19 a las 10:00
&nbsp;    en Cliente Valencia; presupuesto
&nbsp;    EJEMPLO-VIAJE: 300 €; prefiere
&nbsp;    tren por la mañana.
[4] Formato: tabla hora / tramo / coste
&nbsp;    estimado; 1 noche de hotel.
[5] No reserves ni compres nada; solo
&nbsp;    propuesta, con marcas "por decidir".</code></pre>
  </div>
  <div class="exp">
    <div class="pl">✅ Cómo verificarlo</div>
    <ul class="exp-list">
      <li>¿La reunión de las 10:00 del 19 está intacta?</li>
      <li>¿Los costes suman menos de 300 €? (¡suma a mano!)</li>
      <li>¿Ninguna reserva hecha "por sorpresa"?</li>
      <li>Errores típicos: elige horarios imposibles de conectar</li>
      <li>Errores típicos: olvida el presupuesto en algún capítulo</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-p04-notas-viajes-movil/slide04.mp3"></audio>

<h2>🧳 Antes de salir de viaje: la lista</h2>
<p class="sm">Con el esqueleto aprobado, pide la lista final. Este es el resultado tipo (ficticio):</p>
<div class="g2">
  <div class="card" style="border-top:3px solid #3b82f6;">
    <p>📋 <strong>Checklist del viaje</strong></p>
    <ul style="font-size:.6em;line-height:1.6;padding-left:1.1em;">
      <li>Tren ida: llega con margen de 60 min antes de la reunión</li>
      <li>Hotel: zona centro, factura a nombre de Empresa Ejemplo S.L.</li>
      <li>Tren vuelta: después de las 16:00 (libre por la tarde)</li>
      <li>Agenda: huecos de desplazamiento puestos</li>
      <li>Gastos: sobre de 300 €, con justificantes</li>
    </ul>
  </div>
  <div class="card" style="border-top:3px solid #dc2626;">
    <p>🚫 <strong>Lo que se queda en tu escritorio</strong></p>
    <ul style="font-size:.6em;line-height:1.6;padding-left:1.1em;">
      <li>Reservar y pagar (siempre persona y empresa)</li>
      <li>Dar el número de tarjeta de la empresa</li>
      <li>Confirmar asistencia al cliente por ti</li>
      <li>Compartir el itinerario con datos personales de terceros</li>
      <li>Regalar la agenda completa de Ana</li>
    </ul>
  </div>
</div>
<div class="tip" style="margin-top:.4em;">💡 El agente <strong>prepara el viaje; la reserva la hace quien corresponda</strong>.</div>

---

<audio class="deck-audio" src="../audio-p04-notas-viajes-movil/slide05.mp3"></audio>

<h2>🧘 Caso 4 · Hábitos y revisión mensual</h2>
<p class="sm"><strong>Situación:</strong> último día hábil del mes. El agente prepara; tú decides y firmas.</p>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Prompt de ejemplo</div>
    <pre style="font-size:.5em;border-left-color:#f59e0b;"><code>[1] Soy responsable de administración.
[2] Prepara mi revisión mensual de noviembre.
[3] Contexto: te paso mis 3 listas —
&nbsp;    logrado (7 puntos), pendiente (4),
&nbsp;    incidencias (2). Todo ficticio.
[4] Formato: 1 página → logros / qué se
&nbsp;    quedó / 3 prioridades de diciembre.
[5] No justifiques errores ni pidas
&nbsp;    disculpas: solo hechos y acciones.</code></pre>
  </div>
  <div class="exp">
    <div class="pl">✅ Cómo verificarlo</div>
    <ul class="exp-list">
      <li>¿Los 7 logros son los tuyos, sin adornos ni culpas?</li>
      <li>¿Las 4 pendientes siguen ahí (no se han evaporado)?</li>
      <li>¿Solo 3 prioridades para el mes siguiente?</li>
      <li>Errores típicos: convierte pendientes en "resueltos"</li>
      <li>Errores típicos: escribe disculpas que tú no pediste</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-p04-notas-viajes-movil/slide06.mp3"></audio>

<h2>📱 El móvil, canal de primera clase</h2>
<div class="g3">
  <div class="card" style="border-top:3px solid #3b82f6;">
    <p>🗣 <strong>Asistente del sistema</strong></p>
    <p class="sm">Siri, Asistente de Google o Copilot: "recuérdame llamar a Ana mañana a las 10". Gratis, ya instalado, respuestas cortas.</p>
  </div>
  <div class="card" style="border-top:3px solid #10b981;">
    <p>🤖 <strong>Agentes dentro de apps conocidas</strong></p>
    <p class="sm">El resumen de correo, el borrador en el chat o la clase automática de un documento: ya viven en las apps de siempre.</p>
  </div>
  <div class="card" style="border-top:3px solid #8b5cf6;">
    <p>🔗 <strong>Apps sin código (tipo Zapier)</strong></p>
    <p class="sm">Conectan apps entre sí: "si llega un correo con factura, guárdalo en la carpeta X". Se montan con casillas, no con programación.</p>
  </div>
</div>
<div class="tip" style="margin-top:.5em;">💡 Por donde empieces, igual: <strong>tarea pequeña → revisión → solo entonces automatizas</strong>.</div>

---

<audio class="deck-audio" src="../audio-p04-notas-viajes-movil/slide07.mp3"></audio>

<h2>🔐 Checklist de permisos del móvil</h2>
<p class="sm">Antes de activar cualquier asistente o app con IA, repasa estos 6 puntos en Ajustes:</p>
<div class="g2">
  <div class="card" style="border-top:3px solid #f59e0b;">
    <p><strong>🎛 Qué revisar (1-3)</strong></p>
    <ul style="font-size:.6em;line-height:1.7;padding-left:1.1em;">
      <li><strong>1.</strong> ¿Qué permisos tiene hoy? (contactos, micrófono, galería, ubicación)</li>
      <li><strong>2.</strong> ¿Los necesita para MI tarea o le he dado de todo?</li>
      <li><strong>3.</strong> ¿Puede actuar solo o solo propone y yo confirmo?</li>
    </ul>
  </div>
  <div class="card" style="border-top:3px solid #3b82f6;">
    <p><strong>🛡 Qué comprobar (4-6)</strong></p>
    <ul style="font-size:.6em;line-height:1.7;padding-left:1.1em;">
      <li><strong>4.</strong> ¿Usa datos de la empresa? Revisa la política interna</li>
      <li><strong>5.</strong> ¿Puedo desactivar el aprendizaje con mis datos?</li>
      <li><strong>6.</strong> ¿Notificaciones activadas solo para lo que importa?</li>
    </ul>
  </div>
</div>
<div class="tip" style="margin-top:.4em;">⏱ Cinco minutos una vez, y luego cada vez que instales algo nuevo.</div>

---

<audio class="deck-audio" src="../audio-p04-notas-viajes-movil/slide08.mp3"></audio>

<h2>💥 Errores típicos con el móvil</h2>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.3em;border-top:3px solid #dc2626;">
      <p>📇 <strong>Permisos de más</strong></p>
      <p class="sm">Una app de recordatorios no necesita tus contactos ni tu galería. Si lo pide, desinstala o desactiva.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-top:3px solid #dc2626;">
      <p>🔕 <strong>Notificaciones que ahogan</strong></p>
      <p class="sm">10 avisos por lo mismo. Pide un único resumen diario en vez de gota constante.</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.3em;border-top:3px solid #dc2626;">
      <p>📍 <strong>Datos sensibles en apps desconocidas</strong></p>
      <p class="sm">Ubicación, salud o tickets de compra en apps sin política clara: no los compartas.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-top:3px solid #dc2626;">
      <p>💸 <strong>Automatizar antes de probar</strong></p>
      <p class="sm">La "regla" que manda 50 correos por semana mal configurada. Prueba con 1 caso real primero.</p>
    </div>
  </div>
</div>
<div class="tip">💡 Los 4 mismos criterios de siempre, ahora en la palma de la mano: datos, permisos, revisión, pequeño.</div>

---

<audio class="deck-audio" src="../audio-p04-notas-viajes-movil/slide09.mp3"></audio>

<h2>🔟 Checklist de revisión (notas, viajes y móvil)</h2>
<div class="g2">
  <div class="card" style="border-top:3px solid #3b82f6;">
    <p><strong>📎 Notas y viajes (1-5)</strong></p>
    <ul style="font-size:.6em;line-height:1.6;padding-left:1.1em;">
      <li><strong>1.</strong> ¿Todas mis notas originales siguen completas?</li>
      <li><strong>2.</strong> ¿Las citas de nota apuntan a su fuente?</li>
      <li><strong>3.</strong> ¿El viaje respeta horarios, reunión y presupuesto?</li>
      <li><strong>4.</strong> ¿He sumado los costes a mano?</li>
      <li><strong>5.</strong> ¿Ninguna reserva ni compra hecha sin mí?</li>
    </ul>
  </div>
  <div class="card" style="border-top:3px solid #10b981;">
    <p><strong>📱 Móvil y hábitos (6-10)</strong></p>
    <ul style="font-size:.6em;line-height:1.6;padding-left:1.1em;">
      <li><strong>6.</strong> ¿Permisos mínimos en todas las apps?</li>
      <li><strong>7.</strong> ¿Reviso el borrador antes de publicar o enviar?</li>
      <li><strong>8.</strong> ¿La revisión mensual la aprobé yo?</li>
      <li><strong>9.</strong> ¿Los datos pegados eran ficticios?</li>
      <li><strong>10.</strong> ¿La automatización ha pasado antes por 1 prueba real?</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-p04-notas-viajes-movil/slide10.mp3"></audio>

<h2>✏️ Mini ejercicio</h2>
<div class="g2" style="gap:1.2em;">
  <div class="card amber">
    <p>🎯 <strong>Tu turno</strong></p>
    <p class="sm" style="margin-top:.2em;">Con tus datos ficticios, pide al agente:</p>
    <ul style="font-size:.6em;line-height:1.6;padding-left:1.1em;margin-top:.3em;">
      <li>1. Ordenar 4 notas sueltas en 2 grupos</li>
      <li>2. El esqueleto de un viaje de 1 día con 1 reunión</li>
      <li>Y en el móvil: revisa los permisos de 1 app que uses a diario</li>
    </ul>
  </div>
  <div class="card green">
    <p>✅ <strong>Autocomprobación</strong></p>
    <ul style="font-size:.6em;line-height:1.7;padding-left:1.1em;">
      <li>¿Las 4 notas siguen todas en el resultado?</li>
      <li>¿El viaje cabe en el presupuesto y no reserva nada?</li>
      <li>¿Anotaste qué permisos sobraban en la app?</li>
      <li>¿Pasas la checklist de 10 puntos?</li>
    </ul>
    <p class="sm" style="margin-top:.3em;">Más ejercicios y un flujo con 3 agentes: <strong>Parte 7</strong>.</p>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-p04-notas-viajes-movil/slide11.mp3"></audio>

<h2>✨ En esta parte 4</h2>
<div class="g3">
  <div class="card" style="text-align:center;border-top:4px solid #3b82f6;">
    <p style="font-size:1.4em;line-height:1.15;margin:.05em 0 .12em;">🗂</p>
    <p><strong>Segundo cerebro</strong></p>
    <p class="sm">Capturas, ordenas y recuperas: con cita de la nota original</p>
  </div>
  <div class="card" style="text-align:center;border-top:4px solid #10b981;">
    <p style="font-size:1.4em;line-height:1.15;margin:.05em 0 .12em;">✈️</p>
    <p><strong>Viajes</strong></p>
    <p class="sm">Esqueleto y checklist con la agencia; reservas y pagos, personas</p>
  </div>
  <div class="card" style="text-align:center;border-top:4px solid #8b5cf6;">
    <p style="font-size:1.4em;line-height:1.15;margin:.05em 0 .12em;">📱</p>
    <p><strong>Móvil</strong></p>
    <p class="sm">Permisos mínimos, notificaciones útiles, automatiza solo lo probado</p>
  </div>
</div>
<p class="sm" style="text-align:center;margin-top:.6em;">Siguiente: <strong>Parte 5 · Productividad de equipo</strong> — correo, actas, Excel, facturas, RRHH, atención al cliente y proveedores. 🏢</p>
<p style="text-align:center;font-size:.45em;color:#94a3b8;margin-top:.4em;">CC BY-SA 4.0 · Sergi Garcia Barea · Octubre 2026</p>

---

<audio class="deck-audio" src="../audio-p04-notas-viajes-movil/slide12.mp3"></audio>

<h2>✅ Antes de pasar a la Parte 5</h2>
<div class="g2">
  <div class="card green">
    <p>✔️ <strong>Checklist de salida</strong></p>
    <ul style="font-size:.6em;line-height:1.7;padding-left:1.1em;">
      <li>Sé capturar y buscar en mis notas con cita de fuente</li>
      <li>Tengo una plantilla de viaje que no reserva nada sola</li>
      <li>Conozco la revisión mensual de 1 página</li>
      <li>He revisado los permisos de al menos una app</li>
      <li>Se distinguir asistente, agente integrado y app sin código</li>
    </ul>
  </div>
  <div class="card" style="border-top:3px solid #8b5cf6;">
    <p>🔮 <strong>Lo que viene</strong></p>
    <p class="sm">Hasta aquí todo era trabajo <strong>personal</strong>. En la Parte 5 el escenario crece: correo de equipo, actas compartidas, informes de Excel, facturas, RRHH con cuidado de sesgos y atención al cliente.</p>
    <p class="sm" style="margin-top:.4em;">Y en la <strong>Parte 6</strong>, varios agentes trabajando a la vez con tu supervisión.</p>
  </div>
</div>
<p style="text-align:center;font-size:.45em;color:#94a3b8;margin-top:.6em;">CC BY-SA 4.0 · Sergi Garcia Barea · Octubre 2026</p>
