export class Correo {
    public id: number;
    public email: string;
    public pwd:string;
    public tipo:string;
    public vali: string;
    
    constructor(id:number,email:string,pwd:string,tipo:string,vali:string){
        this.id = id;
        this.email = email;
        this.pwd = pwd;
        this.tipo = tipo;
        this.vali = vali;
    }
}