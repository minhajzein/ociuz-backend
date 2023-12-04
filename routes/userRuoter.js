const router = require('express').Router()
const { home } = require('../controller/userController')

router.get('/', home)


module.exports = router