const express = require('express')
const app = express()
const port = 4000

app.get('/',(req,res) =>{
    console.log('get request comming!');
    res.send('get req came for / route')
});

app.get('/customer',(req,res) =>{
    console.log('get request comming!');
    res.send('<h1>Customer get request came !<h1/>')
});

app.get('/item',(req,res) =>{
    console.log('get request comming!');
    res.send('<h1>Item get request came !<h1/>')
});

app.get('/order',(req,res) =>{
    console.log('get request comming!');
    res.send('<h1>Order get request came !<h1/>')
});

app.listen(port, () =>{
    console.log(`app listening on port ${port}`);
});
