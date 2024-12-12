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
  private setBalance = (valueDeposit: number): void => {
    this.balance = valueDeposit;
  };

  getName = (): string => this.name;

  deposit(valueDeposit: number): void {
    //validation status account
    this.validateStatus();
    // add deposit in balance
    this.setBalance(valueDeposit + this.balance);
  }

  withdraw = (valueWithdraw: number): void => {
    //validation status account
    if (!this.validateStatus()) {
      return;
    }
    //validation balance
    if (!this.validateWithdraw(valueWithdraw)) {
      return;
    }
    //att balance
    this.setBalance(this.balance - valueWithdraw);
  };

  getBalance = (): number => this.balance;

  private validateWithdraw = (valueWithdraw: number): boolean => {
    //validation withdraw
    if (valueWithdraw <= this.balance) {
      return true;
    }
    return false;
  };
  private validateStatus = (): boolean => {
    if (!this.status) throw new Error();
    return this.status;
  };
}
