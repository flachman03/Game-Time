class Round {
  constructor() {
    this.fastMoneyRound = false;
    this.playerTurn;
    this.curentSurvey;
    this.possibleAnswers;
  }
}

// 1 random survey per round
// this.playerTurn should toggle on each guess
// current survey must not match any past surveys used in this game
// if player guesses correct, remove guess form this.possibleAnswers
// 