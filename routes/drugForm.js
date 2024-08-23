const router = require('express').Router();
const Drug = require('../models/drug.js')

router.post('/', async (req, res) => {
    const {drugName, company, price, expiryDate, drugType} = req.body;
    try {
    const newDrug = new Drug({
        drugName, company, price, expiryDate: new Date(), drugType    
    });
    console.log(req.body);
      await newDrug.save();
      res.send('Saved Successfully');
    } catch (err) {
      res.type('html').status(500);
      res.send('Error: ' + err);
    }
  });
  module.exports = router;