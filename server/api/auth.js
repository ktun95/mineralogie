const router = require('express').Router()
const {User} = require( '../db/models')

router.post('/login', async (req, res, next) => {
    console.log(req.body.data)
    const [username, password] = req.body.data
    try {
       const user = await User.findOne({
           where: {username, password}
       }) 
       console.log(user)
    //    if (user === null) throw 
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
        res.json({created: true})
        } else {
            res.json({created: false})
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router;
