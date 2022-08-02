const express = require('express')
const app = express()
const port = 4000

app.get('/',(req,res) =>{
    console.log('get request comming!');
    res.send('get req came for / route')
});

app.post('/',(req,res) =>{
    res.send('<h2>post request came for /route<h2/>')
});

app.get('/customer',(req,res) =>{
    console.log('get request comming!');
    res.send('<h1>Customer get request came !<h1/>')
});

app.post('/customer',(req,res) =>{
    res.send('<h2>post request came for /customer <h2/>')
});

app.delete('/customer',(req,res) =>{
    res.send('<h2>delete request came for /customer <h2/>')
});

app.get('/item',(req,res) =>{
    console.log('get request comming!');
    res.send('<h1>Item get request came !<h1/>')
});

app.post('/item',(req,res) =>{
    res.send('<h2>post request came for /item <h2/>')
});

app.get('/order',(req,res) =>{
    console.log('get request comming!');
    res.send('<h1>Order get request came !<h1/>')
});

app.post('/order',(req,res) =>{
    res.send('<h2>post request came for /order <h2/>')
});

app.listen(port, () =>{
    console.log(`app listening on port ${port}`);
});
