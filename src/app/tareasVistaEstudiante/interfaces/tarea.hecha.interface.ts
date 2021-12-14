import { RecursoTarea } from "./resource.interface";
import { UserDone } from "./user.done.interface"

export interface TareaHecha {
    "idHomework":string,
    "content":string,
    "score":number,
    "resource": RecursoTarea,
    "userDone": UserDone,
}