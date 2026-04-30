"use strict";
class Branch {
    branchName;
    branchCode;
    location;
    constructor(branchName, branchCode, location) {
        this.branchName = branchName;
        this.branchCode = branchCode;
        this.location = location;
    }
    displayBranchInfo() {
        console.log("Branch Name: " + this.branchName);
        console.log("Branch Code: " + this.branchCode);
        console.log("Branch Location: " + this.location);
    }
}
const branch = new Branch("BOB", 935946, "Mumbai");
branch.displayBranchInfo();
