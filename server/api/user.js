const router = require('express').Router()
const User = require('../db/models/user')

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
