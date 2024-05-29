import { NgFor } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-tabla-paises',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tabla-paises.component.html',
  styleUrl: './tabla-paises.component.css',
})
export class TablaPaisesComponent implements OnInit {
  @Output() handlerElegirPais = new EventEmitter<string>();
  lista: any[] = [];

  constructor(private apiService: ApiService) {
    this.traerBanderas();
  }

  ngOnInit(): void {
    this.traerBanderas();
  }

  elegirPais(pais: string) {
    this.handlerElegirPais.emit(pais);
  }

  private async traerBanderas() {
    try {
      const listaBanderas = await this.apiService.getPaises();
      this.lista = listaBanderas;
    } catch (e) {
      console.log('TablaPaisesComponent.traerBanderas()', e);
    }
  }

  capitalizeWords(str: string): string {
    return str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
