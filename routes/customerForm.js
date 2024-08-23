const router = require('express').Router();
const Customer = require('../models/customer.js')

router.post('/', async (req, res) => {
    const {customerName, dateOfBirth, contactNumber, address, doctorName} = req.body;
    try {
    const newCustomer = new Customer({
      customerName, customerName, dateOfBirth: new Date(), contactNumber, address, doctorName
    });
    console.log(req.body);
      await newCustomer.save();
      res.send('Saved Successfully');
    } catch (err) {
      res.type('html').status(500);
      res.send('Error: ' + err);
    }
  });
  module.exports = router;