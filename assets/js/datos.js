/* =====================================================================
   DATOS DEL EQUIPO — este es el ÚNICO archivo que tienen que editar
   para personalizar la documentación. Cambien los textos entre comillas.
   ===================================================================== */

window.PROYECTO = {
  // --- Identidad del producto (elijan un nombre: Smart Campus IoT, Aula Viva,
  //     Campus Sense, Escuela Inteligente, Nodo Escolar, EduSense u otro) ---
  nombre: "Smart Campus IoT",
  bajada: "Sistema distribuido de monitoreo ambiental, energético y operativo para la escuela",
  equipo: "Equipo 1",                 // nombre del equipo
  curso: "6to Informática · División A",
  institucion: "Instituto Leonardo Murialdo",
  ciclo: "2026",

  // Nodo que construye este equipo (uno de: luz, presencia, aire, ruido,
  // consumo, suelo, red). Define qué sensor específico se destaca.
  nodoAsignado: "aire",

  // --- Acceso al proyecto ---
  // previewUrl: dirección pública del dashboard (GitHub Pages, Netlify, Grafana
  // con acceso público, etc.). Mientras esté vacía se muestra el aviso "sin publicar".
  previewUrl: "",
  repoUrl: "https://github.com/munoz-code/smartcampus_iot-ica",                        // repositorio del código (GitHub)

  // Carta Gantt en Google Sheets: Archivo → Compartir → Publicar en la Web →
  // Insertar → copiar la dirección de src="…" (termina en /pubhtml?...)
  ganttSheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9vXDfodmee_oARvEPsakgR6_6oGliNwktLWHYJ8_MHPF1g8GqHeBbj9dAM7CJN9SNdCu5SI2v2s9w/pubhtml?gid=749693102&single=true&widget=true&headers=false",

  // --- Integrantes ---
  // rol: "pm" | "desarrollo" | "aplicaciones" | "infraestructura"
  // foto: ruta a una imagen (ej. "assets/img/integrantes/ana.jpg") o "" para iniciales
  integrantes: [
    { nombre: "Muñoz, Mariano", rol: "pm", foto: "", github: "" },
    { nombre: "Muñoz, Mariano", rol: "infraestructura", foto: "", github: "" },
    { nombre: "Dominici, Luciano", rol: "infraestructura", foto: "", github: "" },
    { nombre: "Leguizamón, Thomas", rol: "desarrollo", foto: "", github: "" },
    { nombre: "Veneziale, Felipe", rol: "desarrollo", foto: "", github: "" },
    { nombre: "Segatore, Sol", rol: "aplicaciones", foto: "", github: "" },
    { nombre: "Suarez, Luca", rol: "aplicaciones", foto: "", github: "" }
  ],

  // --- Docentes (el auditor recibe los reportes del Project Manager) ---
  docentes: [
    { asignatura: "Laboratorio de Hardware", nombre: "Gustavo Werner" },
    { asignatura: "Laboratorio de Sistemas Operativos", nombre: "Diego Martini" },
    { asignatura: "Laboratorio de Aplicaciones", nombre: "Marcelo De Donato" },
    { asignatura: "Desarrollo de Software", nombre: "Martín Barral" },
    { asignatura: "Investigación Operativa", nombre: "Gabriel Santisi" },
    { asignatura: "Seguridad Informática", nombre: "Lourdes Pedaci" }
  ],
  auditor: "Todos los docentes. La aprobación de la documentación la da Lourdes Pedaci",

  // --- Control de cambios: agreguen una fila por cada cambio de alcance ---
  cambios: [
    { version: "0.1", fecha: "19/06/2026", responsable: "Equipo", detalle: "Planificación y capacitación en las ideas básicas del proyecto (tarea 1)." },
    { version: "0.2", fecha: "11/08/2026", responsable: "Equipo", detalle: "Adquisición del material de hardware y registro de precios en la planilla (tarea 2)." },
    { version: "0.3", fecha: "18/08/2026", responsable: "Equipo", detalle: "Precalentamiento y prueba inicial de MQ-135, DHT22 y ESP32 C3 Mini; código del DHT22 (tareas 3 y 4)." },
    { version: "0.4", fecha: "20/08/2026", responsable: "Equipo", detalle: "Código del MQ-135: lectura analógica sin calibrar (tarea 5)." },
    { version: "0.5", fecha: "28/08/2026", responsable: "Equipo", detalle: "Consulta al auditor sobre las compras para la placa experimental y actualización de la documentación (tareas 6 y 7)." },
    { version: "0.6", fecha: "03/09/2026", responsable: "Equipo", detalle: "Integración de los códigos de ambos sensores con visualización en LCD y dibujo del esquema de conexión (tareas 8 y 9)." },
    { version: "0.7", fecha: "24/09/2026", responsable: "Equipo", detalle: "Compra de componentes, esquema de la placa y soldadura del nodo (tareas 10 a 12)." },
    { version: "0.8", fecha: "01/10/2026", responsable: "Equipo", detalle: "Gabinete: trazado y corte de la caja; adquisición del módulo step-down (tareas 13 a 15)." },
    { version: "0.9", fecha: "09/10/2026", responsable: "Equipo", detalle: "Prueba del montaje: se detectan dos problemas (señal alta del MQ-135 y falla de WiFi del ESP32 C3 Mini). Se agregan antena y divisor de tensión (tareas 16 a 19)." },
    { version: "0.10", fecha: "09/10/2026", responsable: "Equipo", detalle: "Cambio por falla: el módulo WiFi del ESP32 C3 Mini se dañó por calor al soldar la antena. Se decide comprar un NodeMCU ESP32 (tarea 20)." },
    { version: "0.11", fecha: "16/10/2026", responsable: "Equipo", detalle: "Compra del NodeMCU ESP32 v1.1 y armado de una placa nueva por el cambio de pinout (tareas 21 y 22)." },
    { version: "0.12", fecha: "23/10/2026", responsable: "Equipo", detalle: "El NodeMCU llegó con falla de fábrica y la escuela lo reemplazó. Calibración del MQ-135 en aire limpio y código final con los pines nuevos (tareas 24 a 27)." },
    { version: "0.13", fecha: "27/10/2026", responsable: "Equipo", detalle: "Creación de la página web de presentación del proyecto (tarea 28)." },
    { version: "0.14", fecha: "10/11/2026", responsable: "Equipo", detalle: "La documentación se armó a partir de los documentos del equipo (carta Gantt, lista de precios, bitácora y códigos) sobre la plantilla de la docente." }
  ],

  // --- Carta Gantt: fechas en formato AAAA-MM-DD ---
  // area: pm | hardware | so | desarrollo | aplicaciones | io | seginfo
  // hito: true -> se dibuja como rombo (entregable)
  gantt: [
    { etapa: "Etapa 1 · Lanzamiento y análisis", tareas: [
      { nombre: "Presentación del desafío y formación de equipos", area: "pm", inicio: "2026-03-02", fin: "2026-03-13" },
      { nombre: "Definición del problema e investigación de antecedentes", area: "pm", inicio: "2026-03-09", fin: "2026-03-27" },
      { nombre: "Definición de variables a medir", area: "hardware", inicio: "2026-03-23", fin: "2026-04-03" },
      { nombre: "Bosquejo de arquitectura", area: "so", inicio: "2026-03-30", fin: "2026-04-17" },
      { nombre: "Inventario de activos y riesgos iniciales", area: "seginfo", inicio: "2026-04-06", fin: "2026-04-17" },
      { nombre: "Anteproyecto + diagrama inicial", area: "pm", inicio: "2026-04-17", fin: "2026-04-17", hito: true }
    ]},
    { etapa: "Etapa 2 · Diseño técnico", tareas: [
      { nombre: "Selección de sensores y pruebas individuales", area: "hardware", inicio: "2026-04-20", fin: "2026-05-15" },
      { nombre: "Matriz de decisión de sensores", area: "io", inicio: "2026-04-20", fin: "2026-05-01" },
      { nombre: "Definición de tópicos MQTT", area: "desarrollo", inicio: "2026-05-04", fin: "2026-05-15" },
      { nombre: "Diseño del servidor", area: "so", inicio: "2026-05-04", fin: "2026-05-22" },
      { nombre: "Wireframe del dashboard", area: "aplicaciones", inicio: "2026-05-11", fin: "2026-05-29" },
      { nombre: "Red PERT/CPM del proyecto", area: "io", inicio: "2026-05-18", fin: "2026-05-29" },
      { nombre: "Diseño del nodo + primer BOM", area: "pm", inicio: "2026-05-29", fin: "2026-05-29", hito: true }
    ]},
    { etapa: "Etapa 3 · Prototipo funcional", tareas: [
      { nombre: "Nodo ESP32 en protoboard", area: "hardware", inicio: "2026-06-01", fin: "2026-06-26" },
      { nombre: "Firmware: lectura de sensores", area: "desarrollo", inicio: "2026-06-08", fin: "2026-07-03" },
      { nombre: "Servidor Linux + Mosquitto", area: "so", inicio: "2026-06-01", fin: "2026-06-26" },
      { nombre: "Hardening básico del servidor", area: "seginfo", inicio: "2026-06-22", fin: "2026-07-10" },
      { nombre: "Primeras pruebas MQTT", area: "desarrollo", inicio: "2026-06-29", fin: "2026-07-10" },
      { nombre: "Dashboard mínimo", area: "aplicaciones", inicio: "2026-06-15", fin: "2026-07-17" },
      { nombre: "Demo parcial funcional", area: "pm", inicio: "2026-07-17", fin: "2026-07-17", hito: true }
    ]},
    { etapa: "Etapa 4 · Integración", tareas: [
      { nombre: "Integración nodos ↔ servidor", area: "desarrollo", inicio: "2026-08-03", fin: "2026-08-28" },
      { nombre: "Base de datos histórica", area: "so", inicio: "2026-08-03", fin: "2026-08-21" },
      { nombre: "Seguridad MQTT: usuarios, ACL y TLS", area: "seginfo", inicio: "2026-08-17", fin: "2026-09-04" },
      { nombre: "Visualización unificada", area: "aplicaciones", inicio: "2026-08-17", fin: "2026-09-18" },
      { nombre: "Mejoras de firmware (reconexión, errores)", area: "desarrollo", inicio: "2026-08-24", fin: "2026-09-11" },
      { nombre: "Optimización de ubicación y presupuesto", area: "io", inicio: "2026-08-31", fin: "2026-09-18" },
      { nombre: "Pruebas de estabilidad", area: "pm", inicio: "2026-09-07", fin: "2026-09-25" },
      { nombre: "Versión beta del sistema", area: "pm", inicio: "2026-09-25", fin: "2026-09-25", hito: true }
    ]},
    { etapa: "Etapa 5 · Producto final", tareas: [
      { nombre: "Montaje prolijo y gabinete definitivo", area: "hardware", inicio: "2026-09-28", fin: "2026-10-23" },
      { nombre: "Auditoría de seguridad del sistema", area: "seginfo", inicio: "2026-10-05", fin: "2026-10-23" },
      { nombre: "Documentación completa", area: "pm", inicio: "2026-10-05", fin: "2026-10-30" },
      { nombre: "Pruebas finales y validación", area: "pm", inicio: "2026-10-19", fin: "2026-10-30" },
      { nombre: "Versión candidata final", area: "pm", inicio: "2026-10-30", fin: "2026-10-30", hito: true }
    ]},
    { etapa: "Etapa 6 · Presentación y defensa", tareas: [
      { nombre: "Afiche, panel y video breve", area: "aplicaciones", inicio: "2026-11-02", fin: "2026-11-13" },
      { nombre: "Ensayo de demo en vivo", area: "pm", inicio: "2026-11-09", fin: "2026-11-20" },
      { nombre: "Defensa interdisciplinaria", area: "pm", inicio: "2026-11-20", fin: "2026-11-20", hito: true }
    ]}
  ],
  // Períodos sin clases que se sombrean en la Gantt
  receso: [{ nombre: "Receso invernal", inicio: "2026-07-20", fin: "2026-07-31" }],
  // Duración de cada sprint en semanas (Scrum recomienda entre 1 y 4)
  semanasPorSprint: 3,

  // --- Presupuesto / BOM: precios en pesos argentinos (completar) ---
  bom: [
    { item: "Display LCD 16x2", cant: 1, unit: 9034 },
    { item: "Sensor DHT22 (temperatura y humedad)", cant: 1, unit: 13272 },
    { item: "Cable USB tipo C (no comprado)", cant: 1, unit: 0 },
    { item: "Placa de desarrollo ESP32 C3 (dañada, reemplazada)", cant: 1, unit: 7360 },
    { item: "Sensor de calidad de aire MQ-135", cant: 1, unit: 4674 },
    { item: "Cables de protoboard macho y hembra", cant: 1, unit: 3000 },
    { item: "Placa experimental 50x70 mm", cant: 1, unit: 4759 },
    { item: "Pack de 5 tiras de 40 pines hembra", cant: 1, unit: 8500 },
    { item: "Bornera hembra de 2 vías", cant: 1, unit: 3836 },
    { item: "Fuente multi voltaje step-down (no se usó, reemplazada por el 7805)", cant: 1, unit: 7447 },
    { item: "Placa de desarrollo NodeMCU ESP32", cant: 1, unit: 9708 },
    { item: "Regulador de tensión 7805 (LM340T5), provisto por la institución", cant: 1, unit: 0 },
    { item: "Interruptor de encendido (provisto por la institución)", cant: 1, unit: 0 },
    { item: "Resistencias de 10 kΩ y 18 kΩ (divisor de tensión), provistas por la institución", cant: 2, unit: 0 },
    { item: "Caja estanca (gabinete), provista por la institución", cant: 1, unit: 0 }
  ],

  // --- Bitácora de pruebas: una fila por prueba ---
  pruebas: [
    { fecha: "13/08/2026", prueba: "Código del DHT22", esperado: "Temperatura y humedad coherentes", resultado: "Lecturas coherentes con el ambiente y control de errores", estado: "ok" },
    { fecha: "18/08/2026", prueba: "Precalentamiento y prueba inicial (MQ-135, DHT22, ESP32 C3 Mini)", esperado: "Componentes funcionando", resultado: "DHT22 y ESP32 C3 Mini correctos; el MQ-135 necesita calibrarse en aire limpio", estado: "ok" },
    { fecha: "20/08/2026", prueba: "Código del MQ-135", esperado: "Lectura analógica por el ADC", resultado: "Valor por el monitor serie, sin escala porque faltaba calibrar", estado: "ok" },
    { fecha: "01/09/2026", prueba: "Integración DHT22 + MQ-135 + LCD", esperado: "Un solo programa con visualización", resultado: "Temperatura y humedad con desplazamiento en la línea 1 y MQ-135 en la línea 2", estado: "ok" },
    { fecha: "02/10/2026", prueba: "Prueba con el montaje armado", esperado: "Nodo completo funcionando", resultado: "Dos problemas: MQ-135 con lecturas altas en aire limpio y ESP32 C3 Mini sin conectarse a una red", estado: "falla" },
    { fecha: "09/10/2026", prueba: "Antena y divisor de tensión", esperado: "Señal reducida y WiFi funcionando", resultado: "Divisor correcto; el C3 Mini siguió sin conectar: su módulo WiFi se dañó por calor al soldar la antena", estado: "falla" },
    { fecha: "22/10/2026", prueba: "Prueba con el NodeMCU ESP32 nuevo", esperado: "Cargar el programa y calibrar el MQ-135", resultado: "Defecto de fábrica: no permitía cargar ningún programa", estado: "falla" },
    { fecha: "23/10/2026", prueba: "Reemplazo del ESP32 y reporte al dashboard", esperado: "Conectividad y datos en el dashboard", resultado: "La escuela entregó un ESP32 nuevo; se resolvió la conectividad y el reporte al dashboard fue exitoso", estado: "ok" },
    { fecha: "23/10/2026", prueba: "Calibración del MQ-135", esperado: "Valor base en aire limpio", resultado: "Página local en una red creada por el ESP32 para reportar los datos y calibrar en aire limpio", estado: "ok" },
    { fecha: "23/10/2026", prueba: "Código final", esperado: "Calibración y pines del nuevo ESP", resultado: "Código final con el MQ-135 calibrado y el esquema de pines actualizado", estado: "ok" }
  ]
};