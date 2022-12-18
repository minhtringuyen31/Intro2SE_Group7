const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    id:{
        type: String,
        required: 'This field is required.'
    },
    name: {
        type: String,
        required: 'This field is required.'
    },
    signature: {
        type: String,
        required: 'This field is required.'
    },
    origin: {
        type: String,
        required: 'This field is required.'
    },
    factory: {
        type: String,
        required: 'This field is required.'
    },
    skin: {
        type: String,
        required: 'This field is required.'
    },
    problem: {
        type: String,
        required: 'This field is required.'
    },
    price: {
        type: String,
        required: 'This field is required.'
    },
    img: {
        type: String,
        required: 'This field is required.'
    }
})

module.exports = mongoose.model('product', productSchema);

