var Product = require('../models/product');
var Order = require('../models/order');
var User = require('../models/user');
var createJWT = require('./users').createJWT;

function index(req,res) {
    Product.find({}, function(err, products) {
        if(err) return res.status(400).json(err);
        res.json(products);
    });
}

function addProduct(req, res) {
    Order.cartForUser(req.user._id, function(cart) {
        cart.addProduct(req.body.productId, function(cart) {
            res.json(cart);
        });
    });
}

function addFavorite(req, res) {
    User.findById(req.user._id, function(err, user) {
        user.favorites.push(req.params.id);
        user.save(function() {
            var token = createJWT(user);
            res.json(token);
        });
    });
}

module.exports = {
    index,
    addProduct,
    addFavorite
}