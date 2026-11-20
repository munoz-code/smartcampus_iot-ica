# CONTEXT.md: Smart Campus IoT, nodo de calidad de aire (Equipo 1)

Archivo de contexto para agentes (humanos o IA) que trabajen en este proyecto. Leelo completo antes de tocar algo. Estado al 19/11/2026.

## 1. Resumen en 5 líneas

- Proyecto institucional de 6to Informática (División A, Instituto Leonardo Murialdo, ciclo 2026), parte de "Smart Campus IoT": varios grupos construyen nodos distintos y se ven juntos en un dashboard del curso.
- **Nuestro nodo es el de calidad de aire**: mide temperatura, humedad y calidad de aire (en **ICA**, no en ppm). Se instala en el **Aula Taller**.
- Hardware: ESP32 (NodeMCU) + DHT22 + MQ-135 + LCD 16x2 I2C, alimentado con batería de 12 V, interruptor y regulador 7805.
- Los datos viajan por WiFi a un broker MQTT de la escuela y se ven en un dashboard propio del equipo.
- Entregables: nodo funcionando, página de documentación (GitHub Pages), carta Gantt (Google Sheets), defensa oral el **20/11/2026**.

## 2. Datos básicos

| Dato | Valor |
|---|---|
| Equipo | Equipo 1 (Grupo 1, tópicos `G1`) |
| Curso | 6to Informática, División A |
| Institución | Instituto Leonardo Murialdo |
| Repositorio | https://github.com/munoz-code/smartcampus_iot-ica |
| Documentación publicada | https://munoz-code.github.io/smartcampus_iot-ica/ |
| Dashboard del curso | http://proyecto2026.webhop.net:8085/ |
| Documento de capacitación | https://claude.ai/artifact/HEQdn6aYshTQ5GafHCbJ71 |

### Equipo

| Persona | Rol |
|---|---|
| Mariano Muñoz | Project Manager e Infraestructura (encargado) |
| Luciano Dominici | Infraestructura (colaborador) |
| Thomas Leguizamón | Desarrollo (encargado) |
| Felipe Veneziale | Desarrollo (colaborador) |
| Sol Segatore | Aplicaciones (encargada) |
| Luca Suarez | Aplicaciones (colaborador) |

### Docentes

| Asignatura | Docente |
|---|---|
| Laboratorio de Hardware | Gustavo Werner |
| Laboratorio de Programación | Martín Barral |
| Laboratorio de Sistemas Operativos y Redes | Diego Martini |
| Laboratorio de Aplicaciones | Marcelo De Donato |
| Investigación Operativa | Gabriel Santisi |
| Seguridad Informática | Lourdes Pedaci |

El **auditor de los proyectos son todos los docentes**. Quien da el visto bueno de la **documentación** es **Lourdes Pedaci** (también orientó el diseño del dashboard y la carpeta del proyecto).

## 3. Hardware del nodo

- **Microcontrolador:** NodeMCU ESP32 v1.1 (ESP32-WROOM, entrada micro USB). Lógica de 3,3 V.
- **DHT22:** temperatura y humedad. DATA en GPIO 27, VCC a 3,3 V (pin 3V3 del ESP32).
- **MQ-135:** calidad de aire. VCC a 5 V. Salida analógica AO pasa por un **divisor de tensión** (10 kΩ en serie desde AO y 18 kΩ a GND, porque no se consigue 20 kΩ) hacia el **GPIO 34** (ADC1; el ADC2 no funciona con WiFi). El divisor deja la señal en un 64 %.
- **LCD 16x2 con módulo I2C:** dirección 0x27, SDA en GPIO 21, SCL en GPIO 22, VCC a 5 V.
- **Alimentación:** batería de 12 V → interruptor → regulador **7805 (LM340T5) con disipador** → 5 V (VIN del ESP32, MQ-135 y LCD). Todos los GND unidos. Reemplazó a un módulo step-down que se descartó.
- **Gabinete:** caja estanca de 20 × 10 cm. Componentes fijados con sellador de silicona (sensores y display), placa experimental sobre separadores y batería sujeta con riel DIN. Interior, frente y costado derecho (micro USB e interruptor) están dibujados en el apartado 11 de la documentación.
- **Placa:** experimental de 5x7 cm con borneras y pines hembra.

> A confirmar por el equipo: el esquema asume que el ESP32 se alimenta por VIN con los 5 V del 7805.

## 4. Firmware (Arduino IDE, C/C++)

- **Librerías:** `WiFi.h`, `PubSubClient` (Nick O'Leary), `DHT sensor library` y `Adafruit Unified Sensor` (Adafruit), `Wire.h`, `LiquidCrystal_I2C`. Placa: "ESP32 Dev Module".
- **Estructura:** `setup()` inicia serial, I2C, LCD, DHT y WiFi; `loop()` mantiene conexiones, lee sensores, actualiza el LCD y publica. Funciones: `leerMQ()` (promedia 32 lecturas), `calcularICA()`, `mostrarDHT()` (scroll), `mantenerWifi()`, `mantenerMQTT()`, `publicar()`, `publicarDatos()`, `decodificarEstadoMQTT()`.
- **Temporización con `millis()` (sin `delay` largos):** MQ-135 cada 1 s, DHT22 cada 5 s, publicación cada 10 s, reintento de WiFi o MQTT cada 5 s.
- **LCD:** línea 1 con temperatura y humedad con desplazamiento; línea 2 con `ICA:xxx W+ M+` (`W` = WiFi, `M` = MQTT; `+` conectado, `-` desconectado).
- **Tópicos MQTT:** `6to_info/A/G1/temperatura`, `6to_info/A/G1/humedad`, `6to_info/A/G1/contaminacion` (este último es el ICA).
- **Broker:** el sketch se conecta al broker de la red del laboratorio (red "LABO") con usuario y contraseña. **No incluir credenciales en el repositorio ni en documentos.** El dashboard del equipo usa el broker por WebSockets (`ws://proyecto2026.webhop.net:9001`).
- Hubo un sketch temporal de **registro del RAW** (página web local del ESP32 con log, gráfico y variación de 10 minutos) usado para calibrar.

## 5. Calibración e ICA (decisión importante)

- El MQ-135 no distingue gases, así que **se informa un ICA relativo de 0 a 500, no ppm**. (Los docentes pidieron ppm; se acordó ICA con una justificación breve en la documentación.)
- Calibración medida el 23/10 con el sensor precalentado y el divisor puesto: **RAW 700 en aire limpio = ICA 0** (`mqBase`) y **RAW 2700 = ICA 500** (`mqTope`). Con alcohol cerca llegó hasta unos 2946.
- Fórmula: `ICA = constrain(map(RAW, 700, 2700, 0, 500), 0, 500)`.
- La calibración **vale solo con este divisor**. Si cambia el cableado, hay que repetirla. No es el ICA oficial.
- Para ppm reales haría falta curva por gas y calibración con concentración conocida (mejora futura).

## 6. Dashboard del equipo

- Archivo único `assets/dashboard_equipo.html` (HTML, CSS y JS propios, sin librerías de gráficos; única dependencia: MQTT.js 5.10.1 por CDN). Gráficos en SVG.
- Fuentes de datos reales a la vez: MQTT por WebSockets (`ws://proyecto2026.webhop.net:9001`, tópico `6to_info/A/G1/#`) y lectura del servidor web cada 2 s (`http://proyecto2026.webhop.net:8085/`). Sin modo demo.
- Reglas: valida rangos físicos, ignora mensajes retenidos, el dato del servidor cuenta como "en vivo" solo si cambia, más de 5 minutos sin datos es "Desconectado", historial de 24 h en memoria, alerta solo cuando el nivel empeora, modo pantalla completa con F11.
- Umbrales (de referencia escolar, sin fuente propia todavía): temperatura normal 18 a 26 °C; humedad normal 40 a 60 %; ICA normal hasta 100, atención 101 a 150, alerta más de 150; el medidor ICA tiene seis categorías.
- Lo pidió el docente Marcelo De Donato como actividad de su materia y para la exposición. Se armó con asistencia de Claude, siguiendo la guía de orientación de Lourdes Pedaci. Se incrusta en el apartado "Ver el proyecto" (sin campo de dirección editable).

## 7. Cronología e incidentes (fuente: carta Gantt)

- 19/06 planificación. 11/08 a 21/08: compra, pruebas iniciales, código DHT22 y MQ-135. 25/08 a 03/09: documentación, integración con LCD, esquema.
- 18/09 a 01/10 (Sprint 1, tareas 10 a 15): compra, placa soldada, caja estanca cortada, módulo step-down.
- 02/10 a 09/10: el MQ-135 daba lecturas altas (se agregó el divisor) y el ESP32 C3 Mini no conectaba. Su **módulo WiFi se dañó por calor al soldar la antena**.
- 09/10 a 23/10 (Sprint 2, tareas 20 a 27): compra del NodeMCU ESP32 y placa nueva por cambio de pinout. El primer NodeMCU llegó con **falla de fábrica** y la escuela lo reemplazó. Calibración del MQ-135 y código final.
- 29/10: fallas de energía; al medir el step-down se produjeron cortocircuitos y la institución lo reemplazó.
- 03/11 a 06/11 (Sprint 3, tareas 30 a 32): se cambió al regulador 7805 (lo dio Gustavo Werner). Se soldó con los **terminales invertidos**: el ESP32 y el LCD recibieron 12 V y se quemaron. Se corrigió la conexión, se puso disipador, se compró otro ESP32 ($12.990) y Gustavo Werner entregó otro LCD.
- 13/11 a 17/11: montaje final en la caja, dashboard del equipo, documentación.
- 19/11: exposición a familias, docentes y alumnos (Semana de la Escuela Técnica). **20/11: defensa oral y muestra final ante los auditores.**
- La carta Gantt tiene 39 tareas. Fuente de verdad: planilla de Google Sheets publicada (también hay exportaciones `.xlsx` con la columna "Asignado").

## 8. Presupuesto

- Lista de precios del equipo: **$71.590** (con el ESP32 C3 dañado y el step-down descartado) más **$12.990** del tercer NodeMCU = **$84.580**.
- Ítems provistos sin costo por la institución o los docentes: regulador 7805, interruptor, resistencias, caja estanca, segundo NodeMCU y LCD de reemplazo. Cable USB tipo C: no se compró.
- No hay precio registrado de los materiales del montaje final (separadores, riel DIN, silicona, termocontraíble, disipador).

## 9. Documentación web (carpeta `documentacion/`)

Es una copia adaptada de la plantilla de la profesora (https://lpedaci.github.io/sexto-proyecto2026/), **pero solo con información de este nodo**.

```
index.html              estructura y textos largos (apartados 1 a 16, portada, "Ver el proyecto")
assets/css/styles.css   estilos de la plantilla (no tocar)
assets/js/datos.js      datos estructurados: integrantes, docentes, cambios, bom, pruebas, URLs
assets/js/app.js        render desde datos.js (modificado respecto de la plantilla)
assets/dashboard_equipo.html   dashboard del equipo (se incrusta en un iframe)
assets/img/...          docentes/, integrantes/, componentes/, dashboard-curso.jpg
```

- Qué sale de `datos.js`: portada, integrantes, docentes, control de cambios (apartado 1), presupuesto (14) y pruebas (15), planilla de Gantt, URLs.
- Modificaciones a `app.js`: se quitaron los datos de otros nodos y el mapa de nodos, se agrupan los roles de una misma persona en una tarjeta, los docentes muestran foto, la portada muestra nombre y apellido, el visor acepta rutas relativas y no tiene campo de URL.
- **Cache:** los archivos se llaman con `?v=N` (hoy `?v=11`). Al subir cambios de `app.js`, `datos.js` o `styles.css`, subir también `index.html` con un número mayor.
- Se **eliminó** de la plantilla: guía de uso, otros nodos, mapa de nodos, cronograma de referencia, PERT/CPM y "productos" por asignatura.
- Apartados 6 (asignaturas con sus temas) y 7 (tres sprints) tienen contenido definido por el equipo.
- Apartado 11: planos digitalizados (frente, costado, interior) y esquema de conexiones en SVG. El plano de ubicación del aula se eliminó.

## 10. Reglas de trabajo con este equipo

1. **Solo información de nuestro nodo** (calidad de aire en ICA, temperatura y humedad). Nada de otros nodos, ni contenido de la plantilla que no sea nuestro.
2. **No inventar** datos, fechas, precios, mediciones, nombres ni resultados. Lo que falte se deja como "A completar por el equipo" y se le pregunta al equipo. Si el equipo pide sacar un cartel, se saca.
3. La **carta Gantt es la fuente de verdad** de lo realizado.
4. Español rioplatense, claro, tercera persona del equipo, **sin rayas largas**. Lenguaje técnico y prolijo pensando en cómo lo lee un auditor. Evitar textos largos de aclaración.
5. Si se citan fuentes, formato **APA 7.ª edición**.
6. Entregar los archivos **listos para subir al repositorio** y probar la página en un navegador sin errores antes de entregar.
7. No poner credenciales (WiFi, broker) en repositorio ni documentación.
8. Responder de forma breve y directa. Señalar de forma explícita las suposiciones.

## 11. Pendientes y problemas abiertos


- **HTTPS vs HTTP:** la documentación está en GitHub Pages (HTTPS) y el dashboard del curso y los `ws://` del dashboard del equipo son inseguros. El navegador bloquea contenido mixto: por eso el dashboard del curso se muestra con una captura y un enlace, y el del equipo puede quedar sin datos en vivo si se abre desde Pages (se ve bien abriendo el `index.html` en local o el dashboard en pestaña propia). La solución de fondo es HTTPS/WSS en el servidor de la escuela.
- Umbrales del dashboard sin fuente propia (APA pendiente).
- Plano de ubicación del aula (se quitó; el equipo lo pasará si lo necesita).
- Confirmar con el equipo la alimentación por VIN del ESP32 (sección 3).
- Fecha y detalles de la defensa del 20/11.

## 12. Mejoras futuras acordadas

- Conversión del MQ-135 a ppm con curva por gas.
- Actuadores (por ejemplo, ventilación automática según el ICA).
- Actualización de firmware por OTA.
- Asegurar el broker (contraseñas fuera del código, ACL y TLS).
