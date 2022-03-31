const salesModels = require('../models/salesModel');

const getAllSales = async () => {
  const result = await salesModels.getAllSales();
  return result;
};

const getByIdSales = async (id) => {
  if (!id) return false;

  const result = await salesModels.getByIdSales(id);
  return result;
};

module.exports = {
  getAllSales,
  getByIdSales,
};