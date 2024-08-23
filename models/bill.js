const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
    billDate: {
        type: Date,
        required: true,
    },
customerName: {
    type: String,
    required: true, 
},
drugName:{
    type: String,
    required: true,
},
quantity: {
    type: Number,
    required: true
},
price: {
    type: Number,
    required: true
},
discount: {
    type: Number,
    required: true
},
netAmount: {
    type: String,
    required: true,
},
paymentMode: {
    type : String,
    required: true,
}
})

module.exports = mongoose.model('Bill', billSchema)