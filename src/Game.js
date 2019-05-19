import { userInfo } from "os";
import Player from "./Player";
import SurveyRepo from '../src/SurveyRepo.js';
import Round from '../src/Round.js';

class Game {
  constructor(p1, p2) {
    this.player1 = this.createUser(p1, 1)
    this.player2 = this.createUser(p2, 2)
    this.round = 0;
  }

  createUser(player, id) {
    return new Player(player, id)
  }

  createSurveys() {
    return new SurveyRepo()
  }

  createRound() {
    this.round++
    return new Round()
  }


}

// at end of round 3, game is over

export default Game