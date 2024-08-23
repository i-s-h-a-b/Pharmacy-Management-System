const mongoose = require('mongoose')
const drugSchema = new mongoose.Schema({
    drugName : {
        type:String,
        required: true
    },
    company : {
        type: String,
        required: true
    },
    price : {
        type:Number,
        required: true
    },
    expiryDate : {
        type: Date,
        required: true
    },
    drugType : {
        type:String,
        required: true
    }
})
module.exports = mongoose.model('Drug', drugSchema)