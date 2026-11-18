class RegistroTemperatura{
    temperaturas:number []
    limiteAlerta:number
    constructor(){
    this.temperaturas = [];
    this.limiteAlerta = 30; 
}
adicionar(temperatura:number):void{
    this.temperaturas.push(temperatura)
}
alterarLimite(limite:number):void{
    this.limiteAlerta = limite
}
listar():string{
    let resultado = ""
    this.temperaturas.forEach((temp,index) =>{
        resultado += `Dia ${index + 1}: ${temp} C `;
    })
    return resultado;
}
acimaDoLimite():number[]{
    return this.temperaturas.filter(temp => this.limiteAlerta);

}
converterParaFahrenheit():number[]{
    return this.temperaturas.map(temp => temp * 1.8 +32);
}
calcularMedia():number{
    if (this.temperaturas.length === 0) {
        return 0;
    }
    const soma = this.temperaturas.reduce((acumulador,temp) => acumulador + temp,0);
    return soma / this.temperaturas.length;
}

}
let registrotemperatura = new RegistroTemperatura;
registrotemperatura.adicionar(28);
registrotemperatura.adicionar(31);
registrotemperatura.adicionar(29);
registrotemperatura.adicionar(35);
registrotemperatura.adicionar(32);
registrotemperatura.adicionar(27);
registrotemperatura.adicionar(30);
console.log("--- Lista de Temperaturas ---")
console.log(registrotemperatura.listar());
console.log("--- Média das Temperaturas ---");
console.log(registrotemperatura.calcularMedia().toFixed(2));
console.log("--- Alertas (Limite 30°C) ---");
console.log(registrotemperatura.acimaDoLimite());
console.log("--- Temperaturas em Fahrenheit ---");
console.log(registrotemperatura.converterParaFahrenheit());
registrotemperatura.alterarLimite(32);
console.log("--- Alertas (Novo Limite 32°C) ---");
console.log(registrotemperatura.acimaDoLimite());
let registroVazio = new RegistroTemperatura();
console.log("--- Teste Registro Vazio ---");
console.log("Listar:", JSON.stringify(registroVazio.listar())); 
console.log("Acima do limite:", registroVazio.acimaDoLimite()); 
console.log("Média:", registroVazio.calcularMedia()); 
