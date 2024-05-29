import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActorListadoComponent } from '../actor-listado/actor-listado.component';
import { Actor } from '../../../clases/actor';
import { PeliculaListadoComponent } from '../../pelicula/pelicula-listado/pelicula-listado.component';
import { Pelicula } from '../../../clases/pelicula';
import { TablaPaisesComponent } from '../../tabla-paises/tabla-paises.component';
import { DetalleActorComponent } from '../../detalle-actor/detalle-actor.component';

@Component({
  selector: 'app-actor-pelicula',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    ActorListadoComponent,
    PeliculaListadoComponent,
    TablaPaisesComponent,
    DetalleActorComponent,
  ],
  templateUrl: './actor-pelicula.component.html',
  styleUrl: './actor-pelicula.component.css',
})
export class ActorPeliculaComponent {
  @Input() mostrarBotonVolver = true;
  actorSeleccionado: Actor = new Actor();

  recibirActor($event: Actor) {
    this.actorSeleccionado = $event;
  }
  recibirPelicula($event: Pelicula) {}
  recibirPais($event: any) {}
}
