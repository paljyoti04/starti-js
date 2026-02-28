const accountId = 1234
let accountEmail = "jyoti@gmail.com"
var accountPassword = "papakipari"
accountCity = "Noida"
let accountState;

/*
prefere not to  use var because 
is issue in block scope and functional scope
*/
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

