function withdraw(balance, amount) {
    if (amount > balance) {
        throw "Withdrawal amount exceeds account balance!";
    }

    console.log("Withdrawal successful. Remaining balance: " + (balance - amount));
}


try {
    withdraw(5000, 2000);   
    withdraw(3000, 5000);   
} catch (error) {
    console.log("Error: " + error);
}