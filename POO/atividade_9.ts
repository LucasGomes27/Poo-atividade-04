class Circulo {
  raio: number = 0;

  calcularArea(): number {
    return Math.PI * Math.pow(this.raio, 2);
  }

  calcularPerimetro(): number {
    return 2 * Math.PI * this.raio;
  }
}

const c = new Circulo();
c.raio = 5;
console.log(`Área do Círculo: ${c.calcularArea().toFixed(2)}`);
console.log(`Perímetro do Círculo: ${c.calcularPerimetro().toFixed(2)}`);