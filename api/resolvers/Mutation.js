const addDisc = require('../mutations/addDisc')
const editAccount = require('../mutations/editAccount')
const login = require('../mutations/login')
const register = require('../mutations/register')
const sendResetPasswordEmail = require('../mutations/sendResetPasswordEmail')
const resetPassword = require('../mutations/resetPassword')

const Mutation = {
  addDisc,
  editAccount,
  login,
  register,
  sendResetPasswordEmail,
  resetPassword
}

module.exports = Mutation
