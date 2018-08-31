var express = require('express');
var router = express.Router();
var productsCtrl = require('../../controllers/products');

/*---------- Public Routes ----------*/
router.get('/', productsCtrl.index);
router.post('/:id/favorite', productsCtrl.addFavorite);
router.get('/favorites', productsCtrl.getAllFavorites);
router.post('/checkout', productsCtrl.addProduct);
router.delete('/checkout/:id', productsCtrl.removeProduct);

/*---------- Protected Routes ----------*/

module.exports = router;