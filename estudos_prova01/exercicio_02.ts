function formatarComTraco(numeros:number[]):string{
    let resultado = "";
    numeros.forEach((numeros) =>{
        if (resultado === ""){
            resultado = `${numeros}`;
        }
        else {
            resultado = `${resultado} - ${numeros}`;
        }
    });
    return resultado;
}

console.log(formatarComTraco([10,20,30,40]))

