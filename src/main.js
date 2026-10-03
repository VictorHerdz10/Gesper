import { router } from './core/router.js';
import { renderSidebar } from './components/layout/sidebar.js';
import { renderBottomNav } from './components/layout/bottomnav.js';
import { registerRoutes } from './routes.js';

// Render del layout base
renderSidebar(document.getElementById('sidebar'));
renderBottomNav(document.getElementById('bottom-nav'));

// Registrar rutas
registerRoutes(router);

// Arrancar router
router.start(document.getElementById('main-content'));