const express = require('express')
const router = express.Router()
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

router.post('/uploadProfileImage', upload.any(), (req, res) => {
  console.log(req.files)
})

module.exports = router
