let playerWin = 0;
let computerWin = 0;
let rounds = 5;
let roundTie;

let welcome = "Choose Your WEAPON!";
let lost = "YOU LOST THIS ROUND!";
let won = "YOU WON THIS ROUND!";
let tie = "YOU TIED THIS ROUND!"
let wonGame = "YOU WON THE GAME!";
let lostGame = "YOU LOST THE GAME!";

let startWidth = "190px";
let wonWidth = "155px";

let timer;
let speed = 110;

let computerNum;
let computerChoice;

/*******************************
****play button manipulation****
********************************/

let roundsLabel = document.getElementById("roundsLabel");
roundsLabel.innerHTML = rounds + " ROUNDS LEFT TO PLAY!!"

let startGame = document.getElementById("startGame");
startGame.style.display = "";

let playerChoices = document.getElementById("playerChoices");
playerChoices.style.display = "none";

let playAgain = document.getElementById("playAgain");
playAgain.style.display = "none";

startGame.addEventListener("click", function(){
    startGame.style.display = "none";
    playerChoices.style.display = "";
})

playAgain.addEventListener("click", location.reload.bind(location))

//SCORE BOARD AND ROUNDS
userScore = document.querySelector("#playerWin p");
userScore.textContent = playerWin;

computerScore = document.querySelector("#computerWin p");
computerScore.textContent = computerWin;

//roundsBox.value = 5;

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




/******************************
 *******ANIMATION EFFECT*******
 *****************************/
//PASS VARIABLE'S WONGAME, LOST, WON, AND WELCOME
//INTO CLEARWRITER(ACTION, WIDTH) TO PRODUCE THE ANIMATION
//WIDTH IS DECLARED WITH THE STARTWIDTH AND THE WONWIDTH VARIABLES

let w = 0;
let lineRepeat;

function clearWriter(gameStatus, width){
    clearTimeout(timer);
    document.getElementById("welcome").innerHTML = "";
    document.getElementById("welcome").style.width = width;
    w = 0;
    return animation(gameStatus);
}
function animation(gameStatus){
    lineRepeat = gameStatus;
    return repeater()
}
function repeater(){
    if(w < lineRepeat.length){
        document.getElementById("welcome").innerHTML += lineRepeat.charAt(w);
        w++;
        timer = setTimeout(repeater, speed);
    }
}


/**************************
 ****Computer Selection****
 *************************/

 //      Rock = 0
//     Paper = 1
// Scissor's = 2

function computerSelection(){
    computerNum = Math.floor(Math.random(3) * 3);

    document.getElementById("computerChoiceIMG").src = "img/blank.png";
    if(computerNum === 0){
        computerChoice = 0;
        document.getElementById("computerChoiceIMG").src = "img/compRock.png";
        return computerChoice;

    }else if(computerNum === 1){
        computerChoice = 1;
        document.getElementById("computerChoiceIMG").src = "img/compPaper.png";
        return computerChoice;

    }else if(computerNum === 2){
        computerChoice = 2;
        document.getElementById("computerChoiceIMG").src = "img/compScissors.png";
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
document.getElementById("playerRock").addEventListener("click", function (){roundWinner(rock)});

//PAPER SELECTOR
document.getElementById("playerPaper").addEventListener("click", computerSelection);
document.getElementById("playerPaper").addEventListener("click", function (){roundWinner(paper)});

//SCISSORS SELECTOR
document.getElementById("playerScissors").addEventListener("click", computerSelection);
document.getElementById("playerScissors").addEventListener("click", function (){roundWinner(scissors)});


//DETERMINE ROUND WINNER
function roundWinner(playerChoice){
    if(rounds === 0){
            playerChoices.style.display = "none";
            playAgain.style.display = "";
            gameWinner();
        
    }else if(playerChoice === computerChoice){
        roundTie = true;
        return clearWriter(tie, startWidth);

    }else if(playerChoice === 0 && computerChoice === 1){   //rock loses to paper
        roundsAdjust();
        computerScore.textContent = ++computerWin;
        return clearWriter(lost, startWidth)

    }else if(playerChoice === 0 && computerChoice === 2){   //rock beats scissors
        roundsAdjust();
        userScore.textContent = ++playerWin;
        return clearWriter(won, startWidth)

    }else if(playerChoice === 1 && computerChoice === 0){   //paper beats rock
        roundsAdjust();
        userScore.textContent = ++playerWin;
        return clearWriter(won, startWidth)

    }else if(playerChoice === 1 && computerChoice === 2){   //paper looses to scissors
        roundsAdjust();
        computerScore.textContent = ++computerWin;
        return clearWriter(lost, startWidth)

    }else if(playerChoice === 2 && computerChoice === 0){   //scissors looses to rock
        roundsAdjust();
        computerScore.textContent = ++computerWin;
        return clearWriter(lost, startWidth)

    }else if(playerChoice === 2 && computerChoice === 1){   //scissors beats paper
        roundsAdjust();
        userScore.textContent = ++playerWin;
        return clearWriter(won, startWidth);
    }
}
function roundsAdjust(){
    --rounds;
    roundTie = false;
    roundsLabel.innerHTML = rounds + " ROUNDS LEFT TO PLAY!!"
}

function gameWinner(){   
    if(playerWin > computerWin){
        document.getElementById("computerChoiceIMG").src = "img/blank.png";
        return clearWriter(wonGame, wonWidth)
    }else if(playerWin < computerWin){
        document.getElementById("computerChoiceIMG").src = "img/blank.png";
        return clearWriter(lostGame, wonWidth)
    } 
}