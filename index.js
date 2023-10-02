
function getRandomInt(max){
    return Math.floor(Math.random() * max);
};

function getPlayerChoice(){
    let tmp = prompt("Please enter Rock, Paper or Scissors");
    return tmp;
};

function getComputerChoice (){
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[getRandomInt(3)];
};

function playRound(playerSelection, computerSelection){
    let winningConditions ={
        ROCK: ["Scissors"],
        PAPER: ["Rock"],
        SCISSORS: ["Paper"]
    };
    if (playerSelection.toUpperCase() == computerSelection.toUpperCase()){
        return 'Even !';
    }
    else if (winningConditions[playerSelection.toUpperCase()].includes(computerSelection)){
        return `You win ! ${playerSelection} beats ${computerSelection} !`
    }
    else {
        return `You lose ! ${computerSelection} beats ${playerSelection} !`
    }
};

function game(){
    let cmp = 0;
    let playerScore = 0;
    let computerScore = 0;
    let result;
    let playerSelection, computerSelection;
    while (cmp < 5){
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        
        if (result[4] == 'l'){
            computerScore += 1;
            cmp += 1;
        }
        else if (result[4] == 'w'){
            playerScore += 1;
            cmp += 1;
        }
        else{
            cmp += 1;
        }
        console.log(`${result} playerScore : ${playerScore} computerScore : ${computerScore}`);
    }
   if(playerScore > computerScore){
    return `You win - ${playerScore} to ${computerScore}`;
   }
   else if(playerScore < computerScore){
    return `You lose - ${playerScore} to ${computerScore}`;
   }
   else{
    return `Even - ${playerScore} to ${computerScore}`;
   }
};

res = game();
console.log(res);
