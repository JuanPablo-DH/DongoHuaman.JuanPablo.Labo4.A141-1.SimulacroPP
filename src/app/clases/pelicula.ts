export class Pelicula {
  id: number;
  nombre: string;
  tipo: string;
  fechaEstreno: Date;
  cantidadDePublico: number;
  fotoPelicula: string;

  constructor() {
    this.id = 0;
    this.nombre = '';
    this.tipo = '';
    this.fechaEstreno = new Date();
    this.cantidadDePublico = 0;
    this.fotoPelicula = '';
  }

  static getFormatoFechaEstreno(objeto: any): string {
    const day = ('0' + objeto.fechaEstreno.getDate()).slice(-2);
    const month = ('0' + (objeto.fechaEstreno.getMonth() + 1)).slice(-2);
    const year = objeto.fechaEstreno.getFullYear();
    return `${day}/${month}/${year}`;
  }

  static toObjetoAtributoString(objeto: Pelicula) {
    return {
      id: objeto.id.toString(),
      nombre: objeto.nombre,
      tipo: objeto.tipo,
      fechaEstreno: objeto.fechaEstreno.toISOString(),
      cantidadDePublico: objeto.cantidadDePublico.toString(),
      fotoPelicula: objeto.fotoPelicula,
    };
  }
  static parseObjetoPelicula(objeto: any) {
    let ret = new Pelicula();
    ret.id = Number(objeto.id);
    ret.nombre = objeto.nombre;
    ret.tipo = objeto.tipo;
    ret.fechaEstreno = new Date(objeto.fechaEstreno);
    ret.cantidadDePublico = Number(objeto.cantidadDePublico);
    ret.fotoPelicula = objeto.fotoPelicula;
    return ret;
  }
}
