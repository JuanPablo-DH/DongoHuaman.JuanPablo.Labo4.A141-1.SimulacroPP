import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TablaPaisesComponent } from '../../tabla-paises/tabla-paises.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Actor } from '../../../clases/actor';
import { ActorService } from '../../../servicios/actor.service';

@Component({
  selector: 'app-actor-alta',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    RouterLink,
    TablaPaisesComponent,
  ],
  templateUrl: './actor-alta.component.html',
  styleUrl: './actor-alta.component.css',
})
export class ActorAltaComponent {
  @Input() modoRouter = false;
  formActor: FormGroup;

  get nombre() {
    return this.formActor.get('nombre') as FormControl;
  }
  get apellido() {
    return this.formActor.get('apellido') as FormControl;
  }
  get usuario() {
    return this.formActor.get('usuario') as FormControl;
  }
  get correo() {
    return this.formActor.get('correo') as FormControl;
  }
  get pais() {
    return this.formActor.get('pais') as FormControl;
  }

  constructor(private actorService: ActorService) {
    this.formActor = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      usuario: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      pais: new FormControl('', Validators.required),
    });
  }

  recibirPais($event: any) {
    this.pais.setValue(this.capitalizeWords($event));
  }

  realizarAlta() {
    let actor = new Actor();
    actor.nombre = this.nombre.value;
    actor.apellido = this.apellido.value;
    actor.usuario = this.usuario.value;
    actor.correo = this.correo.value;
    actor.pais = this.pais.value;
    console.log(actor);
    this.actorService.insertar(actor);
    this.limpiar();
  }

  private limpiar() {
    this.formActor.reset();
    this.nombre.setValue('');
    this.apellido.setValue('');
    this.usuario.setValue('');
    this.correo.setValue('');
    this.pais.setValue('');
  }
  private capitalizeWords(str: string): string {
    return str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
