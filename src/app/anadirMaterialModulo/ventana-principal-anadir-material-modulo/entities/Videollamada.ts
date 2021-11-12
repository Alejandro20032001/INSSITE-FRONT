import { Material } from "./material";

export class Videollamada extends Material {

  link:string
  fecha:Date;
  hora:string;
  descripcion:string;

  constructor(link:string, fecha:Date, descripcion:string, hora:string) {
    super();
    this.link = link;
    this.fecha = fecha;
    this.descripcion = descripcion;
    this.hora = hora;
  }
}
