'use strict'

const api = require('./api')
const ui = require('./ui')

const getForm = require('../../../lib/get-form-fields')

// form is used in numberous methods, so made a single function to recall
const createForm = function (event) {
  event.preventDefault()
  const form = event.target
  return getForm(form)
}

const onSignUp = function (event) {
  // event.preventDefault()
  // const form = event.target
  // const data = getForm(form)
  const data = createForm(event)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  // event.preventDefault()
  // const form = event.target
  // const data = getForm(form)
  const data = createForm(event)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// shows button to change password, if clicked then old and new password fields display
const showChange = function () {
  $('#display-change-sec').hide()
  $('#change-pass').show()
}

const onChangePWD = function (event) {
  // event.preventDefault()
  // const form = event.target
  // const data = getForm(form)
  const data = createForm(event)
  console.log(data)

  api.changePWD(data)
    .then(ui.changeSuccess)
    .catch(ui.changeFailure)
}

const onSignOut = function (event) {
  const data = createForm(event)

  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePWD,
  showChange,
  onSignOut
}
