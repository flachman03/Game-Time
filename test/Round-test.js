import chai from 'chai';
const expect = chai.expect;

import Round from '../src/Round';

describe('Round', function() {
  let round, survey;
  beforeEach(function() {
    let survey = ['If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?',
  [{ answer: 'Beer', respondents: 67}, { answer: 'Bowling Ball', respondents: 5}, { answer: 'Donuts', respondents: 24}]]
    round = new Round(survey)
  })
  it('should be a function' , function() {

  })
})