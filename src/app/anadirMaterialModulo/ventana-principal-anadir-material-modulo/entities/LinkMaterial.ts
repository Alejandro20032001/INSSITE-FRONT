import { Material } from "./Material";

export class LinkMaterial extends Material{

  link:string;
  descripcion:string;

  constructor(link:string, descripcion:string) {
    super();
    this.link = link;
    this.descripcion = descripcion;
  }
}
