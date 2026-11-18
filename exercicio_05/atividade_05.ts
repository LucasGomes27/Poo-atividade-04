
class Cliente {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    contas: Conta[];

    constructor(id: number, nome: string, cpf: string, dataNascimento: Date) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = [];
    }
}


class Conta {
    id: number;
    numero: string;
    saldo: number;
    cliente?: Cliente;
    dataDeAbertura: Date;

    constructor(id: number, numero: string, saldoInicial: number, dataDeAbertura: Date = new Date()) {
        this.id = id;
        this.numero = numero;
        this.saldo = saldoInicial;
        this.dataDeAbertura = dataDeAbertura;
    }

    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
        }
    }

    sacar(valor: number): boolean {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }
}


class Banco {
    contas: Conta[] = [];
    clientes: Cliente[] = [];

    
    inserirCliente(cliente: Cliente): void {
        const existe = this.clientes.some(c => c.id === cliente.id || c.cpf === cliente.cpf);
        if (existe) {
            console.log(`Erro: Já existe um cliente com ID ${cliente.id} ou CPF ${cliente.cpf}.`);
            return;
        }
        this.clientes.push(cliente);
    }

    
    consultarCliente(cpf: string): Cliente | undefined {
        return this.clientes.find(c => c.cpf === cpf);
    }

   
    inserirConta(conta: Conta): void {
        const existe = this.contas.some(c => c.id === conta.id || c.numero === conta.numero);
        if (existe) {
            console.log(`Erro: Já existe uma conta com ID ${conta.id} ou número ${conta.numero}.`);
            return;
        }
        this.contas.push(conta);
    }

    
    consultarConta(numero: string): Conta | undefined {
        return this.contas.find(c => c.numero === numero);
    }

    
    associarContaCliente(numeroConta: string, cpfCliente: string): void {
        const cliente = this.consultarCliente(cpfCliente);
        const conta = this.consultarConta(numeroConta);

        if (!cliente) {
            console.log(`Erro: Cliente com CPF ${cpfCliente} não encontrado.`);
            return;
        }

        if (!conta) {
            console.log(`Erro: Conta número ${numeroConta} não encontrada.`);
            return;
        }

        
        if (conta.cliente !== undefined) {
            console.log(`Erro: A conta ${numeroConta} já está vinculada ao cliente ${conta.cliente.nome}.`);
            return;
        }

       
        const jaAssociada = cliente.contas.some(c => c.id === conta.id || c.numero === conta.numero);
        if (jaAssociada) {
            console.log(`Erro: A conta ${numeroConta} já pertence ao cliente ${cliente.nome}.`);
            return;
        }

        conta.cliente = cliente;
        cliente.contas.push(conta);
        console.log(`Sucesso: Conta ${numeroConta} associada a ${cliente.nome}.`);
    }

   
    listarContasCliente(cpf: string): Conta[] {
        const cliente = this.consultarCliente(cpf);
        if (!cliente) {
            console.log(`Erro: Cliente com CPF ${cpf} não encontrado.`);
            return [];
        }
        return cliente.contas;
    }

    
    totalizarSaldoCliente(cpf: string): number {
        const cliente = this.consultarCliente(cpf);
        if (!cliente) {
            console.log(`Erro: Cliente com CPF ${cpf} não encontrado.`);
            return 0;
        }
        return cliente.contas.reduce((acumulador, conta) => acumulador + conta.saldo, 0);
    }
}

const banco = new Banco();

console.log("--- 1. TESTE DE INSERÇÃO DE CLIENTES ---");
const c1 = new Cliente(1, "Lucas Gomes", "111.111.111-11", new Date(1999, 4, 15));
const c2 = new Cliente(2, "Luanda Clara", "222.222.222-22", new Date(2000, 8, 20));
const cDuplicadoId = new Cliente(1, "Outro Nome", "333.333.333-33", new Date(1995, 1, 10));
const cDuplicadoCpf = new Cliente(3, "Nome Diferente", "111.111.111-11", new Date(1998, 2, 5));

banco.inserirCliente(c1);
banco.inserirCliente(c2);
banco.inserirCliente(cDuplicadoId);  
banco.inserirCliente(cDuplicadoCpf); 

console.log("\n--- 2. TESTE DE CONSULTA DE CLIENTE ---");
console.log("Consulta CPF válido:", banco.consultarCliente("111.111.111-11")?.nome);
console.log("Consulta CPF inexistente:", banco.consultarCliente("999.999.999-99"));

console.log("\n--- 3. TESTE DE INSERÇÃO DE CONTAS ---");
const conta1 = new Conta(101, "001-1", 1500);
const conta2 = new Conta(102, "002-2", 2500);
const conta3 = new Conta(103, "003-3", 800);
const contaDupId = new Conta(101, "004-4", 100);
const contaDupNum = new Conta(104, "001-1", 100);

banco.inserirConta(conta1);
banco.inserirConta(conta2);
banco.inserirConta(conta3);
banco.inserirConta(contaDupId);  
banco.inserirConta(contaDupNum); 

console.log("\n--- 4. TESTE DE ASSOCIAÇÃO CONTA-CLIENTE ---");
banco.associarContaCliente("001-1", "111.111.111-11"); 
banco.associarContaCliente("002-2", "111.111.111-11"); 
banco.associarContaCliente("001-1", "111.111.111-11");
banco.associarContaCliente("001-1", "222.222.222-22");
banco.associarContaCliente("003-3", "222.222.222-22"); 

console.log("\n--- 5. TESTE DE LISTAGEM E TOTALIZAÇÃO DE SALDO ---");
const contasLucas = banco.listarContasCliente("111.111.111-11");
console.log(`Contas de Lucas (${contasLucas.length}):`, contasLucas.map(c => c.numero));
console.log(`Saldo total de Lucas: R$ ${banco.totalizarSaldoCliente("111.111.111-11").toFixed(2)}`);
console.log(`Saldo total de Luanda: R$ ${banco.totalizarSaldoCliente("222.222.222-22").toFixed(2)}`);