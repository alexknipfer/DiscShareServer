const express = require('express')

const router = express.Router()

router.post('/uploadProfileImage', (req, res, next) => {
  const { files } = req.body
  const file = files[0]

  console.log(file)

  res.send({ file })
})

module.exports = router
