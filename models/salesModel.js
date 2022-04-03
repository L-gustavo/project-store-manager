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

  return sales;
};

const createSales = async (product) => {
  const querySales = 'INSERT INTO StoreManager.sales (date) VALUES (NOW())';
  const [sales] = await connection.execute(querySales);

  const queryProducts = `INSERT INTO StoreManager.sales_products
    (sale_id, product_id, quantity)
    VALUES (?, ?, ?)`;

  const createProducts = product.map(({ productId, quantity }) => 
    connection.execute(queryProducts, [sales.insertId, productId, quantity]));

  await Promise.all(createProducts);

  return {
    id: sales.insertId,
    itemsSold: product,
  };
};

const updateSales = async (sales, saleId) => {
  const query = `UPDATE StoreManager.sales_products
  SET product_id = ?, quantity = ?
  WHERE sale_id = ?`;

  const updateProducts = sales.map(({ productId, quantity }) => 
  connection.execute(query, [productId, quantity, saleId]));

  await Promise.all(updateProducts);

  return {
    saleId,
    itemUpdated: sales,
  };
};

module.exports = {
  getAllSales,
  getByIdSales,
  createSales,
  updateSales,
};
