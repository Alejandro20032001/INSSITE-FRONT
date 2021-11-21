export class RespuestaModulo{
  course:string;
  nameModule:string;
  durationModule:number;
  idModule:string;

  constructor(course:string, nombre:string, duracion:number, idModule:string){
      this.course = course;
      this.nameModule = nombre;
      this.durationModule = duracion;
      this.idModule = idModule;
  }
}
