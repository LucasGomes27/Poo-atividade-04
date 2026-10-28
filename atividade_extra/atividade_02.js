"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Estacionamento {
    placa;
    horas;
    constructor(placa) {
        this.placa = placa;
        this.horas = 0;
    }
    registrarPermanencia(horas) {
        if (horas >= 0) {
            this.horas = horas;
        }
    }
    calcularHorasCobradas() {
        return Math.ceil(this.horas);
    }
    calcularValor() {
        let horasCobradas = this.calcularHorasCobradas();
        if (horasCobradas == 0) {
            return 0;
        }
        let valorTotal = 8;
        for (let hora = 2; hora <= horasCobradas; hora++) {
            valorTotal += 5;
        }
        return valorTotal;
    }
    emitirTicket() {
        return `Placa: ${this.placa} | Horas cobradas: ${this.calcularHorasCobradas()} | Valor: R$ ${this.calcularValor().toFixed(2)}`;
    }
}
let estacionamento = new Estacionamento("XDZ - 1123");
estacionamento.registrarPermanencia(0);
console.log(`R$ ${estacionamento.calcularValor().toFixed(2)}`);
estacionamento.registrarPermanencia(1);
console.log(`R$ ${estacionamento.calcularValor().toFixed(2)}`);
estacionamento.registrarPermanencia(1.2);
console.log(`R$ ${estacionamento.calcularValor().toFixed(2)}`);
estacionamento.registrarPermanencia(3.5);
console.log(`R$ ${estacionamento.calcularValor().toFixed(2)}`);
estacionamento.registrarPermanencia(-2);
console.log(`R$ ${estacionamento.calcularValor().toFixed(2)}`);
console.log(estacionamento.emitirTicket());
//# sourceMappingURL=atividade_02.js.map