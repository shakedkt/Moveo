const express = require('express')
const {getFirstUser, getCanvas, setCanvas, raisePoints, getPoints, setWord, getWord} = require('./drawing.controller')
const router = express.Router()

router.get('/', getCanvas)
router.get('/firstUser', getFirstUser)
router.post('/setCanvas', setCanvas)
router.post('/raisePoints', raisePoints)
router.get('/getPoints', getPoints)
router.post('/setWord', setWord)
router.get('/getWord', getWord)

module.exports = router