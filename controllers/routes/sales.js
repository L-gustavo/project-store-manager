const router = require('express').Router();

const salesController = require('../salesController');
const { validateProductId, validateQuantity } = require('../../middlewares/salesValidate');

router.route('/')
  .get(salesController.getAllSales)
  .post(validateProductId, validateQuantity, salesController.createSales);

router.route('/:id')
  .get(salesController.getByIdSales)
  .put(validateProductId, validateQuantity, salesController.updateSales);

module.exports = router;
