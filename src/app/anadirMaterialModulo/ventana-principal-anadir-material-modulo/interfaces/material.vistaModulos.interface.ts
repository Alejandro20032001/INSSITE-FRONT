export class MaterialListaNombreCorreto{
  resourceType:string
  title: string
  descriptionResource:string
  content:string
  module:string
  date:Date
  score:Number
  idResource:string
  orderResource:Number

  constructor(resourceType:string, title: string, descriptionResource:string, content:string, module:string, date:Date, score:Number, idResource:string, orderResource:Number){
    this.resourceType = resourceType;
    this.title = title;
    this.descriptionResource = descriptionResource;
    this.content = content;
    this.module = module;
    this.date = date;
    this.score = score;
    this.idResource = idResource;
    this.orderResource = orderResource;
  }
  //coursemodule/resources/idModule get
}
