import { el } from '../../core/dom.js';

export function productosView(root) {
  const section = el('section', { class: 'view' }, [
    el('h1', { text: 'Productos' }),
    el('p', { text: 'Catálogo maestro de artículos.' }),
  ]);
  root.appendChild(section);

  return {
    destroy() {},
  };
}