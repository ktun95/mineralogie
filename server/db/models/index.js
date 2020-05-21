const User = require('./user')
const Mineral = require('./mineral')
const Cart = require('./cart')
const CartProduct = require('./cartProduct')

User.hasOne(Cart)
Cart.belongsTo(User)

Cart.belongsToMany(Mineral, {through: CartProduct})
Mineral.belongsToMany(Cart, {through: CartProduct})

module.exports = {
    User,
    Mineral,
    Cart,
    CartProduct
}