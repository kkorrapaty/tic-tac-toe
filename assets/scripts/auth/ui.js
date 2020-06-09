'use strict'
const store = require('../store')

const signUpSuccess = function (response) {
  // console.log(response)
  $('form').trigger('reset')
  $('#content').removeClass().addClass('success')

  $('#sign-up-sec').hide()
  $('#sign-in-sec').show()

  $('#content').text('Sign Up Successful: Please Sign In')
}

const signUpFailure = function (event) {
  $('#content').text('Sign Up Failed. Try Again')
  $('#content').removeClass().addClass('failure')
}

const signInSuccess = function (response) {
  // console.log('SignIn Success')
  // console.log(response)

  $('#sign-up-sec').hide()
  $('#email-content').text(`You are signed in as ${response.user.email}`)
  $('#content').text('')
  // $('#content').removeClass().addClass('success')
  $('form').trigger('reset')

  store.user = response.user

  $('#sign-out-sec').show() // show sign-out button
  $('#sign-in-sec').hide() // hide sign in section -- already signed in

  $('#show-game-form').show()

  $('#create-game').show() // show game
  $('#index-game').show() // show index games

  $('#change-pass-sec').show() // show section to change password...
  $('#change-pass').hide() // ...but keep form part hidden until 'CHANGE PASSWORD' is clicked

  $('#delete-game-form').show()
}

const signInFailure = function (response) {
  $('#content').text('Sign In Failed. Try Again')
  $('#content').removeClass().addClass('failure')
}

const changeSuccess = function (response) {
  $('#content').text('Password Changed')
  $('#content').removeClass().addClass('success')
  $('form').trigger('reset')

  $('#change-pass-sec').show()
  $('#change-pass').hide()
}

const changeFailure = function (response) {
  $('#content').text('Password Change Failed. Try Again')
  $('#content').removeClass().addClass('failure')
}

const signOutSuccess = function (data) {
  // $('#content').text('Sign Out Success')
  // $('#content').removeClass().addClass('success')
  $('#content').text('')
  $('form').trigger('reset')

  store.user = null // get rid of auth token

  $('#sign-up-sec').show()
  $('#sign-in-sec').show()

  $('#index-game').hide()
  $('#create-game').hide()

  $('#game-display').hide()
  $('#show-games').hide()

  $('#change-pass-sec').hide()
  $('#sign-out-sec').hide()

  $('#show-game-form').hide()
  $('#delete-game-form').hide()
}

const signOutFailure = function (data) {
  $('#content').text('Sign Out Failed. Try Again')
  $('#content').removeClass().addClass('failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changeSuccess,
  changeFailure,
  signOutSuccess,
  signOutFailure
}
