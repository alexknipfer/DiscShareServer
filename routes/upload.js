const express = require('express')
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const router = express.Router()

router.post('/uploadProfileImage', (req, res) => {
  console.log(req.files)
})

module.exports = router
