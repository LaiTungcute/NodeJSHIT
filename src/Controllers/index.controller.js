const getProduct = (req, res, next) => {
    const data = require('../API');
    res.render('product', {
       data
    });
};

const addProduct = (req, res, next) => {
    res.render('add-product');
};

module.exports = {
    getProduct,
    addProduct
}