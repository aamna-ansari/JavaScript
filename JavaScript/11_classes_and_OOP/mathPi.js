// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); //Value is not changed coz it is constant but we can change its value hehe. Let's see.


let Descripter = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(Descripter);
