import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pelicula-alta',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './pelicula-alta.component.html',
  styleUrl: './pelicula-alta.component.css',
})
export class PeliculaAltaComponent {
  @Input() mostrarBotonAlta = false;
  @Input() mostrarBotonVolver = true;
}
