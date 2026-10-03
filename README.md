# Gesper — Gestor Personal

Aplicación web personal para control de almacén, ventas, finanzas y deudas.

## Stack
- HTML + CSS + JavaScript Vanilla
- ES Modules nativos
- Sin frameworks, sin build tools

## Estructura
Ver `docs/arquitectura.md`.

## Cómo correr
Necesitas servir los archivos por HTTP (los módulos ES no funcionan con file://).

Opción 1 (Python):
    python -m http.server 5173

Opción 2 (Node):
    npx serve .

Luego abre http://localhost:5173