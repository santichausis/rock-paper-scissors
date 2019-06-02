let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("player1");
const computerScore_span = document.getElementById("player2");
const scoreBoard_div = document.querySelector(".score");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r","p","s"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices [randomNumber]
}

function convertToWord(letter) {
    if (letter === 'r') return 'Rock'; 
    if (letter === 'p') return 'Paper'; 
    return 'Scissor'; 
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win.`;
    document.getElementById(userChoice).classList.add('glow-green');
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('glow-green');  
    }, 1000);
}

function lose(computerChoice, userChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lose...`;
    document.getElementById(computerChoice).classList.add('glow-red');
    setTimeout(() => {
        document.getElementById(computerChoice).classList.remove('glow-red');  
    }, 1000);
}

function draw(userChoice, computerChoice) {
    result_div.innerHTML = `${convertToWord(userChoice)} don't beat ${convertToWord(computerChoice)}. It's a Draw.`;
    document.getElementById(userChoice).classList.add('glow-draw');
    document.getElementById(computerChoice).classList.add('glow-draw');
    setTimeout(() => {
        document.getElementById(computerChoice).classList.remove('glow-draw');  
        document.getElementById(userChoice).classList.remove('glow-draw');  
    }, 1000);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(computerChoice, userChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    
    rock_div.addEventListener('click',function() {
        game("r");
    });

    paper_div.addEventListener('click',function() {
        game("p");
    });

    scissor_div.addEventListener('click',function() {
        game("s");
    });
}
main();