<div align="center">

# 🗃️ Gesper — Gestor Personal

**Centraliza el control de productos, almacén, ventas por dos canales, ganancias, finanzas personales y deudas.**

Dashboard consolidado · Cierre de día con imagen-resumen · Trazabilidad total

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Sin dependencias](https://img.shields.io/badge/dependencies-0-success?style=flat-square)]()
[![Estado](https://img.shields.io/badge/estado-en%20desarrollo-yellow?style=flat-square)]()

[Descripción](#-descripción) · [Características](#-características) · [Stack](#-stack-técnico) · [Instalación](#-instalación) · [Estructura](#-estructura-del-proyecto) · [Roadmap](#-roadmap) · [Colaboradores](#-colaboradores)

</div>

---

## 📖 Descripción

**Gesper** es una aplicación web personal (no multiusuario) que permite llevar el control completo de un pequeño negocio de venta de productos junto con las finanzas personales del dueño.

Nació como proyecto personal con el objetivo de tener **una sola fuente de verdad** para responder en segundos:

- ¿Cuánto vendí hoy?
- ¿Cuánto gané realmente?
- ¿Cuánto dinero debería tener en caja?
- ¿Quién me debe y cuánto?
- ¿En qué se fue el dinero que gasté?

La app es **mobile-first**, funciona como **SPA** y está construida sin frameworks ni dependencias externas.

---

## ✨ Características

### 🧩 Módulos incluidos

| Módulo | Descripción |
|--------|-------------|
| 📊 **Dashboard** | Resumen consolidado del día, semana o mes: ventas, inversión, ganancia, deudas pendientes y dinero esperado en caja. |
| 📦 **Productos** | Catálogo maestro con precio de costo, precio de venta, ganancia y margen calculados automáticamente. |
| 🏬 **Almacén** | Entradas, salidas, ajustes, ventas mayoristas y ofertas con precio ajustable. |
| 🛒 **Ventas** | Punto de venta con **conteo diario** (inicio − final = vendido) y registro manual de ventas. |
| 💳 **Deudas** | Clientes que deben, con abonos parciales, estados (pendiente / parcial / pagada) y canal de origen. |
| 💰 **Finanzas** | Ingresos y gastos personales con categorías, filtros y soporte multi-moneda. |
| 💱 **Monedas** | Histórico de tasas de cambio y cálculo de ganancia/pérdida cambiaria. |
| 🔒 **Cierre de día** | Consolidado de ambos canales + generación de **imagen PNG** del resumen con Canvas + bloqueo del día. |
| 🕓 **Historial** | Auditoría completa de todas las acciones con búsqueda por fecha, entidad y tipo. |

### 🎯 Principales características

- ✅ **Doble canal de venta**: Almacén y Punto de Venta, con cálculo independiente de inversión y ganancia.
- ✅ **Cierre de día** con rotación automática de conteos y bloqueo para evitar ediciones posteriores.
- ✅ **Imagen-resumen** generada con Canvas para compartir el cierre.
- ✅ **Multi-moneda** con tasa histórica congelada por movimiento.
- ✅ **Mobile-first responsive** con breakpoints en 360 / 768 / 1024 / 1440 px.
- ✅ **Arquitectura por capas** preparada para escalar sin romper lo existente.
- ✅ **Sin dependencias**: solo HTML, CSS y JavaScript vanilla con ES Modules.

---

## 🛠️ Stack Técnico

| Capa | Tecnología |
|------|-----------|
| **Frontend** | HTML5 + CSS3 + JavaScript (ES Modules) |
| **Estilos** | CSS puro con variables y mobile-first |
| **Routing** | Router SPA propio basado en hash (`#/ruta`) |
| **Estado** | Store propio con patrón pub/sub |
| **Persistencia** | `localStorage` (fase actual) → API REST (fase futura) |
| **Build tools** | Ninguna — el navegador corre el código tal cual |
| **Dependencias** | 0 |

> ⚠️ **Nota**: al usar ES Modules nativos, la app **debe servirse por HTTP**. No funciona abriendo `index.html` con doble clic (`file://`).

---

## 🚀 Instalación

### Requisitos

- Navegador moderno (Chrome, Edge, Firefox, Safari actualizados).
- Un servidor HTTP local (cualquiera sirve).

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/VictorHerdz10/Gesper.git
cd Gesper
```

```bash
# 2. Levantar un servidor local (elige UNA opción)

# Opción A — Python 3
python -m http.server 5173

# Opción B — Node.js
npx serve .

# Opción C — PHP
php -S localhost:5173
```

```bash
# 3. Abrir en el navegador
http://localhost:5173
```

---

## 📁 Estructura del proyecto

```
gesper/
├── index.html                 # Punto de entrada
├── README.md
├── docs/
│   ├── arquitectura.md        # Documento técnico
│   └── TRASPASO.txt           # Guía para colaboradores
│
├── public/
│   └── favicon.ico
│
├── src/
│   ├── main.js                # Arranca la app
│   ├── routes.js              # Registro de rutas
│   │
│   ├── core/                  # Núcleo interno
│   │   ├── router.js
│   │   ├── store.js
│   │   ├── events.js
│   │   └── dom.js
│   │
│   ├── shared/                # Utilidades puras
│   │   ├── format.js
│   │   ├── validators.js
│   │   ├── storage.js
│   │   ├── id.js
│   │   └── constants.js
│   │
│   ├── data/                  # Repositorios (acceso a datos)
│   │   ├── db.js
│   │   └── *.repo.js
│   │
│   ├── services/              # Reglas de negocio
│   │   └── *.service.js
│   │
│   ├── modules/               # Vistas (una carpeta por pantalla)
│   │   ├── dashboard/
│   │   ├── productos/
│   │   ├── almacen/
│   │   ├── ventas/
│   │   ├── deudas/
│   │   ├── finanzas/
│   │   ├── monedas/
│   │   ├── cierre/
│   │   ├── mas/
│   │   └── historial/
│   │
│   ├── components/            # UI reutilizable
│   │   ├── layout/
│   │   └── ui/
│   │
│   └── styles/
│       ├── reset.css
│       ├── variables.css
│       ├── layout.css
│       └── main.css
│
└── (futuro) server/           # Backend cuando migremos de localStorage
```

Para el detalle técnico completo, revisar [`docs/TRASPASO.txt`](docs/TRASPASO.txt).

---

## 🧠 Arquitectura en una imagen

```
┌──────────────────────────────────────────────────────────────┐
│                        NAVEGADOR                              │
│                                                              │
│  index.html ──► src/main.js ──► router ──► modules/*.view.js │
│                                              │               │
│                                              ▼               │
│                                        services/*.js         │
│                                              │               │
│                                              ▼               │
│                                        data/*.repo.js        │
│                                              │               │
│                                              ▼               │
│                                     localStorage / API       │
└──────────────────────────────────────────────────────────────┘
```

**Reglas de oro:**

- Los `modules/` **nunca** acceden a `data/` directamente. Siempre pasan por `services/`.
- Los `services/` **nunca** tocan el DOM.
- Los `data/` **nunca** contienen reglas de negocio.
- Un `module/` **nunca** importa otro `module/`.

---

## 🗺️ Roadmap

### ✅ Completado

- [x] Estructura de carpetas y arquitectura por capas
- [x] Router SPA por hash
- [x] Store global y bus de eventos
- [x] Layout responsive (sidebar desktop + bottom-nav móvil)
- [x] Pantalla "Más" con grid de todos los módulos
- [x] Las 10 vistas registradas y exportando correctamente

### 🚧 En progreso

- [ ] **Fase 1** — Productos (CRUD, cálculo de ganancia y margen)

### 📋 Pendiente

- [ ] **Fase 2** — Almacén: entradas, salidas, ajustes
- [ ] **Fase 3** — Almacén: mayorista + ofertas
- [ ] **Fase 4** — Ventas: conteo diario inicio/final
- [ ] **Fase 5** — Deudas con abonos y canal de origen
- [ ] **Fase 6** — Finanzas personales
- [ ] **Fase 7** — Monedas y tasas de cambio
- [ ] **Fase 8** — Dashboard consolidado
- [ ] **Fase 9** — Cierre de día + imagen Canvas
- [ ] **Fase 10** — Historial / auditoría
- [ ] **Fase 11** — PWA, backups, export/import, tests

---

## 📐 Reglas de negocio destacadas

### Dos canales independientes

| Canal | Uso |
|-------|-----|
| 🛒 **Ventas** | Punto de venta al detal con conteo diario. |
| 🏬 **Almacén** | Ventas mayoristas y ofertas con precio ajustable. |

Cada canal calcula **su propia** inversión, venta y ganancia.

### Fórmulas clave

```
ganancia        = precio_venta − precio_costo
margen (%)      = (ganancia / precio_venta) × 100

inversion_total = inversion_ventas + inversion_almacen
ganancia_total  = ganancia_ventas + ganancia_almacen

dinero_esperado_en_caja = inversion_total + abonos_del_dia − gastos_del_dia
```

> La **ganancia no entra** en el cuadre de caja porque ya fue extraída al momento de la venta.

### Deudas

- Se generan desde cualquier canal (se guarda `canal_origen`).
- Los abonos **no son ganancia nueva**, son **recuperación de capital**.
- `saldo = monto_total − monto_pagado`.

### Cierre de día

- Consolida ambos canales.
- Genera imagen PNG con Canvas.
- Los `finales` de conteo pasan a ser `inicios` del día siguiente.
- El día queda bloqueado.

---

## 🤝 Cómo colaborar

1. **Fork** del repositorio.
2. Crear una rama descriptiva:
   ```bash
   git checkout -b feat/productos
   ```
3. Commits siguiendo [Conventional Commits](https://www.conventionalcommits.org/):
   ```
   feat:     nueva funcionalidad
   fix:      corrección de bug
   refactor: cambio interno sin alterar comportamiento
   style:    cambios de formato
   docs:     documentación
   chore:    tareas varias
   ```
4. Push y abrir **Pull Request**.

> 📖 Antes de tocar código, leer [`docs/TRASPASO.txt`](docs/TRASPASO.txt) — contiene convenciones, reglas de arquitectura y el estado actual del proyecto.

---

## 👥 Colaboradores

| Colaborador | Rol |
|-------------|-----|
| [@VictorHerdz10](https://github.com/VictorHerdz10) | Autor y mantenedor |
| [@Elafujishiro15](https://github.com/Elafujishiro15) | Colaboradora |

---

## 📄 Licencia

Proyecto personal. Sin licencia pública por ahora.

---

<div align="center">

Hecho con 🧠 y ☕ por [@VictorHerdz10](https://github.com/VictorHerdz10)

</div>