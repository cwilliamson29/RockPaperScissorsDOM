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

userScore = document.querySelector("#playerWin p");
userScore.textContent = playerWin;

computerScore = document.querySelector("#computerWin p");
computerScore.textContent = computerWin;

roundsBox.value = 5;


//PASS VARIABLE'S WONGAME, LOST, WON, AND WELCOME
//INTO CLEARWRITER(ACTION, WIDTH) TO PRODUCE THE ANIMATION
//WIDTH IS DECLARED WITH THE STARTWIDTH AND THE WONWIDTH VARIABLES
let cancel = false;
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
    //cancel = false;
    return repeater()
}

clearWriter(welcome, startWidth);


