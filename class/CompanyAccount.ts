import { DioAccount } from "./DioAccount";

// [X] Implementar o método de empréstimo (getLoan) na classe CompanyAccount
// Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
// Apenas contas com o status true podem fazer empréstimo

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }
  getLoan = (valueLoan: number) => {
    this.deposit(valueLoan);
  };
}
