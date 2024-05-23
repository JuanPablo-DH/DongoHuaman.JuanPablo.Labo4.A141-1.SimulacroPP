import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.css',
})
export class BienvenidoComponent {}
