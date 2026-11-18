
class situacaoFinanceira{
    valorCreditos:number = 100;
    valorDebitos:number = 50;
    calcularSaldo():number {
        return this.valorCreditos - this.valorDebitos
    }

}
let situcaofin = new situacaoFinanceira();
console.log(`Calculamos a operacao e seu saldo e de ${situcaofin.calcularSaldo()}`)