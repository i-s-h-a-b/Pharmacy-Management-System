const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
    customerName: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    contactNumber: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true
    },
    doctorName: {
      type: String,
      required: true
    },
  });
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;