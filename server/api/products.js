const router = require('express').Router()
const { Mineral, Cart, CartProduct } = require('../db/models')


router.get('/minerals', async (req, res, next) => {
    try {
        const minerals = await Mineral.findAll();
        console.log('retrieving minerals from database')
        res.json(minerals)
    } catch (err) {
        next(err)
    }
})

router.put('/minerals/:id', async (req, res, next) => {
    console.log('route hit')
    const userId = req.body.user.id || 1  

    try {
        const userCart = await Cart.findOrCreate({
            where: {
                userId
            }
        })
        res.json(userCart)
    } catch (err) {
        next(err)
    }
})

module.exports = router

