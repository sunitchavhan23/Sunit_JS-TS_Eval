"use strict";
class BankEmployee {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Teller extends BankEmployee {
    constructor(name) {
        super(name);
    }
    getSalary() {
        return 20000;
    }
    getRole() {
        console.log("Role: Teller");
    }
}
class Manager extends BankEmployee {
    constructor(name) {
        super(name);
    }
    getSalary() {
        return 40000;
    }
    getRole() {
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
