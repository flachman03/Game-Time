class Turn {
  constructor(player, round) {
    this.player = player;
    this.round = round;
    this.second = 0;
    this.counter;
    this.currentGuess;
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
      this.round.removeAnswer(this.currentGuess)
    }
  }
}

export default Turn;