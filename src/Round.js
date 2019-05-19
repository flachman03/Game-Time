class Round {
  constructor(survey) {
    this.question = survey[0];
    this.answers = survey[1]
  }


}

export default Round;

// 1 random survey per round
// this.playerTurn should toggle on each guess
// current survey must not match any past surveys used in this game
// if player guesses correct, remove guess form this.possibleAnswers
// 