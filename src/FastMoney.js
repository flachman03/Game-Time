import Round from './Round';
import Turn from './Turn';
import Game from './Game';

class FastMoney extends Round {
  constructor(survey, game, multiplier) {
    super(survey, game)
    this.player1Guesses = [];
    this.player2Guesses = [];
    this.multiplier = multiplier || 1;
  }

  evaluateGuesses(guess, turn) {
    this.answers.filter(answer => {
      if(answer === guess && turn.player.id === 1) {
        this.player1Guesses.push(guess)
      } else if(answer === guess && turn.player.id === 2) {
        this.player2Guesses.push(guess)
      }
      console.log(turn.player.score)
    });
					
  }

  multiplyScore(guesses, turn) {
		
  }
}

export default FastMoney;


//method to multiply total points (access answer.respondants)

//fastMoney.currentTurn.player.id === 1/2 push player1, player2