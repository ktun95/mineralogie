const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '..', '/public')))

app.use('/api', require('./api'))//change this /api later

app.use( '*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})


//error handling endware needed
app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
})

app.listen(PORT, () => {
    console.log(`Marketing minerals on port ${PORT}`)
})