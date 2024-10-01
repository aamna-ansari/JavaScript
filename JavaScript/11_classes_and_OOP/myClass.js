// ES6 is current version of Javascript


// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     capitalizeUser() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// let AaMna = new User("AaMna AnSari", "aamna@h.com", "abc123?",)
// console.log(AaMna);
// console.log(AaMna.encryptPassword());
// console.log(AaMna.capitalizeUser());



// ----PRACTICE ----------

class StaffInfo{
    constructor(name,id, qulification, yearsOfEx, salary){
        this.name = name;
        this.id = id;
         this.qulification = qulification;
         this.yearsOfEx = yearsOfEx;
         this.salary = salary
    }

    nameFormat(){
        return `${this.name.toUpperCase()}`
    }

    bouns(){
        return `You get bonuns on your ${this.salary * 4}`
    }
}

let user = new  StaffInfo('AaMna','2024', 'BSCS', '8', '20000')
console.log(user);
console.log(user.bouns());


