class ContaBancaria {
    private numeroConta: string;
    private saldo: number;
    protected titular: string;

constructor(numeroConta: string, saldo: number, titular: string) {
this.numeroConta = numeroConta;
this.saldo = saldo;
this.titular = titular;

}

getNumeroConta() {
    return this.numeroConta;
}

setNumeroConta(novoNumeroConta: string) {
this.numeroConta = novoNumeroConta;
}

getSaldo() {
    return this.saldo;
}

setSaldo(novoSaldo: number) {
    this.saldo = novoSaldo;
}


depositar(deposito: number): void {
    Logger.logDeposito(this.saldo += deposito)
}

sacar(saque: number): void {
    Logger.logSaque(this.saldo -= saque)
}

}


class ContaPoupanca extends ContaBancaria {
    juros: number;
    
    constructor(numeroConta: string, saldo: number, titular: string, juros: number) {
    super(numeroConta, saldo, titular);
    this.juros = juros;
    }

    getSaldoJuros(): number {
        return this.getSaldo() + this.juros;
    }
}

interface IOperacoesBancarias {
    depositar(deposito: number): void;
    sacar(saque: number): void;
}

class Logger {
    public static logDeposito(log: number): void {
        console.log(log);
    }

    public static logSaque(log: number): void {
        console.log(log);
    }
}

let contaBancaria = new ContaBancaria('5878-6', 500, 'Maria Santos');
let contaPoupanca = new ContaPoupanca ('5878-6', 800, 'Maria Santos', 100);

console.log(`Saldo anterior da conta bancária: ${contaBancaria.getSaldo()} `);
contaBancaria.depositar(100);
contaBancaria.sacar(50);

console.log(`Saldo atual da conta bancária: ${contaBancaria.getSaldo()}`);

console.log(`Saldo da conta poupança sem juros: ${contaPoupanca.getSaldo()}`);
console.log(`Saldo da conta poupança com juros: ${contaPoupanca.getSaldoJuros()}`);

contaPoupanca.depositar(200);
contaPoupanca.sacar(100);

console.log(`Saldo atual da conta poupança: ${contaPoupanca.getSaldo()}`);

