const express = require('express')
const app = express()
const router = express.Router()

const Customer = require('../models/customer.models')

app.use(express.json())

router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find()
        res.json(customers)
    } catch (err) {
        res.send('Err' + err)
    }
})

router.post('/', async (req, res) => {
    const customers = new Customer({
        customerId: req.body.customerId,
        name: req.body.name,
        address: req.body.address,
        salary: req.body.salary,
    })
    try {
        const response = await customers.save()
        res.json(response)
        //res.send(response)
    } catch (err) {
        res.send('Err' + err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id)
        res.json(customer)
    } catch (err) {
        res.send(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id)
        const response = await customer.remove()
        res.json(response)
    } catch (err) {
        res.send(err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id)
            customer.customerId = req.body.customerId,
            customer.name = req.body.name,
            customer.address = req.body.address,
            customer.salary = req.body.salary

        const response = await customer.save()
        res.json(response)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router