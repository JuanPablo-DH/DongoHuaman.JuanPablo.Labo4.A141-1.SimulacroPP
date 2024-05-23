import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { PeliculaListadoComponent } from '../pelicula/pelicula-listado/pelicula-listado.component';
import { NgIf } from '@angular/common';
import { ActorListadoComponent } from '../actor/actor-listado/actor-listado.component';
import { PeliculaAltaComponent } from '../pelicula/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from '../actor/actor-alta/actor-alta.component';
import { DetallePeliculaComponent } from '../detalle-pelicula/detalle-pelicula.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    NavBarComponent,
    PeliculaListadoComponent,
    PeliculaAltaComponent,
    DetallePeliculaComponent,
    ActorListadoComponent,
    ActorAltaComponent,
  ],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css',
})
export class BusquedaComponent {
  seccion = 1;

  recibirSeccion($event: any) {
    this.seccion = $event;
  }
}
