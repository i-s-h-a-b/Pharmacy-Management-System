require("dotenv").config();

const express = require('express')
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejs = require('ejs');
// const bodyParser = require('body-parser');

const Customer = require('./models/customer.js'); // Adjust the path as needed
const Drug = require('./models/drug.js');

const customerRoute = require('./routes/customerForm.js')
const drugRoute = require('./routes/drugForm.js');
const ordersRoute = require('./routes/stockOrder.js')
const billRoute = require('./routes/billForm.js');
const signupRoute = require('./routes/signupForm.js');
const loginRoute = require('./routes/loginForm.js');
require('dotenv').config();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/customer', customerRoute);
app.use('/drug', drugRoute);
app.use('/stock', ordersRoute);
app.use('/bill', billRoute);
app.use('/signup', signupRoute);
app.use('/login', loginRoute);

app.get('/drug', (req,res) => {
    res.sendFile(path.join(__dirname, '/drug.html'));
})

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '/home.html'));
})

app.get('/customer', (req,res) => {
  res.sendFile(path.join(__dirname, '/customer.html'));
})

app.get('/bill', (req,res) => {
  res.sendFile(path.join(__dirname, '/bill.html'));
})

app.get('/stock', (req,res) => {
  res.sendFile(path.join(__dirname, '/stock.html'));
})

app.get('/signup', (req,res) => {
  res.sendFile(path.join(__dirname, '/signup.html'));
})

app.get('/home', (req,res) => {
  res.sendFile(path.join(__dirname, '/home.html'));
})

app.get('/login', (req,res) => {
  res.sendFile(path.join(__dirname, '/login.html'));
})

app.get('/signout', (req,res) => {
  res.sendFile(path.join(__dirname, '/signout.html'));
})

app.get('/allCustomers', async (req, res) => {
  try {
      // Retrieve all customers from the database (you need to implement this)
      // For example, assuming you have a Customer model:
      const customers = await Customer.find();

      // Render the page showing all customers
      res.render('allCustomers', { customers });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});

app.get('/allDrugs', async (req, res) => {
  try {
      // Retrieve all drugs from the database
      const drugs = await Drug.find();

      // Render the page showing all drugs
      res.render('allDrugs', { drugs });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});

// Add a new route for updating a specific customer
app.get('/updateCustomer/:customerId', async (req, res) => {
  try {
      // Retrieve the customer details from the database using the _id
      const customer = await Customer.findById(req.params.customerId);

      if (!customer) {
          return res.status(404).send('Customer not found');
      }

      // Render the update form with the customer details
      res.render('updateCustomer', { customer });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});

// Add a route to handle the form submission for updating a customer
app.post('/updateCustomer/:customerId', async (req, res) => {
  console.log('Update customer POST route called');
    console.log('Request Body:', req.body);

  try {
      const { customerName, dateOfBirth, contactNumber, address, doctorName } = req.body;

      // Update the customer details in the database
      await Customer.findByIdAndUpdate(req.params.customerId, {
          customerName,
          dateOfBirth,
          contactNumber,
          address,
          doctorName
      });
      console.log('MongoDB Update Result:', result);

      // Redirect to the allCustomers page after updating
      res.redirect('/allCustomers');
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});

// Add a new route for viewing all drugs
app.get('/allDrugs', async (req, res) => {
  try {
      // Retrieve all drugs from the database (you need to implement this)
      const drugs = await Drug.find();

      // Render the page showing all drugs
      res.render('allDrugs', { drugs });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});

// Add a new route for updating a specific drug
app.get('/updateDrug/:drugId', async (req, res) => {
  try {
      // Retrieve the drug details from the database using the drugId
      const drug = await Drug.findById(req.params.drugId);

      if (!drug) {
          return res.status(404).send('Drug not found');
      }

      // Render the update form with the drug details
      res.render('updateDrug', { drug });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});

app.post('/updateDrug/:drugId', async (req, res) => {
  try {
      const { drugName, company, price, expiryDate, drugType } = req.body;

      // Update the drug details in the database
      await Drug.findByIdAndUpdate(req.params.drugId, {
          drugName,
          company,
          price,
          expiryDate,
          drugType
      });

      // Redirect to the allDrugs page after updating
      res.redirect('/allDrugs');
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});


app.post('/deleteDrug/:drugId', async (req, res) => {
  try {
      // Find the drug by ID and delete it
      await Drug.findByIdAndDelete(req.params.drugId);
      // Redirect back to the allDrugs page after deletion
      res.redirect('/allDrugs');
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running");
});