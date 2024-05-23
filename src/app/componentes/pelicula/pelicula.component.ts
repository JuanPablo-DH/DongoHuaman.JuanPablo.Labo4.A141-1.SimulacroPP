import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css',
})
export class PeliculaComponent {}
