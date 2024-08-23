// const router = require('express').Router();
// const LogIn = require('../models/login.js')

// router.post('/', async (req, res) => {
//     const {email, password} = req.body;
//     try {
//     const newIn = new LogIn({
//         email, password
//     });
//     console.log(req.body);
//       await newIn.save();
//       res.redirect('/home');
//     } catch (err) {
//       res.type('html').status(500);
//       res.send('Error: ' + err);
//     }
//   });
//   module.exports = router;

const router = require("express").Router();
const LogIn = require("../models/login.js");

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const newIn = new LogIn({
      email,
      password,
    });
    console.log(req.body);
    await newIn.save();
    res.redirect("/home");
  } catch (err) {
    res.status(500).send("Error: " + err);
  }
});

module.exports = router;
