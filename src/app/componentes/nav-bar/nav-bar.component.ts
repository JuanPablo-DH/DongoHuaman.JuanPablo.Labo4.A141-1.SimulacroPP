import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  @Output() handlerCambiarSeccion = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  cambiarSeccion(seccion: number) {
    this.handlerCambiarSeccion.emit(seccion);
  }
}
