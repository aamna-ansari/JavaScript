function setUserName(username) {
    // complex DB Calls
    this.username = username;
}

function createUser(username, email, password) {
    setUserName.call(this, username)
    this.email = email;
    this.password = password;
}


let asad = new createUser("AaMna", "aamna@gmail.com", "securePassword");

// console.log(typeof aamna);
// console.log(aamna);


//QUICK PRACTICE

function myRAM(RAM) {
    this.RAM = RAM;
}

function laptopConstructor(RAM, SSD, batteryLife) {
    myRAM.call(this, RAM)
    this.SSD = SSD
    this.batteryLife = batteryLife
}

let myLaptop = new laptopConstructor("4GB", "128GB", "6 Hours");

// console.log(myLaptop);
