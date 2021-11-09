import { Material } from "./material";

export class Videollamada extends Material {

  link:string
  fecha:Date;
  descripcion:string;

  constructor(link:string, fecha:Date, descripcion:string) {
    super();
    this.link = link;
    this.fecha = fecha;
    this.descripcion = descripcion;
  }
}
