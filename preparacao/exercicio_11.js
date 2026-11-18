"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    nome = 'Ely';
    idade = 46;
    apresentar() {
        return `Meu nome e ${this.nome} e tenho ${this.idade} anos`;
    }
}
let pessoa = new Pessoa();
console.log(pessoa.apresentar());
//# sourceMappingURL=exercicio_11.js.map