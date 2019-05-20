class Turn {
  constructor(player, round) {
    this.player = player;
    this.round = round;
    this.second = 0;
    this.counter;
    this.currentGuess;
  }
  updateScore(score) {
    this.player.score += score
  }

  updateTimer() {
    this.counter = setInterval(() => this.addSecond(), 1000)
  }

  addSecond() {
    this.second++
  }

  stopTimer() {
    clearInterval(this.second)
    this.second = 0
  }

  evaluateGuess(guess) {
    this.currentGuess = this.round.answers.find(item => {
      return item.answer.toUpperCase() === guess.toUpperCase()
    })
  }

  updateAnswers() {
    if (this.currentGuess !== undefined) {
      let answerIndex = this.round.answers.indexOf(this.currentGuess)
      this.round.answers.splice(answerIndex, 1)
    }
  }
}

export default Turn;