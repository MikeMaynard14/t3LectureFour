const mongoose = require('mongoose');

const addProduct = mongoose.Schema({
    name: { type: String,required: true},
    price: { type: Number,required: true},
    stock: { type: Number,required: true},
    description: { type: String,required: true},
    variations: { 
        green: { type: Number,required: true},
        red: { type: Number,required: true},
        blue: { type: Number,required: true},
    }
});

module.exports = mongoose.model('products', addProduct);