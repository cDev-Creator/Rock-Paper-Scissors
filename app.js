const btns = document.querySelectorAll('.btn')
const roundResult = document.querySelector('.round-result')
const finalResult = document.querySelector('.final-result')
const playerScorer = document.querySelector('.player-score')
const computerScorer = document.querySelector('.computer-score')

btns.forEach(function (btn) {
    console.log(btn);
    // prints out each individual buttons value
    btn.addEventListener('click', function (e){
        console.log(e.currentTarget.classList);
        const selection = e.currentTarget.classList;
        if(selection.contains('rock')) {
            playerSelection = 'rock';
        }
         else if(selection.contains('paper')) {
            playerSelection = 'paper';
         }
         else if(selection.contains('scissors')) {
            playerSelection = 'scissors';
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

      if(computerSelection === playerSelection)
      {
         roundResult.textContent = 'Its a draw! you both chose to use ' + playerSelection;
      }
      else if(computerSelection === 'rock' && playerSelection === 'scissors' 
      || computerSelection === 'scissors' && playerSelection === 'paper' ||
      computerSelection === 'paper' && playerSelection === 'rock') {
         computerScore++;

         scoreDisplay();
         roundResult.textContent = 'Computer wins the round! ' + computerSelection + ' beats ' + playerSelection;
      }
      else if(playerSelection === 'rock' && computerSelection === 'scissors' 
      || playerSelection === 'scissors' && computerSelection === 'paper' ||
      playerSelection === 'paper' && computerSelection === 'rock') {
         playerScore++;

         scoreDisplay();
         if(scoreDisplay() == false) {
            playerScorer.textContent = ' ';
         }
         roundResult.textContent = 'Player wins the round! ' + playerSelection +' beats ' + computerSelection;
      }
    
   if(playerScore === 5 || computerScore === 5) {
      winner();
   }  
}
function scoreDisplay() {
   computerScorer.textContent ='Player: ' + playerScore + ' Computer: ' + computerScore;
}

function winner() { 
   if(playerScore > computerScore) {
   finalResult.textContent = 'Player takes the game! ' + playerScore + ' to ' + computerScore;
   }
   else if(playerScore < computerScore) {
      finalResult.textContent = 'Computer takes the game! ' + computerScore +' to ' + playerScore;
   }
   else {
      finalResult.textContent = 'The game is tied up! ' + computerScore + ' to ' + playerScore;
   }
   disableButtons();
}

function disableButtons() {
   btns.forEach(btn => { btn.disabled = true; })
}