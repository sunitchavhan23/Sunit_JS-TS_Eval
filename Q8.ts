class CustomerSupport{
    name:string;
    employeeId:number;
    department:string;
    experience:number;

    constructor(name:string,employeeId:number,department:string,experience:number) {
        this.name=name;
        this.employeeId=employeeId;
        this.department=department;
        this.experience=experience;
    }

    displayInfo():void{
        console.log("Customer Name:"+this.name);
        console.log("Employee Id:"+this.employeeId);
        console.log("Department:"+this.department);
        console.log("Year of Experience:"+this.experience);
        
        
    }
}

const cs=new CustomerSupport("Sunit",23,"Accounts",6);
cs.displayInfo();