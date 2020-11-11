const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    harga: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('menus', menuSchema)