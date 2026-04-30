function balance() {
    return new Promise((resolve, reject) => {
        const bal = 500; 
        if (bal > 0) {
            resolve(bal);
        } else {
            reject("No balance");
        }
    });
}

async function showBalance() {
    try {
        const result = await balance();
        console.log("Balance: " + result);
    } catch (err) {
        console.log(err);
    }
}

showBalance();