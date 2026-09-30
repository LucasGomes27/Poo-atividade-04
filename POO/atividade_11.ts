class Pessoa {
  nome: string = "";
  idade: number = 0;

  apresentar(): string {
    return `Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}

const p = new Pessoa();
p.nome = "Ely";
p.idade = 46;
console.log(p.apresentar());