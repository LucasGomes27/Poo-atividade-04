class JogoParImpar{
    numeroJogador:number= 0;
    numeroMaquina:number= 0;

    sortearMaquina():void{
        this.numeroMaquina = Math.floor(Math.random() * 10) +1

    }
    resultado():string{
        if ((this.numeroJogador + this.numeroMaquina) % 2 == 0)
            return "par"
        else
            return "impar"
    }

    vencedor():string{
        if (this.resultado() === "par"){
            return "Jogador venceu"
        }else{
            return "Maquina venceu"
        }
    }
}
let jogo = new JogoParImpar();

jogo.numeroJogador = 4;
jogo.sortearMaquina();

console.log(`Número do Jogador: ${jogo.numeroJogador}`);
console.log(`Número da Máquina: ${jogo.numeroMaquina}`);
console.log(`Resultado da Soma: ${jogo.resultado()}`);
console.log(`Vencedor: ${jogo.vencedor()}`);