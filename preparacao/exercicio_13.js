"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Numero {
    a = 5;
    ehPar() {
        return this.a % 2 == 0;
    }
    ehImpar() {
        return !this.ehPar();
    }
}
let numero = new Numero();
console.log(numero.ehPar(), numero.ehImpar());
//# sourceMappingURL=exercicio_13.js.map