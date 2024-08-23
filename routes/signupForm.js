const router = require('express').Router();
const SignUp = require('../models/signup.js')

router.post('/', async (req, res) => {
    const {name,contact, email, password} = req.body;
    try {
    const newUp = new SignUp({
        name,contact, email, password
    });
    console.log(req.body);
      await newUp.save();
      res.redirect('/login');
    } catch (err) {
      res.type('html').status(500);
      res.send('Error: ' + err);
    }
  });
  module.exports = router;