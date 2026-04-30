"use strict";
class Teller2 {
    name;
    isProcess = false;
    constructor(name) {
        this.name = name;
    }
    processTransaction() {
        this.isProcess = true;
        console.log("Payment processed for: " + this.name);
    }
}
const cl = new Teller2("Neet");
cl.processTransaction();
