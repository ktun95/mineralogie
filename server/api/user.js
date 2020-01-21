const router = require('express').Router()
const User = require('../db/models/user')

router.post('/', async (req, res    ) => {
    console.log('LOGIN ROUTE HIT')
    const userdata = req.body
    //try to break this later
    console.log(userdata)
    try {
        console.log("Trying to find user...")
        const authenticUser = await User.findOne({ where: { email: userdata.email, password: userdata.password}})
        res.json(authenticUser)
    } catch (err) {
        console.error('Username or Password is incorrect')
        
        // next(err)
    }
})

module.exports = router
