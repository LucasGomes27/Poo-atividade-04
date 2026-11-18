function imprimirDobro(numeros:number[]):string{
    let resultado = "";
    numeros.forEach((n) =>{
        if  (resultado == ""){
            resultado = `${n}`
        } else{
            resultado = `${resultado} - ${n}`
        }
        
    });
    return resultado;
    

}
console.log(imprimirDobro([2,4,5,6]))