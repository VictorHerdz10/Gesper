import { el } from '../../core/dom.js';
import { router } from '../../core/router.js';

const LINKS = [
  { path: '/',           label: 'Dashboard',  icon: '📊' },
  { path: '/productos',  label: 'Productos',  icon: '📦' },
  { path: '/almacen',    label: 'Almacén',    icon: '🏬' },
  { path: '/ventas',     label: 'Ventas',     icon: '🛒' },
  { path: '/deudas',     label: 'Deudas',     icon: '💳' },
  { path: '/finanzas',   label: 'Finanzas',   icon: '💰' },
  { path: '/monedas',    label: 'Monedas',    icon: '💱' },
  { path: '/cierre',     label: 'Cierre',     icon: '🔒' },
  { path: '/historial',  label: 'Historial',  icon: '🕓' },
];

export function renderSidebar(root) {
  const nav = el('nav', { class: 'sidebar' }, [
    el('div', { class: 'sidebar__logo', text: 'Gesper' }),
    el('ul', { class: 'sidebar__list' },
      LINKS.map((l) =>
        el('li', {}, [
          el('a', {
            href: `#${l.path}`,
            class: 'sidebar__link',
            'data-path': l.path,
          }, [`${l.icon}  ${l.label}`]),
        ])
      )
    ),
  ]);

  root.appendChild(nav);

  // Marcar activo
  const setActive = () => {
    const current = window.location.hash.replace('#', '') || '/';
    nav.querySelectorAll('.sidebar__link').forEach((a) => {
      a.classList.toggle('is-active', a.dataset.path === current);
    });
  };
  window.addEventListener('hashchange', setActive);
  setActive();
}