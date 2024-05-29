import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { Actor } from '../clases/actor';
import { firstValueFrom, isObservable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  private bd = 'simulacropp_actores';

  constructor(private databaseService: DatabaseService) {}

  public async insertar(actor: Actor) {
    try {
      // Generar ID
      const listaPromise = await this.traerTodos();
      if (isObservable(listaPromise)) {
        const lista = await firstValueFrom(listaPromise);
        if (lista) {
          lista.sort((a, b) => b['id'] - a['id']);
          actor.id = Number(lista[0]['id']) + 1;
        }
      }

      // Insertar Documento
      const obj = Actor.toObjetoAtributoString(actor);
      const docId = obj.id;
      const docData = obj;
      this.databaseService.insertarConId(docId, docData, this.bd);
    } catch (e) {
      console.log('ActorService.insertar()', e);
    }
  }

  public traerTodos() {
    return this.databaseService.traerTodos(this.bd);
  }
}
