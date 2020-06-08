'use strict'
const events = require('./auth/events')
const eventsGame = require('./game/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)

  $('#change-pass-sec').hide() // hides change password until signed in
  $('#display-change-option').on('click', events.showChange) // when 'change-password' is clicked, old and new form is shown
  $('#change-pass').on('submit', events.onChangePWD) // changes password

  $('#sign-out-sec').hide()
  $('#sign-out').on('click', events.onSignOut)

  $('#create-game').hide()
  $('#create-game').on('click', eventsGame.onCreateGame) // create game

  $('#index-game').hide()
  $('#all-games').on('click', eventsGame.onIndexGame)
  $('#gameOverTrue').on('click', eventsGame.onFinishedGame)
  $('#gameOverFalse').on('click', eventsGame.onUnfinishedGame)

  $('#game-display').hide()
  $('#show-game-form').hide()

  $('#show-game-form').on('submit', eventsGame.onShowGame) // show specific game

  $('#delete-game-form').hide()
  $('#delete-game-form').on('submit', eventsGame.onDeleteGame) // delete specific game

  // When box is clicked
  $('#box0').on('click', eventsGame.onInputVal)
})
