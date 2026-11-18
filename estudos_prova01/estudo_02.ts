class Estacionamento{
    placa:string;
    horas:number;
    constructor(placa:string){
        this.placa = placa;
        this.horas = 0
    }
    registrarPermanencia(horas:number):void{
        if (horas >= 0 ){
            this.horas = horas;
        }

    }
    calcularHorasCobradas():number{
        return Math.ceil(this.horas);
    }
    calcularValor():number{
        let horas = this.calcularHorasCobradas();
        if (horas === 0 )
            return 0
        if (horas === 1)
            return 1

        else 
            return 8 + (horas -1 ) *5;    
    }
    emitirTicket():string{
        return `Placa: ${this.placa},Horas Cobradas: ${this.calcularHorasCobradas()},Valor a ser pago: ${this.calcularValor()}`
    }
}

let estaciona = new Estacionamento("Abc- 2239");
estaciona.registrarPermanencia(0);
console.log(estaciona.emitirTicket());
estaciona.registrarPermanencia(1);
console.log(estaciona.emitirTicket());
estaciona.registrarPermanencia(5)
console.log(estaciona.emitirTicket())
