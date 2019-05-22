// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import Game from '../src/Game.js';
import Data from '../Data/Data.js';
import SurveyRepo from '../src/SurveyRepo.js';
import Round from '../src/Round.js';

console.log('This is the JavaScript entry file - your code begins here.');

let game;
let surveyRepo;
let round;

$('.start__game__form').keyup( () => {
  if ($('#player__1').val() && $('#player__2').val()) {
    $('#start__game__btn').prop('disabled', false);
  } else {
    $('#start__game__btn').prop('disabled', true);
  }
})

$('#start__game__btn').on('click', () => {
  event.preventDefault()
  $('.splash__page').fadeOut()
  game = new Game($('#player__1').val(), $('#player__2').val())
  console.log(game)
  fetchData()
})

function fetchData() {
  // will get data from API
  makeNewSurvey()
}

function makeNewSurvey() {
  surveyRepo = game.createSurveys(Data)
  surveyRepo.randomizeSurveys()
  surveyRepo.findCurrentSurveyById()
  makeNewRound()
}

function makeNewRound() {
  round = game.createRound(surveyRepo.questionAndAnswers)
  $('.question__box').text(round.question[0].question)
}