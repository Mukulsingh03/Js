const accountId  = 144553
let accountEmail = "mukul@google.com"
var accountPassword = "12345"
accountCity = "Faridabad"

// accountId = 2

accountEmail = "hc@hc.com"
acccountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in nlock scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity])

