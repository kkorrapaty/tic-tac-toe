'use strict'
const store = require('../store')

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
  let over
  const data = createForm(event)

  // console.log(data)

  // let id
  const button = document.getElementById('game-display')
  // console.log(button)
  // console.log(data)

  button.onclick = function (event) {

    // console.log(store.gameBoard)
    // console.log(event)

    over = !(store.gameBoard.some(i => i === ''))
    // console.log(over)

    if (checkWin()) {
      console.log(store.winner)
      $('#content').text(store.winner + ' WINS')
      over = true
    }

    const id = event.target.id

    if (over) {
      alert('GAME OVER')
    } else if (store.gameBoard[id] !== '') {
      alert('CANNOT MAKE THAT MOVE')
    } else {
      store.id = id
      //
      // console.log(event.target.id)
      // console.log(store)

      if (store.count % 2 === 0) {
        api.inputValX(data, over)
          .then(ui.inputValSuccessX)
          .catch(ui.inputValFailureX)
      } else {
      // if (store.count % 2 !== 0) {
        api.inputValO(data, over)
          .then(ui.inputValSuccessO)
          .catch(ui.inputValFailureO)
      }
    }
    // console.log(store.gameBoard)
  }
}

const checkWin = function () {
  const game = store.gameBoard
  // const over = (store.gameBoard.some(i => i === 'x'))
  // if (!over) {
  // const id = store.id

  // check horizontal winners
  if ((game[0] === 'x') && (game[1] === 'x') && (game[2] === 'x')) {
    store.winner = 'x'
    return true
  } else if ((game[3] === 'x') && (game[4] === 'x') && (game[5] === 'x')) {
    store.winner = 'x'
    return true
  } else if ((game[6] === 'x') && (game[7] === 'x') && (game[8] === 'x')) {
    store.winner = 'x'
    return true
  }

  // check vertical winners
  if ((game[0] === 'x') && (game[3] === 'x') && (game[6] === 'x')) {
    store.winner = 'x'
    return true
  } else if ((game[1] === 'x') && (game[4] === 'x') && (game[7] === 'x')) {
    store.winner = 'x'
    return true
  } else if ((game[2] === 'x') && (game[5] === 'x') && (game[8] === 'x')) {
    store.winner = 'x'
    return true
  }

  // check diagonal winners
  if ((game[0] === 'x') && (game[4] === 'x') && (game[8] === 'x')) {
    store.winner = 'x'
    return true
  } else if ((game[2] === 'x') && (game[4] === 'x') && (game[6] === 'x')) {
    store.winner = 'x'
    return true
  }

  return false
  // }
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
