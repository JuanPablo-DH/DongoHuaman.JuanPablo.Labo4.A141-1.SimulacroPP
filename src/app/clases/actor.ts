export class Actor {
  id: number;
  nombre: string;
  apellido: string;
  usuario: string;
  correo: string;
  pais: string;

  constructor() {
    this.id = 0;
    this.nombre = '';
    this.apellido = '';
    this.usuario = '';
    this.correo = '';
    this.pais = '';
  }

  static toObjetoAtributoString(objeto: Actor) {
    return {
      id: objeto.id.toString(),
      nombre: objeto.nombre,
      apellido: objeto.apellido,
      usuario: objeto.usuario,
      correo: objeto.correo,
      pais: objeto.pais,
    };
  }
  static parseObjetoActor(objeto: any) {
    let ret = new Actor();
    ret.id = Number(objeto.id);
    ret.nombre = objeto.nombre;
    ret.apellido = objeto.apellido;
    ret.usuario = objeto.usuario;
    ret.correo = objeto.correo;
    ret.pais = objeto.pais;
    return ret;
  }
}
