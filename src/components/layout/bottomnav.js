import { el } from '../../core/dom.js';

const LINKS = [
  { path: '/',           label: 'Inicio',   icon: '📊' },
  { path: '/almacen',    label: 'Almacén',  icon: '🏬' },
  { path: '/ventas',     label: 'Ventas',   icon: '🛒' },
  { path: '/finanzas',   label: 'Finanzas', icon: '💰' },
  { path: '/mas',  label: 'Más',      icon: '☰'  },
];

export function renderBottomNav(root) {
  const nav = el('nav', { class: 'bottom-nav' },
    LINKS.map((l) =>
      el('a', {
        href: `#${l.path}`,
        class: 'bottom-nav__link',
        'data-path': l.path,
      }, [
        el('span', { class: 'bottom-nav__icon', text: l.icon }),
        el('span', { class: 'bottom-nav__label', text: l.label }),
      ])
    )
  );

  root.appendChild(nav);

  const setActive = () => {
    const current = window.location.hash.replace('#', '') || '/';
    nav.querySelectorAll('.bottom-nav__link').forEach((a) => {
      a.classList.toggle('is-active', a.dataset.path === current);
    });
  };
  window.addEventListener('hashchange', setActive);
  setActive();
}