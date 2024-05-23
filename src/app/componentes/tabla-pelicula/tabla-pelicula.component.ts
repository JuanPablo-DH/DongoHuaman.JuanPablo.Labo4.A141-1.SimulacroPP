import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tabla-pelicula.component.html',
  styleUrl: './tabla-pelicula.component.css',
})
export class TablaPeliculaComponent {
  @Input() lista: any[] = [];
  constructor() {}
  getFormatoFechaEstreno(objeto: any) {
    return Pelicula.getFormatoFechaEstreno(objeto);
  }
}
