import { el } from '../../core/dom.js';

export function ventasView(root) {
  const section = el('section', { class: 'view' }, [
    el('h1', { text: 'Ventas' }),
    el('p', { text: 'Punto de venta con conteo diario (inicio / final).' }),
  ]);
  root.appendChild(section);

  return {
    destroy() {},
  };
}