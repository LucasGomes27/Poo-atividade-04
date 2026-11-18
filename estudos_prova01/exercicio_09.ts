function sorteioNome(nome:string[]):string{
    const indice = Math.floor(Math.random() * nome.length);
    return nome[indice];
}

const listaNomes:string[] = ["Ana","Lucas","Pedro"];
console.log(sorteioNome(listaNomes))