import prompt from "prompt-sync";
import { Conta, Cliente, Banco } from "./banco.ts";

class App {
    banco: Banco;
    input = prompt();

    constructor() {
        this.banco = new Banco();
    }

    menu(): void {
        let opcao: string = "";

        do {
            console.log("\nBem-vindo\nDigite uma opção:");
            console.log("Contas:");
            console.log("01 - Inserir       02 - Consultar");
            console.log("03 - Sacar         04 - Depositar");
            console.log("05 - Excluir       06 - Transferir");
            console.log("07 - Totalizações  08 - Ordem Bancária");
            console.log("09 - Contas sem Cliente");
            console.log("\nClientes:");
            console.log("20 - Inserir       21 - Consultar");
            console.log("22 - Associar      23 - Excluir");
            console.log("24 - Mudar Titular 25 - Listar Contas");
            console.log("26 - Total Saldo Cliente");
            console.log("\n0 - Sair\n");

            opcao = this.input("Opção: ");

            switch (opcao) {
                case "01":
                    this.inserirConta();
                    break;
                case "02":
                    this.consultarConta();
                    break;
                case "03":
                    this.sacar();
                    break;
                case "04":
                    this.depositar();
                    break;
                case "05":
                    this.excluirConta();
                    break;
                case "06":
                    this.transferir();
                    break;
                case "07":
                    this.totalizacoes();
                    break;
                case "08":
                    this.ordemBancaria();
                    break;
                case "09":
                    this.contasSemCliente();
                    break;
                case "20":
                    this.inserirCliente();
                    break;
                case "21":
                    this.consultarCliente();
                    break;
                case "22":
                    this.associarContaCliente();
                    break;
                case "23":
                    this.excluirCliente();
                    break;
                case "24":
                    this.mudarTitularidade();
                    break;
                case "25":
                    this.listarContasCliente();
                    break;
                case "26":
                    this.totalizarSaldoCliente();
                    break;
                case "0":
                    console.log("Aplicação encerrada.");
                    break;
                default:
                    console.log("Opção inválida.");
            }

            if (opcao != "0") {
                this.input("Operação finalizada. Digite <enter>");
            }
        } while (opcao != "0");
    }

    inserirConta(): void {
        console.log("\nCadastrar conta");
        let id = Number(this.input("Digite o ID da conta: "));
        let numero = this.input("Digite o número da conta: ");
        let conta = new Conta(id, numero, 0);
        this.banco.inserir(conta);
    }

    consultarConta(): void {
        console.log("\nConsultar conta");
        let numero = this.input("Digite o número da conta: ");
        let conta = this.banco.consultar(numero);
        if (conta != undefined) {
            let nomeTitular = conta.cliente ? conta.cliente.nome : "Sem titular";
            console.log(`Número: ${conta.numero} | Saldo: R$ ${conta.saldo} | Titular: ${nomeTitular}`);
        } else {
            console.log("Conta não encontrada.");
        }
    }

    sacar(): void {
        console.log("\nSacar");
        let numero = this.input("Digite o número da conta: ");
        let valor = Number(this.input("Digite o valor do saque: "));
        this.banco.sacar(numero, valor);
    }

    depositar(): void {
        console.log("\nDepositar");
        let numero = this.input("Digite o número da conta: ");
        let valor = Number(this.input("Digite o valor do depósito: "));
        this.banco.depositar(numero, valor);
    }

    excluirConta(): void {
        console.log("\nExcluir conta");
        let numero = this.input("Digite o número da conta: ");
        this.banco.excluir(numero);
    }

    transferir(): void {
        console.log("\nTransferir");
        let origem = this.input("Conta de origem: ");
        let destino = this.input("Conta de destino: ");
        let valor = Number(this.input("Valor: "));
        this.banco.transferir(origem, destino, valor);
    }

    totalizacoes(): void {
        console.log("\nTotalizações");
        console.log(`Quantidade de contas: ${this.banco.quantidadeContas()}`);
        console.log(`Total depositado: R$ ${this.banco.totalDinheiroDepositado()}`);
        console.log(`Média de saldo: R$ ${this.banco.mediaSaldoContas().toFixed(2)}`);
    }

    ordemBancaria(): void {
        console.log("\nOrdem Bancária");
        let origem = this.input("Conta de origem: ");
        let qtd = Number(this.input("Para quantas contas deseja transferir? "));
        let destinos: string[] = [];

        for (let i = 0; i < qtd; i++) {
            let num = this.input(`Número da conta destino ${i + 1}: `);
            destinos.push(num);
        }

        let valor = Number(this.input("Valor para cada conta: "));
        this.banco.ordemBancaria(origem, destinos, valor);
    }

    contasSemCliente(): void {
        console.log("\nContas sem cliente:");
        let lista = this.banco.listarContasSemCliente();

        if (lista.length == 0) {
            console.log("Não há contas sem cliente.");
            return;
        }

        for (let c of lista) {
            console.log(`Conta: ${c.numero} | Saldo: R$ ${c.saldo}`);
        }

        let opcao = this.input("Deseja atribuir um titular agora? (s/n): ");
        if (opcao == "s" || opcao == "S") {
            let numero = this.input("Número da conta: ");
            let cpf = this.input("CPF do cliente: ");
            this.banco.associarContaCliente(numero, cpf);
        }
    }

    inserirCliente(): void {
        console.log("\nCadastrar cliente");
        let id = Number(this.input("ID do cliente: "));
        let nome = this.input("Nome do cliente: ");
        let cpf = this.input("CPF do cliente: ");
        let cliente = new Cliente(id, nome, cpf);
        this.banco.inserirCliente(cliente);
    }

    consultarCliente(): void {
        console.log("\nConsultar cliente");
        let cpf = this.input("CPF do cliente: ");
        let cliente = this.banco.consultarCliente(cpf);
        if (cliente != undefined) {
            console.log(`ID: ${cliente.id} | Nome: ${cliente.nome} | CPF: ${cliente.cpf}`);
        } else {
            console.log("Cliente não encontrado.");
        }
    }

    associarContaCliente(): void {
        console.log("\nAssociar conta a cliente");
        let numero = this.input("Número da conta: ");
        let cpf = this.input("CPF do cliente: ");
        this.banco.associarContaCliente(numero, cpf);
    }

    excluirCliente(): void {
        console.log("\nExcluir cliente");
        let cpf = this.input("CPF do cliente: ");
        this.banco.excluirCliente(cpf);
    }

    mudarTitularidade(): void {
        console.log("\nMudar titularidade");
        let numero = this.input("Número da conta: ");
        let cpf = this.input("CPF do novo titular: ");
        this.banco.mudarTitularidade(numero, cpf);
    }

    listarContasCliente(): void {
        console.log("\nListar contas do cliente");
        let cpf = this.input("CPF do cliente: ");
        let contas = this.banco.listarContasCliente(cpf);
        for (let c of contas) {
            console.log(`Conta: ${c.numero} | Saldo: R$ ${c.saldo}`);
        }
    }

    totalizarSaldoCliente(): void {
        console.log("\nSaldo total do cliente");
        let cpf = this.input("CPF do cliente: ");
        console.log(`Total: R$ ${this.banco.totalizarSaldoCliente(cpf)}`);
    }
}

let app = new App();
app.banco.carregarDados();
app.menu();