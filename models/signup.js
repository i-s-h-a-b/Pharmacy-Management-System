const mongoose = require('mongoose');

const upSchema = new mongoose.Schema({
name: {
    type: String,
    required: true, 
},
contact:{
    type: String,
    required: true,
},
email:{
    type: String,
    required: true,
},
password:{
    type: String,
    required: true,
},
})

module.exports = mongoose.model('SignUp', upSchema)