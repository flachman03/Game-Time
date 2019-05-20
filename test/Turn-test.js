import chai from 'chai';
const expect = chai.expect;
import Turn from '../src/Turn';
import Round from '../src/Round';
import Player from '../src/Player';

describe('Turn', function() {
  let turn, round, survey;
  beforeEach(function() {
    survey = ['If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?',
      [{ answer: 'Beer', respondents: 67}, { answer: 'Bowling Ball', respondents: 5}, { answer: 'Donuts', respondents: 24}]];
    round = new Round(survey);
    turn = new Turn(round)
  })
})