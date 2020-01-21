const express = require('express')
const path = require('path')
const app = express()
const PORT = 3030;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '..', '/public')))

app.use('/api', require('./api'))//change this /api later

app.use( '*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})


//error handling endware needed

app.listen(PORT, () => {
    console.log(`Marketing minerals on port ${PORT}`)
})