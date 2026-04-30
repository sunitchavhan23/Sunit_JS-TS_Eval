function transactionStatus(status) {
    return new Promise((resolve, reject) => {
        if (status) {
            resolve("Transaction completed")
        } else {
            reject("Transaction Failed")
        }
    });
}
transactionStatus(false).then((result) => {
    console.log(result);
    
}).catch((err) => {
    console.log(err);
    
});