

let hanldleCreate = ()=> {
    let user = document.getElementById('inputField').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];  // JSON.parse mean change into oginal form like array to string => now String to array

    users.push(user)    //[].push(inputfield data)

    // localStorage.setItem("user", user); //return Array 
    
    
    localStorage.setItem("users", JSON.stringify(users)); //return string
    document.getElementById('inputField').value = '';

} 
let handleRead = () => {
    let dataRead = document.getElementById('dataRead');
    let itemCount = document.getElementById('itemCount');

    const users = JSON.parse(localStorage.getItem('users')) || [];
    dataRead.innerHTML = users.join(', ');
    itemCount.innerHTML = users.length;
};



let handleDelete = ()=>{
    localStorage.removeItem('users');
    document.getElementById('dataRead').innerHTML = '👽';
    document.getElementById('itemCount').innerHTML = '👽';
    
}
