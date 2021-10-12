'use strict';

const message = document.querySelector('.message');
const yourScore = document.querySelector('.u-score');
const compScore = document.querySelector('.c-score');

const compOption = document.querySelectorAll('.c-options');
const yourOption = document.querySelectorAll('.u-options')
const againBtn = document.querySelector('.again');

const instructions = document.querySelector('.instructions');
const showInstructions = document.querySelector('.instruction');

let computerScore = 0;
let myScore = 0;

for (let i = 0; i < yourOption.length; i++) {

    yourOption[i].addEventListener('click', function() {

        const randomNum = Math.ceil(Math.random() * 3);
        console.log(randomNum);

        let compOption;

        const userOption = yourOption[i].value;
        console.log('user', userOption);

        if (randomNum === 1) {
            compOption = 'scissor';
        }
        else if(randomNum === 2) {
            compOption = 'paper';
        }
        else {
            compOption = 'rock';
        }

        console.log('comp', compOption);

        if (userOption === 'scissor' && compOption === 'paper') {
            message.textContent = 'You Won!';
            myScore++;
            yourScore.textContent = myScore;
        }
        else if (userOption === 'paper' && compOption === 'rock') {
            message.textContent = 'You Won!';
            myScore++;
            yourScore.textContent = myScore;
        }
        else if (userOption === 'rock' && compOption === 'scissor') {
            message.textContent = 'You Won!';
            myScore++;
            yourScore.textContent = myScore;
        }
        else if (userOption === compOption) {
            message.textContent = 'draw';
        }
        else {
            message.textContent = 'You Loose!';
            computerScore++;
            compScore.textContent = computerScore;
        }
    });

    for (let i = 0; i < compOption.length; i++) {
        compOption[i].disabled = true;
    }

}

againBtn.addEventListener('click', function() {
    computerScore = 0;
    myScore = 0;

    compScore.textContent = computerScore;
    yourScore.textContent = myScore;

    message.textContent = 'Start....';
    instructions.classList.add('hidden');
});

showInstructions.addEventListener('click', function() {
    instructions.classList.remove('hidden');
    instructions.style.zIndex = '1';
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        instructions.classList.add('hidden')
    }
});
