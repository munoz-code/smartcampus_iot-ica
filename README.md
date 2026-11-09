# Nodo IoT de calidad del aire con ESP32

Nodo de monitoreo ambiental basado en un **ESP32** que mide **temperatura, humedad y calidad del aire** (DHT22 + MQ-135), muestra los valores en un **display LCD 16x2** y los publica por **MQTT** para visualizarlos en un dashboard.

Proyecto institucional de 6.º año de Informática (A)· Grupo 1 · 2026.

## Características

- Lectura de temperatura y humedad con DHT22.
- Lectura de calidad del aire con MQ-135, convertida a un índice relativo de 0 a 500.
- Visualización local en LCD 16x2 por I2C (temperatura y humedad con desplazamiento, índice de aire en la segunda línea).
- Publicación por MQTT cada 10 segundos.
- Reconexión automática de WiFi y MQTT sin bloquear las lecturas ni el display.
- Alimentación desde 12 V con regulador de tensión 7805 (LM340T5) y un interruptor de encendido.

## Hardware

| Componente | Detalle |
|---|---|
| Microcontrolador | NodeMCU ESP32 (v1.1, ESP32-WROOM) |
| Sensor de temperatura y humedad | DHT22 |
| Sensor de calidad del aire | MQ-135 |
| Display | LCD 16x2 con módulo I2C (dirección 0x27) |
| Alimentación | Fuente de 12 V + interruptor + regulador de tensión 7805 (LM340T5, salida de 5 V) |
| Adaptación de señal | Divisor de tensión: 10 kΩ en serie y 18 kΩ a GND |

### Conexiones

| Componente | Pin del componente | Pin del ESP32 | Alimentación |
|---|---|---|---|
| DHT22 | DATA | GPIO 27 | 3,3 V (pin 3V3 del ESP32) |
| MQ-135 | AO (con divisor de tensión) | GPIO 34 (ADC1) | 5 V |
| LCD I2C | SDA | GPIO 21 | 5 V |
| LCD I2C | SCL | GPIO 22 | 5 V |
| ESP32 | VIN | — | 5 V (salida del 7805) |

> El divisor de tensión baja la salida analógica del MQ-135 (hasta 5 V) a un rango seguro para el ADC del ESP32 (3,3 V). Se usó una resistencia de 18 kΩ porque no se consigue de 20 kΩ.
>
> Se usa el GPIO 34 porque pertenece al ADC1: los pines del ADC2 no funcionan con el WiFi activo.
>
> El interruptor va en la entrada de 12 V, antes del 7805. Al ser un regulador lineal, el 7805 disipa calor: se recomienda un disipador y capacitores cerca del regulador (por ejemplo 0,33 µF en la entrada y 0,1 µF en la salida).

## Software

### Librerías (Arduino IDE)

- `PubSubClient` (Nick O'Leary)
- `DHT sensor library` y `Adafruit Unified Sensor` (Adafruit)
- `LiquidCrystal I2C` (Frank de Brabander)

Placa en el IDE: **ESP32 Dev Module**.

### Configuración

Antes de cargar el código, completá los datos de tu red en el sketch:

```cpp
const char* ssid = "TU_RED_WIFI";
const char* password = "TU_CLAVE";
const char* mqtt_server = "IP_DEL_BROKER";
const char* mqtt_user = "USUARIO";
const char* mqtt_pass = "CLAVE";
```

### Tópicos MQTT

| Tópico | Contenido |
|---|---|
| `6to_info/A/G1/temperatura` | Temperatura en °C |
| `6to_info/A/G1/humedad` | Humedad relativa en % |
| `6to_info/A/G1/contaminacion` | Valor del MQ-135 |

## Calibración del MQ-135

El valor del MQ-135 se convierte a un **índice relativo de 0 a 500** con dos referencias medidas con este montaje:

```cpp
int mqBase = 700;   // RAW en aire limpio -> índice 0
int mqTope = 2700;  // RAW con contaminación fuerte -> índice 500
```

1. Con el sensor precalentado (de 20 a 60 minutos, más tiempo la primera vez), medí el RAW en aire limpio y ventilado: ese es `mqBase`.
2. Acercá una fuente de vapores (por ejemplo, un papel con alcohol a 15 o 20 cm) y anotá el valor en que el RAW se estabiliza: ese es `mqTope`.

Los valores dependen de cada sensor y del divisor de tensión: si cambian el cableado, hay que calibrar de nuevo.

> El índice es relativo a este sensor. **No son ppm reales**: el MQ-135 responde a varios gases a la vez y no los distingue.

## Estructura del repositorio

```
├── codigo/          # Sketch del nodo (ESP32 + DHT22 + MQ-135 + LCD + MQTT)
├── docs/            # Documentación, esquema de conexión y carta Gantt
└── README.md
```

## Estado del proyecto

- Nodo funcionando con lectura de sensores, LCD y publicación al dashboard general por MQTT.
- Sensor MQ-135 calibrado en aire limpio.

## Equipo

| Rol | Encargado | Colaborador |
|---|---|---|
| Project Manager | Mariano Muñoz | Luca Suarez |
| Infraestructura | Mariano Muñoz | Luciano Dominici |
| Desarrollo | Thomas Leguizamón | Felipe Veneziale |
| Aplicaciones | Sol Segatore | Luca Suarez |

**Institución:** Instituto Leonardo Murialdo  
**Docente auditor:** Lourdes Pedaci

