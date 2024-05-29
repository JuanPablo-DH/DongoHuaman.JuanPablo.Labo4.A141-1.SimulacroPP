import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Actor } from '../../clases/actor';

@Component({
  selector: 'app-tabla-actor',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './tabla-actor.component.html',
  styleUrl: './tabla-actor.component.css',
})
export class TablaActorComponent {
  @Input() lista: any[] = [];
  @Input() detallado: boolean = true;
  @Output() handlerSeleccionarActor = new EventEmitter<Actor>();

  seleccionarActor(indice: number) {
    this.handlerSeleccionarActor.emit(this.lista[indice]);
  }
}
