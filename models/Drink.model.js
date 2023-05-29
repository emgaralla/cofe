const mongoose = require('mongoose')

const drinksSchema = mongoose.Schema({
    name: String,
    price: Number,
    inStockCount: Number,
    caffeine: {
        type: Boolean,
        default: false
    },
    volume: Number,
    description: String
})

const Drink = mongoose.model('Drink', drinksSchema)

module.exports = Drink