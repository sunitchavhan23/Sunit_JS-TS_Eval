abstract class BankEmployee {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract getSalary(): number;
    abstract getRole(): void;
}

class Teller extends BankEmployee {
    constructor(name: string) {
        super(name);
    }

    getSalary(): number {
        return 20000;
    }

    getRole(): void {
        console.log("Role: Teller");
    }
}

class Manager extends BankEmployee {
    constructor(name: string) {
        super(name);
    }

    getSalary(): number {
        return 40000;
    }

    getRole(): void {
        console.log("Role: Manager");
    }
}


const t1 = new Teller("Sunit");
const m1 = new Manager("Neet");

t1.getRole();
console.log("Salary:", t1.getSalary());

console.log("----------------------");

m1.getRole();
console.log("Salary:", m1.getSalary());