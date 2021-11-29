export class Modulo{
    idModulo:string;
    nombre:string;
    duracion:number;
    order:number;

    constructor(idModulo:string, nombre:string, duracion:number, order:number){
        this.idModulo = idModulo;
        this.nombre = nombre;
        this.duracion = duracion;
        this.order = order;
    }
}
