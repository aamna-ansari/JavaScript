// ES6 is current version of Javascript


class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    capitalizeUser() {
        return `${this.username.toUpperCase()}`
    }
}

let AaMna = new User("AaMna AnSari", "aamna@h.com", "abc123?",)
console.log(AaMna);
console.log(AaMna.encryptPassword());
console.log(AaMna.capitalizeUser());