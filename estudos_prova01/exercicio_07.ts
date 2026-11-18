const numeros =[2,4,6,8,10];

const dobro = numeros.map((n) => n*2);

console.log("Original: ", numeros);
console.log("Dobro: ",dobro);

const somaTotal = dobro.reduce((acumulador,item) => acumulador + item,0);

console.log("Soma total: ", somaTotal);