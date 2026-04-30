

class InvalidAccountException extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidAccountException";
    }
}

function checkAccount(accountNumber) {
    try {
        if (!accountNumber || accountNumber.length < 5) {
            throw new InvalidAccountException("Invalid Account Number!");
        }

        console.log("Account is valid");

    } catch (error) {
        console.log(error.name + ": " + error.message);
    }
}


checkAccount("12345");   
checkAccount("12");      