class Account{
    accountId:number;
    accountHolderName:string;
    balance:number;

    constructor(accountId:number,accountHolderName:string,balance:number) {
        this.accountId=accountId;
        this.accountHolderName=accountHolderName;
        this.balance=balance;
    }

    displayAccInfo():void{
        console.log("Account Id: "+this.accountId);
        console.log("Account Holder Name: "+this.accountHolderName);
        console.log("Balance: "+this.balance);
        
        
    }
}

const acc=new Account(123,"Sunit",30000);
acc.displayAccInfo();