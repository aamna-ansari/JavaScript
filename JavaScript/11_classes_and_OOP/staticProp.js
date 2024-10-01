// static Properties

class User{
    constructor(username){
    this.username = username
    }


    static createId(){
        return '1234'
    }
}

let user1 = new User('AaMna')
console.log(user1);
console.log(user1.username);
console.log(user1.createId()); // asad.createId() // this object does not have access to `createId` becasue we have used `static` keyword before `createId` method.
