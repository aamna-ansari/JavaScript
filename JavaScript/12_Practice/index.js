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

// Arrow functions 

let arrowFunction = (name, age, email) => {
    return (`Hi, I'm ${name}. My age is ${age} and My E-mail address is${email}`)
}

console.log(arrowFunction('AaMna','25', 'theaamnansari@gmail.com '));

// IIFE (immediately  invoking Function Expression)

(function myFunction1(num){
    return num * 2
})

console.log(myFunction(5));


//  IIFE with Parameters
const result = (function(a, b) {
    return a + b;
  })(5, 10);
  
  console.log(result);

//   Callback Function

function greet(name) {
    return ('Hello, ' + name + '!');
  }
  
  function processUserInput(callback) {
    let name = 'Alice'; 
    return callback(name); 
  }
  
  console.log(processUserInput(greet));


//   Array 

let arr1 = [1,2, 3, 4 ,5]
console.log(arr1);

let a = new Array(1, 2, 3, 4 ,5)
console.log(a);

console.log(a instanceof Array);
console.log(arr1 === Object(Array));