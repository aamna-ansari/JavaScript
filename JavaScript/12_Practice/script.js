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


//  event practice 


// syntax event
// event target .addEventListner (eventype, function)

// create a function 

function clickMe(){
    let myPara = document.getElementById ('myPara');
    myPara.textContent = 'AaMna AnSari'
}

let myPara = document.getElementById('myPara')

myPara.addEventListener("click", clickMe)




