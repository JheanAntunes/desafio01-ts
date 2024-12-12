// [X] Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount

// [X] Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
// [X] Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques

export abstract class DioAccount {
  private readonly name: string = "";
  private readonly accountNumber: number = 0;
  private balance: number = 0;
  private status: boolean = true;
  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }
  private setBalance = (valueDeposit: number) => {
    this.balance = valueDeposit;
  };

  getName = () => this.name;

  deposit(valueDeposit: number) {
    //validation status account
    this.validateStatus();
    // add deposit in balance
    this.setBalance(valueDeposit + this.balance);
  }

  withdraw = (valueWithdraw: number) => {
    //validation status account
    if (!this.validateStatus()) {
      return console.log(
        "Querido Cliente, a sua conta está inativa. Por favor entre em contato para ativa-la novamente."
      );
    }
    //validation balance
    if (!this.validateWithdraw(valueWithdraw)) {
      return console.log(
        "Querido Cliente, O seu saldo é menor o que você quer sacar ",
        this.balance,
        " , temos opções de emprestimos. "
      );
    }
    //att balance
    this.setBalance(this.balance - valueWithdraw);
  };

  getBalance = () => this.balance;

  private validateWithdraw = (valueWithdraw: number) => {
    //validation withdraw
    if (valueWithdraw <= this.balance) {
      return true;
    }
    return false;
  };
  private validateStatus = () => {
    if (!this.status) throw new Error();
    return this.status;
  };
}
