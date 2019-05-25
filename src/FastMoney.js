import Round from './Round';
import Turn from './Turn';
import Game from './Game';

class FastMoney extends Round {
  constructor(question, answers, currentGame, turnNumber, multiplier) {
    super(question, answers, currentGame, turnNumber)
    this.player1Guesses = [];
    this.player2Guesses = [];
    this.multiplier = multiplier || 1;
  }

  evaluateGuesses(guess) {
    this.answers.filter(answer => {
      if(answer === guess) {
        this.player1Guesses.push(guess)
      } 
    });
  }

  multiplyScore(guesses) {
    console.log(this.currentGame)
    return this.player1Guesses * this.multiplier;
  }
}

export default FastMoney;


//method to multiply total points (access answer.respondants)