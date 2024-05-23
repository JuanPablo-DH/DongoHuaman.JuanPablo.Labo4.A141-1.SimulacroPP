import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-actor-alta',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './actor-alta.component.html',
  styleUrl: './actor-alta.component.css',
})
export class ActorAltaComponent {
  @Input() mostrarBotonAlta = false;
  @Input() mostrarBotonVolver = true;
}
