import { RecursoTarea } from "./resource.interface";

export interface TareaHecha {
    "idHomework":string,
    "content":string,
    "score":number,
    "resource": RecursoTarea,
}