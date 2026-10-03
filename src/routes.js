import { dashboardView } from './modules/dashboard/dashboard.view.js';
import { productosView } from './modules/productos/productos.view.js';
import { almacenView } from './modules/almacen/almacen.view.js';
import { ventasView } from './modules/ventas/ventas.view.js';
import { deudasView } from './modules/deudas/deudas.view.js';
import { finanzasView } from './modules/finanzas/finanzas.view.js';
import { monedasView } from './modules/monedas/monedas.view.js';
import { cierreView } from './modules/cierre/cierre.view.js';
import { historialView } from './modules/historial/historial.view.js';
import { masView } from './modules/mas/mas.view.js';

export function registerRoutes(router) {
  router.add('/',              dashboardView);
  router.add('/productos',     productosView);
  router.add('/almacen',       almacenView);
  router.add('/ventas',        ventasView);
  router.add('/deudas',        deudasView);
  router.add('/finanzas',      finanzasView);
  router.add('/monedas',       monedasView);
  router.add('/cierre',        cierreView);
  router.add('/historial',     historialView);
  router.add('/mas', masView);
}