const express = require('express')
const app = express()
const router = express.Router()

const Item = require('../models/iyem.models')

app.use(express.json())

router.get('/',async(req, res) =>{
    try{
        const items = await Item.find()
        res.send(items)
    }catch(err){
        res.send('Err' + err)
    }
})

router.post('/', async(req, res) =>{
    const item = new Item({
        code: req.body.code,
        name: req.body.name,
        discription: req.body.discription,
        price: req.body.price,
        qtyOnHand: req.body.qtyOnHand
    })
    try{
        const response = await item.save()
        res.send(response)
    }catch(err){
        res.send('Err' + err)
    }
})

module.exports = router