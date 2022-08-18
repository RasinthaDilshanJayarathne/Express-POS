const express = require('express')
const mongoose = require('mongoose')

const customer = require('./routes/customer')
const item = require('./routes/item')
const user = require ('./routes/user')
const order = require ('./routes/Order')
const orderDetail = require ('./routes/OrderDetails')

const app = express()
const port = 4000

app.use(express.json())
app.use('/customer', customer)
app.use('/items',  item)
app.use('/users',user)
app.use('/orders',order)
app.use('/orderDetail',orderDetail)


//const url = 'mongodb://127.0.0.1/express'

// mongoose.connect(url, { useNewUrlParser: true })
// const con = mongoose.connection

// con.on("open", () => {
//     console.log('MongoDB connected!');
// })


app.listen(port, () => {
    console.log(`app starting on ${port}`);
})