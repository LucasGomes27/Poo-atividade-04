class Circulo {
    pi : number = 3.14;
    raio : number = 20;
    calcularArea():number {
        return this.pi * (this.raio * this.raio)
    }
    calcularPerimetro():number {
        return 2 * this.pi * this.raio
    }
}
let circulo = new Circulo();
console.log(`A area do circulo e ${circulo.calcularArea()} e o perimetro e ${circulo.calcularPerimetro()}`);