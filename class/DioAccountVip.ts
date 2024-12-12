import { DioAccount } from "./DioAccount";

// [X] Criar um novo tipo de conta a partir da DioAccount
// Esta conta não deve receber novos atributos
// Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final)
// [X] Todos os atributos de qualquer conta devem ser privados

// [X] Os atributos name e accountNumber não podem ser alterados internamente ou externamente

// [X] Criar instancias para cada um dos tipos de conta no app.ts e executar os métodos possíveis.

export class DioAccountVip extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }
  // polimorfismo
  deposit(valueDeposit: number): void {
    const bonus = 10;
    super.deposit(valueDeposit + bonus);
    console.log("balance vip", this.getBalance());
  }
}
