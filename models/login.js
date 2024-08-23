const mongoose = require('mongoose');

const inSchema = new mongoose.Schema({
email:{
    type: String,
    required: true,
},
password:{
    type: String,
    required: true,
},

})
  
module.exports = mongoose.model('LogIn', inSchema)