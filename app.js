const express = require('express')
const app = express()
const port = 4000

app.get('/',(req,res) =>{
    console.log('get request comming!');
    res.send('get req came for / route')
});

app.get('/customer',(req,res) =>{
    console.log('get request comming!');
    res.send('<h1>customer get request came <h1/>')
});

app.listen(port, () =>{
    console.log(`app listening on port ${port}`);
});
