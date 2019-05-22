class Player {
  constructor(name, id) {
    this.id = id;
    this.name = name;
    this.score = 0;
    this.scores = [];
  }

  playerName() {
    return this.name
  }

  playerScore() {
    return this.score
  }
}

export default Player;