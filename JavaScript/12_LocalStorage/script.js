

let hanldleCreate = ()=> {
    let user = document.getElementById('inputField').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push('user',user)

    // localStorage.setItem("user", user); //return string
    
    
    localStorage.setItem("users", JSON.stringify(users)); //return Array 

}
let handleRead = ()=>{

    console.log(users);
    

}


let handleDelete = ()=>{
    

}
