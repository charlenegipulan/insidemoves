require('dotenv').config();
require('./config/database');
var Product = require('./models/product');
var products = require('./products');

Product.remove({}).then(() => {
  Product.create(products).then(() => {
    process.exit();
  });
}) 