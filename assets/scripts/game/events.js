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

const onCreateGame = function (event) {
  const data = createForm(event)

  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onIndexGame = function (event) {
  const data = createForm(event)

  api.indexGame(data)
    .then(ui.indexGameSuccess)
    .catch(ui.indexGameFailure)
}

const onFinishedGame = function (event) {
  const data = createForm(event)

  api.gameFin(data)
    .then(ui.gameFinSuccess)
    .catch(ui.gameFinFailure)
}

const onUnfinishedGame = function (event) {
  const data = createForm(event)

  api.gameUnfin(data)
    .then(ui.gameUnfinSuccess)
    .catch(ui.gameUnfinFailure)
}

const onShowGame = function (event) {
  const data = createForm(event)

  api.showGame(data)
    .then(ui.showGameSuccess)
    .catch(ui.showGameFailure)
}

const onDeleteGame = function (event) {
  const data = createForm(event)

  api.deleteGame(data)
    .then(ui.deleteGameSuccess)
    .catch(ui.deleteGameFailure)
}

const onInputVal = function (event) {
  const data = createForm(event)

  // console.log(data)

  api.inputVal(data)
    .then(ui.inputValSuccess)
    .catch(ui.inputValFailure)
}

module.exports = {
  onCreateGame,
  onIndexGame,
  onFinishedGame,
  onUnfinishedGame,
  onShowGame,
  onInputVal,
  onDeleteGame
}
