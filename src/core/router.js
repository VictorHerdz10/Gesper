const routes = new Map();
let container = null;
let currentView = null;

export const router = {
  add(path, view) {
    routes.set(path, view);
  },

  navigate(path) {
    if (window.location.hash !== `#${path}`) {
      window.location.hash = path;
    } else {
      this._render(path);
    }
  },

  start(el) {
    container = el;
    window.addEventListener('hashchange', () => {
      this._render(this._currentPath());
    });
    this._render(this._currentPath());
  },

  _currentPath() {
    return window.location.hash.replace('#', '') || '/';
  },

  _render(path) {
    const view = routes.get(path) || routes.get('/');
    if (!view) return;

    // Cleanup de la vista anterior si expone destroy()
    if (currentView && typeof currentView.destroy === 'function') {
      currentView.destroy();
    }

    container.innerHTML = '';
    currentView = view(container);
  },
};