function meth1(kyc) {
    if (!kyc || kyc.toLowerCase() !== "yes") {
        throw "Transaction failed due to server issue";   
    } else {
        return "Transaction done";
    }
}

function meth2(kyc) {
    let status = meth1(kyc);   
    console.log(kyc);
    console.log("Withdraw done");
}

function meth3(kyc) {
    try {
        meth2(kyc);            
    } catch (error) {
        console.log("Error: " + error);
    }
}
   
meth3("no");   

