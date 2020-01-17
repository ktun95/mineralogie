const router = require('express').Router()
const { Mineral } = require('../db/models')

router.get('/minerals', async (req, res, next) => {
    try {
        const minerals = await Mineral.findAll();
        console.log('retrieving minerals from database')
        res.json(minerals)
    } catch (err) {
        next(err)
    }
})

module.exports = router 
