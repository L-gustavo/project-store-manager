const router = require('express').Router();
const productController = require('../controllers/productController');

router.route('/')
  .get(productController.getAllProduct)
  .post();

router.route('/:id')
  .get(productController.getByIdProduct)
  .put()
  .delete();

module.exports = router;
