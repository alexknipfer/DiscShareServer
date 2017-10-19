const jwt = require('jsonwebtoken')

const getUser = ({ db }, { accesstoken }) => {
  const user = jwt.decode(accesstoken, process.env.JWT_SECRET)
  return user
}

module.exports = getUser
