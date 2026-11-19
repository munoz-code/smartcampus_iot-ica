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
  previewUrl: "assets/dashboard_equipo.html",
  repoUrl: "https://github.com/munoz-code/smartcampus_iot-ica",                        // repositorio del código (GitHub)

  // Carta Gantt en Google Sheets: Archivo → Compartir → Publicar en la Web →
  // Insertar → copiar la dirección de src="…" (termina en /pubhtml?...)
  ganttSheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9vXDfodmee_oARvEPsakgR6_6oGliNwktLWHYJ8_MHPF1g8GqHeBbj9dAM7CJN9SNdCu5SI2v2s9w/pubhtml?gid=749693102&single=true&widget=true&headers=false",

  // --- Integrantes ---
  // rol: "pm" | "desarrollo" | "aplicaciones" | "infraestructura"
  // foto: ruta a una imagen (ej. "assets/img/integrantes/ana.jpg") o "" para iniciales
  integrantes: [
    { nombre: "Muñoz, Mariano", rol: "pm", cargo: "", foto: "assets/img/integrantes/mariano-munoz.jpg", github: "" },
    { nombre: "Muñoz, Mariano", rol: "infraestructura", cargo: "Encargado", foto: "", github: "" },
    { nombre: "Dominici, Luciano", rol: "infraestructura", cargo: "Colaborador", foto: "assets/img/integrantes/luciano-dominici.jpg", github: "" },
    { nombre: "Leguizamón, Thomas", rol: "desarrollo", cargo: "Encargado", foto: "assets/img/integrantes/thomas-leguizamon.jpg", github: "" },
    { nombre: "Veneziale, Felipe", rol: "desarrollo", cargo: "Colaborador", foto: "assets/img/integrantes/felipe-veneziale.jpg", github: "" },
    { nombre: "Segatore, Sol", rol: "aplicaciones", cargo: "Encargada", foto: "assets/img/integrantes/sol-segatore.jpg", github: "" },
    { nombre: "Suarez, Luca", rol: "aplicaciones", cargo: "Colaborador", foto: "assets/img/integrantes/luca-suarez.jpg", github: "" }
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
    { version: "0.5", fecha: "28/08/2026", responsable: "Todo el equipo / Felipe Veneziale, Sol Segatore, Thomas Leguizamón", detalle: "Consulta al auditor sobre las compras para la placa experimental y actualización de la documentación (tareas 6 y 7)." },
    { version: "0.6", fecha: "03/09/2026", responsable: "Todo el equipo / Mariano Muñoz", detalle: "Integración de los códigos de ambos sensores con visualización en LCD y dibujo del esquema de conexión (tareas 8 y 9)." },
    { version: "0.7", fecha: "24/09/2026", responsable: "Todo el equipo / Mariano Muñoz", detalle: "Compra de componentes, esquema de la placa y soldadura del nodo (tareas 10 a 12)." },
    { version: "0.8", fecha: "01/10/2026", responsable: "Felipe Veneziale / Todo el equipo", detalle: "Gabinete: trazado y corte de la caja; adquisición del módulo step-down (tareas 13 a 15)." },
    { version: "0.9", fecha: "09/10/2026", responsable: "Mariano Muñoz, Sol Segatore, Luciano Dominici, Luca Suarez, Felipe Veneziale", detalle: "Prueba del montaje: se detectan dos problemas (señal alta del MQ-135 y falla de WiFi del ESP32 C3 Mini). Actualización de Gantt, antena y divisor de tensión (tareas 16 a 19)." },
    { version: "0.10", fecha: "09/10/2026", responsable: "Todo el equipo", detalle: "Cambio por falla: el módulo WiFi del ESP32 C3 Mini se dañó por calor al soldar la antena. Se decide comprar un NodeMCU ESP32 (tarea 20)." },
    { version: "0.11", fecha: "16/10/2026", responsable: "Todo el equipo / Mariano Muñoz, Luca Suarez", detalle: "Compra del NodeMCU ESP32 v1.1 y armado de una placa nueva por el cambio de pinout (tareas 21 y 22)." },
    { version: "0.12", fecha: "23/10/2026", responsable: "Todo el equipo / Mariano Muñoz, Sol Segatore", detalle: "El NodeMCU llegó con falla de fábrica y la escuela lo reemplazó. Calibración del MQ-135 en aire limpio, código final con los pines nuevos y actualización de Gantt (tareas 23 a 27)." },
    { version: "0.13", fecha: "27/10/2026", responsable: "Sol Segatore", detalle: "Creación y desarrollo de la página web de presentación del proyecto (tarea 28)." },
    { version: "0.14", fecha: "29/10/2026", responsable: "Todo el equipo", detalle: "Fallas de energía en el nodo. Al medir el módulo step-down se produjeron cortocircuitos y la institución lo reemplazó (tarea 29)." },
    { version: "0.15", fecha: "05/11/2026", responsable: "Sol Segatore, Luca Suarez, Mariano Muñoz", detalle: "Cambio de alimentación: el módulo step-down se reemplaza por el regulador 7805, entregado por el docente Gustavo Werner. Al soldarlo con los terminales invertidos, el ESP32 y el LCD recibieron 12 V y se quemaron. Se soldó en la orientación correcta y se le colocó un disipador (tareas 30 y 31)." },
    { version: "0.16", fecha: "06/11/2026", responsable: "Mariano Muñoz, Sol Segatore", detalle: "Evaluación del ESP32 dañado: tras una mañana de pruebas se compró otro, que se reemplazó el mismo día. Actualización de la carta Gantt (tareas 32 y 33)." },
    { version: "0.17", fecha: "12/11/2026", responsable: "Sol Segatore, Mariano Muñoz, Luca Suarez", detalle: "La docente Lourdes Pedaci envió una orientación para armar la carpeta del proyecto y se avanzó con la página web con los datos al día (tarea 34)." },
    { version: "0.18", fecha: "17/11/2026", responsable: "Mariano Muñoz, Felipe Veneziale, Luca Suarez", detalle: "Montaje final: se fijaron el display, el MQ-135 y el DHT22 a la caja estanca con sellador de silicona, la placa con separadores y la batería con un riel DIN en forma de abrazadera. Se reforzaron con termocontraíble las soldaduras que se soltaron (tarea 35)." },
    { version: "0.19", fecha: "17/11/2026", responsable: "Mariano Muñoz, Sol Segatore, Luca Suarez", detalle: "Se creó el dashboard propio del equipo, pedido por el docente Marcelo De Donato como actividad de su materia y para la exposición, y se actualizó la carpeta del proyecto y la carta Gantt (tareas 36 y 37)." },
    { version: "0.20", fecha: "19/11/2026", responsable: "Todo el equipo", detalle: "Exposición del proyecto a familias, docentes y alumnos en la Semana de la Escuela Técnica (tarea 38)." },
    { version: "0.21", fecha: "20/11/2026", responsable: "Todo el equipo", detalle: "Defensa oral y muestra final del proyecto Smart Campus IoT a los auditores (tarea 39)." }
  ],

  // --- Presupuesto / BOM: precios en pesos argentinos (completar) ---
  bom: [
    { item: "Display LCD 16x2", cant: 1, unit: 9034 },
    { item: "Sensor DHT22", cant: 1, unit: 13272 },
    { item: "Cable USB tipo C (no comprado)", cant: 1, unit: 0 },
    { item: "Placa ESP32 C3 (dañada)", cant: 1, unit: 7360 },
    { item: "Sensor MQ-135", cant: 1, unit: 4674 },
    { item: "Cables de protoboard", cant: 1, unit: 3000 },
    { item: "Placa experimental 50x70 mm", cant: 1, unit: 4759 },
    { item: "Pack de 5 tiras de 40 pines hembra", cant: 1, unit: 8500 },
    { item: "Bornera hembra 2 vías", cant: 1, unit: 3836 },
    { item: "Módulo step-down (reemplazado por el 7805)", cant: 1, unit: 7447 },
    { item: "NodeMCU ESP32 (1.ª, con falla de fábrica)", cant: 1, unit: 9708 },
    { item: "NodeMCU ESP32 (2.ª, provista por la escuela)", cant: 1, unit: 0 },
    { item: "NodeMCU ESP32 (3.ª, reposición)", cant: 1, unit: 12990 },
    { item: "Display LCD 16x2 (reemplazo, provisto)", cant: 1, unit: 0 },
    { item: "Regulador 7805 (provisto)", cant: 1, unit: 0 },
    { item: "Interruptor (provisto)", cant: 1, unit: 0 },
    { item: "Resistencias 10 kΩ y 18 kΩ (provistas)", cant: 2, unit: 0 },
    { item: "Caja estanca (provista)", cant: 1, unit: 0 }
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
    { fecha: "05/11/2026", prueba: "Conexión del regulador 7805 al nodo", esperado: "Nodo alimentado de forma estable", resultado: "El 7805 se soldó con los terminales invertidos: el ESP32 y el LCD recibieron 12 V y se quemaron. Se soldó en la orientación correcta con un disipador y el docente Gustavo Werner entregó otro LCD", estado: "falla" },
    { fecha: "06/11/2026", prueba: "Evaluación del ESP32 dañado", esperado: "Recuperar el ESP32 para entregar el nodo a tiempo", resultado: "Tras una mañana de pruebas se decidió comprar otro, para no comprometer las funciones base del nodo. Se compró y se reemplazó el mismo día", estado: "falla" }
    ,{ fecha: "17/11/2026", prueba: "Nodo montado en la caja estanca", esperado: "Nodo operativo con los componentes fijados", resultado: "El nodo quedó operativo al 100 % con los componentes fijados en la caja", estado: "ok" }
  ],

  // --- Tareas de la carta Gantt (para detalle por integrante) ---
  ganttTareas: [
  {
    "num": 1,
    "detalle": "Planificación y capacitación de ideas básicas del proyecto",
    "fecha": "19/06/2026",
    "asignado": "Todo el equipo",
    "avance": 100
  },
  {
    "num": 2,
    "detalle": "Adquisición de material de hardware necesario para iniciar el proyecto",
    "fecha": "11/08/2026",
    "asignado": "Todo el equipo",
    "avance": 100
  },
  {
    "num": 3,
    "detalle": "Precalentamiento y prueba inicial de componentes (MQ-135, DHT22 y ESP)",
    "fecha": "13/08/2026",
    "asignado": "Suarez Luca",
    "avance": 100
  },
  {
    "num": 4,
    "detalle": "Desarrollo de código para el funcionamiento del DHT22",
    "fecha": "13/08/2026",
    "asignado": "Muñoz Mariano / Leguizamon Thomas",
    "avance": 100
  },
  {
    "num": 5,
    "detalle": "Desarrollo de código para el funcionamiento del MQ-135",
    "fecha": "20/08/2026",
    "asignado": "Segatore Sol / Dominici Luciano",
    "avance": 100
  },
  {
    "num": 6,
    "detalle": "Consultas técnicas al auditor del proyecto para la compra de hardware",
    "fecha": "21/08/2026",
    "asignado": "Todo el equipo",
    "avance": 100
  },
  {
    "num": 7,
    "detalle": "Actualización de la documentación (GANTT, lista de precios)",
    "fecha": "25/08/2026",
    "asignado": "Veneziale Felipe  / Segatore Sol / Leguizamon Thomas",
    "avance": 100
  },
  {
    "num": 8,
    "detalle": "Integración de los códigos de ambos sensores y visualización en LCD",
    "fecha": "01/09/2026",
    "asignado": "Todo el equipo",
    "avance": 100
  },
  {
    "num": 9,
    "detalle": "Dibujo del esquema de conexión del nodo",
    "fecha": "03/09/2026",
    "asignado": "Muñoz Mariano",
    "avance": 100
  },
  {
    "num": 10,
    "detalle": "Compra de componentes necesarios para la placa del nodo",
    "fecha": "18/09/2026",
    "asignado": "Todo el equipo",
    "avance": 100
  },
  {
    "num": 11,
    "detalle": "Planificación y dibujo del esquema de la placa del nodo",
    "fecha": "22/09/2026",
    "asignado": "Muñoz Mariano",
    "avance": 100
  },
  {
    "num": 12,
    "detalle": "Soldadura y armado de la placa del nodo",
    "fecha": "24/09/2026",
    "asignado": "Muñoz Mariano",
    "avance": 100
  },
  {
    "num": 13,
    "detalle": "Trazado de corte para el posterior mecanizado del gabinete del nodo",
    "fecha": "25/09/2026",
    "asignado": "Veneziale Felipe",
    "avance": 100
  },
  {
    "num": 14,
    "detalle": "Mecanizado de la caja/gabinete del nodo",
    "fecha": "29/09/2026",
    "asignado": "Todo el equipo",
    "avance": 100
  },
  {
    "num": 15,
    "detalle": "Adquisición de módulo reductor de tensión (step-down)",
    "fecha": "30/09/2026",
    "asignado": "Todo el equipo",
    "avance": 100
  },
  {
    "num": 16,
    "detalle": "Conexión y prueba de los sensores con el montaje armado",
    "fecha": "02/10/2026",
    "asignado": "Mariano Muñoz / Segatore Sol / Dominici Luciano",
    "avance": 100
  },
  {
    "num": 17,
    "detalle": "Actualización de la documentación (GANTT)",
    "fecha": "06/10/2026",
    "asignado": "Luca Suarez / Felipe Veneziale",
    "avance": 100
  },
  {
    "num": 18,
    "detalle": "Soldadura de la antena al ESP32 C3 Mini",
    "fecha": "08/10/2026",
    "asignado": "Todo el equipo",
    "avance": 100
  },
  {
    "num": 19,
    "detalle": "Conexión del divisor de tensión a la placa del nodo",
    "fecha": "09/10/2026",
    "asignado": "Suarez Luca / Muñoz Mariano / Veneziale Felipe",
    "avance": 100
  },
  {
    "num": 20,
    "detalle": "Conexión y prueba de los sensores con el montaje armado (+ antena y divisor)",
    "fecha": "09/10/2026",
    "asignado": "Todo el equipo",
    "avance": 100
  },
  {
    "num": 21,
    "detalle": "Adquisición del nuevo NodeMCU ESP32",
    "fecha": "13/10/2026",
    "asignado": "Todo el equipo",
    "avance": 100
  },
  {
    "num": 22,
    "detalle": "Soldadura y armado de la placa del nodo (nueva, para el NodeMCU ESP32)",
    "fecha": "16/10/2026",
    "asignado": "Muñoz Mariano / Luca Suarez",
    "avance": 100
  },
  {
    "num": 23,
    "detalle": "Actualización de la documentación (GANTT)",
    "fecha": "20/10/2026",
    "asignado": "Segatore Sol / Muñoz Mariano",
    "avance": 100
  },
  {
    "num": 24,
    "detalle": "Prueba del nodo con el nuevo ESP32",
    "fecha": "22/10/2026",
    "asignado": "Todo el equipo",
    "avance": 100
  },
  {
    "num": 25,
    "detalle": "Reemplazo del ESP32 y pruebas",
    "fecha": "23/10/2026",
    "asignado": "Todo el equipo",
    "avance": 100
  },
  {
    "num": 26,
    "detalle": "Calibración y prueba del MQ-135 con el nuevo esquema",
    "fecha": "23/10/2026",
    "asignado": "Mariano Muñoz",
    "avance": 100
  },
  {
    "num": 27,
    "detalle": "Actualización del código con el MQ-135 calibrado y adaptación para el nuevo ESP",
    "fecha": "23/10/2026",
    "asignado": "Muñoz Mariano / Segatore Sol",
    "avance": 100
  },
  {
    "num": 28,
    "detalle": "Creación y desarrollo de la página web de presentación del proyecto",
    "fecha": "22/10/2026",
    "asignado": "Segatore Sol",
    "avance": 100
  },
  {
    "num": 29,
    "detalle": "Medición del módulo step-down y reemplazo por incidente",
    "fecha": "29/10/2026",
    "asignado": "Todo el equipo",
    "avance": 100
  },
  {
    "num": 30,
    "detalle": "Evaluación sobre la conexion del regulador de voltaje",
    "fecha": "03/11/2026",
    "asignado": "Sol Segatore / Luca Suarez",
    "avance": 100
  },
  {
    "num": 31,
    "detalle": "Conexión del regulador 7805 a la placa del nodo.",
    "fecha": "05/11/2026",
    "asignado": "Mariano Muñoz",
    "avance": 100
  },
  {
    "num": 32,
    "detalle": "Evaluación sobre el estado del nodo y compra de componente",
    "fecha": "06/11/2026",
    "asignado": "Mariano Muñoz",
    "avance": 100
  },
  {
    "num": 33,
    "detalle": "Actualización de la documentación (GANTT)",
    "fecha": "06/11/2026",
    "asignado": "Sol Segatore",
    "avance": 100
  },
  {
    "num": 34,
    "detalle": "Avance en el desarrollo de la pagina web (carpeta del proyecto)",
    "fecha": "12/11/2026",
    "asignado": "Sol Segatore / Mariano Muñoz / Luca Suarez",
    "avance": 100
  },
  {
    "num": 35,
    "detalle": "Fijar los componentes a la caja",
    "fecha": "13/11/2026",
    "asignado": "Mariano Muñoz / Felipe Veneziale / Luca Suarez",
    "avance": 100
  },
  {
    "num": 36,
    "detalle": "Avance en el desarrollo de la pagina web y desarrollo de dashboard del equipo.",
    "fecha": "17/11/2026",
    "asignado": "Mariano Muñoz / Sol Segatore / Luca Suarez",
    "avance": 100
  },
  {
    "num": 37,
    "detalle": "Actualización de la documentación (GANTT)",
    "fecha": "17/11/2026",
    "asignado": "Mariano Muñoz",
    "avance": 100
  },
  {
    "num": 38,
    "detalle": "Exposicion a las familias, docentes y alumnos ( Semana de la Escuela Tecnica )",
    "fecha": "19/11/2026",
    "asignado": "Todo el equipo",
    "avance": 100
  },
  {
    "num": 39,
    "detalle": "Defensa oral y muestra final del proyecto a los auditores.",
    "fecha": "20/11/2026",
    "asignado": "Todo el equipo",
    "avance": 100
  }
]
};