

let hanldleCreate = ()=> {
    let user = document.getElementById('inputField').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user)    //[].push(inputfield data)

    // localStorage.setItem("user", user); //return Array 
    
    
    localStorage.setItem("users", JSON.stringify(users)); //return string

}
let handleRead = ()=>{

    console.log(users);
    

}


let handleDelete = ()=>{
    

}
