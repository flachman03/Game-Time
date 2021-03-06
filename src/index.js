
import $ from 'jquery';
import '../src/sass/_variables.scss'
import '../src/sass/_mixins.scss'
import '../src/sass/base.scss'
import DomUpdates from './DomUpdates'

import Game from '../src/Game.js';

let game, round, survey, turn;

/*-------------Event Listeners--------------*/

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
  DomUpdates.hideTimer(1)
  fetchData()
})

$('.answer-card').on('click', function() {
  $(this).addClass('flipped')
})

$('#submit-form__submit-btn').on('click', function() {
  DomUpdates.checkCardFlip()
  if (game.round > 2) {
    fastMoneyTurn()
  } else {
    startTurn()
  }
  $('#submit-form__answer-input').val('');
  DomUpdates.checkRoundHighlight(round)
  console.log(round.answers)
})

$('#right-section__change-round-btn').on('click', function() {
  changeRound()
})

$('#left-section__quit-btn').on('click', function() {
  location.reload()
})

$('#left-section__restart-btn').on('click', function() {
  game = new Game($('#player__1').val(), $('#player__2').val())
  DomUpdates.hideTimer(1)
  fetchData()
  DomUpdates.removeFlipClass()
  DomUpdates.resetScoreBox()
})

$('#score-section__timer').on('DOMSubtreeModified', function() {
  if (game.round === 3 && round.turnNumber === 3) {
    clearInterval(turn.counter)
    round.multiplyScore(round, game)
    DomUpdates.updatePlayerScore(game)
    console.log('game over')
    $('#score-section__timer').remove()
  } else {
    if ($('#timer').text() === '0') {
      turn.resetTimer()
      startTurn()
    }
  }
})

$('#center-section__multiplier-form').on('click', 'button', function(e) {
  if (game.round > 2) {
    round.turnNumber++
    let turn = round.createBlankturn()
    turn.player.multiplier = Number(e.target.innerText)
    console.log(turn.player, turn.player.multiplier)
    round.turnNumber--
  }
})

/*-----------Functions-------------*/

function fetchData() {
  fetch('https://fe-apps.herokuapp.com/api/v1/gametime/1903/family-feud/data')
    .then((response) => {
      if (response.status !== 200) {
        console.log('FETCH ERROR. Status Code: ' + response.status);
        return;
      }
      response.json().then((info) => makeNewSurvey(info.data));
    }
    )
    .catch((err) => console.log('Fetch Error :-S', err));
}

function makeNewSurvey(stuff) {
  survey = game.createSurveys(stuff)
  survey.randomizeSurveys()
  survey.findCurrentSurveyById()
  makeNewRound()
}

function makeNewRound() {
  round = game.createRound(survey.questionAndAnswers, game)
  console.log(round.answers)
  DomUpdates.displayRound(round)
  makeBlankTurn()
}

function makeBlankTurn() {
  DomUpdates.playerNames(game.player1.name, game.player2.name)
  $('.p1__box').addClass('current-player')
  turn = round.createBlankturn()
  turn.updateTimer()
  DomUpdates.hilightPlayer(turn)
  runTimer()
}

function runTimer() {
  let counter;
  counter = setInterval(() => DomUpdates.displayTimer(turn), 1000)
}

function startTurn () {
  event.preventDefault()
  turn = round.createTurn()
  turn.resetTimer()
  let guess = turn.evaluateGuess($('#submit-form__answer-input').val())
  round.removeAnswer(guess, turn.player)
  DomUpdates.hilightPlayer(turn)
  DomUpdates.updatePlayerScore(game)
}

function changeRound() {
  if ((round.answers.length === 0) && (game.round < 2)) {
    createSurveys()
    makeNewRound()
  } else if ((round.answers.length === 0) && (game.round >=  2)) {
    createSurveys()
    fastMoneyRound()
  }
}

function fastMoneyRound() {
  round = game.createFastMoney(survey.questionAndAnswers, game)
  console.log(round.answers)
  DomUpdates.displayRound(round)
  makeBlankTurn()
}

function fastMoneyTurn() {
  event.preventDefault()
  let turn = round.createBlankturn()
  let guess = turn.evaluateGuess($('#submit-form__answer-input').val())
  round.evaluateGuesses(guess, turn)
  DomUpdates.hilightPlayer(turn)
}

function createSurveys() {
  survey.randomizeSurveys()
  survey.findCurrentSurveyById()
  DomUpdates.removeFlipClass()
}

