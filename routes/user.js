const express = require('express')
const router = express.Router()

router.get('/',(req, res) =>{
    res.send('user get')
})

router.post('/',(req, res) =>{
    res.send('user post method')
})

module.exports = router;