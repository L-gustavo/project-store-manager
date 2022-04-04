const salesService = require('../services/salesService');

const getAllSales = async (req, res, next) => {
  try {
    const sale = await salesService.getAllSales();
    // console.log(sale);

    if (!sale) {
      return res.status(404).json({ message: 'Nenhuma sale retornada' });
    }

    return res.status(200).json(sale);
  } catch (error) {
    next(error);
  }
};

const getByIdSales = async (req, res, next) => {
  try {
    const { id } = req.params;
    const saleById = await salesService.getByIdSales(id);

    if (!saleById) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    // console.log(saleById);
    return res.status(200).json(saleById);
  } catch (error) {
    next(error);
  }
};

const createSales = async (req, res, next) => {
  try {
    const sales = await salesService.createSales(req.body);
    return res.status(201).json(sales);
  } catch (error) {
    next(error);
  }
};

const updateSales = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sales = await salesService.updateSales(req.body, id);

    return res.status(200).json(sales);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllSales,
  getByIdSales,
  createSales,
  updateSales,
};
