"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circulo {
    pi = 3.14;
    raio = 20;
    calcularArea() {
        return this.pi * (this.raio * this.raio);
    }
    calcularPerimetro() {
        return 2 * this.pi * this.raio;
    }
}
let circulo = new Circulo();
console.log(`A area do circulo e ${circulo.calcularArea()} e o perimetro e ${circulo.calcularPerimetro()}`);
//# sourceMappingURL=exercicio_9.js.map