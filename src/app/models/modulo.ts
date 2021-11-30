export class Modulo{
    idModulo:string;
    nombre:string;
    duracion:number;
    order:number;
    diasPrevios:number;

    constructor(idModulo:string, nombre:string, duracion:number, order:number, diasPrevios:number){
        this.idModulo = idModulo;
        this.nombre = nombre;
        this.duracion = duracion;
        this.order = order;
        this.diasPrevios = diasPrevios;
    }
}
