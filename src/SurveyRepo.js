class SurveyRepo {
  constructor(dataFilePath) {
  	this.dataFilePath = dataFilePath;
    this.surveys = [];
    this.answers = [];
  }
}

// Holds all surveys and answers

export default SurveyRepo;