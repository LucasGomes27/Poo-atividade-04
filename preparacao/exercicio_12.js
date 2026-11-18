"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    nome = 'Bola';
    preco = 25;
    desconto = 5;
    aplicarDesconto() {
        let aplicado = this.preco * this.desconto / 100;
        this.preco = this.preco - aplicado;
        return this.preco;
    }
    emitirOrcamento() {
        console.log(`Produto: ${this.nome},Preco: ${this.preco}`);
        console.log(`Desconto: ${this.desconto}% -> Novo preco: ${this.aplicarDesconto()}`);
    }
}
let produto = new Produto();
produto.emitirOrcamento();
//# sourceMappingURL=exercicio_12.js.map