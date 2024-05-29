import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TablaPeliculaComponent } from '../../tabla-pelicula/tabla-pelicula.component';
import { PeliculaService } from '../../../servicios/pelicula.service';
import { Pelicula } from '../../../clases/pelicula';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pelicula-listado',
  standalone: true,
  imports: [NgIf, RouterLink, TablaPeliculaComponent],
  templateUrl: './pelicula-listado.component.html',
  styleUrl: './pelicula-listado.component.css',
})
export class PeliculaListadoComponent implements OnInit {
  @Input() mostrarBotonVolver = true;
  @Output() handlerSeleccionarPelicula = new EventEmitter<Pelicula>();
  listaPeliculas: any[] = [];
  private peliculasHardcodeadas: Pelicula[] = [
    {
      id: 1,
      nombre: 'La Aventura Espacial',
      tipo: 'Ciencia Ficción',
      fechaEstreno: new Date('2023-01-15'),
      cantidadDePublico: 1500,
      fotoPelicula: 'assets/peliculas/foto1.png',
      listaActores: [1, 2, 3],
      file: null,
    },
    {
      id: 2,
      nombre: 'El Misterio del Bosque',
      tipo: 'Suspenso',
      fechaEstreno: new Date('2022-11-05'),
      cantidadDePublico: 1800,
      fotoPelicula: 'assets/peliculas/foto2.png',
      listaActores: [1, 2, 3],
      file: null,
    },
    {
      id: 3,
      nombre: 'Amor en Tiempos Modernos',
      tipo: 'Romántica',
      fechaEstreno: new Date('2024-02-14'),
      cantidadDePublico: 2000,
      fotoPelicula: 'assets/peliculas/foto3.png',
      listaActores: [1, 2, 3],
      file: null,
    },
    {
      id: 4,
      nombre: 'El Guerrero Legendario',
      tipo: 'Acción',
      fechaEstreno: new Date('2021-07-23'),
      cantidadDePublico: 2200,
      fotoPelicula: 'assets/peliculas/foto4.png',
      listaActores: [1, 2, 3],
      file: null,
    },
  ];
  constructor(private peliculaService: PeliculaService) {}

  ngOnInit(): void {
    /* ### CUIDADO CON ESTO ###
    for (let i = 0; i < this.peliculasHardcodeadas.length; i++) {
      this.peliculaService.insertarConId(this.peliculasHardcodeadas[i]);
    }
    */
    this.peliculaService.traerTodos()?.subscribe((r) => {
      this.listaPeliculas = [];
      for (let item of r) {
        this.listaPeliculas.push(Pelicula.parseObjetoPelicula(item));
      }
    });
  }

  recibirPelicula($event: Pelicula) {
    this.handlerSeleccionarPelicula.emit($event);
  }
}
