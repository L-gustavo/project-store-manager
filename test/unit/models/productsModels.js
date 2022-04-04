const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connection');
const productModel = require('../../../models/productModel');

describe('testing product models', () => {
  describe('getAllProduct function', () => {
    describe('when it returns the products', () => {
      const listProducts = [
        {
          id: 1,
          name: "product A",
          quantity: 10
        },
        {
          id: 2,
          name: "product B",
          quantity: 20
        }
      ];

      before(() => {
        sinon.stub(connection, 'execute').resolves([listProducts]);
      })

      after(() => {
        connection.execute.restore()
      })

      it('returns an array', async () => {
        const response = await productModel.getAllProduct();

        expect(response).to.be.a('array')
      })

      it('returns an array with the objects', async () => {
        const response = await productModel.getAllProduct();

        expect(response).to.be.equal(listProducts);
      })
    });

    describe('getByIdProduct function', () => {
      describe('when it returns the product by id', () => {
        const product = {
          id: 1,
          name: "product A",
          quantity: 10
        }
        before(() => {
          sinon.stub(connection, 'execute').resolves([product]);
        });
        
        after(() => {
          connection.execute.restore();
        });
    
        it('returns an object from product', async () => {
          const response = await productModel.getByIdProduct(1);
    
          expect(response).to.be.an('object');
        });
    
        it('returns an object with the right properties', async () => {
          const response = await productModel.getByIdProduct(1);

          expect(response).to.have.property('id');
          expect(response).to.have.property('name');
          expect(response).to.have.property('quantity');
        });
      });
    })

    describe('createProduct function', () => {
      describe('when you create a new product', () => {
        const product = {
          name: "product A",
          quantity: 10
        }
        before(() => {
          sinon.stub(connection, 'execute').resolves([product]);
        });
        
        after(() => {
          connection.execute.restore();
        });

        it('returns an object from product', async () => {
          const response = await productModel.createProduct(product);
    
          expect(response).to.be.an('object');
        });
    
        it('returns an object with the right properties', async () => {
          const response = await productModel.createProduct(product);

          expect(response).to.have.property('name');
          expect(response).to.have.property('quantity');
        });
      })
    })
  })
})