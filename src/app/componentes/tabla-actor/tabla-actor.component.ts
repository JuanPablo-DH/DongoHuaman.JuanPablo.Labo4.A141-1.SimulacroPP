import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-actor',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tabla-actor.component.html',
  styleUrl: './tabla-actor.component.css',
})
export class TablaActorComponent {
  @Input() lista: any[] = [];
}
