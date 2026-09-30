class SituacaoFinanceira {
  valorCreditos: number = 0;
  valorDebitos: number = 0;

  calcularSaldo(): number {
    return this.valorCreditos - this.valorDebitos;
  }
}

const fin = new SituacaoFinanceira();
fin.valorCreditos = 3500;
fin.valorDebitos = 1200;
console.log(`Saldo Financeiro: R$ ${fin.calcularSaldo()}`);