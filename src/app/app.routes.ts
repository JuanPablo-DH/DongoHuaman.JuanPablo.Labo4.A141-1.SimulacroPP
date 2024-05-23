import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenido',
    pathMatch: 'full',
  },
  {
    path: 'bienvenido',
    loadComponent: () =>
      import('./componentes/bienvenido/bienvenido.component').then(
        (m) => m.BienvenidoComponent
      ),
  },
  {
    path: 'busqueda',
    loadComponent: () =>
      import('./componentes/busqueda/busqueda.component').then(
        (m) => m.BusquedaComponent
      ),
  },
  {
    path: 'peliculas',
    loadComponent: () =>
      import('./componentes/pelicula/pelicula.component').then(
        (m) => m.PeliculaComponent
      ),
    loadChildren: () => import('./componentes/pelicula/pelicula.routes'),
  },
  {
    path: 'actor',
    loadComponent: () =>
      import('./componentes/actor/actor.component').then(
        (m) => m.ActorComponent
      ),
    loadChildren: () => import('./componentes/actor/actor.routes'),
  },
  {
    path: '**',
    redirectTo: 'bienvenido',
    pathMatch: 'full',
  },
];
