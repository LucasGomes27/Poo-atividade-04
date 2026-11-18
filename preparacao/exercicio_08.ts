
class Retangulo {
    base : number = 20;
    altura : number = 5;

    calcularArea(): number {
        return (this.base * 2)  + (this.altura * 2 );

        
    }
    
}
let retangulo = new Retangulo();
console.log(retangulo.calcularArea());