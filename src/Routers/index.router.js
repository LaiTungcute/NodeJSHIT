const express = require('express');
const Router = express.Router();
const {getProduct, addProduct} = require('../Controllers/index.controller');

Router.get('/products', getProduct)

Router.get('/add-product', addProduct)

module.exports = Router;