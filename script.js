let score= JSON.parse(localStorage.getItem('score')) || 
{
   wins:0,
   losses:0,
   ties:0
};

updateScoreElement();

 
function resetScore(){
 score.wins=0;
 score.losses=0;
 score.ties=0;
 alert('score reset');
 localStorage.removeItem('score')
 return
}

function playGame(playerMove) {
 const computerMoves = pickComputerMove();
 let result = "";
 if (computerMoves === playerMove) {
   result = "Tie";
 }

 if (playerMove === "rock") {
   if (computerMoves === "paper") {
     result = "You lose";
   } else if (computerMoves === "scissors") {
     result = "You win";
   }
 }

 else if (playerMove === "paper") {
   if (computerMoves === "scissors") {
     result = "You lose";
   } else if (computerMoves === "rock") {
     result = "You win";
   }
 }

 else if (playerMove === "scissors") {
   if (computerMoves === "rock") {
     result = "You lose";
   } else if (computerMoves === "paper") {
     result = "You win";
   }
 }

 if(result==='Tie'){
   score.ties+=1;
 }else if(result==='You lose'){
   score.losses+=1;
 }else if(result==='You win'){
   score.wins+=1;
 }

 localStorage.setItem('score',JSON.stringify(score))
  
 
   updateScoreElement();
   document.querySelector('.js-result').innerHTML=result;
   document.querySelector('.js-moves').innerHTML=`you <img src="./images/${playerMove}-emoji.png" class="move-icon"/>
<img src="./images/${computerMoves}-emoji.png" class="move-icon"/> computer  `
 
}

function updateScoreElement(){
 document.querySelector('.js-score')
.innerHTML=`Wins:${score.wins} , Losses:${score.losses} , Ties:${score.ties}`

}

function pickComputerMove() {
 let computerMove = "";
 const randomNumber = Math.random();
 if (randomNumber >= 0 && randomNumber < 1 / 3) {
   computerMove = "rock";
 } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
   computerMove = "paper";
 } else if (randomNumber > 2 / 3 && randomNumber < 1) {
   computerMove = "scissors";
 }
 return computerMove;
}