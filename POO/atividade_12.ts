class Produto {
  nome: string = "";
  preco: number = 0;

  aplicarDesconto(percentual: number): number {
    return this.preco * (1 - percentual / 100);
  }

  emitirOrcamento(percentual: number): string {
    const novoPreco = this.aplicarDesconto(percentual);
    
    
    const precoFormatado = this.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    const novoPrecoFormatado = novoPreco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

    return `Produto: ${this.nome}, Preço: ${precoFormatado}\nDesconto: ${percentual}% Novo preço: ${novoPrecoFormatado}`;
  }
}

const prod = new Produto();
prod.nome = "Camisa";
prod.preco = 100;
console.log(prod.emitirOrcamento(10));