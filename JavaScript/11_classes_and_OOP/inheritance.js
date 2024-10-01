class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`This course addded by ${this.username}`);
        
    }
}

let printMe = new Teacher('AaMna', 'aamna$gmail.com', '123456')
console.log(printMe);
console.log(printMe.email);
console.log(User instanceof Teacher);
