import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() handlerSeleccionarPelicula = new EventEmitter<Pelicula>();

  constructor() {}

  getFormatoFechaEstreno(objeto: any) {
    return Pelicula.getFormatoFechaEstreno(objeto);
  }

  seleccionarPelicula(indice: number) {
    this.handlerSeleccionarPelicula.emit(this.lista[indice]);
  }
}
