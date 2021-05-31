const express = require('express');

const app = express();

const path = require('path');

app.get('/',(req, res) =>{
   
    res.sendFile((__dirname + '/views/productDetail.html'));
});


app.use(express.static(__dirname + '/public'));

app.use(express.static(__dirname + '/views'));

app.listen(8100, () => console.log('Servidor corriendo'));
