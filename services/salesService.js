const salesModels = require('../models/salesModel');

const getAllSales = async () => {
  const result = await salesModels.getAllSales();
  return result;
};

const getByIdSales = async (id) => {
  if (!id) return false;

  const result = await salesModels.getByIdSales(id);
  if (result.length === 0) {
    return false;
  }
  return result;
};

const createSales = async (sales) => {
  const result = await salesModels.createSales(sales);

  return result;
};

module.exports = {
  getAllSales,
  getByIdSales,
  createSales,
};