const express = require('express')
const router = express.Router()
const DataController = require('./controllers/DataController.js')

router.get('/ping', DataController.ping)
router.get('/american-dollar', DataController.americanDolar)
router.get('/canadian-dollar', DataController.canadianDolar)
router.get('/australian-dollar', DataController.australianDolar)
router.get('/euro', DataController.euro)
//router.get('/news')

module.exports = router
