const accountId = 292929
let accountEmail = "ashish2003@gmail.com"
var accountPassword = "1234"
accountCity = "Ranchi"
let accountState;

// accountId = 2 // not allowed

accountEmail = "ashishraj2003@gmail.com"
accountPassword = "7894"
accountCity = "Latehar"

/*
prefer not use var
because of issue in block scope and functional scope
*/


console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity, accountState])