const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name
const databaseURL = process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`

const db = new Sequelize(
    databaseURL, {
        dialect: 'postgres',
        protocol: 'postgres',
        logging: false
    }
)

module.exports = db

