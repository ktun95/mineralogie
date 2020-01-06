const express = require('express')
const path = require('path')
const app = express()
const PORT = 3030;

app.use(express.static(path.join(__dirname, '..', '/public')))

app.use('/api', require('./api/products'))//change this /api later

app.use( '*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(PORT, () => {
    console.log(`Marketing minerals on port ${PORT}`)
})