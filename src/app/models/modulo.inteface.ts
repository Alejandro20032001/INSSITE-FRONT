import { Course } from "../student/interfaces/course.interface";

export interface Module{
 
  "idModule": string, 
  "nameModule":string, 
  "descriptionModule": string,
   "durationModule": number, 
   "course": Course,
   "orderModule":number
}