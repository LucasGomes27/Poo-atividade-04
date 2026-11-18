class Produto{
    nome:string = 'Bola';
    preco:number = 25 ;
    desconto:number = 5;
    

    aplicarDesconto():number{
        let aplicado:number = this.preco * this.desconto /100
        this.preco = this.preco - aplicado
        return this.preco
    }

    emitirOrcamento():void{
        console.log(`Produto: ${this.nome},Preco: ${this.preco}`)
        console.log(`Desconto: ${this.desconto}% -> Novo preco: ${this.aplicarDesconto()}`)

    }

}
let produto = new Produto();
produto.emitirOrcamento()
