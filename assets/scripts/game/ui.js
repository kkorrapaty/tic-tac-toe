'use strict'
const store = require('../store')

const createGameSuccess = function (response) {
  // console.log('Inside UI:')
  // console.log(response)

  store.gameBoard = []
  store.count = 0

  $('#content').text('')

  for (let i = 0; i < 9; i++) {
    $('#' + i).text('')
  }

  $('form').trigger('reset')
  // $('#content').text('Game Made Success')
  // $('#content').removeClass().addClass('success')

  store.game = response.game
  store.gameBoard = store.game.cells
  // console.log(store.game.cells)

  $('#game-display').show()
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

  const gameDisplay = (`
    <p>${response.game[0].cells} </p>
    <br>
    `)
  $('#show-games').html(gameDisplay)

  // $('#content').text('Show Game Success')
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
  // console.log('Inside Success X')
  // console.log(response)
  // console.log(store.id)
  store.count += 1
  store.gameBoard[store.id] = 'X'

  // const gameDisplay = (`
  //   <p>x</p>
  //   `)
  $('#' + store.id).text('X')

  // $('#content').text('Input Val Success')
  $('#content').text('')
  $('#content').removeClass().addClass('success')
  $('form').trigger('reset')
}

const inputValFailureX = function () {
  $('#content').text('Input Val Failed')
  $('#content').removeClass().addClass('failure')
}

const inputValSuccessO = function (response) {
  // console.log('Inside Success O')
  // console.log(response)
  // console.log(store.id)

  store.count++
  store.gameBoard[store.id] = 'O'

  // const gameDisplay = (`
  //   <p>o</p>
  //   `)
  // $(store.id).innherHTML = gameDisplay
  $('#' + store.id).text('O')

  // $('#content').text('Input Val Success')
  $('#content').text('')
  $('#content').removeClass().addClass('success')
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