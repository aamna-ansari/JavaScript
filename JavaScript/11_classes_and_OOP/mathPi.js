// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); //Value is not changed coz it is constant but we can change its value hehe. Let's see.


let Descripter = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(Descripter);

let user = {
    firstName : 'AaMna',
    lastName: 'AnSari',
    email : 'aamna@gmail.com',
    password : '1234'

}

console.log(user);
