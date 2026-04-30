const increaseBalance=function(account){
    return account.map(balance=>balance+100);
}

let balance=[1000,2000,3000];
let updated=increaseBalance(balance);
console.log("Original Balance: "+ balance);

console.log("Updated Balance: "+updated);
