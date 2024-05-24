import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  public email: string = '';
  @Output() handlerCambiarSeccion = new EventEmitter<any>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  cerrarSesion() {}

  cambiarSeccion(seccion: number) {
    this.handlerCambiarSeccion.emit(seccion);
  }
}
