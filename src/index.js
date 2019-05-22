// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import Game from '../src/Game.js';
import SurveyRepo from './SurveyRepo';
import Data from '../Data/Data'
import Round from './Round'

console.log('This is the JavaScript entry file - your code begins here.');
let game, round, survey, turn;


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
  survey = new SurveyRepo(Data)
  survey.randomizeSurveys()
  survey.findCurrentSurveyById()
  round = new Round(survey.questionAndAnswers, game)
  turn = round.createTurn()
  console.log(round.answers)
  playerNames(game.player1.name, game.player2.name)
})

function playerNames(name1, name2) {
  $('#score-box__player-1').text(name1)
  $('#score-box__player-2').text(name2)
}

<<<<<<< HEAD
$('.answer-card').on('click', function() {
	$(this).addClass('flipped')
})
=======
$('#submit-form__submit-btn').on('click', function() {
  event.preventDefault()
  turn.evaluateGuess($('#submit-form__answer-input').val())
  console.log(turn.currentGuess)
})

>>>>>>> 1941dd07f7aa4a7b1e2f1b08c42fccb354294806
