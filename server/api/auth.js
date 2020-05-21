const router = require('express').Router()
const User = require( '../db/models')

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
    console.log(req.body.data)
    const [username, password] = req.body.data
    try {
       const [user, created] = await User.findOrCreate({
           where: {username},
           defaults: {
               password
           }
       })

       if (!created) {
        console.log('Username already taken')
        res.end()
        } else {
        console.log(user) 
        res.end()
        } 

        
    //    if (user === null) throw 
    } catch (err) {
        next(err)
    }
})

module.exports = router;