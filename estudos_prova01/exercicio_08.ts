const arrayBase = [1,3,5,7];

const total = arrayBase
    .map((n) => n * 2)
    .reduce((acumulador,item) => acumulador + item,0);

console.log("Resultado encadeado:", total)