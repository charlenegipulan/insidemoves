require('dotenv').config();
require('./config/database');
var Product = require('./models/product');

Product.remove({}).then(() => {
  Product.create([
    {name: 'Jordans 500', description: 'cool kicks', price: 499.99, review: 'Hello 123'},
    {name: 'Yeezy Boost', description: 'cool kicks', price: 599.99, review: 'HelloWorld123'},
  ]).then(() => {
    process.exit();
  });
})