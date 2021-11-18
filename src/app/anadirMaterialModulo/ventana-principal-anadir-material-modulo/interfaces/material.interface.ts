import { ResourceEnum } from "../entities/ResourceEnum";

export interface enviarMaterial{
  "resourceType":ResourceEnum,
  "title": string,
  "descriptionResource":string,
  "content":string,
  "module":string,
  "date":Date,
  "score":Number
  //idResource
  //coursemodule/resources/idModule get
}
