import { Material } from "./material";

export class Tarea extends Material{

  fecha:Date;
  titulo:string;
  descripcion: string;
  puntuacion: Number;

  constructor(fecha:Date, puntuacion:Number, descripcion:string, titulo:string) {
    super();
    this.fecha = fecha;
    this.puntuacion = puntuacion;
    this.descripcion = descripcion;
    this.titulo = titulo;
  }
}
