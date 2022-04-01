const salesService = require('../services/salesService');

const getAllSales = async (req, res, next) => {
  try {
    const sale = await salesService.getAllSales();

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

    return res.status(200).json(saleById);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllSales,
  getByIdSales,
};
