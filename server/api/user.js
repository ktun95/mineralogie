const router = require('express').Router()
const { User, Cart } = require('../db/models')

router.get(':id/cart', async (req, res, next) => {
    const userId = req.params.id
    try {
        const user = await Cart.findOne({
            where: { UserId }
        })
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    const userId = req.params.id
    console.log(userId)
    try {
        const user = await User.findByPk(userId)
        res.json(user)
    } catch (err) {
        next(err)
    }
})

router.post('/availability', async(req, res, next) => { //this route will be used to check availability of a username
    const desiredUsername = req.body.username
    try {
        const foundUser = await User.findOne({
            where: {
                email: desiredUsername
        }})

    res.json({ usernameAvailable: !foundUser})
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    console.log('LOGIN ROUTE HIT')
    const userdata = req.body
    //try to break this later
    console.log(userdata)
    try {
        console.log("Trying to find user...")
        const authenticUser = await User.findOne({ where: { email: userdata.email, password: userdata.password}})
        
        if (!authenticUser) {
            throw new Error('User login error.')
        }
        res.json(authenticUser)
    } catch (err) {
        // err.status()
        console.error(err)
        next(err)
    }
})

module.exports = router
