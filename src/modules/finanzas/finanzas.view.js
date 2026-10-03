import { el } from '../../core/dom.js';

export function finanzasView(root) {
  const section = el('section', { class: 'view' }, [
    el('h1', { text: 'Finanzas' }),
    el('p', { text: 'Ingresos y gastos personales.' }),
  ]);
  root.appendChild(section);

  return {
    destroy() {},
  };
}