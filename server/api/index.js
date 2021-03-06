const router = require('express').Router()

router.use('/auth', require('./auth'))
router.use('/products', require('./products'))
router.use('/user', require('./user')) //maybe => api/users/user

module.exports = router
