import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { PeliculaListadoComponent } from '../pelicula/pelicula-listado/pelicula-listado.component';
import { NgIf } from '@angular/common';
import { ActorListadoComponent } from '../actor/actor-listado/actor-listado.component';
import { PeliculaAltaComponent } from '../pelicula/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from '../actor/actor-alta/actor-alta.component';
import { DetallePeliculaComponent } from '../detalle-pelicula/detalle-pelicula.component';
import { RouterOutlet } from '@angular/router';
import { Pelicula } from '../../clases/pelicula';
import { ActorPeliculaComponent } from '../actor/actor-pelicula/actor-pelicula.component';

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
    ActorPeliculaComponent,
  ],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css',
})
export class BusquedaComponent {
  peliculaSeleccionada: Pelicula = new Pelicula();
  seccion = 1;

  recibirSeccion($event: number) {
    this.seccion = $event;
  }

  recibirPelicula($event: Pelicula) {
    this.peliculaSeleccionada = $event;
  }
}
