const Sequelize = require('sequelize')
const db = require('../db')

const Mineral = db.define('mineral', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT
    },
    imageURL: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    }
})

module.exports = Mineral
