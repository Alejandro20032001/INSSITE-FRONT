import { datosTarea } from "./datos.tarea.interface";
import { datosEstudiante } from "./estudiante.por.calificar.interface";

export interface TareaPorCalificar{
  content:string;
  idHomework:string;
  resource:datosTarea;
  userDone:datosEstudiante;
}
