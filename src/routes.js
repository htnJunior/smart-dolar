const express = require('express')
const router = express.Router()
const DataController = require('./controllers/DataController.js')

router.get('/ping', DataController.ping)
router.get('/dolar-americano', DataController.americanDolar)
router.get('/dolar-canadense', DataController.canadianDolar)
router.get('/dolar-australiano', DataController.australianDolar)
router.get('/euro', DataController.euro)
//router.get('/noticias')

module.exports = router
