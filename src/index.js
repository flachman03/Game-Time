
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
  $('.p1__box').addClass('current-player')
  fetchData()
  turn = round.createBlankturn()
  turn.updateTimer()
  runTimer()
})

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
  round = game.createRound(survey.questionAndAnswers)
  $('#question').text(round.question[0].question)
  console.log(round.answers)
  $('#score__one').text(round.scores[0])
  $('#answer__one').text(round.answers[0])
  $('#score__two').text(round.scores[1])
  $('#answer__two').text(round.answers[1])
  $('#score__three').text(round.scores[2])
  $('#answer__three').text(round.answers[2])

}

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
  hilightPlayer()
  updatePlayerScore()
}

function hilightPlayer() {
  if (turn.player.id === 1) {
    $('.p1__box').removeClass('current-player')
    $('.p2__box').addClass('current-player')
  } else {
    $('.p2__box').removeClass('current-player')
    $('.p1__box').addClass('current-player')
  }
}

function updatePlayerScore() {
  $('#score-box__player-1-score').text(game.player1.score)
  $('#score-box__player-2-score').text(game.player2.score)
}
