const router = require('express').Router();
const Bill = require('../models/bill.js')

router.post('/', async (req, res) => {
    const {billDate, customerName,drugName,price, quantity, discount, netAmount, paymentMode} = req.body;
    try {
    const newBill = new Bill({
        billDate: new Date(), customerName,drugName,price, quantity, discount, netAmount, paymentMode    
    });
    console.log(req.body);
      await newBill.save();
      res.render('billGenerated', { bill: newBill });
    } catch (err) {
      res.type('html').status(500);
      res.send('Error: ' + err);
    }
  });
  module.exports = router;