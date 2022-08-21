const express = require('express')
const app = express()
const router = express.Router()

const Item = require('../models/iyem.models')

app.use(express.json())

router.get('/',async(req, res) =>{
    try{
        const items = await Item.find()
        res.json(items)
        //res.send(items)
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
        res.json(response)
        //res.send(response)
    }catch(err){
        res.send('Err' + err)
    }
})

router.get('/:id', async(req, res) =>{
    try{
        const item = await Item.findById(req.params.id)
        res.json(item)
    }catch(err){
        res.send(err)
    }
})

router.delete('/:id', async(req, res) =>{
    try{
        const item = await Item.findById(req.params.id)
       const response = await item.remove()
       res.json(response)
    }catch(err){
        res.send(err)
    }
})

router.put('/:id', async(req, res) =>{
    try{
       const item = await Item.findById(req.params.id)
       item.code = req.body.code,
       item.name = req.body.name,
       item.discription = req.body.discription,
       item.price = req.body.price,
       item.qtyOnHand = req.body.qtyOnHand

       const response = await item.save()
       res.json(response)
    }catch(err){
        res.send(err)
    }
})

module.exports = router