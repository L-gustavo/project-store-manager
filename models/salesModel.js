const connection = require('./connection');

const getAllSales = async () => {
  const query = `SELECT s.id AS saleId, s.date,
  sp.product_id AS productId, sp.quantity
  FROM StoreManager.sales s
  INNER JOIN StoreManager.sales_products sp
  ON s.id = sp.sale_id
  ORDER BY s.id`;
  const [result] = await connection
    .execute(query);

  return result;
};

const getByIdSales = async (id) => {
  const query = `SELECT s.date, sp.product_id AS productId, sp.quantity
  FROM StoreManager.sales s
  INNER JOIN StoreManager.sales_products sp
  ON s.id = sp.sale_id
  WHERE sp.sale_id = ?
  ORDER BY s.id, sp.product_id`;
  const [sales] = await connection.execute(query, [id]);

  return sales[0];
};

module.exports = {
  getAllSales,
  getByIdSales,
};
