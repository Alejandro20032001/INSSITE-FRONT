import { ResourceEnum } from "../entities/ResourceEnum";

export interface MaterialLista{
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
