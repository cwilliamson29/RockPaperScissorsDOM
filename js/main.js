let playerWin = 0;
let computerWin = 0;
let roundsBox = document.getElementById("numberRounds")

let welcome = "Choose Your WEAPON!";
let lost = "YOU LOST THIS ROUND!";
let won = "YOU WON THIS ROUND!"
let wonGame = "YOU WON\nTHE GAME!"
let wonGame1 = "YOU WON"
let wonGame2 = "THE GAME!"
let speed = 110;

userScore = document.querySelector("#playerWin p");
userScore.textContent = playerWin;

computerScore = document.querySelector("#computerWin p");
computerScore.textContent = computerWin;

roundsBox.value = 5;

let b = 0;
function welcomeWriter(){
    document.getElementById("welcome").innerHTML = "";
    let b = 0;

    function welRepeat(){
        if(b < welcome.length){
            document.getElementById("welcome").innerHTML += welcome.charAt(b);
            b++;
            setTimeout(welRepeat, speed);
        }
    }
    welRepeat();
}
function lostWriter(){
    document.getElementById("welcome").innerHTML = "";
    let w = 0;

    function lostRepeat(){
        if(w < lost.length){
            document.getElementById("welcome").innerHTML += lost.charAt(w);
            w++;
            setTimeout(lostRepeat, speed);
        }
    }
lostRepeat();
}
function wonWriter(){
    document.getElementById("welcome").innerHTML = "";
    let w = 0;

    function wonRepeat(){
        if(w < won.length){
            document.getElementById("welcome").innerHTML += won.charAt(w);
            w++;
            setTimeout(wonRepeat, speed);
        }
    }
wonRepeat();
}
function wonGameWriter(){
    document.getElementById("welcome").innerHTML = "";
    document.getElementById("welcome").style.width = "155px";

    let w = 0;

    function wonRepeat(){
        if(w < wonGame.length){
            document.getElementById("welcome").innerHTML += wonGame.charAt(w);
            w++;
            setTimeout(wonRepeat, speed);
        }
    }
wonRepeat();
}

welcomeWriter();
//lostWriter();

