

class pessoa {
    nome:string;

    constructor(nome:string){
        this.nome = nome;
    }

    dizOi():string{
        return `${this.nome} diz olá `
    }
}