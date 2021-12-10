import { ResourceEnum } from "src/app/anadirMaterialModulo/ventana-principal-anadir-material-modulo/entities/ResourceEnum";

export interface Tarea{
  "resourceType":ResourceEnum,
  "title": string,
  "descriptionResource":string,
  "content":string,
  "module":string,
  "date":Date,
  "score":Number
  "idResource":string
  //coursemodule/resources/idModule get
}
