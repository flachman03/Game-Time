import chai from 'chai';
const expect = chai.expect;
import Game from '../src/Game.js';
import SurveyRepo from '../src/SurveyRepo.js';
import Round from '../src/Round.js';


describe('Game', function() {
  let game;
  beforeEach(() => {
    game = new Game('Nathan', 'Ryan');
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be a new instance of game', () => {
    expect(game).to.be.a.instanceOf(Game)
  });

  it('should be instantiated with player1 and player2', () => {
    expect(game.player1).to.deep.equal({ id: 1, name: 'Nathan', score: 0, scores: [] })
    expect(game.player2).to.deep.equal({ id: 2, name: 'Ryan', score: 0, scores: [] })
  })

  it('should instantiate survey repo', () => {
    expect(game.createSurveys()).to.be.a.instanceOf(SurveyRepo)
  })

  it.skip('should instantiate round', () => {
    expect(game.round).to.equal(0)
    expect(game.createRound()).to.be.a.instanceOf(Round)
    expect(game.round).to.equal(1)
  })

});