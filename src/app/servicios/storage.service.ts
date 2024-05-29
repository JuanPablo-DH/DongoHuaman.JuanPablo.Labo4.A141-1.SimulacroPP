import { Injectable } from '@angular/core';
import {
  Storage,
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
  uploadBytesResumable,
  uploadString,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private storage: Storage) {}

  public subirFileConNombre(carpeta: string, nombreArchivo: string, file: any) {
    const imgRef = ref(this.storage, `${carpeta}/${nombreArchivo}`);
    return uploadBytes(imgRef, file);
  }

  public traerTodas(carpeta: string) {
    const imagesRef = ref(this.storage, carpeta);
    return listAll(imagesRef);
  }

  private obtenerNombreSinExtension(nombreArchivo: string): string {
    const lastIndex = nombreArchivo.lastIndexOf('.');
    if (lastIndex !== -1) {
      return nombreArchivo.substring(0, lastIndex);
    } else {
      return nombreArchivo;
    }
  }

  public async traerUrlPorNombre(nombre: string, carpeta: string) {
    try {
      const images = await this.traerTodas(carpeta);
      for (let item of images.items) {
        const nombreArchivo = this.obtenerNombreSinExtension(item.name); // Obtener el nombre sin la extensión
        if (nombreArchivo === nombre) {
          return getDownloadURL(item);
        }
      }
    } catch (error) {
      console.error('StorageService.traerUrlPorNombre()', error);
    }

    return null;
  }
}
