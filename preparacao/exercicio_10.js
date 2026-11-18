"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class situacaoFinanceira {
    valorCreditos = 100;
    valorDebitos = 50;
    calcularSaldo() {
        return this.valorCreditos - this.valorDebitos;
    }
}
let situcaofin = new situacaoFinanceira();
console.log(`Calculamos a operacao e seu saldo e de ${situcaofin.calcularSaldo()}`);
//# sourceMappingURL=exercicio_10.js.map