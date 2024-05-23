import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { Pelicula } from '../clases/pelicula';

@Injectable({
  providedIn: 'root',
})
export class PeliculaService {
  private bd = 'simulacropp_peliculas';

  constructor(private databaseService: DatabaseService) {}

  public insertarConId(objeto: Pelicula) {
    const obj = Pelicula.toObjetoAtributoString(objeto);
    const docId = obj.id;
    const docData = obj;
    return this.databaseService.insertarConId(docId, docData, this.bd);
  }

  public traerTodos() {
    return this.databaseService.traerTodos(this.bd);
  }
}
