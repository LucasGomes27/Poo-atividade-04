class ColecaoNumeros{
    numeros: number[]
    constructor(){
        this.numeros = []
    }
    adicionarNumero(numero:number):void{
        this.numeros.push(numero)
    }
    limparArray():void{
        this.numeros= [];

    }
    obterQuantidade():number{
        return this.numeros.length
    }
    calcularMedia():number{
        let soma = 0
        if (this.numeros.length === 0){
            return 0
        }
            
        for (let n of this.numeros){
            soma += n
        }
        
        return soma/this.numeros.length;
        
    }
    obterMaior():number| undefined{
        if (this.numeros.length === 0){
            return 0
        }
        let maior = this.numeros[0]!;

        for (let n of this.numeros)
            if (n > maior){
                maior = n;
                
            }
        return maior
            
    }
    obterMenor():number| undefined{
        if (this.numeros.length === 0){
            return 0
        }
        let menor = this.numeros[0]!;
        for ( let n of this.numeros)
            if (n < menor){
                menor = n
                
            }
        return menor
    }
}

const colecao = new ColecaoNumeros();

colecao.adicionarNumero(5);
colecao.adicionarNumero(7);
colecao.adicionarNumero(34);

console.log("Quantidade", colecao.obterQuantidade());
console.log("Media", colecao.calcularMedia());
console.log("Maior: ", colecao.obterMaior());
console.log("Menor", colecao.obterMenor());

colecao.limparArray();

console.log("Quantidade", colecao.obterQuantidade())