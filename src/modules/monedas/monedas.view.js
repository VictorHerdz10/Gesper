import { el } from '../../core/dom.js';

export function monedasView(root) {
  const section = el('section', { class: 'view' }, [
    el('h1', { text: 'Monedas' }),
    el('p', { text: 'Tasas de cambio e histórico.' }),
  ]);
  root.appendChild(section);

  return {
    destroy() {},
  };
}