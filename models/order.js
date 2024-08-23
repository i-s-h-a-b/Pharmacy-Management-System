const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  supplierName: {
    type: String,
    required: true,
  },
  dateOfOrder: {
    type: Date,
    required: true,
  },
  items: [
    {
      item_name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        min: 0,
        required: true,
      },
      price: {
        type: Number,
        min: 0,
        required: true,
      },
    },
  ],
  orderQuantity: {
    type: Number,
    min: 0,
    required: true,
  },
  totalAmount: {
    type: Number,
    min: 0,
    required: true,
  },
});

module.exports = mongoose.model('Order', orderSchema)