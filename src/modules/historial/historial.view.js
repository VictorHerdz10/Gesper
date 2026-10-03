import { el } from '../../core/dom.js';

export function historialView(root) {
  const section = el('section', { class: 'view' }, [
    el('h1', { text: 'Historial' }),
    el('p', { text: 'Auditoría de todo lo ocurrido.' }),
  ]);
  root.appendChild(section);

  return {
    destroy() {},
  };
}