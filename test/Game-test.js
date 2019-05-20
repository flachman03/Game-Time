import chai from 'chai';
const expect = chai.expect;
import Game from '../src/Game.js'


describe('Game', function() {
  let game;
  beforeEach(() => {
    game = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });
});