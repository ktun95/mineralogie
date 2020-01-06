const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        get() {
            return () => this.getDataValue('password')
        }
    },
    isAdmin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
})

module.exports = User
