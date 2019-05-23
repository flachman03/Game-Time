import $ from 'jquery';
import './css/base.scss';
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
  playerNames(game.player1.name, game.player2.name)
  turn = round.createBlankturn()
  turn.updateTimer()
  runTimer()
  console.log(round.answers)
})

function playerNames(name1, name2) {
  $('#score-box__player-1').text(name1)
  $('#score-box__player-2').text(name2)
}


$('.answer-card').on('click', function() {
  $(this).addClass('flipped')
})

$('#submit-form__submit-btn').on('click', function() {
  startTurn()
})

$('#score-section__timer').on('DOMSubtreeModified', function() {
  if ($('#timer').text() === '0') {
    turn.resetTimer()
    startTurn()
  }
})

function displayTimer() {
  $('#timer').text(turn.second)
}

function runTimer() {
  let counter;
  counter = setInterval(() => displayTimer(), 1000)
}

function startTurn () {
  event.preventDefault()
  turn = round.createTurn()
  turn.resetTimer()
  let guess = turn.evaluateGuess($('#submit-form__answer-input').val())
  round.removeAnswer(guess, turn.player)
  console.log(round.answers)
  console.log(round.currentTurn)
  console.log(turn)
}


