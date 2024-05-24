import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private listaApis = [
    { pais: 'argentina', url: 'https://restcountries.com/v3.1/name/argentina' },
    { pais: 'estados unidos', url: 'https://restcountries.com/v3.1/name/usa' },
    { pais: 'brasil', url: 'https://restcountries.com/v3.1/name/brasil' },
    { pais: 'mexico', url: 'https://restcountries.com/v3.1/name/mexico' },
  ];

  constructor() {}

  async getPaises() {
    let listaBanderas = [];
    try {
      for (let i = 0; i < this.listaApis.length; i++) {
        const response = await fetch(this.listaApis[i].url);
        if (response) {
          const bandera = await response.json();
          listaBanderas.push({
            pais: this.listaApis[i].pais,
            banderaPng: bandera[0].flags.png,
          });
        }
      }
    } catch (e) {
      console.log(e);
    } finally {
      return listaBanderas;
    }
  }
}
