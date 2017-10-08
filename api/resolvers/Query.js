const discs = require('../queries/discs')
const discsByLocation = require('../queries/discsByLocation')
const getUser = require('../queries/getUser')

const Query = {
  discs,
  discsByLocation,
  getUser
}

module.exports = Query
