import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.css',
})
export class BienvenidoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigateByUrl('/busqueda');
    }, 2000);
  }
}
