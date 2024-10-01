// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); //Value is not changed coz it is constant but we can change its value hehe. Let's see.


// let Descripter = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(Descripter);

let user = {
    firstName : 'AaMna',
    lastName: 'AnSari',
    email : 'aamna@gmail.com',
    password : '1234',
    getVerification : function(){
        console.log("Please Verify yourself📍")
    }

}

// console.log(Object.getOwnPropertyDescriptor(user, 'firstName'));
// Object.defineProperty(user , 'firstName',{
//     writable: false,
//     enumerable: false
// } )

// console.log(Object.getOwnPropertyDescriptor(user, 'firstName'));


for (let [key, value] of Object.entries(user)){

    // let's add a check that if value is not a type of function then iterate, otherwise do not.
    if (typeof value !== 'function')
        console.log(`${key}: ${value}`);
    
}



