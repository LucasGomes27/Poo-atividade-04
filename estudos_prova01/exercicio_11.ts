class Sorteio{
    nomes:string[]

    constructor(){
        this.nomes = []
    }
    adicionarNomes(nomes:string):void{
        this.nomes.push(nomes)
    }
    sortear(): string {
        const indice = Math.floor(Math.random() * this.nomes.length);
        return this.nomes[indice]!;
}

}

let sorteioNomes = new Sorteio();
sorteioNomes.adicionarNomes("Lucas")
sorteioNomes.adicionarNomes("Ricardo")
sorteioNomes.adicionarNomes("Pedro")

console.log(sorteioNomes.sortear())