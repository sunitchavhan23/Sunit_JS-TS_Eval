// MAP Filter REDUCE

const accounts = [
    { name:"Sunit",balance: 5000 },
    { name:"Neet",balance: 10000 }
];

// map 
const addInterest = accounts.map((acc) => {
    return acc.balance * 0.5;
});
console.log(addInterest);

// filter 
const highBalance = accounts.filter((acc) => {
    return acc.balance > 5000;
});
console.log(highBalance);

// reduce
const totalDeposit = accounts.reduce((total, acc) => {
    return total + acc.balance;
}, 0);

console.log(totalDeposit);