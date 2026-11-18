export class Cliente  {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    contas: Conta[];

    constructor(id: number, nome: string, cpf: string, dataNascimento: Date = new Date()) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = [];
    }
}

export class Conta {
    id: number;
    numero: string;
    saldo: number;
    cliente?: Cliente;
    dataDeAbertura: Date;

    constructor(id: number, numero: string, saldo: number, dataDeAbertura: Date = new Date()) {
        this.id = id;
        this.numero = numero;
        this.saldo = saldo;
        this.dataDeAbertura = dataDeAbertura;
    }

    sacar(valor: number): boolean {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }

    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
        }
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }
}

export class Banco {
    contas: Conta[] = [];
    clientes: Cliente[] = [];

    

    inserir(conta: Conta): void {
        for (let c of this.contas) {
            if (c.id == conta.id || c.numero == conta.numero) {
                console.log("Já existe uma conta com esse ID ou número.");
                return;
            }
        }
        this.contas.push(conta);
    }

    consultar(numero: string): Conta | undefined {
        for (let c of this.contas) {
            if (c.numero == numero) {
                return c;
            }
        }
        return undefined;
    }

    consultarPorIndice(numero: string): number {
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                return i;
            }
        }
        return -1;
    }

    atualizar(conta: Conta): void {
        let indice = this.consultarPorIndice(conta.numero);
        if (indice != -1) {
            this.contas[indice] = conta;
        } else {
            console.log("Conta não encontrada.");
        }
    }

    
    excluir(numero: string): void {
        let indice = this.consultarPorIndice(numero);
        if (indice == -1) {
            console.log("Conta não encontrada.");
            return;
        }

        let conta = this.contas[indice];
            if (conta != undefined && conta.cliente != undefined) {
        let contasCliente = conta.cliente.contas;
            for (let i = 0; i < contasCliente.length; i++) {
        let c = contasCliente[i];
            if (c != undefined && c.numero == numero) {
                contasCliente.splice(i, 1);
                break;
        }
    }
}

        this.contas.splice(indice, 1);
        console.log("Conta excluída com sucesso.");
    }

    sacar(numero: string, valor: number): void {
        let conta = this.consultar(numero);
        if (conta != undefined) {
            if (conta.sacar(valor)) {
                console.log("Saque realizado com sucesso.");
            } else {
                console.log("Saldo insuficiente ou valor inválido.");
            }
        } else {
            console.log("Conta não encontrada.");
        }
    }

    depositar(numero: string, valor: number): void {
        let conta = this.consultar(numero);
        if (conta != undefined) {
            conta.depositar(valor);
            console.log("Depósito realizado com sucesso.");
        } else {
            console.log("Conta não encontrada.");
        }
    }

    transferir(numeroOrigem: string, numeroDestino: string, valor: number): void {
        let origem = this.consultar(numeroOrigem);
        let destino = this.consultar(numeroDestino);

        if (origem != undefined && destino != undefined) {
            if (origem.transferir(destino, valor)) {
                console.log("Transferência realizada com sucesso.");
            } else {
                console.log("Saldo insuficiente.");
            }
        } else {
            console.log("Conta de origem ou destino não encontrada.");
        }
    }

    
    ordemBancaria(numeroOrigem: string, contasDestino: string[], valor: number): void {
        let origem = this.consultar(numeroOrigem);
        if (origem == undefined) {
            console.log("Conta de origem não encontrada.");
            return;
        }

        let totalNecessario = valor * contasDestino.length;
        if (origem.saldo < totalNecessario || valor <= 0) {
            console.log("Saldo insuficiente para realizar a ordem bancária.");
            return;
        }

        for (let numDestino of contasDestino) {
            let destino = this.consultar(numDestino);
            if (destino != undefined) {
                origem.transferir(destino, valor);
                console.log(`Transferido R$ ${valor} para a conta ${numDestino}.`);
            } else {
                console.log(`Conta destino ${numDestino} não encontrada.`);
            }
        }
    }

    
    quantidadeContas(): number {
        return this.contas.length;
    }

    
    totalDinheiroDepositado(): number {
        let total = 0;
        for (let c of this.contas) {
            total += c.saldo;
        }
        return total;
    }

    
    mediaSaldoContas(): number {
        let qtd = this.quantidadeContas();
        if (qtd == 0) {
            return 0;
        }
        return this.totalDinheiroDepositado() / qtd;
    }

    

    inserirCliente(cliente: Cliente): void {
        for (let c of this.clientes) {
            if (c.id == cliente.id || c.cpf == cliente.cpf) {
                console.log("Já existe um cliente com esse ID ou CPF.");
                return;
            }
        }
        this.clientes.push(cliente);
    }

    consultarCliente(cpf: string): Cliente | undefined {
        for (let c of this.clientes) {
            if (c.cpf == cpf) {
                return c;
            }
        }
        return undefined;
    }

    associarContaCliente(numeroConta: string, cpfCliente: string): void {
        let conta = this.consultar(numeroConta);
        let cliente = this.consultarCliente(cpfCliente);

        if (conta == undefined || cliente == undefined) {
            console.log("Conta ou cliente não encontrado.");
            return;
        }

        if (conta.cliente != undefined) {
            console.log("Essa conta já possui um titular.");
            return;
        }

        for (let c of cliente.contas) {
            if (c.numero == numeroConta) {
                console.log("Cliente já possui essa conta.");
                return;
            }
        }

        conta.cliente = cliente;
        cliente.contas.push(conta);
        console.log("Conta associada com sucesso.");
    }

    
    mudarTitularidade(numeroConta: string, cpfNovoCliente: string): void {
        let conta = this.consultar(numeroConta);
        let novoCliente = this.consultarCliente(cpfNovoCliente);

        if (conta == undefined || novoCliente == undefined) {
            console.log("Conta ou novo cliente não encontrado.");
            return;
        }

        if (conta.cliente != undefined) {
            let antigoCliente = conta.cliente;
            for (let i = 0; i < antigoCliente.contas.length; i++) {
                if (antigoCliente.contas[i].numero == numeroConta) {
                    antigoCliente.contas.splice(i, 1);
                    break;
                }
            }
        }

        conta.cliente = novoCliente;
        novoCliente.contas.push(conta);
        console.log("Titularidade alterada com sucesso.");
    }

    
    excluirCliente(cpf: string): void {
    for (let i = 0; i < this.clientes.length; i++) {
        let cliente = this.clientes[i];
        if (cliente != undefined && cliente.cpf == cpf) {
            for (let conta of cliente.contas) {
                conta.cliente = undefined;
            }
            this.clientes.splice(i, 1);
            console.log("Cliente excluído. Suas contas ficaram sem titular.");
            return;
        }
    }
    console.log("Cliente não encontrado.");
}

    
    listarContasSemCliente(): Conta[] {
        let semCliente: Conta[] = [];
        for (let c of this.contas) {
            if (c.cliente == undefined) {
                semCliente.push(c);
            }
        }
        return semCliente;
    }

    listarContasCliente(cpf: string): Conta[] {
        let cliente = this.consultarCliente(cpf);
        if (cliente != undefined) {
            return cliente.contas;
        }
        return [];
    }

    totalizarSaldoCliente(cpf: string): number {
        let contas = this.listarContasCliente(cpf);
        let total = 0;
        for (let c of contas) {
            total += c.saldo;
        }
        return total;
    }

    
    carregarDados(): void {
        this.inserirCliente(new Cliente(1, "Lucas", "111"));
        this.inserirCliente(new Cliente(2, "Luanda", "222"));
        this.inserirCliente(new Cliente(3, "Hernan", "333"));
        this.inserirCliente(new Cliente(4, "Thiago", "444"));
        this.inserirCliente(new Cliente(5, "Guilherme", "555"));

        this.inserir(new Conta(1, "111-1", 1000));
        this.inserir(new Conta(2, "222-2", 2000));
        this.inserir(new Conta(3, "333-3", 500));
        this.inserir(new Conta(4, "444-4", 1500));
        this.inserir
    }
    }