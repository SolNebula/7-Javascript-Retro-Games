//creating constants for the three buttons
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

//global save for user choice = accessible from anywhere
let userChoice 
let computerChoice
let result

//Selects button elements. If more buttons are needed, assign classnames to buttons
const possibleChoices = document.querySelectorAll('button')


//Grab the buttons, to listen out for clicks
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id //get the target id and save it as the user choice
    userChoiceDisplay.innerHTML = userChoice

    //now we generate computer choice & result
    generateComputerChoice()
    getResult()
}))

//Get computer choice
function generateComputerChoice() {
    //get a random number, round it down -> multiply it by the length of our possible choices
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1 //or use 3 because that's the number of options
    
    if (randomNumber === 1) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 2) {
        computerChoice = 'rock'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice //displays the computer choice
}

//Get Result
function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'yay! you won!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'aww shucks, you lost!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'yay! you won!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'aww shucks, you lost!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'yay! you won!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'aww shucks, you lost!'
    }
    resultDisplay.innerHTML = result //displays the result
}

