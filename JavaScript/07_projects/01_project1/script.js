let buttons = document.querySelectorAll('.button')
let body = document.querySelector('body')

buttons.forEach((button) => {
        button.addEventListener('click', function (e) {
            if (e.target.id === "gray") {
                body.style.backgroundColor = "grey"
            } 
            else if (e.target.id === "white") {
                body.style.backgroundColor = "white"
            }
            else if (e.target.id === "blue") {
                body.style.backgroundColor = "blue"
            }
            else if (e.target.id === "yellow") {
                body.style.backgroundColor = "yellow"
            } else {
                body.style.backgroundColor = "orange"
            }

            // // Switch Case

            // switch (e.target.id){
            //     case 'gray':
            //         body.style.backgroundColor = e.target.id
            //         break;

            //     case 'white':
            //         body.style.backgroundColor = e.target.id
            //         break;

            //     case 'blue':
            //         body.style.backgroundColor = e.target.id
            //         break;

            //     case 'yellow':
            //         body.style.backgroundColor = e.target.id
            //         break;
            // }
    
        })
    })