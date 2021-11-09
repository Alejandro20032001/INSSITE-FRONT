import { Material } from "./material";

export class Lectura extends Material{

  titulo: string;
  contenido: string;

  constructor(titulo:string, contenido:string) {
    super();
    this.titulo = titulo;
    this.contenido = contenido;
  }
}
