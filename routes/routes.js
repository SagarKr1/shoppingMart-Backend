const express = require('express');
const createProduct = require('../controller/createProduct');
const Product = require('../controller/Products');
const getProduct = require('../controller/getProduct');
const deleteProduct = require('../controller/deleteProduct');
const updateProduct = require('../controller/updateProduct');
const category = require('../controller/category');
const getCategory = require('../controller/getCategory');
const deleteCategory = require('../controller/deleteCategory');


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

//Update Product
route.put('/product/update',updateProduct);

route.post('/category',category);

route.get('/category',getCategory);

route.delete('/category',deleteCategory);

module.exports = route;