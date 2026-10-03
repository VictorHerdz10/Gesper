import { el } from '../../core/dom.js';

export function almacenView(root) {
  const section = el('section', { class: 'view' }, [
    el('h1', { text: 'Almacén' }),
    el('p', { text: 'Entradas, salidas, mayorista y ofertas.' }),
  ]);
  root.appendChild(section);

  return {
    destroy() {},
  };
}