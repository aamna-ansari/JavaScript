//  Create Promise 


// let promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task is Complete');
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise Created");
    
// })

// ----------------  WITHOUT VARIABLE -------------

// new Promise(function(resolve, reject){
//     console.log("Its Second method of promise");
//     resolve()
// }).then(function(){
//     console.log("Created")
// })

//  -------------- PROMISE THREE ---------------
let threePromise = new Promise(function(resolve,reject){
setTimeout(function(){
    resolve({username: "AaMna" , email : "practicejs@gmail.com"})
},1000)

})

threePromise.then(function(user){
    console.log(user);
    
})