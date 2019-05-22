import chai from 'chai';

const expect = chai.expect;
import SurveyRepo from '../src/SurveyRepo.js'
import Data from '../Data/Data.js'

describe('SurveyRepo', function() {
  let surveyRepo;
  beforeEach(() => {
    surveyRepo = new SurveyRepo(Data);
  });

  it('should be a function', function() {
    expect(SurveyRepo).to.be.a('function');
  });

  it('should be an instance of SurveyRepo', function() {
  	expect(surveyRepo).to.be.an.instanceof(SurveyRepo);
  });

  it('should accept a file path accessing survey data', function() {
  	expect(surveyRepo.surveys).to.be.an('array')
  });

  it('should store all questions and answers in randomized order', function() {
  	surveyRepo.randomizeSurveys();

  	expect(surveyRepo.surveys).not.eql(Data.surveys)
  });

  it.skip('should find a question by Id and match it with all corresponding answers', function() {
  	surveyRepo.randomizeSurveys();

  	expect(surveyRepo.findCurrentSurveyById()).to.be.an('array')
  });


});
