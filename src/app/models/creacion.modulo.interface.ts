export class CreacionModulo{
  course:string;
  nameModule:string;
  durationModule:number;
  orderModule:number;

  constructor(course:string, nombre:string, duracion:number, orderModule:number){
      this.course = course;
      this.nameModule = nombre;
      this.durationModule = duracion;
      this.orderModule = orderModule;
  }
}
