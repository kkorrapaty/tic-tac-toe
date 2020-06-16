'use strict'
const store = require('../store')

const api = require('./api')
const ui = require('./ui')

const getWinner = function (over) {
  // console.log('INSIDE GETWINNER')
  const xWins = checkWin('x')
  const oWins = checkWin('o')

  if (xWins || oWins) {
    // console.log('INSIDE GETWINNER X || O')
    for (let i = 0; i < 9; i++) {
      $('#' + i).text(store.winner)
    }
    // console.log(store.winner)
    over = true
    if (store.winner === 'x') {
      $('#game-output').text('X WINS')
      // alert('X WINS')
      api.inputValX(over)
        .then(ui.inputValSuccessX)
        .catch(ui.inputValFailureX)
    } else {
      $('#game-output').text('O WINS')
      // alert('O WINS')
      api.inputValO(over)
        .then(ui.inputValSuccessO)
        .catch(ui.inputValFailureO)
    }
  }
  return over
}

const checkWin = function (winner) {
  const game = store.gameBoard
  // console.log('GameBoard')
  // console.log(game)
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
  getWinner,
  checkWin
}
