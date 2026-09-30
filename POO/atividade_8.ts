class Retangulo {
  base: number = 0;
  altura: number = 0;

  calcularArea(): number {
    return this.base * this.altura;
  }

  calcularPerimetro(): number {
    return 2 * (this.base + this.altura);
  }
}

const ret = new Retangulo();
ret.base = 10;
ret.altura = 5;
console.log(`Área do Retângulo: ${ret.calcularArea()}`);
console.log(`Perímetro do Retângulo: ${ret.calcularPerimetro()}`); 