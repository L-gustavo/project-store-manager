const router = require('express').Router();
const productController = require('../controllers/productController');

router.route('/')
  .get(productController.getAllProduct);

router.route('/:id')
  .get(productController.getByIdProduct);

module.exports = router;
