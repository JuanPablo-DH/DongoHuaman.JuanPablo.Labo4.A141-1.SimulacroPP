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
      import('./actor-alta/actor-alta.component').then(
        (m) => m.ActorAltaComponent
      ),
  },
  {
    path: 'listado',
    loadComponent: () =>
      import('./actor-listado/actor-listado.component').then(
        (m) => m.ActorListadoComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'listado',
    pathMatch: 'full',
  },
] as Route[];
