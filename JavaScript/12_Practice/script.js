//  Statement
y = 10;

// expression 
 5 + 1;


//  prototype 

// create a function
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
    return('Welocome to the prototype'); 
}

let person1 = new Person('AaMna', '24')

console.log(person1.greet());
 person1.greet();
