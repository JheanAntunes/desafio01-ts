import { CompanyAccount } from "./class/CompanyAccount";
import { DioAccountVip } from "./class/DioAccountVip";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount = new PeopleAccount(1, "jhean", 10);
console.log(peopleAccount.getName());
console.log(peopleAccount.doc_id);

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.deposit(100);
console.log("deposit: ", companyAccount.getBalance()); // output balance 100
companyAccount.withdraw(80);
console.log("withdraw: ", companyAccount.getBalance()); // output balance 20
companyAccount.getLoan(180);
console.log("emprestimo: ", companyAccount.getBalance()); // output balance 200

const peopleAccountVip = new DioAccountVip("jheanVip", 51);
peopleAccountVip.deposit(100); // output 110
