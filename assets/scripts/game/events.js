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

const onInputVal = function () {
  // const data = createForm(event)
  let over
  // console.log(store)

  // let id
  const button = document.getElementById('game-display')
  // console.log(button)
  // console.log(data)
  button.onclick = function (event) {
    // console.log(store.gameBoard)
    // console.log(event)
    over = !(store.gameBoard.some(i => i === ''))

    over = getWinner(over)
    // console.log(over)
    const xWins = checkWin('x')
    const oWins = checkWin('o')
    //
    // if (xWins || oWins) {
    //   for (let i = 0; i < 9; i++) {
    //     $('#' + i).text(store.winner)
    //   }
    //   // console.log(store.winner)
    //   over = true
    //   if (store.winner === 'x') {
    //     $('#content').text('X WINS')
    //     alert('X WINS')
    //     api.inputValX(over)
    //   } else {
    //     $('#content').text('O WINS')
    //     alert('O WINS')
    //     api.inputValO(over)
    //   }
    // }

    const id = event.target.id

    if (over) {
      alert('GAME OVER')
      if ((!xWins) && (!oWins)) {
        api.inputValX(over)
        $('#content').text('Its A Draw')
      }
    } else if (store.gameBoard[id] !== '') {
      alert('CANNOT MAKE THAT MOVE')
    } else {
      store.id = id
      //
      // console.log(event.target.id)
      // console.log(store)

      if (store.count % 2 === 0) {
        api.inputValX(over)
          .then(ui.inputValSuccessX)
          .catch(ui.inputValFailureX)
      } else {
      // if (store.count % 2 !== 0) {
        api.inputValO(over)
          .then(ui.inputValSuccessO)
          .catch(ui.inputValFailureO)
      }
    }
    // console.log(store.gameBoard)
  }
}

const getWinner = function (over) {
  const xWins = checkWin('x')
  const oWins = checkWin('o')

  if (xWins || oWins) {
    for (let i = 0; i < 9; i++) {
      $('#' + i).text(store.winner)
    }
    // console.log(store.winner)
    over = true
    if (store.winner === 'x') {
      $('#content').text('X WINS')
      alert('X WINS')
      api.inputValX(over)
    } else {
      $('#content').text('O WINS')
      alert('O WINS')
      api.inputValO(over)
    }
  }
  return over
}

const checkWin = function (winner) {
  const game = store.gameBoard
  // const over = (store.gameBoard.some(i => i === 'x'))
  // if (!over) {
  // const id = store.id

  // check horizontal winners
  if ((game[0] === winner) && (game[1] === winner) && (game[2] === winner)) {
    store.winner = winner
    return true
  } else if ((game[3] === winner) && (game[4] === winner) && (game[5] === winner)) {
    store.winner = winner
    return true
  } else if ((game[6] === winner) && (game[7] === winner) && (game[8] === winner)) {
    store.winner = winner
    return true
  }

  // check vertical winners
  if ((game[0] === winner) && (game[3] === winner) && (game[6] === winner)) {
    store.winner = winner
    return true
  } else if ((game[1] === winner) && (game[4] === winner) && (game[7] === winner)) {
    store.winner = winner
    return true
  } else if ((game[2] === winner) && (game[5] === winner) && (game[8] === winner)) {
    store.winner = winner
    return true
  }

  // check diagonal winners
  if ((game[0] === winner) && (game[4] === winner) && (game[8] === winner)) {
    store.winner = winner
    return true
  } else if ((game[2] === winner) && (game[4] === winner) && (game[6] === winner)) {
    store.winner = winner
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
