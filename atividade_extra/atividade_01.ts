class Cronometro {
    segundos: number;

    constructor()  {
        this.segundos = 0;


    }
    avancar(valor:number):void{
        if (valor >= 0)
            this.segundos += valor
    }

    zerar():void{
        this.segundos = 0;
    }

    emMinutos(): number{
        return (this.segundos /60);
    }
}
let c1 = new Cronometro();

c1.avancar(90);
c1.avancar(30);
console.log(c1.segundos);
console.log(c1.emMinutos());

c1.avancar(-20);
console.log(c1.segundos);

c1.zerar();
console.log(c1.segundos);

let c2 = new Cronometro();
console.log(c2.segundos);