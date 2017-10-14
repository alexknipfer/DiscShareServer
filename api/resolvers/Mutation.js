const addDisc = require('../mutations/addDisc')
const editAccount = require('../mutations/editAccount')
const login = require('../mutations/login')
const register = require('../mutations/register')
const resetPasswordEmail = require('../mutations/resetPasswordEmail')

const Mutation = {
  addDisc,
  editAccount,
  login,
  register,
  resetPasswordEmail
}

module.exports = Mutation
