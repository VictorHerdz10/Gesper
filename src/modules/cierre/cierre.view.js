import { el } from '../../core/dom.js';

export function cierreView(root) {
  const section = el('section', { class: 'view' }, [
    el('h1', { text: 'Cierre de día' }),
    el('p', { text: 'Cuadre, resumen e imagen del día.' }),
  ]);
  root.appendChild(section);

  return {
    destroy() {},
  };
}