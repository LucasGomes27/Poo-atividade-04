class GerenciadorNotas{
    notas: number[]
    constructor(){
        this.notas = []
    }
    adicionarNota(nota:number):void{
        this.notas.push(nota)
    }
    calcularMedia():number{
        let soma = 0
        for (let n of this.notas){
            soma += n;
        }
        let media = soma / this.notas.length;
        return media;
    }
    verificarAprovacao():string{
        if (this.calcularMedia() >= 7){
            return "Aprovado" 
        }
        else 
            return "Reprovado"

    }

}
let gerenciador = new GerenciadorNotas();
gerenciador.adicionarNota(7);
gerenciador.adicionarNota(8);
gerenciador.adicionarNota(5);

console.log("Media: ",gerenciador.calcularMedia());
console.log("Situacao: ", gerenciador.verificarAprovacao());