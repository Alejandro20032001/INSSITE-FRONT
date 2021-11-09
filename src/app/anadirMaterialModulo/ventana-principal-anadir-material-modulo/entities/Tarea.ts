import { Material } from "./material";

export class Tarea extends Material{

  fecha:Date;
  puntuacion: Number;
  descripcion: string;

  constructor(fecha:Date, puntuacion:Number, descripcion:string) {
    super();
    this.fecha = fecha;
    this.puntuacion = puntuacion;
    this.descripcion = descripcion;
  }
}
