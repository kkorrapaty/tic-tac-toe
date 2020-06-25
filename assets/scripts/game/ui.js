'use strict'
const store = require('../store')

const winner = require('./winner')
// const eventsGame = require('./events')

const createGameSuccess = function (response) {
  // console.log('Inside UI:')
  // console.log(response)

  store.gameBoard = []
  store.count = 0

  $('#content').text('')
  $('#game-output').text('X\'s TURN')

  for (let i = 0; i < 9; i++) {
    $('#' + i).text('')
  }

  $('form').trigger('reset')
  // $('#content').text('Game Made Success')
  $('#game-output').removeClass().addClass('success')
  $('#game-output').show()

  store.game = response.game
  store.gameBoard = store.game.cells
  // console.log(store.game.cells)

  $('#game-display').show()
  $('#over').hide()
}

const createGameFailure = function () {
  $('#content').text('Game Creation Failed. Try Again')
  $('#content').removeClass().addClass('failure')
}

const indexGameSuccess = function (response) {
  // console.log('Inside UI Index:')
  // console.log(response)
  $('#content').text('')

  let gameDisplay = ''

  response.games.forEach(g => {
    const oneGame = (`
      <p>${g.cells} </p>
      <p>ID: ${g._id}</p>
      <br>
      `)
    gameDisplay += oneGame
  })

  $('#show-games').html(gameDisplay)

  $('form').trigger('reset')
  $('#show-games').show()
  $('#show-games').addClass('show-games')
  // $('#content').text('Game Index Success')
  $('#content').removeClass().addClass('success')
}

const indexGameFailure = function () {
  $('#content').text('Game Index Failed. Try Again')
  $('#content').removeClass().addClass('failure')
}

const gameFinSuccess = function (response) {
  // console.log('Inside Fin Success:')
  // console.log(response)
  $('#content').text('')

  let gameDisplay = ''

  response.games.forEach(g => {
    const oneGame = (`
      <p>${g.cells} </p>
      <p>ID: ${g._id}</p>
      <br>
      `)
    gameDisplay += oneGame
  })

  $('#show-games').html(gameDisplay)
  $('#show-games').addClass('show-games')
  // $('#content').text('Game Finished Success')
  $('#content').removeClass().addClass('success')
  $('form').trigger('reset')
}

const gameFinFailure = function () {
  $('#content').text('Game Finished Failed')
  $('#content').removeClass().addClass('failure')
}

const gameUnfinSuccess = function (response) {
  // console.log('Inside Unfin Success:')
  // console.log(response)
  $('#content').text('')

  let gameDisplay = ''

  response.games.forEach(g => {
    const oneGame = (`
      <p>${g.cells} </p>
      <p>ID: ${g._id}</p>
      <br>
      `)
    gameDisplay += oneGame
  })

  $('#show-games').html(gameDisplay)
  $('#show-games').addClass('show-games')
  // $('#content').text('Game Unfinished Success')
  $('#content').removeClass().addClass('success')
  $('form').trigger('reset')
}

const gameUnfinFailure = function () {
  $('#content').text('Game Unfinished Failed')
  $('#content').removeClass().addClass('failure')
}

const showGameSuccess = function (response) {
  // console.log('IN UI')
  // console.log(response)
  $('#content').text('')
  // console.log(response.game)

  $('#game-display').show()
  for (let i = 0; i < 9; i++) {
    $('#' + i).text(response.game[0].cells[i])
  }

  if (!response.game[0].over) {
    $('#over').text('Game is Not Over: Keep Playing!')
    $('#game-output').removeClass().addClass('success')
    $('#game-output').show()
    store.gameBoard = response.game[0].cells
    store.gameBoard.oldId = response.game[0]._id
    store.count = 0

    store.gameBoard.forEach((i) => {
      if (i === 'x') {
        store.count++
      } else if (i === 'o') {
        store.count++
      }
    })
  } else {
    $('#over').text('Game is Over!')
  }

  $('#game-output').show()
  // $('#content').text('Show Game Success')
  $('#over').removeClass().addClass('over')
  $('#over').show()
  $('#content').removeClass().addClass('success')
  $('form').trigger('reset')
}

const showGameFailure = function () {
  $('#content').text('Show Game Failed')
  $('#content').removeClass().addClass('failure')
}

const deleteGameSuccess = function (response) {
  // console.log('IN UI')
  // console.log(response)

  // $('#content').text('Delete Game Success')
  $('#content').text('')
  $('#content').removeClass().addClass('success')
  $('form').trigger('reset')
}

const deleteGameFailure = function () {
  $('#content').text('Delete Game Failed')
  $('#content').removeClass().addClass('failure')
}

const inputValSuccessX = function (response) {
  console.log('INSIDE UI')
  console.log(response)
  store.count += 1
  store.gameBoard[store.id] = 'x'

  $('#' + store.id).text('x')

  const over = !(store.gameBoard.some(i => i === ''))

  if (over) {
    $('#game-output').text('GAME OVER! Its a Draw')
  } else if (winner.getWinner(over)) {
    $('#game-output').text('X WINS')
  } else {
    $('#game-output').text('O\'s TURN')
  }

  $('#game-output').removeClass().addClass('success')
  $('#game-output').show()
  $('form').trigger('reset')
}

const inputValFailureX = function () {
  $('#content').text('Input Val Failed')
  $('#content').removeClass().addClass('failure')
}

const inputValSuccessO = function (response) {
  store.count++
  store.gameBoard[store.id] = 'o'

  $('#' + store.id).text('o')

  const over = !(store.gameBoard.some(i => i === ''))

  if (over) {
    $('#game-output').text('GAME OVER! Its a Draw')
  } else if (winner.getWinner(over)) {
    $('#game-output').text('O WINS')
  } else {
    $('#game-output').text('X\'s TURN')
  }

  $('#game-output').removeClass().addClass('success')
  $('#game-output').show()
  $('form').trigger('reset')
}

const inputValFailureO = function () {
  $('#content').text('Input Val Failed')
  $('#content').removeClass().addClass('failure')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  indexGameSuccess,
  indexGameFailure,
  gameFinSuccess,
  gameFinFailure,
  gameUnfinSuccess,
  gameUnfinFailure,
  showGameSuccess,
  showGameFailure,
  inputValSuccessX,
  inputValFailureX,
  inputValSuccessO,
  inputValFailureO,
  deleteGameSuccess,
  deleteGameFailure
}
