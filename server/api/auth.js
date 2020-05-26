const router = require('express').Router()
const {User} = require( '../db/models')

router.post('/login', async (req, res, next) => {
    console.log(req.body)
    const {username, password} = req.body
    try {
       const user = await User.findOne({
           where: {email: username, password}
       }) 
       console.log(user)
       if (user) {
           res.json({id: user.dataValues.id, user: user.dataValues.email})
       }
    } catch (err) {
        next(err)
    }
})

router.post('/signup', async (req, res, next) => {
    console.log('attempting sign-up with', req.body)
    const {username, password} = req.body
    try {
       const [user, created] = await User.findOrCreate({
           where: {email: username},
           defaults: {
               password
           }
       })

       if (created) { // true when new user row is create, false otherwise
        console.log('sign up successful', user)
        res.json({created: true})
        } else {
            res.json({created: false})
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router;
