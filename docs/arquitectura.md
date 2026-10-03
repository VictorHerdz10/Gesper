# Arquitectura

## Capas
1. **core/**      → router, store, eventos, helpers DOM.
2. **shared/**    → utilidades puras (formato, validación, storage).
3. **data/**      → repositorios. Hoy localStorage, mañana API REST.
4. **services/**  → reglas de negocio. Único lugar con lógica de dominio.
5. **modules/**   → vistas (una por pantalla).
6. **components/**→ UI reutilizable.

## Reglas
- Los módulos NUNCA acceden a `data/` directo. Siempre vía `services/`.
- Los servicios NUNCA tocan el DOM.
- Los repositorios NUNCA contienen reglas de negocio.
- Un módulo no importa otro módulo. Si necesitan compartir, va en `components/` o `shared/`.

## Canales de venta
- `ventas`  → punto de venta con conteo diario.
- `almacen` → mayorista y ofertas.