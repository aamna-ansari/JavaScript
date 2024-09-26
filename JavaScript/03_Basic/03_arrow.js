let user = {
    username: "AaMna",
    email: "aamna@gmail.com",

    welcomeMessage: function () {
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = 'AnSari'
// user.welcomeMessage()


// arrow function 
let myFunction = () => {
    let username = "AaMna"
    console.log(this);
}

// myFunction()

