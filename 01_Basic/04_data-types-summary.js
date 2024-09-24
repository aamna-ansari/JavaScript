/* Data Types*/ //they are called by values


//1. Primitive Data Types

/*string*/
/*number*/
/*boolean*/
/*null*/
/*undefined*/
/*symbol*/
/*BigInt*/


//2. Non-Primitive Data Types //reference types, they are retrieved by reference.

/*Arrays*/
/*Objects*/
/*functions*/

/*                    =====================================================================                                                                            */




// symbol

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);// output:false coz symbol is always unique

//bigInt

let bigNumber = 9533555n;

//array
const heros = ["AaMna", "AnSari"];

//object
const UserInfo = { name: "AaMna", age: 24, city: "Faisalabad", IsLoggedIn: false }

//function
const greetings = function () {
    let myName = "AaMna";
    return console.log(`Hello Ms ${myName} `)
}

// greetings(); // prints Hello Ms AaMna

// console.log(typeof (heros));  // output: object





/*   T Y P E S     OF      M E M O R Y    I N      J S   */

// First: Stack memory (for primitive data types)


let myName = "AaMna"

let yourName = myName

yourName = "AnSari"

// console.log(myName);   //output: AaMna
// console.log(yourName); // output: AnSari


// Second: Heap memory (for non-primitive data types)
let user1 = {
    name: "AaMna",
    email: "aamna@gmail.com"
}




let user2 = {
    name: "ansari",
    email: "ansari@gmail.com"
}
user2 = user1;


//    console.log( user2.email); //output: ansari@gmail.com