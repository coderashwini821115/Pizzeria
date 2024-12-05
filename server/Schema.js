const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({

    id: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        require: true
    },
    ingredients: {
        type: [String], // Array of strings
        required: true
    },
    topping: {
        type: [String], // Array of strings
        required: true
    }
}, {timestamps: true});
const BuildSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    tname: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})
const Order = mongoose.model("Pizzas", OrderSchema,"Pizzas");
const Build = mongoose.model("Builds", BuildSchema, "Builds")
module.exports = {Order, Build}