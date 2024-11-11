

let hanldleCreate = ()=> {
    let user = document.getElementById('inputField').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];  // JSON.parse mean change into oginal form like array to string => now String to array

    users.push(user)    //[].push(inputfield data)

    // localStorage.setItem("user", user); //return Array 
    
    
    localStorage.setItem("users", JSON.stringify(users)); //return string

}
let handleRead = ()=>{
    let dataRead = document.getElementById('dataRead')
    let readData = JSON.parse(localStorage.getItem('users')) || [];
    dataRead.innerHTML = readData.join(', '); 

    let itemCount = document.getElementById('itemCount');
    let countItem = localStorage.length
    itemCount.innerHTML = countItem

}


let handleDelete = ()=>{
    localStorage.removeItem('users')
    

}
