let randomNumber = parseInt(Math.random() * 100 + 1);
let userInput = document.querySelector('#guessField');
let submit = document.querySelector('#submit');
let guessSlot = document.querySelector('.previousGuesses');
let remaining = document.querySelector('.remainGuesses');
let lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');
let p = document.createElement('p');


let prevGuessArr = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        let guess = parseInt(userInput.value);
        console.log(guess)
        validateGuess(guess);
    });
}

function validateGuess(guess){
// check  1 to 100 valid or not
    if (isNaN(guess)){
        alert('Please Enter a Valid Number')
    } else if (guess < 1 ){
        alert('Please Enter a Number more than 1') 
    } else if (guess > 100 ){
        alert('Please Enter a Number less than 100') 
    }
    else{
        prevGuessArr.push(guess)  
        if(numGuess === 11 ){
            displayGuess(guess)
            displayMessage(`GameOVer 😂, Random Number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('Congratulation🎉, You guess the Right Number')
    } else if (guess < randomNumber) {
            displayMessage(`Random Number is geater`)
        } else if (guess > randomNumber) {
            displayMessage(`Random Number is smaller`)
        }
    }
    
function displayGuess(guess){
    userInput.value = '';
    if (isNaN(guess)) {
        //
    } else {
        guessSlot.innerHTML += `${guess} , `;
        numGuess++;
        remaining.innerHTML = `${11 - numGuess}`
    }
}

function displayMessage(message){
 lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<span id="newGame">Start New Game</span>`
    p.style.cursor = 'pointer'
    p.style.display = 'inline'
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    let newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt((Math.random() * 100) + 1);
        // prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        displayMessage('')

        playGame = true
})
}
