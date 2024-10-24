// Array
// map()

let numbers = [1,2,3,4]
let numbers2 = numbers.map(num => num * 2); // map() take a callback
console.log(numbers2)


// filter()

let nums = [1,2,3,4,5,6,7,8];
let num2 = nums.filter(num => num % 2 !== 0);
console.log(num2);

// reduce()
let number = [1,2,3,4,5]
let number3 = number.reduce((accumulator, current) => accumulator + current, 0);
console.log(number3);



// Defining functions

function myFunction(num){
    return num * 2
}
// call function 

console.log(myFunction(6))

// Function Expression

let nyfunction = function (name){
    return (`Hi ${name} i'm Expression Fuction`);
    
}
console.log(nyfunction('AaMna'));



