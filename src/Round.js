import Turn from "./Turn";
import Game from './Game'

class Round {
  constructor(survey, game) {
    this.question = survey[0];
    this.answers = survey[1];
    this.currentGame = game
    this.currentTurn;
    this.turnNumber = 0;
  }

  togglePlayer() {
    return (this.turnNumber + 2) % 2
  }

  createTurn() {
    this.currentTurn = new Turn(this.currentGame.players[this.togglePlayer()], this)
    this.turnNumber++
  }
}

export default Round;

// 1 random survey per round
// this.playerTurn should toggle on each guess
// current survey must not match any past surveys used in this game
// if player guesses correct, remove guess form this.possibleAnswers
