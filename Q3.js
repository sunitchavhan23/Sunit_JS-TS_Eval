"use strict";
class Account {
    accountId;
    accountHolderName;
    balance;
    constructor(accountId, accountHolderName, balance) {
        this.accountId = accountId;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }
    displayAccInfo() {
        console.log("Account Id: " + this.accountId);
        console.log("Account Holder Name: " + this.accountHolderName);
        console.log("Balance: " + this.balance);
    }
}
const acc = new Account(123, "Sunit", 30000);
acc.displayAccInfo();
