const mongoose = require('mongoose')

const pesananSchema = new mongoose.Schema({

    noMeja: String,
    foods: {
        idMenu: [ String ],
        quantity: [ Number ]
    }
    
})

module.exports = mongoose.model('orders', pesananSchema)