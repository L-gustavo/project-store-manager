const router = require('express').Router();

const salesController = require('../controllers/salesController');
const { salesValidates } = require('../middlewares/salesValidate');

router.route('/')
  .get(salesController.getAllSales)
  .post(salesValidates, salesController.createSales);

router.route('/:id')
  .get(salesController.getByIdSales)
  .put(salesValidates, salesController.updateSales);

module.exports = router;
