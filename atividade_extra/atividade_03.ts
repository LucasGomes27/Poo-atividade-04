class Grafica {
    paginas :number ;
    colorida: boolean;
    totalPaginasImpressas: number;
    valorTotalImpresso : number;
    constructor(){
        this.paginas = 0;
        this.colorida = false;
        this.totalPaginasImpressas= 0;
        this.valorTotalImpresso = 0;
    }
    inicializarPedidos(paginas:number,colorida:boolean): void{
        if (paginas > 0) {
        this.paginas = Math.floor(paginas);
        this.colorida = colorida;
    }
    }
    calcularValor(): number{
        if (this.colorida == true){
            return this.paginas * 0.80
        } 
        else {
            return this.paginas * 0.25;
        }

    }
    imprimir(): void {
    this.totalPaginasImpressas += this.paginas;
    this.valorTotalImpresso += this.calcularValor();
}

}
let imp1 = new Grafica();


imp1.inicializarPedidos(10, false);
imp1.imprimir();


imp1.inicializarPedidos(10, true);
imp1.imprimir();

console.log(`Total de páginas: ${imp1.totalPaginasImpressas}`); 
console.log(`Valor total: R$ ${imp1.valorTotalImpresso.toFixed(2)}`); 


console.log(`Valor do pedido isolado: R$ ${imp1.calcularValor().toFixed(2)}`);
console.log(`Totais permanecem iguais: ${imp1.totalPaginasImpressas} pgs / R$ ${imp1.valorTotalImpresso.toFixed(2)}`);


let imp2 = new Grafica();
console.log(`Nova impressora zerada: ${imp2.totalPaginasImpressas} pgs / R$ ${imp2.valorTotalImpresso.toFixed(2)}`);