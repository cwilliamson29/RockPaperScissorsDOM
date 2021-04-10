let playerWin = 0;
let computerWin = 0;
let roundsBox = document.getElementById("numberRounds")

let welcome = "Choose Your WEAPON!";
let lost = "YOU LOST THIS ROUND!";
let won = "YOU WON THIS ROUND!";
let wonGame = "YOU WON THE GAME!";

let startWidth = "190px";
let wonWidth = "155px";

let timer;
let speed = 110;

let computerNum;
let computerChoice;

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

playerRockAlert.addEventListener("mouseover", function (){document.querySelector("#choiceAlert").innerHTML = rockAlert;});
playerRockAlert.addEventListener("mouseout", function (){document.querySelector("#choiceAlert").innerHTML = choiceClearInner;});

playerPaperAlert.addEventListener("mouseover", function (){document.querySelector("#choiceAlert").innerHTML = paperAlert;});
playerPaperAlert.addEventListener("mouseout", function (){document.querySelector("#choiceAlert").innerHTML = choiceClearInner;});

playerScissorsAlert.addEventListener("mouseover", function (){document.querySelector("#choiceAlert").innerHTML = scissorsAlert;});
playerScissorsAlert.addEventListener("mouseout", function (){document.querySelector("#choiceAlert").innerHTML = choiceClearInner;});

/*function hoverAlert(choice,choiceAlert){
    let choice2 = choice;
    console.log(choice2);
    let choiceAlert2 = choiceAlert;
    console.log(choiceAlert2);
    document.getElementById(choice2).innerHTML = choiceAlert2;
}*/
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
function computerSelection(){
    computerNum = Math.floor(Math.random(3) * 3);

    if(computerNum === 0){
        computerChoice = "Rock";

        console.log("The computer selected " + computerChoice);
    }else if(computerNum === 1){
        computerChoice = "Paper";

        console.log("The computer selected " + computerChoice);
    }else if(computerNum === 2){
        computerChoice = "Scissors";

        console.log("The computer selected " + computerChoice);
    }else{
        console.log("Number error generated outside 0-2")
    }
}

clearWriter(welcome, startWidth);


