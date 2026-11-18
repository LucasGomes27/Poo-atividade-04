class Pessoa{
    nome:string = 'Ely';
    idade:number = 46 ;

    apresentar():string {
        return `Meu nome e ${this.nome} e tenho ${this.idade} anos`
    } 



}
let pessoa = new Pessoa();
console.log(pessoa.apresentar())