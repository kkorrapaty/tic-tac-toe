'use strict'

const config = require('../config')
const store = require('../store')

const createGame = function (data) {
  // console.log('Inside API:')
  // console.log(data)
  // console.log('Inside API: Store')
  // console.log(store.user)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const indexGame = function (data) {
  // console.log('Inside API: IndexGame')
  // console.log(store.user)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const gameFin = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games?over=true',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const gameUnfin = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games?over=false',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showGame = function (data) {
  // console.log('IN API')
  // console.log(data)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/' + data.games._id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteGame = function (data) {
  // console.log('IN API')
  // console.log(store)
  // console.log(data)

  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/games/' + data.games._id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const inputValX = function (over) {
  // console.log('IN API')
  let id
  if (store.game === undefined) {
    id = store.gameBoard.oldId
  } else {
    id = store.game._id
  }
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: store.id,
          value: 'x'
        },
        over: over
      }
    }
  })
}

const inputValO = function (over) {
  // console.log('IN API')
  // console.log(store)
  let id
  if (store.game === undefined) {
    id = store.gameBoard.oldId
  } else {
    id = store.game._id
  }
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: store.id,
          value: 'o'
        },
        over: over
      }
    }
  })
}

module.exports = {
  createGame,
  indexGame,
  gameFin,
  gameUnfin,
  showGame,
  inputValX,
  inputValO,
  deleteGame
}
