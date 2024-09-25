// function 
function myfunction(){
    console.log('A')
    console.log('a')
    console.log('M')
    console.log('n')
    console.log('a')
}

// myfunction()  // Call site

// function addTwo(num1, num2) {
//     let result = (num1 + num2);
//     return result;
// }

// let result = addTwo(15, 15); //Expresiion Function 
// console.log("Result:",result);
// console.log(result);


function loginUserMessage(userName = "") {
    if (userName===undefined) // for undefined checking 
    if (!userName)

     {
        console.log("Please Enter a username");
        return
    }

    return `Hey${userName}, Welcome Back`
}


console.log(loginUserMessage("AaMna")); // output: Hey Asad, Welcome Back
console.log(loginUserMessage());  //output: Hey , Welcome Back