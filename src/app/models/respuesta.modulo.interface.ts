export class RespuestaModulo{
  course:string;
  nameModule:string;
  durationModule:number;
  idModule:string;
  orderModule:number;

  constructor(course:string, nombre:string, duracion:number, idModule:string, orderModule:number){
      this.course = course;
      this.nameModule = nombre;
      this.durationModule = duracion;
      this.idModule = idModule;
      this.orderModule = orderModule;
  }
}
