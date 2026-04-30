function insufficientBalance(amount) {
    try {
        
        if (amount<500) {
            throw "Insufficient Balance";
        }

        console.log("Withdraw Successful!");

    } catch (error) {
        console.log("Error: " + error);
    }finally{
        console.log("Transaction Completed");
        
    }
}
insufficientBalance(4500);

  
     