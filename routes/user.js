const express = require('express')
const router = express.Router()

router.get('/',(req, res) =>{
    res.send('user get')
})

router.post('/',(req, res) =>{
    res.send('user post method')
})

router.put('/',(req, res) =>{
    res.send('user post method')
})

router.delete('/:id', (req, res) => {
    res.send('delete user-id request came')
})

router.get('/:id', (req, res) => {
    res.send('get user-id request came')
})

module.exports = router;