const express = require('express')
const path = require('path')
const session = require('express-session')
const app = express()
const PORT = 3000;
const db = require('./db/')

app.use(express.static(path.join(__dirname, '..', '/public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(session({
    secret: process.env.SESSION_SECRET || 'lemongrass',
    resave: false,
    saveUninitialized: true
    // cookie: {httpOnly: true, secure: true, maxAge: 6000}
}))


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

db.sync({logging: false})

app.listen(PORT, () => {
    console.log(`Marketing minerals on port ${PORT}`)
})