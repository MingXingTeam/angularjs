var express = require('express');

var app = express();

app.use("/",express.static(__dirname));

var products = [
{id:0,title: 'Paint pots',description:'Pots full of paint',price:3.95},
{id:1,title:'Paint pots',description:'Pots full of paint',price:3.95},
{id:2,title:'Paint pots',description:'Pots full of paint',price:3.95},
];

app.get('/products',function(req,res){
   res.send(products);
});

app.get('/products/:id',function(req,res){
   res.send(products[req.params.id]);
});

app.listen(3000);
console.log('Listening on port 3000');