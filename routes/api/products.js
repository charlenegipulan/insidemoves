var express = require('express');
var router = express.Router();
var productsCtrl = require('../../controllers/products');

/*---------- Public Routes ----------*/
router.get('/', productsCtrl.index);
router.post('/:id/favorite', productsCtrl.addFavorite);
router.post('/checkout', productsCtrl.addProduct);

/*---------- Protected Routes ----------*/

module.exports = router;