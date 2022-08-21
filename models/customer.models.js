const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    customerId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('customer',customerSchema)