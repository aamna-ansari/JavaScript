// ES6 is current version of Javascript

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return`${this.password}abc`
    }

    changeUser(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User ('Chai', 'milk@gmail.com', '123');
console.log(chai.encryptPassword());
console.log(chai.changeUser());
