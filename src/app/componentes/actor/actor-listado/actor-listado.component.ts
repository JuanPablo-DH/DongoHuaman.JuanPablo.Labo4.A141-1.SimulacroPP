import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TablaActorComponent } from '../../tabla-actor/tabla-actor.component';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ActorService } from '../../../servicios/actor.service';
import { Actor } from '../../../clases/actor';

@Component({
  selector: 'app-actor-listado',
  standalone: true,
  imports: [NgIf, RouterLink, TablaActorComponent],
  templateUrl: './actor-listado.component.html',
  styleUrl: './actor-listado.component.css',
})
export class ActorListadoComponent implements OnInit {
  @Input() mostrarBotonVolver = true;
  @Input() detallado = true;
  @Output() handlerSeleccionarActor = new EventEmitter<Actor>();
  listaActores: any[] = [];
  private actoresHardcodeados: any[] = [
    {
      id: 1,
      nombre: 'Leonardo',
      apellido: 'DiCaprio',
      usuario: 'leodicaprio',
      correo: 'leo@example.com',
      pais: 'Estados Unidos',
    },
    {
      id: 2,
      nombre: 'Scarlett',
      apellido: 'Johansson',
      usuario: 'scarlettj',
      correo: 'scarlett@example.com',
      pais: 'Estados Unidos',
    },
    {
      id: 3,
      nombre: 'Tom',
      apellido: 'Hanks',
      usuario: 'tomhanks',
      correo: 'tom@example.com',
      pais: 'Estados Unidos',
    },
    {
      id: 4,
      nombre: 'Natalie',
      apellido: 'Portman',
      usuario: 'natportman',
      correo: 'natalie@example.com',
      pais: 'Israel',
    },
  ];

  constructor(private actorService: ActorService) {}

  ngOnInit(): void {
    /*
    // ### CUIDADO CON ESTO ###
    for (let i = 0; i < this.actoresHardcodeados.length; i++) {
      this.actorService.insertarConId(this.actoresHardcodeados[i]);
    }
    */
    this.actorService.traerTodos()?.subscribe((r) => {
      this.listaActores = [];
      for (let item of r) {
        this.listaActores.push(Actor.parseObjetoActor(item));
      }
    });
  }

  recibirActor($event: Actor) {
    this.handlerSeleccionarActor.emit($event);
  }
}
