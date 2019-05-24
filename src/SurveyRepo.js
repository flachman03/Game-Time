class SurveyRepo {
  constructor(dataFilePath) {
    this.surveys = [...dataFilePath.surveys];
    this.answers = [...dataFilePath.answers];
    this.currentSurvey;
    this.questionAndAnswers;

  }

  randomizeSurveys() {
    const randomize = function(surveys) {
      let currentIndex = surveys.length;
      let tempValue;
      let randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        tempValue = surveys[currentIndex];
        surveys[currentIndex] = surveys[randomIndex];
        surveys[randomIndex] = tempValue;
      }

      return surveys;
    }
    this.currentSurvey = randomize(this.surveys).splice(0, 1)
  }



  findCurrentSurveyById() {
    const currentAnswers = this.answers.filter(answer => {
      return answer.surveyId === this.currentSurvey[0].id
    });
    return this.questionAndAnswers = [this.currentSurvey, currentAnswers];
  }

}

// Holds all surveys and answers

export default SurveyRepo;