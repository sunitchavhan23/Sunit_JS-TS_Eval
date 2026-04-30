interface TransactionService {
    processTransaction(): void;
}

class Teller2 implements TransactionService {
    name: string;
    isProcess: boolean = false;

    constructor(name: string) {
        this.name = name;
    }

    processTransaction(): void {
        this.isProcess = true;
        console.log("Payment processed for: " + this.name);
    }
}

const cl = new Teller2("Neet");
cl.processTransaction();