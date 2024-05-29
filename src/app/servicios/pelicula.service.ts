import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { Pelicula } from '../clases/pelicula';
import { StorageService } from './storage.service';
import { firstValueFrom, isObservable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeliculaService {
  private bd = 'simulacropp_peliculas';
  private carpeta = 'simulacropp_peliculas';

  constructor(
    private databaseService: DatabaseService,
    private storageService: StorageService
  ) {}

  public async insertar(pelicula: Pelicula) {
    try {
      // Generar ID
      const listaPromise = await this.traerTodos();
      if (isObservable(listaPromise)) {
        const lista = await firstValueFrom(listaPromise);
        if (lista) {
          lista.sort((a, b) => b['id'] - a['id']);
          pelicula.id = Number(lista[0]['id']) + 1;
        }
      }

      // Subir Foto y vincularlo al Documento
      const nombreArchivo = `${pelicula.id}`;
      await this.subirFoto(nombreArchivo, pelicula.file);
      const url = await this.traerUrlPorNombre(nombreArchivo);
      if (url) {
        pelicula.fotoPelicula = url;
        const obj = Pelicula.toObjetoAtributoString(pelicula);
        const docId = obj.id;
        const docData = obj;
        this.databaseService.insertarConId(docId, docData, this.bd);
      }
    } catch (e) {
      console.log('PeliculaService.insertar(pelicula: Pelicula)', e);
    }
  }

  public traerTodos() {
    return this.databaseService.traerTodos(this.bd);
  }

  private subirFoto(nombreArchivo: string, file: any) {
    return this.storageService.subirFileConNombre(
      this.carpeta,
      nombreArchivo,
      file
    );
  }
  private traerUrlPorNombre(nombre: string) {
    return this.storageService.traerUrlPorNombre(nombre, this.carpeta);
  }
}
