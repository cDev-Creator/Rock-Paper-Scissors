const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    console.log(btn);
    // prints out each individual buttons value
    btn.addEventListener('click', function (e){
        console.log(e.currentTarget.classList);
        const selection = e.currentTarget.classList;

        if(selection.contains('rock')) {
            playerSelection = 'rock';
            console.log(playerSelection);
        }
         else if(selection.contains('paper')) {
            playerSelection = 'paper';
            console.log(playerSelection);
         }
         else if(selection.contains('scissors')) {
            playerSelection = 'scissors';
            console.log(playerSelection);
         }
         gameLoop();
    }) 
})

var computerScore = 0;
var playerScore = 0;
function computerPlay(options) {
   const randomOption = options[Math.floor(Math.random() * options.length)]; 
   return randomOption;
} 
var options = ['Rock','Paper','Scissors'];
function gameLoop() {
      var computerSelection = computerPlay(options);
      playerSelection = playerSelection.toLowerCase();
      computerSelection = computerSelection.toLowerCase();
      console.log(`${playerSelection}` , "- player ");
      console.log(`${computerSelection}` , "- computer");

      if(computerSelection === playerSelection)
      {
         console.log('Its a draw!')
      }
      else if(computerSelection === 'rock' && playerSelection === 'scissors' 
      || computerSelection === 'scissors' && playerSelection === 'paper' ||
      computerSelection === 'paper' && playerSelection === 'rock') {
         computerScore++;
         console.log('Payer ' + playerScore + ' Computer ' + computerScore);
         console.log('Computer wins the round!' , `${computerSelection}` ,'beats' , `${playerSelection}`);
      }
      else if(playerSelection === 'rock' && computerSelection === 'scissors' 
      || playerSelection === 'scissors' && computerSelection === 'paper' ||
      playerSelection === 'paper' && computerSelection === 'rock') {
         playerScore++;
         console.log('Payer ' + playerScore + ' Computer ' + computerScore);
         console.log('Player wins the round!' , `${playerSelection}` ,'beats' , `${computerSelection}`);
      }
      else {
         console.log(playerSelection +' is invalid');
      }  
   if(playerScore === 5 || computerScore === 5) {
      winner();
   }  
}

function winner() {
   if(playerScore > computerScore) {
   console.log('Player takes the game!', `${playerScore}`, 'to', `${computerScore}`);
   }
   else if(playerScore < computerScore) {
      console.log('Computer takes the game!' , `${computerScore}`, 'to', `${playerScore}`);
   }
   else {
      console.log('The game is tied up!' , `${computerScore}`, 'to', `${playerScore}`);
   }
   disableButtons();
}

function disableButtons() {
   btns.forEach(btn => {
      btn.disabled = true;
   })
}
