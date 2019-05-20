import chai from 'chai';

const expect = chai.expect;
import SurveyRepo from '../src/SurveyRepo.js'

describe('SurveyRepo', function() {
  let surveyRepo;
  beforeEach(() => {
    surveyRepo = new SurveyRepo();
  });

  it('should be a function', function() {
    expect(SurveyRepo).to.be.a('function');
  });
});
