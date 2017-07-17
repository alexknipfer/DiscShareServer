const express = require('express')
const router = express.Router()
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage, limits: { fileSize: '4MB' } })

router.post('/uploadProfileImage', upload.single('avatar'), (req, res) => {
  console.log(req.file)
})

module.exports = router
