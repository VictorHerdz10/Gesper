import { el } from '../../core/dom.js';

export function deudasView(root) {
  const section = el('section', { class: 'view' }, [
    el('h1', { text: 'Deudas' }),
    el('p', { text: 'Clientes que deben y abonos parciales.' }),
  ]);
  root.appendChild(section);

  return {
    destroy() {},
  };
}