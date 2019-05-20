class SurveyRepo {
  constructor(dataFilePath) {
  	this.surveyData = dataFilePath;
    this.surveys = [];
    this.answers = [];
    this.currentSurvey = this.randomizeSurveys();
  }

  randomizeSurveys(dataFilePath) {
  	this.surveys = this.surveyData.surveys.map(data => data.id);
  	const min = Math.ceil(0);
  	const max = Math.floor(this.surveys.length);
  	const randomSurvey = Math.floor(Math.random() * (max - min+1)) +min;
  	console.log(randomSurvey.id)
  	return randomSurvey.id


  }

  findCurrentSurveyById(surveyId) {


  }
}

// Holds all surveys and answers

export default SurveyRepo;