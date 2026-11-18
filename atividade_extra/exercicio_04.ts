class ColecaoNumeros{
    numero : number[];
    constructor(){
        this.numero = [];
        
    }
    adicionar(numero:number):void{
        this.numero.push(numero)
    }
    limpar(): void {
    this.numero = [];
    }
    quantidade():number{
        return this.numero.length;
    }
    somar():number{
        let somatorio = 0
        for (let n of this.numero){
            somatorio += n
        }
        return somatorio
    }
    calcularMedia():number {
        if (this.quantidade() == 0) {
        return 0;
    }
        return this.somar() / this.quantidade();
    }
    maior(): number | undefined {
        if (this.quantidade() == 0) {
            return undefined;
        }
        return Math.max(...this.numero);
    }
    menor(): number | undefined{
        if (this.quantidade() == 0) {
            return undefined;
        }
        return Math.min(...this.numero);
    }
}
    let colecao = new ColecaoNumeros();
    console.log(colecao.maior());
    console.log(colecao.menor());

colecao.adicionar(15);
colecao.adicionar(3);
colecao.adicionar(27);
colecao.adicionar(8);

console.log(colecao.maior());
console.log(colecao.menor());

    
    