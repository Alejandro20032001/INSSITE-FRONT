import { Material } from "./material";

export class Videollamada extends Material {

  link:string
  fecha:string;
  hora:string;
  descripcion:string;

  constructor(link:string, fecha:string, descripcion:string, hora:string) {
    super();
    this.link = link;
    this.fecha = fecha;
    this.descripcion = descripcion;
    this.hora = hora;
  }
}
