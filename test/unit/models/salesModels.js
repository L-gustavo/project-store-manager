const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../models/connection');
const salesModel = require('../../../models/salesModel');

describe('testing sales models', () => {
  describe('getAllSales function', () => {
    describe('when it returns a list of sales', () => {
      const sales = [
        {
          saleId: 1,
          date: '2021-09-09T04:54:29.000Z',
          productId: 1,
          quantity: 2
        },
        {
          saleId: 1,
          date: '2021-09-09T04:54:54.000Z',
          productId: 2,
          quantity: 2
        }
      ];
      before(() => {
        sinon.stub(connection, 'execute').resolves([sales]);
      });
      
      after(() => {
        connection.execute.restore();
      });
  
      it('returns an array', async () => {
        const response = await salesModel.getAllSales();
        expect(response).to.be.an('array');
      });
  
      it('retorna um array com os objetos', async () => {
        const response = await salesModel.getAllSales();
  
        expect(response).to.be.equal(sales);
      });
    });
  });

  describe('getByIdSales function', () => {
    describe('when it returns the sales by id', () => {
      const sales = [
        {
          date: '2021-09-09T04:54:29.000Z',
          productId: 1,
          quantity: 2
        },
        {
          date: '2021-09-09T04:54:54.000Z',
          productId: 2,
          quantity: 2
        }
      ];
      before(() => {
        sinon.stub(connection, 'execute').resolves([sales]);
      });
      
      after(() => {
        connection.execute.restore();
      });

      it('returns an array from sales', async () => {
        const response = await salesModel.getByIdSales(1);
  
        expect(response).to.be.an('array');
      });
  
      it('returns an object with the right properties', async () => {
        const response = await salesModel.getByIdSales(1);

        expect(response).to.have.property('date');
        expect(response).to.have.property('productId');
        expect(response).to.have.property('quantity');
      });
    })
  })

  describe('updateSales function', () => {
    describe('sale updated successfully', () => {
      const updateSales = [
        {
          productId: 1,
          quantity: 6
        }
      ];
      before(() => {  
        sinon.stub(connection, 'execute').resolves();
      });
    
      after(() => {
        connection.execute.restore();
      });

      it('returns an object', async () => {
        const response = await salesModel.updateSales(updateSales, 1);

        expect(response).to.be.an('object');
      });

      it('returns an object with two properties', async () => {
        const response = await salesModel.updateSales(updateSales, 1);

        expect(response).to.have.property('saleId');
        expect(response).to.have.property('itemUpdated');
      });
    })
  })
});
