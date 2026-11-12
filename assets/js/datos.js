/* =====================================================================
   DATOS DEL EQUIPO — este es el ÚNICO archivo que tienen que editar
   para personalizar la documentación. Cambien los textos entre comillas.
   ===================================================================== */

window.PROYECTO = {
  // --- Identidad del producto (elijan un nombre: Smart Campus IoT, Aula Viva,
  //     Campus Sense, Escuela Inteligente, Nodo Escolar, EduSense u otro) ---
  nombre: "Smart Campus IoT",
  bajada: "Nodo de monitoreo de calidad de aire (ICA), temperatura y humedad para el Aula Taller",
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
    { nombre: "Muñoz, Mariano", rol: "pm", cargo: "", foto: "", github: "" },
    { nombre: "Muñoz, Mariano", rol: "infraestructura", cargo: "Encargado", foto: "", github: "" },
    { nombre: "Dominici, Luciano", rol: "infraestructura", cargo: "Colaborador", foto: "", github: "" },
    { nombre: "Leguizamón, Thomas", rol: "desarrollo", cargo: "Encargado", foto: "", github: "" },
    { nombre: "Veneziale, Felipe", rol: "desarrollo", cargo: "Colaborador", foto: "", github: "" },
    { nombre: "Segatore, Sol", rol: "aplicaciones", cargo: "Encargada", foto: "", github: "" },
    { nombre: "Suarez, Luca", rol: "aplicaciones", cargo: "Colaborador", foto: "", github: "" }
  ],

  // --- Docentes (el auditor recibe los reportes del Project Manager) ---
  docentes: [
    { asignatura: "Laboratorio de Hardware", nombre: "Gustavo Werner", foto: "assets/img/docentes/gustavo-werner.jpg" },
    { asignatura: "Laboratorio de Programación", nombre: "Martín Barral", foto: "assets/img/docentes/martin-barral.jpg" },
    { asignatura: "Laboratorio de Sistemas Operativos y Redes", nombre: "Diego Martini", foto: "assets/img/docentes/diego-martini.jpg" },
    { asignatura: "Laboratorio de Aplicaciones", nombre: "Marcelo De Donato", foto: "assets/img/docentes/marcelo-de-donato.jpg" },
    { asignatura: "Investigación Operativa", nombre: "Gabriel Santisi", foto: "assets/img/docentes/gabriel-santisi.jpg" },
    { asignatura: "Seguridad Informática", nombre: "Lourdes Pedaci", foto: "assets/img/docentes/lourdes-pedaci.jpg" }
  ],
  auditor: "Todos los docentes. La aprobación de la documentación la da Lourdes Pedaci",

  // --- Control de cambios: agreguen una fila por cada cambio de alcance ---
  cambios: [
    { version: "0.1", fecha: "19/06/2026", responsable: "Todo el equipo", detalle: "Planificación y capacitación en las ideas básicas del proyecto (tarea 1)." },
    { version: "0.2", fecha: "11/08/2026", responsable: "Todo el equipo", detalle: "Adquisición del material de hardware y registro de precios en la planilla (tarea 2)." },
    { version: "0.3", fecha: "18/08/2026", responsable: "Luca Suarez, Mariano Muñoz, Thomas Leguizamón", detalle: "Precalentamiento y prueba inicial de MQ-135, DHT22 y ESP32 C3 Mini; código del DHT22 (tareas 3 y 4)." },
    { version: "0.4", fecha: "20/08/2026", responsable: "Sol Segatore, Luciano Dominici", detalle: "Código del MQ-135: lectura analógica sin calibrar (tarea 5)." },
    { version: "0.5", fecha: "28/08/2026", responsable: "Todo el equipo", detalle: "Consulta al auditor sobre las compras para la placa experimental y actualización de la documentación (tareas 6 y 7)." },
    { version: "0.6", fecha: "03/09/2026", responsable: "Todo el equipo", detalle: "Integración de los códigos de ambos sensores con visualización en LCD y dibujo del esquema de conexión (tareas 8 y 9)." },
    { version: "0.7", fecha: "24/09/2026", responsable: "Todo el equipo", detalle: "Compra de componentes, esquema de la placa y soldadura del nodo (tareas 10 a 12)." },
    { version: "0.8", fecha: "01/10/2026", responsable: "Todo el equipo", detalle: "Gabinete: trazado y corte de la caja; adquisición del módulo step-down (tareas 13 a 15)." },
    { version: "0.9", fecha: "09/10/2026", responsable: "Todo el equipo", detalle: "Prueba del montaje: se detectan dos problemas (señal alta del MQ-135 y falla de WiFi del ESP32 C3 Mini). Se agregan antena y divisor de tensión (tareas 16 a 19)." },
    { version: "0.10", fecha: "09/10/2026", responsable: "Todo el equipo", detalle: "Cambio por falla: el módulo WiFi del ESP32 C3 Mini se dañó por calor al soldar la antena. Se decide comprar un NodeMCU ESP32 (tarea 20)." },
    { version: "0.11", fecha: "16/10/2026", responsable: "Todo el equipo", detalle: "Compra del NodeMCU ESP32 v1.1 y armado de una placa nueva por el cambio de pinout (tareas 21 y 22)." },
    { version: "0.12", fecha: "23/10/2026", responsable: "Todo el equipo", detalle: "El NodeMCU llegó con falla de fábrica y la escuela lo reemplazó. Calibración del MQ-135 en aire limpio y código final con los pines nuevos (tareas 23 a 27)." },
    { version: "0.13", fecha: "27/10/2026", responsable: "Sol Segatore", detalle: "Creación de la página web de presentación del proyecto (tarea 28)." },
    { version: "0.14", fecha: "29/10/2026", responsable: "Todo el equipo", detalle: "Fallas de energía en el nodo. Al medir el módulo step-down se produjeron cortocircuitos y la institución lo reemplazó (tarea 29)." },
    { version: "0.15", fecha: "05/11/2026", responsable: "Sol Segatore, Luca Suarez, Mariano Muñoz", detalle: "Cambio de alimentación: el módulo step-down se reemplaza por el regulador 7805, entregado por el docente Gustavo Werner. Al soldarlo con los terminales invertidos, el ESP32 y el LCD recibieron 12 V y se quemaron (tareas 30 y 31)." },
    { version: "0.16", fecha: "06/11/2026", responsable: "Mariano Muñoz, Sol Segatore", detalle: "Evaluación del ESP32 dañado y decisión de comprar otro. Actualización de la carta Gantt hasta el 29/10 (tareas 32 y 33)." },
    { version: "0.17", fecha: "12/11/2026", responsable: "Sol Segatore, Mariano Muñoz", detalle: "La documentación se armó a partir de los documentos del equipo (carta Gantt, lista de precios, bitácora y códigos) siguiendo la orientación de la docente Lourdes Pedaci (tarea 34)." }
  ],


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
    { item: "Fuente multi voltaje step-down (reemplazada por el 7805)", cant: 1, unit: 7447 },
    { item: "Placa de desarrollo NodeMCU ESP32 (primera, con falla de fábrica)", cant: 1, unit: 9708 },
    { item: "Placa de desarrollo NodeMCU ESP32 (segunda, proporcionada por la escuela)", cant: 1, unit: 0 },
    { item: "Placa de desarrollo NodeMCU ESP32 (tercera, comprada por sobretensión)", cant: 1, unit: 12990 },
    { item: "Display LCD 16x2 (reemplazo, brindado por el docente Gustavo Werner)", cant: 1, unit: 0 },
    { item: "Regulador de tensión 7805 (LM340T5), entregado por el docente Gustavo Werner", cant: 1, unit: 0 },
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
    { fecha: "23/10/2026", prueba: "Código final", esperado: "Calibración y pines del nuevo ESP", resultado: "Código final con el MQ-135 calibrado y el esquema de pines actualizado", estado: "ok" },
    { fecha: "29/10/2026", prueba: "Medición del módulo step-down", esperado: "Encontrar la causa de las fallas de energía", resultado: "El nodo se apagaba y encendía solo y no se halló un falso contacto. Al medir el módulo se produjeron cortocircuitos y la institución lo reemplazó", estado: "falla" },
    { fecha: "03/11/2026", prueba: "Evaluación del regulador de tensión", esperado: "Alimentación estable de 5 V", resultado: "Se decide usar el regulador 7805 (entregado por el docente Gustavo Werner) y se diagrama su conexión", estado: "ok" },
    { fecha: "05/11/2026", prueba: "Conexión del regulador 7805 al nodo", esperado: "Nodo alimentado de forma estable", resultado: "El 7805 se soldó con los terminales invertidos: el ESP32 y el LCD recibieron 12 V y se quemaron. El docente Gustavo Werner entregó otro LCD", estado: "falla" },
    { fecha: "06/11/2026", prueba: "Evaluación del ESP32 dañado", esperado: "Recuperar el ESP32 para entregar el nodo a tiempo", resultado: "Tras una mañana de pruebas en los pines se decidió comprar otro, para no comprometer las funciones base del nodo", estado: "falla" }
  ]
};
