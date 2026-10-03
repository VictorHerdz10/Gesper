import { el } from '../../core/dom.js';

export function dashboardView(root) {
  const section = el('section', { class: 'view' }, [
    el('h1', { text: 'Dashboard' }),
    el('p', { text: 'Aquí irá el resumen consolidado del día.' }),
  ]);
  root.appendChild(section);

  return {
    destroy() {},
  };
}