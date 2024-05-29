const express = require('express');
const createProduct = require('../controller/createProduct');
const Product = require('../controller/Products');
const getProduct = require('../controller/getProduct');
const deleteProduct = require('../controller/deleteProduct');

const route = express.Router();


route.get('/prod',(req,res)=>{
    res.send("Routes is working");
})

//Create new Product
route.post('/createProduct',createProduct);

//Get All product
route.get('/Product',Product);

//Get by Id
route.get('/Product/:id',getProduct);

//delete product
route.delete('/product/delete',deleteProduct);



module.exports = route;