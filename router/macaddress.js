const express = require('express')
const macController = require("../controller/macaddresscontroller")
const router = express.Router()

router.get('/get-macaddress', macController.getMacAddress)

module.exports = router