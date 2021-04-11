
/**************************
 *****ROUNDS Selection*****
 *************************/
//let roundsBox = Number(document.getElementById("numberRounds").value);
let roundsBox;
function roundsSelector(){
    let roundsBox = Number(document.getElementById("numberRounds").value);

    //roundsBox = document.getElementById("numberRounds").value;
    //roundsCount = roundsBox;
    if(roundsBox === 0){
        return gameWinner()
    }else{
         //--roundsCount;
         --roundsBox;
         /*if(roundsBox === 0){
            document.getElementById("numberRounds").value = roundsBox;
             return gameWinner();
         }
         document.getElementById("numberRounds").value = roundsBox;
         //roundsBox = document.getElementById("numberRounds").value;
         //roundsBox*/
    }
    /*let j= 0;
    for(j = roundsBox;roundsBox > 0; j--){
        document.getElementById("numberRounds").value = i;
    }*/
}

 /**************************
 ********GAME WINNER********
 **************************/
let gameWinnerCount = 0;
 function gameWinner(){
     
        if(playerWin > computerWin){
            document.getElementById("computerChoiceIMG").src = "img/blank.png";

            //document.getElementById("playerRock").addEventListener("click", clearGame);

            //PAPER SELECTOR
            //document.getElementById("playerPaper").addEventListener("click", clearGame);

            //SCISSORS SELECTOR
            //document.getElementById("playerScissors").addEventListener("click", location.reload());
            return clearWriter(wonGame, wonWidth)
        }else if(playerWin < computerWin){
            document.getElementById("computerChoiceIMG").src = "img/blank.png";
            return clearWriter(lostGame, wonWidth)
        } 
     
     
 }

 /**************************
 ********CLEAR GAME********
 **************************/
function clearGame(){
    document.getElementById("numberRounds").value = 5;
    playerWin = 0;
    computerWin = 0;

    //document.getElementById("playerRock").addEventListener("click", computerSelection);
    //document.getElementById("playerRock").addEventListener("click", function (){roundWinner(rock)});

    //PAPER SELECTOR
    //document.getElementById("playerPaper").addEventListener("click", computerSelection);
    //document.getElementById("playerPaper").addEventListener("click", function (){roundWinner(paper)});

    //SCISSORS SELECTOR
    //document.getElementById("playerScissors").addEventListener("click", computerSelection);
    //document.getElementById("playerScissors").addEventListener("click", function (){roundWinner(scissors)});
}