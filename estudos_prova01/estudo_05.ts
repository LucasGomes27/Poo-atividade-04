class RegistroTemperaturas{
    temperaturas:number[]
    limiteAberta:number

    constructor(){
        this.temperaturas = []
        this.limiteAberta = 30
    }
    adicionarTemperatura(temperatura:number):void{
        this.temperaturas.push(temperatura)
    }
    alterarLimite(limite:number):void{
        this.limiteAberta = limite;     
    }
    obterTemperaturasAcimaDoLimite():number[]{
        return this.temperaturas.filter(t => t > this.limiteAberta);
    }
    obterTemperaturaEmFahrenheit():number[]{
        return this.temperaturas.map(t => t * 1.8 + 32);
    }
    calcularMedia():number{
        if (this.temperaturas.length ===0){
            return 0
        }
        const soma = this.temperaturas.reduce((acumulador,t) => acumulador + t,0)
        return soma / this.temperaturas.length 
    }
    exibirTemperaturas():void{
        this.temperaturas.forEach(t => console.log(t))
    }
}
const registro = new RegistroTemperaturas();
registro.adicionarTemperatura(25);
registro.adicionarTemperatura(32);
registro.adicionarTemperatura(38);
registro.adicionarTemperatura(18);
console.log("--- Lista de Temperaturas ---");
registro.exibirTemperaturas();
console.log("\nAcima do limite (30°C):", registro.obterTemperaturasAcimaDoLimite());
console.log("Em Fahrenheit:", registro.obterTemperaturaEmFahrenheit());
console.log("Média das temperaturas:", registro.calcularMedia());