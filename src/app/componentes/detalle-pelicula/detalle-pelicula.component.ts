import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pelicula } from '../../clases/pelicula';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-detalle-pelicula',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './detalle-pelicula.component.html',
  styleUrl: './detalle-pelicula.component.css',
})
export class DetallePeliculaComponent {
  @Input() pelicula: Pelicula = new Pelicula();

  constructor() {}

  getFormatoFechaEstreno(objeto: any) {
    return Pelicula.getFormatoFechaEstreno(objeto);
  }
}
