import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TablaPaisesComponent } from '../../tabla-paises/tabla-paises.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actor-alta',
  standalone: true,
  imports: [FormsModule, NgIf, RouterLink, TablaPaisesComponent],
  templateUrl: './actor-alta.component.html',
  styleUrl: './actor-alta.component.css',
})
export class ActorAltaComponent {
  @Input() mostrarBotonAlta = false;
  @Input() mostrarBotonVolver = true;
  inputNombre: string = '';
  inputApellido: string = '';
  inputUsuario: string = '';
  inputCorreo: string = '';
  inputPais: string = '';

  realizarAlta() {
    alert('accion alta');
    this.limpiar();
  }

  recibirPais($event: any) {
    this.inputPais = this.capitalizeWords($event);
  }

  private limpiar() {
    this.inputNombre = '';
    this.inputApellido = '';
    this.inputUsuario = '';
    this.inputCorreo = '';
    this.inputPais = '';
  }
  private capitalizeWords(str: string): string {
    return str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
