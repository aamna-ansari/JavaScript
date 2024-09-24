console.log("AaMna");//test




// start

const accountId = 785603;
/* accountId = 775677; will throw error cz  value of constant can not be changed*/
// console.log(accountId);

let accountEmail = "aamna@google.com"; //Block scoped (recommended)
accountEmail = "aamna@fb.com";

var accountPassword = "717010"; //Global scoped (NOT recommended)
accountPassword = "414141";

/* accountCity  = Islamabad; not allowed to do (assigning value without declaring is not allowed)*/

console.table([accountEmail, accountId, accountPassword]);


// Prefer to use "let" and prefer NOT to use "var".