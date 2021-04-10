let playerWin = 0;
let computerWin = 0;
let roundsBox = document.getElementById("numberRounds")

let welcome = "Choose Your WEAPON!";
let lost = "YOU LOST THIS ROUND!";
let won = "YOU WON THIS ROUND!";
let tie = "YOU TIED THIS ROUND!"
let wonGame = "YOU WON THE GAME!";

let startWidth = "190px";
let wonWidth = "155px";

let timer;
let speed = 110;

let computerNum;
let computerChoice;

//SCORE BOARD AND ROUNDS
userScore = document.querySelector("#playerWin p");
userScore.textContent = playerWin;

computerScore = document.querySelector("#computerWin p");
computerScore.textContent = computerWin;

roundsBox.value = 5;

/*********************
 ****HOVER EFFECTS****
 ********************/
let rockAlert = "Rock";
let paperAlert = "Paper";
let scissorsAlert = "Scissor's";
let choiceClearInner = "";

let choiceClear = document.getElementById("choiceWrapper");
let playerRockAlert = document.getElementById("playerRock");
let playerPaperAlert = document.getElementById("playerPaper");
let playerScissorsAlert = document.getElementById("playerScissors");

//MOUSE OVER FOR ROCK SELECTION
playerRockAlert.addEventListener("mouseover", function (){document.querySelector("#choiceAlert").innerHTML = rockAlert;});
playerRockAlert.addEventListener("mouseout", function (){document.querySelector("#choiceAlert").innerHTML = choiceClearInner;});

//MOUSE OVER FOR PAPER SELECTION
playerPaperAlert.addEventListener("mouseover", function (){document.querySelector("#choiceAlert").innerHTML = paperAlert;});
playerPaperAlert.addEventListener("mouseout", function (){document.querySelector("#choiceAlert").innerHTML = choiceClearInner;});

//MOUSE OVER FOR SCISSORS SELECTION
playerScissorsAlert.addEventListener("mouseover", function (){document.querySelector("#choiceAlert").innerHTML = scissorsAlert;});
playerScissorsAlert.addEventListener("mouseout", function (){document.querySelector("#choiceAlert").innerHTML = choiceClearInner;});


//PASS VARIABLE'S WONGAME, LOST, WON, AND WELCOME
//INTO CLEARWRITER(ACTION, WIDTH) TO PRODUCE THE ANIMATION
//WIDTH IS DECLARED WITH THE STARTWIDTH AND THE WONWIDTH VARIABLES

let w = 0;
function clearWriter(gameStatus, width){
    clearTimeout(timer);
    document.getElementById("welcome").innerHTML = "";
    document.getElementById("welcome").style.width = width;
    w = 0;
    return animation(gameStatus);
}

function animation(gameStatus){
    let lineRepeat = gameStatus;
    function repeater(){
        if(w < lineRepeat.length){
            document.getElementById("welcome").innerHTML += lineRepeat.charAt(w);
            w++;
            timer = setTimeout(repeater, speed);
        }
    }
    return repeater()
}
/**************************
 ****Computer Selection****
 *************************/

 //      Rock = 0
//     Paper = 1
// Scissor's = 2

function computerSelection(){
    computerNum = Math.floor(Math.random(3) * 3);

    if(computerNum === 0){
        computerChoice = 0;
        return computerChoice;

    }else if(computerNum === 1){
        computerChoice = 1;
        return computerChoice;

    }else if(computerNum === 2){
        computerChoice = 2;
        return computerChoice;
    }
}

/**************************
 *****PLAYER Selection*****
 *************************/

 //      Rock = 0
//     Paper = 1
// Scissor's = 2
let rock = 0;
let paper = 1;
let scissors = 2;

//PLAYER SELECTION

// ROCK SELECTOR
document.getElementById("playerRock").addEventListener("click", computerSelection);
document.getElementById("playerRock").addEventListener("click", function (){clearWriter(lost, startWidth)});
document.getElementById("playerRock").addEventListener("click", function (){roundWinner(rock)});

//PAPER SELECTOR
document.getElementById("playerPaper").addEventListener("click", computerSelection);
document.getElementById("playerPaper").addEventListener("click", function (){clearWriter(lost, startWidth)});
document.getElementById("playerPaper").addEventListener("click", function (){roundWinner(rock)});

//SCISSORS SELECTOR
document.getElementById("playerScissors").addEventListener("click", computerSelection);
document.getElementById("playerScissors").addEventListener("click", function (){clearWriter(lost, startWidth)});
document.getElementById("playerScissors").addEventListener("click", function (){roundWinner(rock)});


//DETERMINE ROUND WINNER
function roundWinner(playerChoice){
    if(playerChoice === computerChoice){
        return clearWriter(tie, startWidth);
    }else if(playerChoice === 0 && computerChoice === 1){   //rock loses to paper
        //computerWin = ++computerWin;
        computerScore.textContent = ++computerWin;
        return clearWriter(lost, startWidth);

    }else if(playerChoice === 0 && computerChoice === 2){   //rock beats scissors
        userScore.textContent = ++playerWin;
        return clearWriter(won, startWidth);

    }else if(playerChoice === 1 && computerChoice === 0){   //paper beats rock
        //playerWin = ++playerWin;
        userScore.textContent = ++playerWin;
        return clearWriter(won, startWidth);

    }else if(playerChoice === 1 && computerChoice === 2){   //paper looses to scissors
        //computerWin = ++computerWin;
        computerScore.textContent = ++computerWin;
        return clearWriter(lost, startWidth);

    }else if(playerChoice === 2 && computerChoice === 0){   //scissors looses to rock
        //computerWin = ++computerWin;
        computerScore.textContent = ++computerWin;
        return clearWriter(lost, startWidth);

    }else if(playerChoice === 2 && computerChoice === 1){   //scissors beats paper
        //playerWin = ++playerWin;
        userScore.textContent = ++playerWin;
        return clearWriter(won, startWidth);
    }
}

clearWriter(welcome, startWidth);