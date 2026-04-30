const customers = [
    { name: "sunit", balance: 500000 },
    { name: "Jit", balance: 200000 }
];
console.log("Account with highest balance: ");

function findHighestAccount() {
    return customers.reduce((max, curr) => {
        return curr.balance > max.balance ? curr : max;
    });
}

console.log(findHighestAccount());