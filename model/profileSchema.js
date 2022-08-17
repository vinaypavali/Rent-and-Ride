const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true

    },
    phone:{
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true

    },
    cpassword:{
        type:String,
        required:true

    },
})
 
const profile = mongoose.model('Profile',profileSchema);
module.exports = profile

