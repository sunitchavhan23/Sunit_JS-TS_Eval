const accounts=[
    {id:1,name:"Sunit",balance:4500},
    {id:10,name:"Nit",balance:3000},
    {id:11,name:"Hitt",balance:2000},
]


function filterHighValueAccounts(accounts,limit) {
    return accounts.filter(acc=> acc.balance > limit);
}
console.log(filterHighValueAccounts(accounts,3000));
