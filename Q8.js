"use strict";
class CustomerSupport {
    name;
    employeeId;
    department;
    experience;
    constructor(name, employeeId, department, experience) {
        this.name = name;
        this.employeeId = employeeId;
        this.department = department;
        this.experience = experience;
    }
    displayInfo() {
        console.log("Customer Name:" + this.name);
        console.log("Employee Id:" + this.employeeId);
        console.log("Department:" + this.department);
        console.log("Year of Experience:" + this.experience);
    }
}
const cs = new CustomerSupport("Sunit", 23, "Accounts", 6);
cs.displayInfo();
