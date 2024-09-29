//  Create Promise 


let promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is Complete');
        
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Created");
    
})