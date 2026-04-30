class Branch{
    branchName:string;
    branchCode:number;
    location:string;

    constructor(branchName:string,branchCode:number,location:string) {
        this.branchName=branchName;
        this.branchCode=branchCode;
        this.location=location;
    }

    displayBranchInfo():void{
        console.log("Branch Name: "+this.branchName);
        console.log("Branch Code: "+this.branchCode);
        console.log("Branch Location: "+this.location);
        
    }
}

const branch=new Branch("BOB",935946,"Mumbai");
branch.displayBranchInfo();