/* eslint-disable max-len */
import chai from 'chai';
const expect = chai.expect;
import Round from '../src/Round.js';
import Turn from '../src/Turn.js';

describe('Round', function() {
  let round, survey;
  beforeEach(() => {
    survey = ['If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?',
      [{ answer: 'Beer', respondents: 67}, { answer: 'Bowling Ball', respondents: 5}, { answer: 'Donuts', respondents: 24}]];
    round = new Round(survey);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instantiation of the Round class', function() {
    expect(round).to.be.an.instanceOf(Round)
  });

  it('shoud be able to take in a survey and store the question', function() {
    expect(round.question).to.equal('If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?')
  })

  it('should be able to take in a survey and store the answers as an array of objects' ,function() {
    expect(round.answers).to.deep.equal([{ answer: 'Beer', respondents: 67}, { answer: 'Bowling Ball', respondents: 5}, { answer: 'Donuts', respondents: 24}])
  })

  it('should have a method to toggle between two numbers', function() {
    expect(round.togglePlayer()).to.equal(0)
    round.turnNumber++
    expect(round.togglePlayer()).to.equal(1)
    round.turnNumber++
    expect(round.togglePlayer()).to.equal(0)
  })

  it.skip('should create a new turn and toggle between two players', function() {
    round.createTurn()
  })
});

