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


// PRomise Four

let fourPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({user: 'AaMna', password: '123456'})
        }
        else{
            reject('ERROR')
        }
    },1000)

})

// fourPromise().then().catch()


// let promise5 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true
//         error = false
//         if (!error) {
//             resolve(`Resolve Executed`)
//         } else {
//             reject(`An error occured`)
//         }
//     }, 2000)
// })

// // consuming or using promises with .then and .catch
// promise5
// .then((message) => (console.log(message)))
// .catch((error) => (console.log(error)));



// let promise6 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//      let error = true
//      error = false
//         if (error == false) {
//             resolve(`Resolve Executed`)
//         } else {
//             reject(`Sorry, Something went wrong`)
//         }
//     }, 1000)
// })


// // consuming or using promises with async await

// async function consumePromise6() {
//     try {
//         let response = await promise6
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromise6()





// let promiseN = new Promise(function (resolve, reject) {
//     let myName = "AaMna"

//     if (myName === "AaMna") {
//         resolve(`Your Name is AaMna`)
//     } else {
//         reject(`Error, Your Name is not AaMna`)
//     }
// })

// promiseN
// .then(function (message) {
//     console.log(message);
// })
// .catch(function(errMsg){
//     console.log(errMsg);
// })


async function getMyNameAndLocation(params) {
    try {
        let response = await fetch('https://api.github.com/users/aamna-ansari');
        // throw new Error("This is a deliberate error for testing purposes");
        let data = await response.json()
        console.log(`My Name on Github is ${data.name} and My location is ${data.location}`);
    } catch (error) {
        console.log(`"Oops! Something went wrong, and our team of highly trained monkeys is on it`);
    }
}

// getMyNameAndLocation()


//To do same task with .then and .catch (it is easy and recommended)


fetch('https://api.github.com/users/hiteshchoudhary')
    .then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(`My JavaScript Teacher Is ${data.name} and his location is ${data.location}.`);
    })
    .catch(function (error) {
        console.log(`Error: Something went wrong. We blame it on the aliens`);
    })
    .finally() //optional

