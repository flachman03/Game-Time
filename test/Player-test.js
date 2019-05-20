import chai from 'chai';
const expect = chai.expect;
import Player from '../src/Player.js'

describe('Player', function() {
  let player;
  beforeEach(() => {
    player = new Player();
  });
  it('should be a function', function() {
    expect(Player).to.be.a('function');
  });
});