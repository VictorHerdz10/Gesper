import { el } from '../../core/dom.js';

const MODULOS = [
  { path: '/',           label: 'Dashboard',       icon: '📊' },
  { path: '/productos',  label: 'Productos',       icon: '📦' },
  { path: '/almacen',    label: 'Almacén',         icon: '🏬' },
  { path: '/ventas',     label: 'Ventas',          icon: '🛒' },
  { path: '/deudas',     label: 'Deudas',          icon: '💳' },
  { path: '/finanzas',   label: 'Finanzas',        icon: '💰' },
  { path: '/monedas',    label: 'Monedas',         icon: '💱' },
  { path: '/cierre',     label: 'Cierre de día',   icon: '🔒' },
  { path: '/historial',  label: 'Historial',       icon: '🕓' },
];

export function masView(root) {
  const section = el('section', { class: 'view' }, [
    el('h1', { text: 'Más' }),
    el('ul', { class: 'mas__list' },
      MODULOS.map((m) =>
        el('li', {}, [
          el('a', { href: `#${m.path}`, class: 'mas__link' }, [
            el('span', { class: 'mas__icon', text: m.icon }),
            el('span', { class: 'mas__label', text: m.label }),
          ]),
        ])
      )
    ),
  ]);
  root.appendChild(section);

  return { destroy() {} };
}