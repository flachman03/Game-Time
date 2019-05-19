import chai from 'chai';
const expect = chai.expect;
import Round from '../src/Round.js';

describe('Round', function() {
  let round;
  beforeEach(() => {
    round = new Round();
  });
  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });
});