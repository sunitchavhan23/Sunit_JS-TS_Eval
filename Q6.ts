function getAccountInfo<T>(info:T):T {
    return info;

}

const userName=getAccountInfo<string>("SUNIT");
const userID1=getAccountInfo<number>(25);
const userBalance=getAccountInfo<number>(56000);

console.log(userName);
console.log(userID1);
console.log(userBalance);


