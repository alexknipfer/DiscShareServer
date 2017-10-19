const discs = require('../queries/discs')
const discsByLocation = require('../queries/discsByLocation')
const getUser = require('../queries/getUser')
const getUserById = require('../queries/getUserById')

const Query = {
  discs,
  discsByLocation,
  getUser,
  getUserById
}

module.exports = Query
