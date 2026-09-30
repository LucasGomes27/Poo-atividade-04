class Numero {
  valor: number = 0;

  ehPar(): boolean {
    return this.valor % 2 === 0;
  }

  ehImpar(): boolean {
    return !this.ehPar();
  }
}

const num = new Numero();
num.valor = 7;
console.log(`O número ${num.valor} é par? ${num.ehPar()}`);   
console.log(`O número ${num.valor} é ímpar? ${num.ehImpar()}`);