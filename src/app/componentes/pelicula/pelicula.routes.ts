import { Route } from '@angular/router';

export default [
  {
    path: '',
    redirectTo: 'listado',
    pathMatch: 'full',
  },
  {
    path: 'alta',
    loadComponent: () =>
      import('./pelicula-alta/pelicula-alta.component').then(
        (m) => m.PeliculaAltaComponent
      ),
  },
  {
    path: 'listado',
    loadComponent: () =>
      import('./pelicula-listado/pelicula-listado.component').then(
        (m) => m.PeliculaListadoComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'listado',
    pathMatch: 'full',
  },
] as Route[];
