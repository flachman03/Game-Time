import Round from './Round';
import Turn from './Turn';
import Game from './Game';

class FastMoney extends Round {
  constructor(survey, game) {
    super(survey, game)
    this.player1Guesses = [];
    this.player2Guesses = [];
  }

  evaluateGuesses(guess, turn) {
    this.answers.filter(answer => {
      if (answer === guess && turn.player.id === 1) {
        this.player1Guesses.push(guess)
      } else if (answer === guess && turn.player.id === 2) {
        this.player2Guesses.push(guess)
      }
    });
    console.log(this.player1Guesses)
    console.log(this.player2Guesses)				
  }
	
	evaluateScore() {
		
	}
} 

export default FastMoney;


//method to multiply total points (access answer.respondants)

//fastMoney.currentTurn.player.id === 1/2 push player1, player2