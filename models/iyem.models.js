const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    code:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    qtyOnHand:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('iten',itemSchema)